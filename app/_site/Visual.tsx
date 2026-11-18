import Image from 'next/image'
import { useId } from 'react'

import { IMAGES, isImageKey } from './images'

/** Line drawing of an interactive masterplan interface (an illustration, captioned as such). */
export function MasterplanArt({ title }: { title: string }) {
    // Unique pattern ids: the drawing can appear more than once on a page.
    const id = `mp${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
    const plots = [
        // phase 1 (highlighted), phase 2, phase 3 blocks
        { x: 70, y: 70, w: 120, h: 80, p: 1 },
        { x: 200, y: 70, w: 120, h: 80, p: 1 },
        { x: 70, y: 170, w: 120, h: 90, p: 1 },
        { x: 360, y: 70, w: 110, h: 110, p: 2 },
        { x: 480, y: 70, w: 110, h: 110, p: 2 },
        { x: 360, y: 200, w: 230, h: 60, p: 2 },
        { x: 70, y: 300, w: 160, h: 110, p: 3 },
        { x: 250, y: 300, w: 140, h: 110, p: 3 },
        { x: 410, y: 300, w: 180, h: 110, p: 3 },
    ]
    return (
        <svg viewBox="0 0 660 480" role="img" aria-label={title} style={{ width: '100%', height: '100%', background: '#15171a' }} preserveAspectRatio="xMidYMid slice">
            <defs>
                <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="rgba(236,232,224,.05)" strokeWidth="1" />
                </pattern>
                <pattern id={`${id}-hatch`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <path d="M0 0V6" stroke="rgba(205,176,131,.35)" strokeWidth="1.2" />
                </pattern>
            </defs>
            <rect width="660" height="480" fill={`url(#${id}-grid)`} />
            {/* site boundary and roads */}
            <path d="M40 40H620V440H40Z" fill="none" stroke="rgba(236,232,224,.35)" strokeDasharray="6 6" />
            <path d="M40 280H620M340 40V280M200 280V440" stroke="rgba(236,232,224,.16)" strokeWidth="14" />
            {/* landscape */}
            <circle cx="270" cy="215" r="34" fill="rgba(120,140,110,.22)" stroke="rgba(150,170,135,.45)" />
            <path d="M600 300c-40 10-60 60-30 120" fill="none" stroke="rgba(110,150,170,.5)" strokeWidth="10" strokeLinecap="round" />
            {plots.map((b, i) => (
                <rect
                    key={i}
                    x={b.x}
                    y={b.y}
                    width={b.w}
                    height={b.h}
                    fill={b.p === 1 ? `url(#${id}-hatch)` : 'rgba(236,232,224,.03)'}
                    stroke={b.p === 1 ? '#cdb083' : 'rgba(236,232,224,.42)'}
                    strokeWidth={b.p === 1 ? 1.6 : 1}
                />
            ))}
            {/* amenity pins */}
            {[
                [270, 215],
                [535, 230],
                [130, 355],
            ].map(([x, y], i) => (
                <g key={i} transform={`translate(${x} ${y})`}>
                    <circle r="11" fill="#0c0d0e" stroke="#cdb083" strokeWidth="1.5" />
                    <circle r="3.5" fill="#cdb083" />
                </g>
            ))}
            {/* selection card */}
            <g transform="translate(212 120)">
                <path d="M0 0L18 -18" stroke="#cdb083" strokeWidth="1.2" />
                <rect x="18" y="-62" width="150" height="50" fill="#0c0d0e" stroke="rgba(205,176,131,.6)" />
                <rect x="30" y="-50" width="60" height="6" fill="#cdb083" />
                <rect x="30" y="-36" width="110" height="5" fill="rgba(236,232,224,.4)" />
                <rect x="30" y="-26" width="80" height="5" fill="rgba(236,232,224,.25)" />
            </g>
            {/* compass */}
            <g transform="translate(600 76)" stroke="rgba(236,232,224,.5)" fill="none">
                <circle r="16" />
                <path d="M0 -12L5 6L0 2L-5 6Z" fill="rgba(236,232,224,.6)" stroke="none" />
            </g>
        </svg>
    )
}

/** A solution or project visual with its honesty caption (concept, captured on site, illustrative). */
export default function Visual({
    visual,
    caption,
    alt,
    className = '',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px',
    priority = false,
}: {
    visual: string
    caption?: string
    alt: string
    className?: string
    sizes?: string
    priority?: boolean
}) {
    return (
        <figure className={`media ${className}`}>
            {isImageKey(visual) ? (
                <Image src={IMAGES[visual]} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} />
            ) : (
                <MasterplanArt title={alt} />
            )}
            {caption && <figcaption className="media__caption">{caption}</figcaption>}
        </figure>
    )
}
