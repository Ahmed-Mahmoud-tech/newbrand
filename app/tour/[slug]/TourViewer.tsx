'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import logo from '@/public/images/logo-sm.png'
import ContactBar from './ContactBar'
import TourLoader from './TourLoader'
import { track, trackViewOnce } from './track'

/** The slice of the TourForge player API this page uses. */
interface TourForgePlayer {
    destroy(): void
    on(type: 'hotspotclick', cb: (e: { id: string }) => void): () => void
}
interface TourForgeModule {
    TourForge: {
        mount(el: HTMLElement, opts: Record<string, unknown>): Promise<TourForgePlayer>
    }
}

// Written by the tour import (lib/tourImport.ts); a plain ES module with no dependencies.
const PLAYER_SRC = '/tourforge/player.js'

// Share of the progress bar each loading stage fills. The player has no progress hook, so
// the mount stage creeps toward MOUNT_END, nudged by each tour asset the browser finishes.
const PLAYER_END = 0.4
const MANIFEST_END = 0.5
const MOUNT_END = 0.96

const LABELS = {
    player: 'جاري تحميل المشغّل…',
    manifest: 'جاري تحميل بيانات الجولة…',
    scene: 'جاري تجهيز المشهد ثلاثي الأبعاد…',
    ready: 'جاهز',
}
type Stage = keyof typeof LABELS

/** fetch() that reports download progress as 0..1 (clamped: gzip can make the header lie). */
async function fetchWithProgress(url: string, onProgress: (f: number) => void): Promise<Blob> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
    const total = Number(res.headers.get('content-length')) || 0
    if (!res.body) return res.blob()
    const reader = res.body.getReader()
    const chunks: Uint8Array[] = []
    let received = 0
    for (; ;) {
        const { done, value } = await reader.read()
        if (done) break
        chunks.push(value)
        received += value.length
        // unknown length: approach 1 without reaching it
        onProgress(total ? Math.min(0.99, received / total) : 1 - Math.exp(-received / 400_000))
    }
    onProgress(1)
    return new Blob(chunks as BlobPart[], { type: res.headers.get('content-type') ?? '' })
}

export default function TourViewer({ slug, name }: { slug: string; name: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
    const [stage, setStage] = useState<Stage>('player')
    const [shown, setShown] = useState(0)
    const [loaderGone, setLoaderGone] = useState(false)
    // where the bar is heading; `shown` eases toward it every frame
    const target = useRef(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        let player: TourForgePlayer | null = null
        let cancelled = false
        let observer: PerformanceObserver | null = null
        let creep: ReturnType<typeof setInterval> | undefined
        const bump = (to: number) => {
            target.current = Math.max(target.current, to)
        }

            ; (async () => {
                try {
                    // 1. player script. Download it with fetch() for byte progress; that fills the
                    //    HTTP cache (/tourforge/* is max-age=3600 in next.config.js), so the import
                    //    below reuses it. Not a blob: import: the CSP's script-src forbids blob:.
                    setStage('player')
                    await fetchWithProgress(PLAYER_SRC, (f) => bump(f * PLAYER_END)).catch(() => { })
                    // webpackIgnore: load the file from public/ at runtime instead of bundling it
                    const mod = (await import(/* webpackIgnore: true */ PLAYER_SRC)) as TourForgeModule
                    bump(PLAYER_END)
                    if (cancelled) return

                    // 2. manifest (passed in so the player doesn't fetch it again; manifestUrl still
                    //    tells it where relative assets live)
                    setStage('manifest')
                    const manifestUrl = `/tours/${slug}/tour.json`
                    const manifestBlob = await fetchWithProgress(manifestUrl, (f) =>
                        bump(PLAYER_END + f * (MANIFEST_END - PLAYER_END)),
                    )
                    const manifest: unknown = JSON.parse(await manifestBlob.text())
                    if (cancelled) return

                    // 3. mount: panoramas, depth, mesh. Each finished tour asset closes a quarter of
                    //    the remaining gap; a slow creep keeps the bar alive between them.
                    setStage('scene')
                    const closeGap = (share: number) =>
                        bump(target.current + (MOUNT_END - target.current) * share)
                    if (typeof PerformanceObserver !== 'undefined') {
                        observer = new PerformanceObserver((list) => {
                            for (const e of list.getEntries()) {
                                if (e.name.includes(`/tours/${slug}/`)) closeGap(0.25)
                            }
                        })
                        observer.observe({ type: 'resource', buffered: false })
                    }
                    creep = setInterval(() => closeGap(0.03), 200)

                    const p = await mod.TourForge.mount(el, {
                        manifest,
                        manifestUrl,
                        hud: true,
                        nadir: { url: '/tourforge/nadir.jpg' },
                    })
                    if (cancelled) return p.destroy()
                    player = p
                    // Counted for the owner's stats (gateverse.net/stats/…): the view once per
                    // session, and every popup opened. destroy() drops the listener.
                    trackViewOnce(slug)
                    p.on('hotspotclick', ({ id }) => track(slug, 'popup', id))
                    target.current = 1
                    setStage('ready')
                    setState('ready')
                } catch (e) {
                    console.error('[tour]', e)
                    if (!cancelled) setState('error')
                } finally {
                    observer?.disconnect()
                    clearInterval(creep)
                }
            })()
        return () => {
            cancelled = true
            observer?.disconnect()
            clearInterval(creep)
            player?.destroy()
        }
    }, [slug])

    // Ease the visible bar toward the target so jumps read as smooth motion.
    useEffect(() => {
        if (loaderGone) return
        let raf = 0
        const tick = () => {
            setShown((s) => {
                const d = target.current - s
                return Math.abs(d) < 0.001 ? target.current : s + d * 0.12
            })
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [loaderGone])

    // Once ready and the bar has visibly reached 100%, fade the loader, then unmount it.
    const leaving = state === 'ready' && shown >= 0.999
    useEffect(() => {
        if (!leaving) return
        const t = setTimeout(() => setLoaderGone(true), 700)
        return () => clearTimeout(t)
    }, [leaving])

    return (
        <div style={{ position: 'fixed', inset: 0, background: '#000' }}>
            <div ref={ref} style={{ position: 'absolute', inset: 0 }} aria-label={name} />
            <Link
                href="/"
                style={{
                    position: 'absolute',
                    top: 14,
                    // physical left, not inline-start: this page is RTL, and the player's
                    // locations panel opens from the RIGHT edge
                    left: 14,
                    // under the player's overlay (z 2), so an open locations panel covers it
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 12px 6px 6px',
                    borderRadius: 999,
                    background: 'rgba(18,20,24,.72)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 14,
                }}
            >
                <Image src={logo} alt="GateVerse" width={43} height={28} priority />
                <span style={{ padding: '0.25rem 0.5rem 0', textTransform: 'capitalize' }}>{name}</span>
            </Link>
            {state === 'ready' && <ContactBar slug={slug} name={name} />}
            {!loaderGone && (
                <TourLoader
                    name={name}
                    progress={shown}
                    label={LABELS[stage]}
                    error={state === 'error'}
                    leaving={leaving}
                />
            )}
        </div>
    )
}
