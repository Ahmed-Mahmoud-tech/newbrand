import { AboutView } from '@/app/_site/PageViews'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('en')

export const metadata = pageMeta({ locale: 'en', path: '/about', title: t.aboutPage.metaTitle, description: t.aboutPage.metaDescription })

export default function Page() {
    return <AboutView locale="en" />
}
