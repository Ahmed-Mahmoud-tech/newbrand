import ContactView from '@/app/_site/ContactView'
import { dict } from '@/lib/content'
import { pageMeta } from '@/lib/i18n'

const t = dict('ar')

export const metadata = pageMeta({ locale: 'ar', path: '/contact', title: t.contactPage.metaTitle, description: t.contactPage.metaDescription })

export default function Page() {
    return <ContactView locale="ar" />
}
