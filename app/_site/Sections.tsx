import Image from 'next/image'
import Link from 'next/link'

import { dict, solutionPath, type Solution } from '@/lib/content'
import { absolute, href, type Locale } from '@/lib/i18n'

import { ArrowIcon, CheckIcon, PlusIcon } from './Icons'
import { IMAGES } from './images'
import Visual from './Visual'

export function JsonLd({ data }: { data: object }) {
    // JSON-LD is data, not script; escape "<" so no string can close the tag.
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function SectionHead({ eyebrow, title, lead, id, as: Tag = 'h2' }: { eyebrow?: string; title: string; lead?: string; id?: string; as?: 'h1' | 'h2' }) {
    return (
        <div className={`section-head${lead ? '' : ' section-head--stack'}`}>
            <div>
                {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                <Tag id={id} className="h2">
                    {title}
                </Tag>
            </div>
            {lead && <p className="lead">{lead}</p>}
        </div>
    )
}

export function SolutionCard({ s, locale }: { s: Solution; locale: Locale }) {
    const t = dict(locale)
    const url = href(locale, solutionPath(s))
    return (
        <article className="sol-card">
            <Link href={url} tabIndex={-1} aria-hidden="true">
                <Visual visual={s.visual} caption={s.visualCaption} alt={s.title} />
            </Link>
            <span className="sol-card__index">{s.index}</span>
            <h3 className="h3">
                <Link href={url}>{s.title}</Link>
            </h3>
            <p>{s.short}</p>
            <ul className="ticks">
                {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
            <Link href={url} className="link-arrow">
                {s.page ? t.common.viewSolution : t.common.requestProposal}
                <ArrowIcon />
            </Link>
        </article>
    )
}

export function SolutionGrid({ locale, exclude }: { locale: Locale; exclude?: string }) {
    const t = dict(locale)
    return (
        <div className="sol-grid">
            {t.solutions
                .filter((s) => s.slug !== exclude)
                .map((s) => (
                    <SolutionCard key={s.slug} s={s} locale={locale} />
                ))}
        </div>
    )
}

export function ProcessSection({ locale, id = 'process', title }: { locale: Locale; id?: string; title?: string }) {
    const t = dict(locale).process
    return (
        <section id={id} className="section section--black" aria-labelledby={`${id}-heading`}>
            <div className="wrap">
                <SectionHead eyebrow={t.eyebrow} title={title ?? t.title} lead={t.lead} id={`${id}-heading`} />
                <ol className="steps">
                    {t.steps.map((s) => (
                        <li key={s.n} className="step">
                            <span className="step__n" aria-hidden="true">
                                {s.n}
                            </span>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export function PricingNote({ locale }: { locale: Locale }) {
    const t = dict(locale).pricingNote
    return (
        <section className="section section--paper2 section--tight" aria-labelledby="engagement-heading">
            <div className="wrap note-band">
                <div>
                    <p className="eyebrow">{t.eyebrow}</p>
                    <h2 id="engagement-heading" className="h2">
                        {t.title}
                    </h2>
                    <p className="lead">{t.text}</p>
                </div>
                <div className="note-band__actions">
                    <Link href={href(locale, '/contact')} className="btn btn--dark">
                        {t.cta}
                        <ArrowIcon />
                    </Link>
                    <Link href={href(locale, '/pricing')} className="text-link">
                        {t.entry}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export function CtaBand({ locale, title, text }: { locale: Locale; title?: string; text?: string }) {
    const t = dict(locale)
    return (
        <section className="cta-band section" aria-labelledby="cta-heading">
            <div className="cta-band__bg" aria-hidden="true">
                <Image src={IMAGES.conceptDining} alt="" fill sizes="100vw" />
            </div>
            <div className="wrap">
                <h2 id="cta-heading" className="h2">
                    {title ?? t.cta.title}
                </h2>
                <p className="lead">{text ?? t.cta.text}</p>
                <div className="btn-row">
                    <Link href={href(locale, '/contact')} className="btn btn--primary">
                        {t.cta.primary}
                        <ArrowIcon />
                    </Link>
                    <Link href={href(locale, '/portfolio')} className="btn btn--ghost-light">
                        {t.cta.secondary}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
    return (
        <div className="faq">
            {items.map((f) => (
                <details key={f.q}>
                    <summary>
                        {f.q}
                        <PlusIcon />
                    </summary>
                    <p>{f.a}</p>
                </details>
            ))}
        </div>
    )
}

export function faqSchema(items: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }
}

/** Visible breadcrumb plus its BreadcrumbList schema. The last item is the current page. */
export function Breadcrumb({ locale, trail }: { locale: Locale; trail: { name: string; path: string }[] }) {
    const t = dict(locale)
    const all = [{ name: t.common.home, path: '/' }, ...trail]
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absolute(href(locale, c.path)) })),
    }
    return (
        <>
            <JsonLd data={schema} />
            <nav aria-label={locale === 'ar' ? 'مسار التنقل' : 'Breadcrumb'}>
                <ol className="breadcrumb">
                    {all.map((c, i) =>
                        i === all.length - 1 ? (
                            <li key={c.path} aria-current="page">
                                {c.name}
                            </li>
                        ) : (
                            <li key={c.path}>
                                <Link href={href(locale, c.path)}>{c.name}</Link>
                            </li>
                        ),
                    )}
                </ol>
            </nav>
        </>
    )
}

export function Checklist({ items }: { items: string[] }) {
    return (
        <ul className="checklist">
            {items.map((i) => (
                <li key={i}>
                    <CheckIcon />
                    <span>{i}</span>
                </li>
            ))}
        </ul>
    )
}
