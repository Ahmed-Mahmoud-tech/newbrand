/**
 * The project inquiry form: field rules shared by the browser form and POST /api/inquiry, so both
 * accept exactly the same input.
 */

export const PROJECT_TYPES = ['residential', 'commercial', 'mixed-use', 'luxury-residence', 'hospitality', 'single-unit', 'other'] as const
export const PROJECT_STATUSES = ['planning', 'off-plan', 'under-construction', 'completed'] as const
export const SERVICES = [
    '360-virtual-tours',
    '3d-walkthroughs',
    'off-plan-experiences',
    'interactive-showrooms',
    'interactive-masterplans',
    'digital-presentations',
    'not-sure',
] as const

export interface Inquiry {
    name: string
    company: string
    email: string
    phone: string
    projectType: string
    location: string
    status: string
    service: string
    details: string
}

export type InquiryField = keyof Inquiry
export type FieldError = 'required' | 'email' | 'phone'

export const LIMITS: Record<InquiryField, number> = {
    name: 120,
    company: 160,
    email: 200,
    phone: 32,
    projectType: 40,
    location: 160,
    status: 40,
    service: 40,
    details: 3000,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
/** 7–15 digits (E.164), allowing +, spaces, dashes, dots and brackets. */
const PHONE_RE = /^\+?[\d\s().-]{7,24}$/

export function validate(x: Inquiry): Partial<Record<InquiryField, FieldError>> {
    const e: Partial<Record<InquiryField, FieldError>> = {}
    const req: InquiryField[] = ['name', 'company', 'email', 'phone', 'projectType', 'location', 'status', 'service']
    for (const k of req) if (!x[k].trim()) e[k] = 'required'
    if (!e.email && !EMAIL_RE.test(x.email.trim())) e.email = 'email'
    const digits = x.phone.replace(/\D/g, '')
    if (!e.phone && (!PHONE_RE.test(x.phone.trim()) || digits.length < 7 || digits.length > 15)) e.phone = 'phone'
    if (!e.projectType && !(PROJECT_TYPES as readonly string[]).includes(x.projectType)) e.projectType = 'required'
    if (!e.status && !(PROJECT_STATUSES as readonly string[]).includes(x.status)) e.status = 'required'
    if (!e.service && !(SERVICES as readonly string[]).includes(x.service)) e.service = 'required'
    return e
}

/** Untrusted JSON -> trimmed, length-capped Inquiry (or null if the shape is wrong). */
export function parse(body: unknown): Inquiry | null {
    if (!body || typeof body !== 'object') return null
    const b = body as Record<string, unknown>
    const out = {} as Inquiry
    for (const k of Object.keys(LIMITS) as InquiryField[]) {
        const v = b[k] ?? ''
        if (typeof v !== 'string') return null
        out[k] = v.trim().slice(0, LIMITS[k])
    }
    return out
}
