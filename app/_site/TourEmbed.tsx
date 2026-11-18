'use client'
import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'

import { PlayIcon } from './Icons'

/**
 * A live tour from this site in a responsive iframe. It loads only when the visitor asks for it:
 * a tour pulls tens of megabytes of panoramas, which the page should not pay for up front.
 */
export default function TourEmbed({ src, title, poster, label, badge }: { src: string; title: string; poster: StaticImageData; label: string; badge: string }) {
    const [on, setOn] = useState(false)
    return (
        <div className="xp xp--tall">
            {on ? (
                <iframe
                    src={src}
                    title={title}
                    allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                />
            ) : (
                <button type="button" onClick={() => setOn(true)} style={{ position: 'absolute', inset: 0, width: '100%' }} aria-label={`${label}: ${title}`}>
                    <Image className="xp__poster" src={poster} alt="" fill sizes="(max-width: 1376px) 100vw, 1280px" placeholder="blur" />
                    <span className="xp__shade" aria-hidden="true" />
                    <span className="xp__badge">{badge}</span>
                    <span className="xp__hint" aria-hidden="true">
                        <PlayIcon />
                        {label}
                    </span>
                </button>
            )}
        </div>
    )
}
