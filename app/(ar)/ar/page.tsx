import HomeView from '@/app/_site/HomeView'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('ar')

export const metadata = pageMeta({ locale: 'ar', path: '/', title: t.meta.homeTitle, description: t.meta.homeDescription, absoluteTitle: true })

export default function Page() {
    return <HomeView locale="ar" />
}
