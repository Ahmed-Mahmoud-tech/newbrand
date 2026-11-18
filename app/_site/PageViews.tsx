import Link from 'next/link'

import { dict } from '@/lib/content'
import { href, type Locale } from '@/lib/i18n'
import { ADDONS, CUSTOM_QUOTE_FROM, HOSTING_MONTHLY, HOSTING_YEARLY, PACKAGES } from '@/lib/packages'
import { whatsappLink } from '@/lib/site'

import ExperienceViewer from './ExperienceViewer'
import { ArrowIcon, CheckIcon, CloseIcon, WhatsAppIcon } from './Icons'
import { IMAGES } from './images'
import ProjectGrid from './ProjectGrid'
import { projectCards, projectText, viewerProps } from './projects'
import { Breadcrumb, CtaBand, JsonLd, PricingNote, ProcessSection, SolutionGrid } from './Sections'
import TourEmbed from './TourEmbed'

function PageHero({ locale, eyebrow, title, lead, trail, children }: { locale: Locale; eyebrow: string; title: string; lead: string; trail: { name: string; path: string }[]; children?: React.ReactNode }) {
    return (
        <section className="page-hero" aria-labelledby="page-heading">
            <div className="wrap">
                <Breadcrumb locale={locale} trail={trail} />
                <p className="eyebrow">{eyebrow}</p>
                <h1 id="page-heading" className="display">
                    {title}
                </h1>
                <p className="lead">{lead}</p>
                {children}
            </div>
        </section>
    )
}

/* ── /solutions ── */
export function SolutionsIndexView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    return (
        <>
            <PageHero locale={locale} eyebrow={t.solutionsIndex.eyebrow} title={t.solutionsIndex.title} lead={t.solutionsIndex.lead} trail={[{ name: t.solutionsIndex.eyebrow, path: '/solutions' }]}>
                <div className="btn-row">
                    <Link href={href(locale, '/contact')} className="btn btn--primary">
                        {t.common.requestProposal}
                        <ArrowIcon />
                    </Link>
                </div>
            </PageHero>
            <section className="section section--dark" aria-label={t.solutionsIndex.eyebrow}>
                <div className="wrap">
                    <SolutionGrid locale={locale} />
                </div>
            </section>
            <ProcessSection locale={locale} />
            <PricingNote locale={locale} />
            <CtaBand locale={locale} />
        </>
    )
}

/* ── /portfolio ── */
export function PortfolioView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const pp = t.portfolioPage
    return (
        <>
            <PageHero locale={locale} eyebrow={pp.eyebrow} title={pp.title} lead={pp.lead} trail={[{ name: pp.eyebrow, path: '/portfolio' }]} />

            <section id="concept" className="section section--dark" aria-labelledby="concept-heading">
                <div className="wrap">
                    <div className="section-head">
                        <div>
                            <p className="eyebrow">{t.common.concept}</p>
                            <h2 id="concept-heading" className="h2">
                                {pp.conceptTitle}
                            </h2>
                        </div>
                        <p className="lead">{pp.conceptText}</p>
                    </div>
                    <ExperienceViewer {...viewerProps(locale)} poster={IMAGES.conceptLiving} tall />
                    <p className="xp-note">{t.footer.credit}</p>
                </div>
            </section>

            <section className="section" aria-labelledby="live-heading">
                <div className="wrap">
                    <div className="section-head">
                        <div>
                            <p className="eyebrow">{t.common.capturedOnSite}</p>
                            <h2 id="live-heading" className="h2">
                                {pp.liveTitle}
                            </h2>
                        </div>
                        <p className="lead">{pp.liveText}</p>
                    </div>
                    <TourEmbed
                        src="/tour/the-circle"
                        title={locale === 'ar' ? 'ذا سيركل: جولة 360° حية' : 'The Circle: live 360° tour'}
                        poster={IMAGES.circleOffice}
                        label={locale === 'ar' ? 'اضغط لتحميل الجولة الحية هنا' : 'Load the live tour here'}
                        badge={t.common.capturedOnSite}
                    />
                    <div style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
                        <ProjectGrid projects={projectCards(locale, 'live')} text={projectText(locale)} />
                    </div>
                    <p className="muted" style={{ marginTop: 48, fontSize: 14 }}>
                        {pp.honesty}
                    </p>
                </div>
            </section>

            <CtaBand locale={locale} />
        </>
    )
}

/* ── /about ── */
export function AboutView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const a = t.aboutPage
    return (
        <>
            <PageHero locale={locale} eyebrow={a.eyebrow} title={a.title} lead={a.intro[0]} trail={[{ name: a.eyebrow, path: '/about' }]} />

            <section className="section" aria-labelledby="about-heading">
                <div className="wrap two-col">
                    <div>
                        <p className="eyebrow">{t.positioning.eyebrow}</p>
                        <h2 id="about-heading" className="h2">
                            {t.positioning.title}
                        </h2>
                    </div>
                    <div className="prose">
                        {a.intro.slice(1).map((p) => (
                            <p key={p.slice(0, 24)}>{p}</p>
                        ))}
                        <p>{t.why.lead}</p>
                    </div>
                </div>
            </section>

            <section className="section section--paper2" aria-labelledby="principles-heading">
                <div className="wrap">
                    <div className="section-head section-head--stack">
                        <h2 id="principles-heading" className="h2">
                            {a.principlesTitle}
                        </h2>
                    </div>
                    <ul className="items items--4">
                        {a.principles.map((p, i) => (
                            <li key={p.title} className="item">
                                <span className="item__n">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section section--dark" aria-labelledby="where-heading">
                <div className="wrap two-col">
                    <h2 id="where-heading" className="h2">
                        {a.whereTitle}
                    </h2>
                    <div className="prose">
                        <p>{a.whereText}</p>
                    </div>
                </div>
            </section>

            <CtaBand locale={locale} />
        </>
    )
}

/* ── /pricing (entry-level 360° packages for single completed spaces) ── */
export function PricingView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const pp = t.pricingPage
    const num = (n: number) => n.toLocaleString(locale === 'ar' ? 'ar-EG' : 'en-US')

    const offers = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: pp.metaTitle,
        itemListElement: PACKAGES.map((p) => ({
            '@type': 'Offer',
            name: `${pp.packages[p.id]?.name ?? p.name}: ${pp.upTo} ${p.upTo} ${pp.sqm}`,
            price: String(p.price),
            priceCurrency: 'EGP',
            availability: 'https://schema.org/InStock',
        })),
    }

    return (
        <>
            <JsonLd data={offers} />
            <PageHero locale={locale} eyebrow={pp.eyebrow} title={pp.title} lead={pp.lead} trail={[{ name: pp.eyebrow, path: '/pricing' }]} />

            <section className="section" aria-label={pp.eyebrow}>
                <div className="wrap">
                    <div className="pkg-grid">
                        {PACKAGES.map((p) => {
                            const label = pp.packages[p.id] ?? { name: p.name, tagline: p.tagline }
                            const features: [string, boolean][] = [
                                [pp.features.tour, true],
                                [pp.features.link, true],
                                [pp.features.hosting(p.hostingMonths), true],
                                [pp.features.info, p.infoPoints > 0],
                                [pp.features.priority, p.priority],
                            ]
                            return (
                                <article key={p.id} className={`pkg${p.featured ? ' pkg--featured' : ''}`}>
                                    {p.featured && <span className="pkg__badge">{pp.popular}</span>}
                                    <h2>{label.name}</h2>
                                    <p className="pkg__area">
                                        {pp.upTo} {num(p.upTo)} {pp.sqm}
                                    </p>
                                    <p className="pkg__price">
                                        {num(p.price)}
                                        <span>{pp.currency}</span>
                                    </p>
                                    <p className="pkg__tagline">{label.tagline}</p>
                                    <ul>
                                        {features.map(([text, on]) => (
                                            <li key={text} className={on ? '' : 'off'}>
                                                {on ? <CheckIcon /> : <CloseIcon />}
                                                <span>
                                                    {text}
                                                    <span className="sr-only"> ({on ? pp.included : pp.notIncluded})</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={whatsappLink(pp.bookMessage(label.name, p.upTo))}
                                        className={`btn btn--sm ${p.featured ? 'btn--primary' : 'btn--ghost'}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <WhatsAppIcon />
                                        {pp.book}
                                    </a>
                                </article>
                            )
                        })}
                    </div>
                    <p className="muted" style={{ marginTop: 28, fontSize: 14.5, maxWidth: '80ch' }}>
                        {pp.hostingNote(num(HOSTING_MONTHLY), num(HOSTING_YEARLY), num(CUSTOM_QUOTE_FROM))} {pp.coverage}
                    </p>
                </div>
            </section>

            <section className="section section--paper2 section--tight" aria-labelledby="addons-heading">
                <div className="wrap two-col">
                    <h2 id="addons-heading" className="h2">
                        {pp.addonsTitle}
                    </h2>
                    <ul className="addons">
                        {ADDONS.map((a, i) => {
                            const amount = a.price.match(/\d+/)?.[0] ?? ''
                            const price = a.price.includes('%') ? `${num(Number(amount))}% ${pp.addonPercent}` : `${num(Number(amount))} ${pp.addonUnit}`
                            return (
                                <li key={a.name}>
                                    <span>{pp.addons[i] ?? a.name}</span>
                                    <b>{price}</b>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>

            <section className="section section--dark section--tight" aria-labelledby="projects-heading">
                <div className="wrap note-band">
                    <div>
                        <h2 id="projects-heading" className="h2">
                            {pp.projectsTitle}
                        </h2>
                        <p className="lead">{pp.projectsText}</p>
                    </div>
                    <div className="note-band__actions">
                        <Link href={href(locale, '/contact')} className="btn btn--primary">
                            {t.common.requestProposal}
                            <ArrowIcon />
                        </Link>
                        <Link href={href(locale, '/solutions')} className="text-link">
                            {t.solutionsSection.all}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
