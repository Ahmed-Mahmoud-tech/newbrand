import { SOCIAL_LINKS } from '@/lib/site'

type SocialId = (typeof SOCIAL_LINKS)[number]['id']

const ICONS: Record<SocialId, React.ReactNode> = {
    instagram: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
    ),
    facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
        </svg>
    ),
    tiktok: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.6 3c.3 2.3 1.6 3.8 3.9 4v2.6c-1.4.1-2.6-.3-3.9-1.1v5.9c0 3.6-3.1 6.2-6.6 5.5-3.9-.8-5.2-5.6-2.5-8.3 1.3-1.3 3-1.8 4.8-1.5v2.8c-.4-.1-.8-.2-1.2-.2-1.9-.1-3.1 1.8-2.2 3.4.8 1.5 3 1.6 3.9.2.3-.4.4-.9.4-1.4V3h3.4z" />
        </svg>
    ),
}

/** GateVerse's social profiles. `rel="me"` tells crawlers these profiles belong to this site. */
export default function SocialLinks() {
    return (
        <ul className="social-links">
            {SOCIAL_LINKS.map((s) => (
                <li key={s.id}>
                    <a
                        href={s.url}
                        target="_blank"
                        rel="me noopener noreferrer"
                        aria-label={`GateVerse على ${s.labelAr} (${s.label})`}
                        title={s.label}
                    >
                        {ICONS[s.id]}
                    </a>
                </li>
            ))}
        </ul>
    )
}
