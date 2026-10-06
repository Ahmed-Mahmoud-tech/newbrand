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
/** Hosting bundles: real estate per month, kitchens per year (the 1-tour price is the one above). */
export const BUNDLES = {
    real_estate: [{ tours: 1, price: 100 }, { tours: 10, price: 500 }],
    kitchen: [{ tours: 1, price: 250 }, { tours: 10, price: 500 }, { tours: 30, price: 1200 }],
}
// PRICE-LISTS-END

/** What comes free after a while, per tab (same sheet). */
export const GIFTS: Record<Segment, string> = {
    real_estate: 'بعد 10 وحدات: جولة ببلاش',
    commercial: 'بعد سنة: تحديث البوب أب ببلاش',
    hotel: '',
    kitchen: 'بعد 10 مطابخ: صفحة بورتفوليو فيها كل جولاتك',
}

/** The cheapest mix of bundles covering `tours` tours (3 kitchens already take the 10-bundle). Same as the CRM's bundleHosting. */
export function bundleHosting(segment: keyof typeof BUNDLES, tours: number): { price: number; bundles: { tours: number; count: number }[] } {
    const list = BUNDLES[segment]
    const n = Math.max(0, Math.floor(tours))
    const best: { price: number; pick: number }[] = [{ price: 0, pick: -1 }]
    for (let i = 1; i <= n; i++) {
        let b = { price: Infinity, pick: -1 }
        list.forEach((x, j) => {
            const p = best[Math.max(0, i - x.tours)].price + x.price
            if (p < b.price) b = { price: p, pick: j }
        })
        best.push(b)
    }
    const counts = new Map<number, number>()
    for (let i = n; i > 0; ) {
        const x = list[best[i].pick]
        counts.set(x.tours, (counts.get(x.tours) ?? 0) + 1)
        i = Math.max(0, i - x.tours)
    }
    return { price: best[n].price, bundles: [...counts].map(([t, count]) => ({ tours: t, count })).sort((a, b) => b.tours - a.tours) }
}

export const ANNUAL_DISCOUNT = 0.1

/** A kitchen shot the same day as another: the discount is rounded, then taken off (as the CRM's priceDeal does). */
export const KITCHEN_SAME_DAY_PRICE = KITCHEN_PRICE - Math.round((KITCHEN_PRICE * SAME_DAY_PERCENT) / 100)

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
        const extra = KITCHEN_SAME_DAY_PRICE
        const shooting = n ? KITCHEN_PRICE + (n - 1) * extra : 0
        const yearly = bundleHosting('kitchen', n).price
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
