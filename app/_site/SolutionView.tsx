import Link from 'next/link'

import { dict, type Solution, type SolutionPage } from '@/lib/content'
import { absolute, href, type Locale } from '@/lib/i18n'
import { SITE_URL, WHATSAPP_MESSAGE, whatsappLink } from '@/lib/site'

import ExperienceViewer from './ExperienceViewer'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import { IMAGES } from './images'
import { viewerProps } from './projects'
import { Breadcrumb, Checklist, CtaBand, Faq, faqSchema, JsonLd, ProcessSection, SectionHead } from './Sections'
import Visual from './Visual'

/** Solutions whose page links to the concept apartment as a worked example. */
const SHOWS_CONCEPT = new Set(['off-plan-experiences', '3d-walkthroughs', 'interactive-showrooms'])

export default function SolutionView({ locale, solution }: { locale: Locale; solution: Solution & { page: SolutionPage } }) {
    const t = dict(locale)
    const p = solution.page
    const path = `/solutions/${solution.slug}`
    const related = t.solutions.filter((s) => s.page && s.slug !== solution.slug).slice(0, 3)

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: solution.title,
        serviceType: solution.title,
        description: p.metaDescription,
        url: absolute(href(locale, path)),
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['Egypt', 'Saudi Arabia', 'United Arab Emirates'].map((name) => ({ '@type': 'Country', name })),
        audience: { '@type': 'BusinessAudience', audienceType: 'Real estate developers, property marketing agencies, architecture firms' },
    }

    return (
        <>
            <JsonLd data={schema} />
            <JsonLd data={faqSchema(p.faqs)} />

            <section className="page-hero" aria-labelledby="page-heading">
                <div className="wrap">
                    <Breadcrumb
                        locale={locale}
                        trail={[
                            { name: t.solutionPage.breadcrumb, path: '/solutions' },
                            { name: solution.title, path },
                        ]}
                    />
                    <p className="eyebrow">
                        {solution.index} · {p.eyebrow}
                    </p>
                    <h1 id="page-heading" className="display">
                        {p.heroTitle}
                    </h1>
                    <p className="lead">{p.heroLead}</p>
                    <div className="btn-row">
                        <Link href={`${href(locale, '/contact')}?service=${solution.slug}`} className="btn btn--primary">
                            {t.common.requestProposal}
                            <ArrowIcon />
                        </Link>
                        <a href={whatsappLink(WHATSAPP_MESSAGE[locale])} className="btn btn--ghost-light" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                            {t.common.whatsappCta}
                        </a>
                    </div>
                    <div className="page-hero__media">
                        {solution.slug === 'off-plan-experiences' ? (
                            <>
                                <ExperienceViewer {...viewerProps(locale)} poster={IMAGES.conceptLiving} priority />
                                <p className="xp-note">{t.viewer.note}</p>
                            </>
                        ) : (
                            <Visual visual={solution.visual} caption={solution.visualCaption} alt={solution.title} className="media--wide" sizes="(max-width: 1376px) 100vw, 1280px" priority />
                        )}
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="overview-heading">
                <div className="wrap two-col">
                    <div>
                        <p className="eyebrow">{t.solutionPage.overview}</p>
                        <h2 id="overview-heading" className="h2">
                            {p.overviewTitle}
                        </h2>
                    </div>
                    <div className="prose">
                        {p.overview.map((para) => (
                            <p key={para.slice(0, 24)}>{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--paper2" aria-labelledby="uses-heading">
                <div className="wrap">
                    <SectionHead title={p.useCasesTitle} id="uses-heading" />
                    <ul className="items items--4">
                        {p.useCases.map((u, i) => (
                            <li key={u.title} className="item">
                                <span className="item__n">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{u.title}</h3>
                                <p>{u.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section section--dark" aria-labelledby="benefits-heading">
                <div className="wrap">
                    <SectionHead title={p.benefitsTitle} id="benefits-heading" />
                    <ul className="items items--4">
                        {p.benefits.map((b, i) => (
                            <li key={b.title} className="item">
                                <span className="item__n">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{b.title}</h3>
                                <p>{b.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section" aria-label={`${p.deliverablesTitle} / ${p.inputsTitle}`}>
                <div className="wrap two-col">
                    <div>
                        <h2 className="h2">{p.deliverablesTitle}</h2>
                        <Checklist items={p.deliverables} />
                    </div>
                    <div>
                        <h2 className="h2">{p.inputsTitle}</h2>
                        <Checklist items={p.inputs} />
                        <div className="btn-row" style={{ marginTop: 32 }}>
                            {SHOWS_CONCEPT.has(solution.slug) && (
                                <Link href={`${href(locale, '/portfolio')}#concept`} className="link-arrow">
                                    {t.solutionPage.conceptCta}
                                    <ArrowIcon />
                                </Link>
                            )}
                            {solution.slug === '360-virtual-tours' && (
                                <Link href={href(locale, '/pricing')} className="link-arrow">
                                    {t.solutionPage.entryCta}
                                    <ArrowIcon />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <ProcessSection locale={locale} id="workflow" title={t.solutionPage.workflowTitle} />

            <section className="section" aria-labelledby="faq-heading">
                <div className="wrap split">
                    <div className="split__sticky">
                        <h2 id="faq-heading" className="h2">
                            {t.solutionPage.faqTitle}
                        </h2>
                    </div>
                    <Faq items={p.faqs} />
                </div>
            </section>

            <section className="section section--paper2 section--tight" aria-labelledby="related-heading">
                <div className="wrap">
                    <h2 id="related-heading" className="eyebrow">
                        {t.solutionPage.related}
                    </h2>
                    <div className="related">
                        {related.map((r) => (
                            <Link key={r.slug} href={href(locale, `/solutions/${r.slug}`)}>
                                <span>{r.index}</span>
                                <strong>{r.title}</strong>
                                <ArrowIcon />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand locale={locale} title={p.ctaTitle} text={p.ctaText} />
        </>
    )
}
