import type { Locale } from '@/lib/i18n'

import ar from './ar'
import en, { type Dict } from './en'

export type { Dict }
export type Solution = Dict['solutions'][number]
export type SolutionPage = NonNullable<Solution['page']>

export function dict(locale: Locale): Dict {
    return locale === 'ar' ? ar : en
}

/** Solutions that have their own page under /solutions/<slug>. */
export const SOLUTION_SLUGS = ['360-virtual-tours', '3d-walkthroughs', 'off-plan-experiences', 'interactive-showrooms', 'interactive-masterplans'] as const
export type SolutionSlug = (typeof SOLUTION_SLUGS)[number]

/** Where a solution card links: its own page, or the inquiry form preset to that service. */
export function solutionPath(s: Solution): string {
    return s.page ? `/solutions/${s.slug}` : `/contact?service=${s.slug}`
}

/** A solution that has its own page, or null. */
export function findSolution(locale: Locale, slug: string): (Solution & { page: SolutionPage }) | null {
    const s = dict(locale).solutions.find((x) => x.slug === slug)
    return s && s.page ? (s as Solution & { page: SolutionPage }) : null
}
