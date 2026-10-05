/**
 * The public price lists, one per calculator tab. These are copies of the CRM's
 * clientMangment/lib/segments.ts (its tests compare the two): change both, or a client quotes a
 * price the CRM won't produce.
 */
export type Segment = 'real_estate' | 'commercial' | 'hotel' | 'kitchen'
export type Plan = 'monthly' | 'annual'

export interface Tier {
    upTo: number | null
    rate: number
}

export const SEGMENT_LABEL: Record<Segment, string> = {
    real_estate: 'عقارات',
    commercial: 'تجاري',
    hotel: 'فنادق',
    kitchen: 'مطابخ',
}

// PRICE-LISTS-START (read by clientMangment/lib/segments.test.ts)
export const TIERS: Record<'real_estate' | 'commercial' | 'hotel', Tier[]> = {
    real_estate: [{ upTo: 130, rate: 20 }, { upTo: 200, rate: 15 }, { upTo: null, rate: 12 }],
    commercial: [{ upTo: 150, rate: 20 }, { upTo: 400, rate: 10 }, { upTo: null, rate: 6 }],
    hotel: [{ upTo: 1000, rate: 13 }, { upTo: 3000, rate: 8 }, { upTo: null, rate: 5 }],
}
export const MIN_SHOOT = { real_estate: 1000, commercial: 1000, hotel: 5000 }
export const KITCHEN_PRICE = 750
export const SAME_DAY_PERCENT = 15
export const HOSTING = {
    realEstateMonthly: 100,
    commercialYearly: 1200,
    hotelPercentYearly: 10,
    kitchenYearly: 250,
}
// PRICE-LISTS-END

export const ANNUAL_DISCOUNT = 0.1

/** Each band of m² at its own rate, like an electricity bill — a bigger place never costs less. */
export function tieredPrice(area: number, tiers: Tier[]): number {
    let total = 0
    let from = 0
    for (const t of tiers) {
        const to = t.upTo ?? Infinity
        if (area <= from) break
        total += (Math.min(area, to) - from) * t.rate
        from = to
    }
    return Math.round(total)
}

/** How much of the area falls in each band, for the breakdown under the result. */
export function tierBreakdown(area: number, tiers: Tier[]): { from: number; to: number; rate: number; cost: number }[] {
    const out = []
    let from = 0
    for (const t of tiers) {
        const to = Math.min(area, t.upTo ?? Infinity)
        if (to <= from) break
        out.push({ from: from + 1, to, rate: t.rate, cost: (to - from) * t.rate })
        from = to
    }
    return out
}

export interface Quote {
    shooting: number
    /** The first hosting period the client pays now (0 when it comes with the shoot). */
    hostingNow: number
    /** What hosting costs from the next period on. */
    renewal: number
    renewalUnit: 'شهر' | 'سنة'
    hostingIncluded: boolean
    total: number
    belowMinimum: boolean
}

/** `size` is m², or the number of kitchens shot on the same day for kitchens. */
export function quote(segment: Segment, size: number, plan: Plan): Quote {
    const n = Math.max(0, Math.floor(size))
    if (segment === 'kitchen') {
        const extra = Math.round(KITCHEN_PRICE * (1 - SAME_DAY_PERCENT / 100))
        const shooting = n ? KITCHEN_PRICE + (n - 1) * extra : 0
        const yearly = n * HOSTING.kitchenYearly
        return { shooting, hostingNow: yearly, renewal: yearly, renewalUnit: 'سنة', hostingIncluded: false, total: shooting + yearly, belowMinimum: false }
    }
    const raw = n ? tieredPrice(n, TIERS[segment]) : 0
    const shooting = n ? Math.max(raw, MIN_SHOOT[segment]) : 0
    const belowMinimum = n > 0 && raw < MIN_SHOOT[segment]
    if (segment === 'real_estate') {
        const monthly = n ? HOSTING.realEstateMonthly : 0
        const annual = monthly * 12 - Math.round(monthly * 12 * ANNUAL_DISCOUNT)
        const hostingNow = plan === 'annual' ? annual : monthly
        return { shooting, hostingNow, renewal: hostingNow, renewalUnit: plan === 'annual' ? 'سنة' : 'شهر', hostingIncluded: false, total: shooting + hostingNow, belowMinimum }
    }
    // Commercial and hotels: the first year of hosting comes with the shoot.
    const renewal = segment === 'commercial' ? (n ? HOSTING.commercialYearly : 0) : Math.round((shooting * HOSTING.hotelPercentYearly) / 100)
    return { shooting, hostingNow: 0, renewal, renewalUnit: 'سنة', hostingIncluded: true, total: shooting, belowMinimum }
}
