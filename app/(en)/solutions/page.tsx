import { SolutionsIndexView } from '@/app/_site/PageViews'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('en')

export const metadata = pageMeta({ locale: 'en', path: '/solutions', title: t.solutionsIndex.metaTitle, description: t.solutionsIndex.metaDescription })

export default function Page() {
    return <SolutionsIndexView locale="en" />
}
