'use client'
import { useEffect, useRef, useState } from 'react'

import { trackLead } from '@/app/components/Pixels'
import type { Dict } from '@/lib/content'
import { LIMITS, validate, type FieldError, type Inquiry, type InquiryField } from '@/lib/inquiry'
import { EMAIL, whatsappLink } from '@/lib/site'

import { ArrowIcon, CheckIcon, MailIcon, WhatsAppIcon } from './Icons'

type FormText = Dict['form']
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok'; ref: string } | { kind: 'error'; message: string }

const EMPTY: Inquiry = { name: '', company: '', email: '', phone: '', projectType: '', location: '', status: '', service: '', details: '' }

/** The inquiry as plain text, for the WhatsApp and email hand-offs. */
function summary(t: FormText, x: Inquiry, ref?: string): string {
    const label = (list: string[][], v: string) => list.find(([k]) => k === v)?.[1] ?? v
    return [
        t.summaryIntro,
        '',
        ref ? `Ref: ${ref}` : null,
        `${t.name}: ${x.name}`,
        `${t.company}: ${x.company}`,
        `${t.email}: ${x.email}`,
        `${t.phone}: ${x.phone}`,
        `${t.projectType}: ${label(t.projectTypes, x.projectType)}`,
        `${t.location}: ${x.location}`,
        `${t.status}: ${label(t.statuses, x.status)}`,
        `${t.service}: ${label(t.services, x.service)}`,
        x.details ? `${t.details}: ${x.details}` : null,
    ]
        .filter((l) => l !== null)
        .join('\n')
}

export default function InquiryForm({ t, locale }: { t: FormText; locale: 'en' | 'ar' }) {
    const [v, setV] = useState<Inquiry>(EMPTY)
    const [errors, setErrors] = useState<Partial<Record<InquiryField, FieldError>>>({})
    const [status, setStatus] = useState<Status>({ kind: 'idle' })
    const hp = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const resultRef = useRef<HTMLDivElement>(null)

    // ?service=<slug> from a solution page preselects the service.
    useEffect(() => {
        const s = new URLSearchParams(window.location.search).get('service')
        if (s && t.services.some(([k]) => k === s)) setV((x) => ({ ...x, service: s }))
    }, [t.services])

    useEffect(() => {
        if (status.kind === 'ok' || status.kind === 'error') resultRef.current?.focus()
    }, [status])

    const set = (k: InquiryField) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = e.target.value
        setV((x) => ({ ...x, [k]: value }))
        if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        const errs = validate(v)
        setErrors(errs)
        const first = (Object.keys(errs) as InquiryField[])[0]
        if (first) {
            formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
            return
        }
        setStatus({ kind: 'sending' })
        try {
            const r = await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...v,
                    hp: hp.current?.value ?? '',
                    locale,
                    page: window.location.pathname + window.location.search,
                    referrer: document.referrer,
                }),
            })
            const data = (await r.json().catch(() => ({}))) as { ok?: boolean; ref?: string; fields?: typeof errors; error?: string }
            if (r.status === 201 && data.ok && data.ref) {
                setStatus({ kind: 'ok', ref: data.ref })
                trackLead('form')
                return
            }
            if (r.status === 400 && data.fields) {
                setErrors(data.fields)
                setStatus({ kind: 'error', message: t.errors.fix })
                return
            }
            setStatus({ kind: 'error', message: r.status === 429 ? t.errors.rate : t.errors.server })
        } catch {
            setStatus({ kind: 'error', message: t.errors.server })
        }
    }

    if (status.kind === 'ok') {
        const text = summary(t, v, status.ref)
        return (
            <div className="form-card success" ref={resultRef} tabIndex={-1} role="status">
                <span className="success__mark" aria-hidden="true">
                    <CheckIcon />
                </span>
                <h2>{t.successTitle}</h2>
                <p>{t.successText.replace('{ref}', status.ref)}</p>
                <p style={{ marginTop: 12 }}>{t.successWhatsapp}</p>
                <div className="btn-row">
                    <a href={whatsappLink(text)} className="btn btn--dark" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        {t.sendWhatsapp}
                    </a>
                    <button
                        type="button"
                        className="btn btn--ghost"
                        onClick={() => {
                            setV(EMPTY)
                            setStatus({ kind: 'idle' })
                        }}
                    >
                        {t.another}
                    </button>
                </div>
            </div>
        )
    }

    const field = (k: InquiryField, label: string, input: React.ReactNode, opts: { full?: boolean; hint?: string; optional?: boolean } = {}) => (
        <div className={`field${opts.full ? ' field--full' : ''}`}>
            <label htmlFor={`f-${k}`}>
                {label}
                <small>{opts.optional ? t.optional : t.required}</small>
            </label>
            {input}
            {opts.hint && !errors[k] && (
                <p className="field__hint" id={`f-${k}-hint`}>
                    {opts.hint}
                </p>
            )}
            {errors[k] && (
                <p className="field__error" id={`f-${k}-err`}>
                    {t.errors[errors[k]!]}
                </p>
            )}
        </div>
    )
    const attrs = (k: InquiryField, hint?: boolean) => ({
        id: `f-${k}`,
        name: k,
        value: v[k],
        onChange: set(k),
        maxLength: LIMITS[k],
        'aria-invalid': errors[k] ? true : undefined,
        'aria-describedby': errors[k] ? `f-${k}-err` : hint ? `f-${k}-hint` : undefined,
    })
    const select = (k: InquiryField, list: string[][]) => {
        const { maxLength: _max, ...rest } = attrs(k)
        void _max
        return (
            <select {...rest} required>
                <option value="">{t.select}</option>
                {list.map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        )
    }

    const sending = status.kind === 'sending'
    const fallbackText = summary(t, v)

    return (
        <form ref={formRef} className="form-card" onSubmit={submit} noValidate aria-labelledby="form-title">
            <h2 id="form-title">{t.title}</h2>
            <p className="form-note">{t.privacy}</p>
            <div className="form-grid">
                {field('name', t.name, <input {...attrs('name')} type="text" autoComplete="name" required />)}
                {field('company', t.company, <input {...attrs('company')} type="text" autoComplete="organization" required />)}
                {field('email', t.email, <input {...attrs('email')} type="email" autoComplete="email" inputMode="email" dir="ltr" required />)}
                {field('phone', t.phone, <input {...attrs('phone', true)} type="tel" autoComplete="tel" inputMode="tel" dir="ltr" required />, { hint: t.phoneHint })}
                {field('projectType', t.projectType, select('projectType', t.projectTypes))}
                {field('location', t.location, <input {...attrs('location', true)} type="text" required />, { hint: t.locationHint })}
                {field('status', t.status, select('status', t.statuses))}
                {field('service', t.service, select('service', t.services))}
                {field('details', t.details, <textarea {...attrs('details', true)} rows={5} />, { full: true, hint: t.detailsHint, optional: true })}
            </div>

            {/* Honeypot: hidden from people and assistive tech; bots tend to fill every field. */}
            <div className="hp" aria-hidden="true">
                <label htmlFor="f-hp">Leave this empty</label>
                <input ref={hp} id="f-hp" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn--dark" disabled={sending}>
                    {sending ? t.sending : t.submit}
                    {!sending && <ArrowIcon />}
                </button>
            </div>

            {status.kind === 'error' && (
                <div className="alert" role="alert" ref={resultRef} tabIndex={-1}>
                    <p>{status.message}</p>
                    {status.message !== t.errors.fix && (
                        <div className="btn-row">
                            <a href={whatsappLink(fallbackText)} className="btn btn--dark btn--sm" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon />
                                {t.sendWhatsapp}
                            </a>
                            <a
                                href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.title)}&body=${encodeURIComponent(fallbackText)}`}
                                className="btn btn--ghost btn--sm"
                            >
                                <MailIcon />
                                {t.sendEmail}
                            </a>
                        </div>
                    )}
                </div>
            )}
        </form>
    )
}
