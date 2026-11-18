'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { switchLocale, type Locale } from '@/lib/i18n'

import { CloseIcon, MenuIcon } from './Icons'

/** A nav link that marks itself as the current page. */
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname()
    const current = !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`))
    return (
        <Link href={href} aria-current={current ? 'page' : undefined}>
            {children}
        </Link>
    )
}

/** Link to the same page in the other language (a full load: each language has its own root layout). */
export function LangSwitch({ locale, label, title }: { locale: Locale; label: string; title: string }) {
    const pathname = usePathname() || '/'
    const other: Locale = locale === 'en' ? 'ar' : 'en'
    return (
        <a href={switchLocale(pathname, other)} className="lang-switch" lang={other} hrefLang={other} title={title}>
            {label}
        </a>
    )
}

export function MobileMenu({
    items,
    cta,
    openLabel,
    closeLabel,
    navLabel,
}: {
    items: { href: string; label: string }[]
    cta: { href: string; label: string }
    openLabel: string
    closeLabel: string
    navLabel: string
}) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    // Close on navigation and on Escape; lock page scroll while open.
    useEffect(() => setOpen(false), [pathname])
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = prev
            window.removeEventListener('keydown', onKey)
        }
    }, [open])

    return (
        <>
            <button
                type="button"
                className="menu-toggle"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? closeLabel : openLabel}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </button>
            {open && (
                <nav id="mobile-menu" className="mobile-menu" aria-label={navLabel}>
                    {items.map((i) => (
                        <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>
                            {i.label}
                        </Link>
                    ))}
                    <Link href={cta.href} className="btn btn--primary" onClick={() => setOpen(false)}>
                        {cta.label}
                    </Link>
                </nav>
            )}
        </>
    )
}
