'use client'

import { useEffect, useState } from 'react'

import { LINK_COLOR, LINK_ICON, LINK_KINDS, LINK_LABEL, linkHref, type TourLinks } from '@/lib/tourLinks'

import styles from './contactBar.module.css'
import { track } from './track'

/** The owner's contact buttons (set per tour in the CRM). Renders nothing until there are some. */
export default function ContactBar({ slug, name }: { slug: string; name: string }) {
    const [links, setLinks] = useState<TourLinks>({})

    useEffect(() => {
        let cancelled = false
        fetch(`/api/tour/${slug}/links`)
            .then((r) => (r.ok ? r.json() : { links: {} }))
            .then((d: { links?: TourLinks }) => !cancelled && setLinks(d.links ?? {}))
            .catch(() => { })
        return () => {
            cancelled = true
        }
    }, [slug])

    const items = LINK_KINDS.flatMap((k) => {
        const href = links[k] ? linkHref(k, links[k]!, name) : null
        return href ? [{ k, href }] : []
    })
    if (!items.length) return null

    return (
        <nav className={styles.bar} aria-label="تواصل مع صاحب المكان">
            {items.map(({ k, href }) => {
                const external = href.startsWith('https:')
                return (
                    <a
                        key={k}
                        href={href}
                        className={styles.btn}
                        onClick={() => track(slug, 'click', k)}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        aria-label={LINK_LABEL[k]}
                        title={LINK_LABEL[k]}
                    >
                        <span className={styles.icon} style={{ background: LINK_COLOR[k] }}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                                <path d={LINK_ICON[k]} />
                            </svg>
                        </span>
                        {/* <span className={styles.label}>{LINK_LABEL[k]}</span> */}
                    </a>
                )
            })}
        </nav>
    )
}
