import { PricingView } from '@/app/_site/PageViews'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('en')

export const metadata = pageMeta({ locale: 'en', path: '/pricing', title: t.pricingPage.metaTitle, description: t.pricingPage.metaDescription })

export default function Page() {
    return <PricingView locale="en" />
}
