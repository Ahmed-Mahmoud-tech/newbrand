import Link from 'next/link'

import { dict, solutionPath } from '@/lib/content'
import { absolute, href, type Locale } from '@/lib/i18n'
import { BRAND, EMAIL, SAME_AS, SITE_URL, TELEPHONE } from '@/lib/site'

import ExperienceViewer from './ExperienceViewer'
import { ArrowIcon } from './Icons'
import { IMAGES } from './images'
import ProjectGrid from './ProjectGrid'
import { projectCards, projectText, viewerProps } from './projects'
import { CtaBand, JsonLd, PricingNote, ProcessSection, SectionHead, SolutionGrid } from './Sections'

export default function HomeView({ locale }: { locale: Locale }) {
    const t = dict(locale)
    const viewer = viewerProps(locale)

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: BRAND,
        description: t.meta.homeDescription,
        url: absolute(href(locale, '/')),
        image: `${SITE_URL}/opengraph-image.png`,
        logo: `${SITE_URL}/images/icon-512.png`,
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        telephone: TELEPHONE,
        email: EMAIL,
        address: { '@type': 'PostalAddress', addressCountry: 'EG' },
        areaServed: [
            { '@type': 'Country', name: 'Egypt' },
            { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Country', name: 'United Arab Emirates' },
        ],
        knowsAbout: [
            'Real estate virtual tours',
            '360 virtual tours for real estate',
            '3D architectural walkthroughs',
            'Off-plan property experiences',
            'Interactive real estate showrooms',
            'Interactive masterplans',
            'Architectural visualization',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t.solutionsSection.eyebrow,
            itemListElement: t.solutions.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.title, description: s.short, url: absolute(href(locale, solutionPath(s))) },
            })),
        },
        sameAs: SAME_AS,
    }

    return (
        <>
            <JsonLd data={serviceSchema} />

            {/* ── Hero ── */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="wrap">
                    <p className="eyebrow">{t.hero.eyebrow}</p>
                    <h1 id="hero-heading" className="display">
                        {t.hero.title}
                    </h1>
                    <div className="hero__row">
                        <div>
                            <p className="lead">{t.hero.lead}</p>
                            <div className="btn-row">
                                <Link href={href(locale, '/portfolio')} className="btn btn--primary">
                                    {t.hero.primary}
                                    <ArrowIcon />
                                </Link>
                                <Link href={href(locale, '/contact')} className="btn btn--ghost-light">
                                    {t.hero.secondary}
                                </Link>
                            </div>
                        </div>
                        <dl className="facts">
                            {t.hero.facts.map((f) => (
                                <div key={f.k}>
                                    <dt>{f.k}</dt>
                                    <dd>{f.v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <ExperienceViewer {...viewer} poster={IMAGES.conceptLiving} priority />
                    <p className="xp-note">{t.viewer.note}</p>
                </div>
            </section>

            {/* ── Positioning ── */}
            <section className="section" aria-labelledby="positioning-heading">
                <div className="wrap split">
                    <div className="split__sticky">
                        <p className="eyebrow">{t.positioning.eyebrow}</p>
                        <h2 id="positioning-heading" className="h2">
                            {t.positioning.title}
                        </h2>
                        <p className="lead">{t.positioning.lead}</p>
                    </div>
                    <ol className="points">
                        {t.positioning.points.map((p) => (
                            <li key={p.title}>
                                <h3>{p.title}</h3>
                                <p>{p.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── Solutions ── */}
            <section id="solutions" className="section section--dark" aria-labelledby="solutions-heading">
                <div className="wrap">
                    <SectionHead eyebrow={t.solutionsSection.eyebrow} title={t.solutionsSection.title} lead={t.solutionsSection.lead} id="solutions-heading" />
                    <SolutionGrid locale={locale} />
                </div>
            </section>

            {/* ── Featured projects ── */}
            <section id="work" className="section" aria-labelledby="work-heading">
                <div className="wrap">
                    <SectionHead eyebrow={t.projectsSection.eyebrow} title={t.projectsSection.title} lead={t.projectsSection.lead} id="work-heading" />
                    <ProjectGrid projects={projectCards(locale)} text={projectText(locale)} />
                    <p style={{ marginTop: 48 }}>
                        <Link href={href(locale, '/portfolio')} className="link-arrow">
                            {t.projectsSection.viewAll}
                            <ArrowIcon />
                        </Link>
                    </p>
                </div>
            </section>

            {/* ── Who we work with ── */}
            <section className="section section--paper2" aria-labelledby="audiences-heading">
                <div className="wrap">
                    <SectionHead eyebrow={t.audiences.eyebrow} title={t.audiences.title} lead={t.audiences.lead} id="audiences-heading" />
                    <ul className="items">
                        {t.audiences.items.map((a, i) => (
                            <li key={a.title} className="item">
                                <span className="item__n">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{a.title}</h3>
                                <p>{a.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessSection locale={locale} />

            {/* ── Why Gateverse ── */}
            <section className="section" aria-labelledby="why-heading">
                <div className="wrap split">
                    <div className="split__sticky">
                        <p className="eyebrow">{t.why.eyebrow}</p>
                        <h2 id="why-heading" className="h2">
                            {t.why.title}
                        </h2>
                        <p className="lead">{t.why.lead}</p>
                    </div>
                    <ul className="items items--2">
                        {t.why.items.map((w, i) => (
                            <li key={w.title} className="item">
                                <span className="item__n">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{w.title}</h3>
                                <p>{w.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <PricingNote locale={locale} />
            <CtaBand locale={locale} />
        </>
    )
}
