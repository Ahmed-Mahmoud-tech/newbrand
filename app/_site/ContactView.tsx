import { dict } from '@/lib/content'
import type { Locale } from '@/lib/i18n'
import { BASE_CITY, EMAIL, TELEPHONE, WHATSAPP_MESSAGE, whatsappLink } from '@/lib/site'

import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'
import InquiryForm from './InquiryForm'
import { Breadcrumb } from './Sections'

const PHONE_DISPLAY = TELEPHONE.replace(/-/g, ' ')

export default function ContactView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const c = t.contactPage
    return (
        <>
            <section className="page-hero" aria-labelledby="page-heading">
                <div className="wrap">
                    <Breadcrumb locale={locale} trail={[{ name: c.eyebrow, path: '/contact' }]} />
                    <p className="eyebrow">{c.eyebrow}</p>
                    <h1 id="page-heading" className="display">
                        {c.title}
                    </h1>
                    <p className="lead">{c.lead}</p>
                </div>
            </section>

            <section className="section section--tight">
                <div className="wrap contact-grid">
                    <InquiryForm t={t.form} locale={locale} />

                    <aside className="contact-aside" aria-label={c.directTitle}>
                        <div>
                            <h2>{c.directTitle}</h2>
                            <ul className="contact-list">
                                <li>
                                    <a href={whatsappLink(WHATSAPP_MESSAGE[locale])} target="_blank" rel="noopener noreferrer">
                                        <WhatsAppIcon />
                                        <span>
                                            {t.common.whatsapp}
                                            <small className="ltr-num">{PHONE_DISPLAY}</small>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${EMAIL}`}>
                                        <MailIcon />
                                        <span>
                                            {t.common.email}
                                            <small>{EMAIL}</small>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${TELEPHONE.replace(/-/g, '')}`}>
                                        <PhoneIcon />
                                        <span>
                                            {t.common.phone}
                                            <small className="ltr-num">{PHONE_DISPLAY}</small>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>{c.basedTitle}</h2>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        <PinIcon />
                                        {BASE_CITY[locale]}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <ClockIcon />
                                        <span>
                                            {c.hoursTitle}
                                            <small>{c.hours}</small>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}
