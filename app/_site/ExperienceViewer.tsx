'use client'
import Image, { type StaticImageData } from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { DragIcon, FullscreenIcon, MinusIcon, PlusIcon } from './Icons'

/**
 * A small equirectangular 360° viewer (WebGL 1, no dependencies) for the concept apartment.
 * The still poster is the page's first paint; the GPU view starts only once the viewer is on
 * screen and the browser is idle, then fades in over it. Without WebGL the poster stays.
 */

export interface ViewerScene {
    id: string
    src: string
    preview: string
    yaw: number
    label: string
}

export interface ViewerText {
    label: string
    hint: string
    hintTouch: string
    loading: string
    fallback: string
    scenes: string
    fullscreen: string
    exitFullscreen: string
    zoomIn: string
    zoomOut: string
}

const VERT = `attribute vec2 p;varying vec2 v;void main(){v=p;gl_Position=vec4(p,0.,1.);}`
const FRAG = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D t;uniform vec2 f;uniform float yaw;uniform float pitch;varying vec2 v;
const float PI=3.14159265;
void main(){
vec3 d=normalize(vec3(v.x*f.x,v.y*f.y,1.));
float cp=cos(pitch),sp=sin(pitch);
vec3 e=vec3(d.x,d.y*cp+d.z*sp,-d.y*sp+d.z*cp);
float cy=cos(yaw),sy=sin(yaw);
vec3 g=vec3(e.x*cy+e.z*sy,e.y,-e.x*sy+e.z*cy);
vec2 uv=vec2(atan(g.x,g.z)/(2.*PI)+.5,.5-asin(clamp(g.y,-1.,1.))/PI);
gl_FragColor=texture2D(t,uv);}`

const MIN_FOV = 40
const MAX_FOV = 100
const MAX_VFOV = 95
const AUTO_DEG_PER_S = 2.4
const rad = (d: number) => (d * Math.PI) / 180

interface GL {
    gl: WebGLRenderingContext
    tex: WebGLTexture
    uF: WebGLUniformLocation
    uYaw: WebGLUniformLocation
    uPitch: WebGLUniformLocation
    maxTex: number
}

function setupGL(canvas: HTMLCanvasElement): GL | null {
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false, powerPreference: 'low-power' })
    if (!gl) return null
    const sh = (type: number, src: string) => {
        const s = gl.createShader(type)!
        gl.shaderSource(s, src)
        gl.compileShader(s)
        return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
    }
    const vs = sh(gl.VERTEX_SHADER, VERT)
    const fs = sh(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return null
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null
    gl.useProgram(prog)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const tex = gl.createTexture()!
    gl.bindTexture(gl.TEXTURE_2D, tex)
    // No mipmaps: they would draw a seam where the longitude wraps around.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    return {
        gl,
        tex,
        uF: gl.getUniformLocation(prog, 'f')!,
        uYaw: gl.getUniformLocation(prog, 'yaw')!,
        uPitch: gl.getUniformLocation(prog, 'pitch')!,
        maxTex: gl.getParameter(gl.MAX_TEXTURE_SIZE) as number,
    }
}

function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.decoding = 'async'
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
    })
}

export default function ExperienceViewer({
    scenes,
    poster,
    posterAlt,
    badge,
    text,
    priority = false,
    tall = false,
}: {
    scenes: ViewerScene[]
    poster: StaticImageData
    posterAlt: string
    badge: string
    text: ViewerText
    priority?: boolean
    tall?: boolean
}) {
    const box = useRef<HTMLDivElement>(null)
    const canvas = useRef<HTMLCanvasElement>(null)
    const glRef = useRef<GL | null>(null)
    const view = useRef({ yaw: rad(scenes[0].yaw), pitch: 0, fov: 100, vx: 0, auto: true, drag: false, lx: 0, ly: 0, visible: false })
    const raf = useRef(0)
    const last = useRef(0)
    const loadToken = useRef(0)

    const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'fallback'>('idle')
    const [active, setActive] = useState(0)
    const [touched, setTouched] = useState(false)
    const [coarse, setCoarse] = useState(false)
    const [fsOk, setFsOk] = useState(false)
    const [isFs, setIsFs] = useState(false)

    const draw = useCallback(() => {
        const g = glRef.current
        const c = canvas.current
        if (!g || !c) return
        const v = view.current
        const aspect = c.width / Math.max(1, c.height)
        let tanH = Math.tan(rad(v.fov) / 2)
        let tanV = tanH / aspect
        const maxV = Math.tan(rad(MAX_VFOV) / 2)
        if (tanV > maxV) {
            tanV = maxV
            tanH = tanV * aspect
        }
        g.gl.viewport(0, 0, c.width, c.height)
        g.gl.uniform2f(g.uF, tanH, tanV)
        g.gl.uniform1f(g.uYaw, v.yaw)
        g.gl.uniform1f(g.uPitch, v.pitch)
        g.gl.drawArrays(g.gl.TRIANGLE_STRIP, 0, 4)
    }, [])

    // One loop: auto-rotation and drag inertia; it stops itself when there is nothing to animate.
    const tick = useCallback(
        (now: number) => {
            raf.current = 0
            const v = view.current
            const dt = last.current ? Math.min(0.05, (now - last.current) / 1000) : 0
            last.current = now
            let moving = false
            if (!v.drag && Math.abs(v.vx) > 0.00005) {
                v.yaw += v.vx
                v.vx *= Math.pow(0.9, dt * 60)
                moving = true
            } else if (v.auto && !v.drag) {
                v.yaw += rad(AUTO_DEG_PER_S) * dt
                moving = true
            }
            draw()
            if (moving && v.visible && !document.hidden) raf.current = requestAnimationFrame(tick)
            else last.current = 0
        },
        [draw],
    )

    const kick = useCallback(() => {
        if (!raf.current) raf.current = requestAnimationFrame(tick)
    }, [tick])

    const upload = useCallback(
        (img: HTMLImageElement) => {
            const g = glRef.current
            if (!g) return
            g.gl.bindTexture(g.gl.TEXTURE_2D, g.tex)
            g.gl.texImage2D(g.gl.TEXTURE_2D, 0, g.gl.RGB, g.gl.RGB, g.gl.UNSIGNED_BYTE, img)
            draw()
        },
        [draw],
    )

    const showScene = useCallback(
        async (i: number) => {
            const g = glRef.current
            if (!g) return
            const s = scenes[i]
            const token = ++loadToken.current
            setState((st) => (st === 'ready' ? st : 'loading'))
            try {
                // Quick low-resolution pass, then the full panorama when the GPU can hold it.
                const low = await loadImage(s.preview)
                if (token !== loadToken.current) return
                view.current.yaw = rad(s.yaw)
                view.current.pitch = 0
                view.current.vx = 0
                upload(low)
                setState('ready')
                kick()
                if (g.maxTex >= 4096) {
                    const full = await loadImage(s.src)
                    if (token === loadToken.current) upload(full)
                }
            } catch {
                if (token === loadToken.current && i === 0) setState('fallback')
            }
        },
        [scenes, upload, kick],
    )

    // Start once on screen, when the browser is idle.
    useEffect(() => {
        const el = box.current
        const c = canvas.current
        if (!el || !c) return
        setCoarse(window.matchMedia('(pointer: coarse)').matches)
        setFsOk(!!document.fullscreenEnabled)
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) view.current.auto = false

        let started = false
        let idle = 0
        const start = () => {
            if (started) return
            started = true
            const g = setupGL(c)
            if (!g) return setState('fallback')
            glRef.current = g
            resize()
            void showScene(0)
        }
        const resize = () => {
            const dpr = Math.min(2, window.devicePixelRatio || 1)
            c.width = Math.round(c.clientWidth * dpr)
            c.height = Math.round(c.clientHeight * dpr)
            if (glRef.current) draw()
        }
        const io = new IntersectionObserver(
            ([e]) => {
                view.current.visible = e.isIntersecting
                if (e.isIntersecting) {
                    if (!started) {
                        const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
                        idle = ric ? ric(start, { timeout: 1500 }) : window.setTimeout(start, 400)
                    } else kick()
                }
            },
            { rootMargin: '200px' },
        )
        io.observe(el)
        const ro = new ResizeObserver(resize)
        ro.observe(c)
        const onVis = () => !document.hidden && kick()
        document.addEventListener('visibilitychange', onVis)
        const onLost = (e: Event) => {
            e.preventDefault()
            glRef.current = null
            setState('fallback')
        }
        c.addEventListener('webglcontextlost', onLost)
        const onFs = () => setIsFs(document.fullscreenElement === el)
        document.addEventListener('fullscreenchange', onFs)
        return () => {
            io.disconnect()
            ro.disconnect()
            document.removeEventListener('visibilitychange', onVis)
            document.removeEventListener('fullscreenchange', onFs)
            c.removeEventListener('webglcontextlost', onLost)
            window.clearTimeout(idle)
            cancelAnimationFrame(raf.current)
            raf.current = 0
        }
    }, [draw, kick, showScene])

    const interact = () => {
        view.current.auto = false
        if (!touched) setTouched(true)
    }

    const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (state !== 'ready') return
        interact()
        const v = view.current
        v.drag = true
        v.vx = 0
        v.lx = e.clientX
        v.ly = e.clientY
        e.currentTarget.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        const v = view.current
        if (!v.drag) return
        const c = e.currentTarget
        const perPx = rad(v.fov) / Math.max(1, c.clientWidth)
        const dx = e.clientX - v.lx
        const dy = e.clientY - v.ly
        v.lx = e.clientX
        v.ly = e.clientY
        v.yaw -= dx * perPx
        v.vx = -dx * perPx * 0.6
        // Vertical look only with a mouse/pen: on touch, vertical swipes scroll the page.
        if (e.pointerType !== 'touch') v.pitch = Math.max(rad(-80), Math.min(rad(80), v.pitch + dy * perPx))
        draw()
    }
    const onPointerUp = () => {
        view.current.drag = false
        kick()
    }

    const zoom = (factor: number) => {
        interact()
        view.current.fov = Math.max(MIN_FOV, Math.min(MAX_FOV, view.current.fov * factor))
        draw()
    }

    const onKey = (e: React.KeyboardEvent) => {
        const v = view.current
        const step = rad(5)
        if (e.key === 'ArrowLeft') v.yaw -= step
        else if (e.key === 'ArrowRight') v.yaw += step
        else if (e.key === 'ArrowUp') v.pitch = Math.min(rad(80), v.pitch + step)
        else if (e.key === 'ArrowDown') v.pitch = Math.max(rad(-80), v.pitch - step)
        else if (e.key === '+' || e.key === '=') return zoom(0.9)
        else if (e.key === '-') return zoom(1.1)
        else return
        e.preventDefault()
        interact()
        draw()
    }

    const pick = (i: number) => {
        interact()
        setActive(i)
        void showScene(i)
    }

    const toggleFs = () => {
        const el = box.current
        if (!el) return
        if (document.fullscreenElement) void document.exitFullscreen()
        else void el.requestFullscreen?.().catch(() => {})
    }

    return (
        <div ref={box} className={`xp${tall ? ' xp--tall' : ''}`}>
            <Image
                className="xp__poster"
                src={poster}
                alt={posterAlt}
                fill
                priority={priority}
                sizes="(max-width: 1376px) 100vw, 1280px"
                placeholder="blur"
            />
            <canvas
                ref={canvas}
                className={state === 'ready' ? 'is-ready' : undefined}
                tabIndex={state === 'ready' ? 0 : -1}
                role="img"
                aria-label={`${text.label}: ${scenes[active].label}`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onKeyDown={onKey}
            />
            <span className="xp__shade" aria-hidden="true" />
            <span className="xp__badge">{badge}</span>

            {state === 'ready' && (
                <div className="xp__controls">
                    <button type="button" className="xp__btn" onClick={() => zoom(0.85)} aria-label={text.zoomIn}>
                        <PlusIcon />
                    </button>
                    <button type="button" className="xp__btn" onClick={() => zoom(1 / 0.85)} aria-label={text.zoomOut}>
                        <MinusIcon />
                    </button>
                    {fsOk && (
                        <button type="button" className="xp__btn" onClick={toggleFs} aria-label={isFs ? text.exitFullscreen : text.fullscreen} aria-pressed={isFs}>
                            <FullscreenIcon />
                        </button>
                    )}
                </div>
            )}

            {state === 'ready' && (
                <span className={`xp__hint${touched ? ' is-hidden' : ''}`} aria-hidden="true">
                    <DragIcon />
                    {coarse ? text.hintTouch : text.hint}
                </span>
            )}

            <p className="xp__status" role="status">
                {state === 'loading' ? text.loading : state === 'fallback' ? text.fallback : ''}
            </p>

            {state === 'ready' && scenes.length > 1 && (
                <div className="xp__scenes" role="group" aria-label={text.scenes}>
                    {scenes.map((s, i) => (
                        <button key={s.id} type="button" className="xp__scene" aria-pressed={i === active} onClick={() => pick(i)}>
                            {s.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
