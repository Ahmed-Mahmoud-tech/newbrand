import Link from 'next/link'

import { dict } from '@/lib/content'
import { href, type Locale } from '@/lib/i18n'
import { BRAND } from '@/lib/site'

import { LangSwitch, MobileMenu, NavLink } from './HeaderClient'
import Wordmark from './Wordmark'

export function navItems(locale: Locale) {
    const t = dict(locale).nav
    return [
        { href: href(locale, '/solutions'), label: t.solutions },
        { href: href(locale, '/portfolio'), label: t.portfolio },
        { href: href(locale, '/#process'), label: t.process },
        { href: href(locale, '/about'), label: t.about },
        { href: href(locale, '/contact'), label: t.contact },
    ]
}

export default function Header({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const items = navItems(locale)
    return (
        <header className="site-header">
            <div className="wrap site-header__inner">
                <Link href={href(locale, '/')} aria-label={`${BRAND}, ${t.common.home}`}>
                    <Wordmark />
                </Link>
                <nav className="site-nav" aria-label={t.nav.label}>
                    {items.map((i) => (
                        <NavLink key={i.href} href={i.href}>
                            {i.label}
                        </NavLink>
                    ))}
                </nav>
                <LangSwitch locale={locale} label={t.nav.switchLabel} title={t.nav.switchTitle} />
                <Link href={href(locale, '/contact')} className="btn btn--primary btn--sm header-cta">
                    {t.nav.cta}
                </Link>
                <MobileMenu
                    items={items}
                    cta={{ href: href(locale, '/contact'), label: t.nav.cta }}
                    openLabel={t.nav.openMenu}
                    closeLabel={t.nav.closeMenu}
                    navLabel={t.nav.label}
                />
            </div>
        </header>
    )
}
