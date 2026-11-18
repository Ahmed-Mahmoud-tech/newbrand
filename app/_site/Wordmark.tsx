import { BRAND, DESCRIPTOR } from '@/lib/site'

/** The Gateverse mark: an arched gateway in line, the threshold into a space. */
export function Mark({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M6 28V13a10 10 0 0 1 20 0v15" />
            <path d="M11.5 28V14.5a4.5 4.5 0 0 1 9 0V28" />
            <path d="M3 28h26" />
        </svg>
    )
}

/** Wordmark with descriptor. Always set left to right, also on Arabic pages. */
export default function Wordmark({ descriptor = true }: { descriptor?: boolean }) {
    return (
        <span className="wordmark" dir="ltr">
            <Mark />
            <span className="wordmark__text">
                <span className="wordmark__name">{BRAND.toUpperCase()}</span>
                {descriptor && <span className="wordmark__descriptor">{DESCRIPTOR}</span>}
            </span>
        </span>
    )
}
