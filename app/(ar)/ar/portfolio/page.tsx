import { PortfolioView } from '@/app/_site/PageViews'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('ar')

export const metadata = pageMeta({ locale: 'ar', path: '/portfolio', title: t.portfolioPage.metaTitle, description: t.portfolioPage.metaDescription })

export default function Page() {
    return <PortfolioView locale="ar" />
}
