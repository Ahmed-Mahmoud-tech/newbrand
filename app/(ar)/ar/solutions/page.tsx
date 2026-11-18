import { SolutionsIndexView } from '@/app/_site/PageViews'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('ar')

export const metadata = pageMeta({ locale: 'ar', path: '/solutions', title: t.solutionsIndex.metaTitle, description: t.solutionsIndex.metaDescription })

export default function Page() {
    return <SolutionsIndexView locale="ar" />
}
