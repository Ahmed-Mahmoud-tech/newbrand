import Link from 'next/link'

import { dict, solutionPath } from '@/lib/content'
import { href, type Locale } from '@/lib/i18n'
import { BRAND, EMAIL, SOCIAL_LINKS, TELEPHONE, WHATSAPP_MESSAGE, whatsappLink } from '@/lib/site'

import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons'
import Wordmark from './Wordmark'

const SOCIAL_ICON = { instagram: InstagramIcon, facebook: FacebookIcon, tiktok: TikTokIcon }
const PHONE_DISPLAY = TELEPHONE.replace(/-/g, ' ')

export default function Footer({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const year = new Date().getFullYear()
    return (
        <footer className="site-footer">
            <div className="wrap">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Wordmark />
                        <p>{t.footer.description}</p>
                        <ul className="social" aria-label={t.footer.follow}>
                            {SOCIAL_LINKS.map((s) => {
                                const Icon = SOCIAL_ICON[s.id]
                                return (
                                    <li key={s.id}>
                                        {/* rel="me": these profiles belong to this site */}
                                        <a
                                            href={s.url}
                                            target="_blank"
                                            rel="me noopener noreferrer"
                                            aria-label={`${BRAND} ${locale === 'ar' ? s.labelAr : s.label}`}
                                            title={s.label}
                                        >
                                            <Icon />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <h2>{t.footer.solutions}</h2>
                        <ul>
                            {t.solutions.map((s) => (
                                <li key={s.slug}>
                                    <Link href={href(locale, solutionPath(s))}>{s.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2>{t.footer.company}</h2>
                        <ul>
                            <li>
                                <Link href={href(locale, '/portfolio')}>{t.nav.portfolio}</Link>
                            </li>
                            <li>
                                <Link href={href(locale, '/about')}>{t.nav.about}</Link>
                            </li>
                            <li>
                                <Link href={href(locale, '/#process')}>{t.nav.process}</Link>
                            </li>
                            <li>
                                <Link href={href(locale, '/contact')}>{t.nav.contact}</Link>
                            </li>
                            <li>
                                <Link href={href(locale, '/pricing')}>{t.footer.entryPackages}</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>{t.footer.contact}</h2>
                        <ul>
                            <li>
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </li>
                            <li>
                                <a href={whatsappLink(WHATSAPP_MESSAGE[locale])} target="_blank" rel="noopener noreferrer">
                                    {t.common.whatsapp}: <span className="ltr-num">{PHONE_DISPLAY}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${TELEPHONE.replace(/-/g, '')}`}>
                                    {t.common.phone}: <span className="ltr-num">{PHONE_DISPLAY}</span>
                                </a>
                            </li>
                            <li>{t.footer.based}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>
                        © {year} {BRAND}. {t.footer.rights}
                    </span>
                    <p>{t.footer.credit}</p>
                </div>
            </div>
        </footer>
    )
}
