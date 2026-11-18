import Image from 'next/image'

import { BRAND, DESCRIPTOR } from '@/lib/site'
import markImg from '@/public/images/logo-mark.png'
import nameImg from '@/public/images/logo-name.png'

/** The Gateverse mark: a gold building inside an orbit ring. */
export function Mark({ className }: { className?: string }) {
    return <Image className={className ?? 'wordmark__mark'} src={markImg} alt="" aria-hidden="true" priority />
}

/** Wordmark with descriptor. Always set left to right, also on Arabic pages. */
export default function Wordmark({ descriptor = true }: { descriptor?: boolean }) {
    return (
        <span className="wordmark" dir="ltr">
            <Mark />
            <span className="wordmark__text">
                <Image className="wordmark__name" src={nameImg} alt={BRAND} priority />
                {descriptor && <span className="wordmark__descriptor">{DESCRIPTOR}</span>}
            </span>
        </span>
    )
}
