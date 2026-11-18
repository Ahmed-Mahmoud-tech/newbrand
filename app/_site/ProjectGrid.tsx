'use client'
import Image, { type StaticImageData } from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { ArrowIcon, CloseIcon, PlayIcon } from './Icons'

/** A project card, resolved to one locale on the server. */
export interface ProjectCardData {
    slug: string
    name: string
    category: string
    experience: string
    description: string
    image: StaticImageData
    imageAlt: string
    caption: string
    tour: string | null
    /** In-page link for the concept (the viewer section), when there is no live tour. */
    conceptHref: string | null
    videos: number
    concept: boolean
}

export interface ProjectText {
    category: string
    experience: string
    concept: string
    openLiveTour: string
    watchVideos: string
    exploreConcept: string
    opensNewTab: string
    reel: { close: string; prev: string; next: string; play: string; mute: string; unmute: string; swipe: string; pick: string; video: string; enterTour: string }
}

const file = (slug: string, name: string) => `/videos/${slug}/${name}`

export default function ProjectGrid({ projects, text, headingLevel = 3 }: { projects: ProjectCardData[]; text: ProjectText; headingLevel?: 2 | 3 }) {
    const [open, setOpen] = useState<ProjectCardData | null>(null)
    const close = useCallback(() => setOpen(null), [])
    const H = headingLevel === 2 ? 'h2' : 'h3'
    return (
        <>
            <div className="proj-grid">
                {projects.map((p) => (
                    <article key={p.slug} className="proj-card">
                        <figure className="media">
                            <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 760px) 100vw, 620px" placeholder="blur" />
                            {p.concept && <span className="proj-card__badge">{text.concept}</span>}
                            <figcaption className="media__caption">{p.caption}</figcaption>
                        </figure>
                        <dl className="proj-card__meta">
                            <div>
                                <dt>{text.category}</dt>
                                <dd>{p.category}</dd>
                            </div>
                            <div>
                                <dt>{text.experience}</dt>
                                <dd>{p.experience}</dd>
                            </div>
                        </dl>
                        <H className="h3">{p.name}</H>
                        <p>{p.description}</p>
                        <div className="btn-row">
                            {p.tour && (
                                <a href={p.tour} className="btn btn--dark btn--sm" target="_blank" rel="noopener noreferrer">
                                    {text.openLiveTour}
                                    <ArrowIcon />
                                    <span className="sr-only"> {text.opensNewTab}</span>
                                </a>
                            )}
                            {p.conceptHref && (
                                <a href={p.conceptHref} className="btn btn--dark btn--sm">
                                    {text.exploreConcept}
                                    <ArrowIcon />
                                </a>
                            )}
                            {p.videos > 0 && (
                                <button type="button" className="btn btn--ghost btn--sm" onClick={() => setOpen(p)}>
                                    <PlayIcon />
                                    {text.watchVideos}
                                </button>
                            )}
                        </div>
                    </article>
                ))}
            </div>
            {open && <ReelViewer project={open} text={text} onClose={close} />}
        </>
    )
}

/** Full-screen vertical reels of one tour's walkthrough videos (swipe or arrow keys). */
function ReelViewer({ project, text, onClose }: { project: ProjectCardData; text: ProjectText; onClose: () => void }) {
    const t = text.reel
    const n = project.videos
    const [active, setActive] = useState(0)
    const [muted, setMuted] = useState(false)
    const [paused, setPaused] = useState(false)
    const [progress, setProgress] = useState(0)
    const scroller = useRef<HTMLDivElement>(null)
    const slides = useRef<(HTMLDivElement | null)[]>([])
    const videos = useRef<(HTMLVideoElement | null)[]>([])
    const closeBtn = useRef<HTMLButtonElement>(null)
    const activeRef = useRef(0)
    const mutedRef = useRef(false)
    activeRef.current = active
    mutedRef.current = muted

    const goTo = useCallback(
        (i: number) => {
            const k = Math.max(0, Math.min(n - 1, i))
            slides.current[k]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
        [n],
    )

    const togglePlay = useCallback(() => {
        const v = videos.current[activeRef.current]
        if (!v) return
        if (v.paused) {
            v.play().catch(() => {})
            setPaused(false)
        } else {
            v.pause()
            setPaused(true)
        }
    }, [])

    // Scroll lock, keyboard, focus (returned to the page on close).
    useEffect(() => {
        const opener = document.activeElement as HTMLElement | null
        closeBtn.current?.focus()
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => {
            const onControl = e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement
            let step = 0
            if (e.key === 'ArrowDown' || e.key === 'PageDown') step = 1
            else if (e.key === 'ArrowUp' || e.key === 'PageUp') step = -1
            if (e.key === 'Escape') onClose()
            else if (step) {
                e.preventDefault()
                goTo(activeRef.current + step)
            } else if (e.key === ' ' && !onControl) {
                e.preventDefault()
                togglePlay()
            } else if (e.key === 'm') setMuted((m) => !m)
        }
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = prevOverflow
            window.removeEventListener('keydown', onKey)
            opener?.focus?.()
        }
    }, [goTo, onClose, togglePlay])

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
            },
            { root: scroller.current, threshold: 0.6 },
        )
        slides.current.forEach((s) => s && io.observe(s))
        return () => io.disconnect()
    }, [n])

    useEffect(() => {
        setProgress(0)
        setPaused(false)
        videos.current.forEach((v, i) => {
            if (!v) return
            if (i !== active) return v.pause()
            v.currentTime = 0
            v.muted = mutedRef.current
            v.play().catch(() => {
                // The browser blocked sound: play muted and let the visitor turn it on.
                v.muted = true
                setMuted(true)
                v.play().catch(() => setPaused(true))
            })
        })
    }, [active])

    useEffect(() => {
        videos.current.forEach((v) => v && (v.muted = muted))
    }, [muted])

    return (
        <div className="reel" role="dialog" aria-modal="true" aria-label={`${project.name}: ${t.video}`}>
            <div className="reel-scroller" ref={scroller}>
                {Array.from({ length: n }, (_, i) => (
                    <div key={i} className="reel-slide" data-i={i} ref={(el) => void (slides.current[i] = el)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="reel-bg" src={file(project.slug, `${i + 1}.jpg`)} alt="" aria-hidden="true" loading="lazy" />
                        <div className="reel-frame">
                            <video
                                ref={(el) => void (videos.current[i] = el)}
                                src={file(project.slug, `${i + 1}.mp4`)}
                                poster={file(project.slug, `${i + 1}.jpg`)}
                                playsInline
                                preload={Math.abs(i - active) <= 1 ? 'auto' : 'none'}
                                onClick={togglePlay}
                                onTimeUpdate={(e) => i === active && setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
                                onEnded={() => (i < n - 1 ? goTo(i + 1) : setPaused(true))}
                            />
                            {i === active && paused && (
                                <button type="button" className="reel-paused" onClick={togglePlay} aria-label={t.play}>
                                    <PlayIcon />
                                </button>
                            )}
                            <div className="reel-progress" aria-hidden="true">
                                <span style={{ transform: `scaleX(${i === active ? progress : i < active ? 1 : 0})` }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="reel-top">
                <div className="reel-meta">
                    <small>{project.category}</small>
                    <strong>{project.name}</strong>
                </div>
                <span className="reel-counter">
                    {active + 1} / {n}
                </span>
                <button ref={closeBtn} type="button" className="reel-btn" onClick={onClose} aria-label={t.close}>
                    <CloseIcon />
                </button>
            </div>

            {n > 1 && (
                <div className="reel-side">
                    <button type="button" className="reel-btn" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={t.prev}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M6 15l6-6 6 6" />
                        </svg>
                    </button>
                    <div className="reel-dots" role="group" aria-label={t.pick}>
                        {Array.from({ length: n }, (_, i) => (
                            <button key={i} type="button" aria-current={i === active} aria-label={`${t.video} ${i + 1}`} className={i === active ? 'active' : ''} onClick={() => goTo(i)} />
                        ))}
                    </div>
                    <button type="button" className="reel-btn" onClick={() => goTo(active + 1)} disabled={active === n - 1} aria-label={t.next}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>
            )}

            <div className="reel-bottom">
                {active < n - 1 && (
                    <span className="reel-hint" aria-hidden="true">
                        {t.swipe}
                    </span>
                )}
                <div className="reel-bar">
                    <button type="button" className="reel-btn" onClick={() => setMuted((m) => !m)} aria-label={muted ? t.unmute : t.mute} aria-pressed={!muted}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 9h4l5-4v14l-5-4H4z" />
                            {muted ? <path d="M17 9l4 6M21 9l-4 6" /> : <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}
                        </svg>
                    </button>
                    {project.tour && (
                        <a href={project.tour} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
                            {t.enterTour}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
