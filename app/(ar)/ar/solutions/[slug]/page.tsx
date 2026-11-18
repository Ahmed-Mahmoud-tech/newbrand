import { notFound } from 'next/navigation'

import SolutionView from '@/app/_site/SolutionView'
import { findSolution, SOLUTION_SLUGS } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

type Props = { params: Promise<{ slug: string }> }

// Only the five solution pages exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
    return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
    const s = findSolution('ar', (await params).slug)
    if (!s) return {}
    return pageMeta({ locale: 'ar', path: `/solutions/${s.slug}`, title: s.page.metaTitle, description: s.page.metaDescription })
}

export default async function Page({ params }: Props) {
    const s = findSolution('ar', (await params).slug)
    if (!s) notFound()
    return <SolutionView locale="ar" solution={s} />
}
