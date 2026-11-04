'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

import { PORTFOLIO, type PortfolioTour } from '@/lib/packages'

/** Files live in /videos/<slug>/: n.mp4 + n.jpg per video, and preview.mp4 (6 s, silent) for the card. */
const file = (slug: string, name: string) => `/videos/${slug}/${name}`

/** The tour cards, and a full-screen reels viewer for one tour's videos. */
export default function Portfolio() {
    const [open, setOpen] = useState<PortfolioTour | null>(null)
    const close = useCallback(() => setOpen(null), [])

    return (
        <>
            <div className="port-grid">
                {PORTFOLIO.map((t) => (
                    <TourCard key={t.slug} tour={t} onOpen={() => setOpen(t)} />
                ))}
            </div>
            {open && <ReelViewer tour={open} onClose={close} />}
        </>
    )
}

function TourCard({ tour, onOpen }: { tour: PortfolioTour; onOpen: () => void }) {
    const preview = useRef<HTMLVideoElement>(null)

    // The silent preview plays only while the card is on screen.
    useEffect(() => {
        const v = preview.current
        if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.35 })
        io.observe(v)
        return () => io.disconnect()
    }, [])

    return (
        <article className="port-card bracketed">
            <button type="button" className="port-poster" onClick={onOpen} aria-label={`شغّل فيديوهات ${tour.name}`}>
                <video ref={preview} src={file(tour.slug, 'preview.mp4')} poster={file(tour.slug, '1.jpg')} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
                <span className="port-shade" aria-hidden="true" />
                <span className="port-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
                </span>
                <span className="port-count">{tour.videos} فيديو</span>
                <span className="port-title">
                    <small>{tour.kind}</small>
                    <strong>{tour.name}</strong>
                </span>
            </button>
            <div className="port-actions">
                <a href={`/tour/${tour.slug}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    ادخل الجولة 3D
                </a>
                <button type="button" className="btn btn-ghost" onClick={onOpen}>
                    شاهد الفيديوهات
                </button>
            </div>
        </article>
    )
}

function ReelViewer({ tour, onClose }: { tour: PortfolioTour; onClose: () => void }) {
    const n = tour.videos
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

    // Page scroll lock, keyboard, focus.
    useEffect(() => {
        closeBtn.current?.focus()
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => {
            const onControl = e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement
            let step = 0
            if (e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'PageDown') step = 1
            else if (e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'PageUp') step = -1
            if (e.key === 'Escape') {
                onClose()
            } else if (step) {
                e.preventDefault()
                goTo(activeRef.current + step)
            } else if (e.key === ' ' && !onControl) {
                e.preventDefault()
                togglePlay()
            } else if (e.key === 'm') {
                setMuted((m) => !m)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = prevOverflow
            window.removeEventListener('keydown', onKey)
        }
    }, [goTo, onClose, togglePlay])

    // The slide that fills most of the screen is the active one.
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

    // Play the active video from the start; pause the rest.
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
        <div className="reel" role="dialog" aria-modal="true" aria-label={`فيديوهات ${tour.name}`}>
            <div className="reel-scroller" ref={scroller}>
                {Array.from({ length: n }, (_, i) => (
                    <div key={i} className="reel-slide" data-i={i} ref={(el) => void (slides.current[i] = el)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="reel-bg" src={file(tour.slug, `${i + 1}.jpg`)} alt="" aria-hidden="true" loading="lazy" />
                        <div className="reel-frame">
                            <video
                                ref={(el) => void (videos.current[i] = el)}
                                src={file(tour.slug, `${i + 1}.mp4`)}
                                poster={file(tour.slug, `${i + 1}.jpg`)}
                                playsInline
                                preload={Math.abs(i - active) <= 1 ? 'auto' : 'none'}
                                onClick={togglePlay}
                                onTimeUpdate={(e) => i === active && setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
                                onEnded={() => (i < n - 1 ? goTo(i + 1) : setPaused(true))}
                            />
                            {i === active && paused && (
                                <button type="button" className="reel-paused" onClick={togglePlay} aria-label="تشغيل">
                                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
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
                    <small>{tour.kind}</small>
                    <strong>{tour.name}</strong>
                </div>
                <span className="reel-counter mono">
                    {active + 1} / {n}
                </span>
                <button ref={closeBtn} type="button" className="reel-btn" onClick={onClose} aria-label="إغلاق">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
            </div>

            {n > 1 && (
                <div className="reel-side">
                    <button type="button" className="reel-btn reel-arrow" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="الفيديو السابق">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
                    </button>
                    <div className="reel-dots" role="tablist" aria-label="اختار فيديو">
                        {Array.from({ length: n }, (_, i) => (
                            <button key={i} type="button" role="tab" aria-selected={i === active} aria-label={`فيديو ${i + 1}`} className={i === active ? 'active' : ''} onClick={() => goTo(i)} />
                        ))}
                    </div>
                    <button type="button" className="reel-btn reel-arrow" onClick={() => goTo(active + 1)} disabled={active === n - 1} aria-label="الفيديو التالي">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                </div>
            )}

            <div className="reel-bottom">
                {active < n - 1 && (
                    <span className="reel-hint" aria-hidden="true">
                        اسحب لفوق للفيديو اللي بعده
                    </span>
                )}
                <div className="reel-bar">
                    <button type="button" className="reel-btn" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'تشغيل الصوت' : 'كتم الصوت'} aria-pressed={!muted}>
                        {muted ? (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" /><path d="M17 9l4 6M21 9l-4 6" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
                        )}
                    </button>
                    <a href={`/tour/${tour.slug}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        ادخل الجولة 3D بنفسك
                    </a>
                </div>
            </div>
        </div>
    )
}
