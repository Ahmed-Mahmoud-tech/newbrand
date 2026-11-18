import SiteDocument, { siteMetadata, siteViewport } from '@/app/_site/SiteDocument'

/** Root layout for the Arabic marketing pages (served under /ar, right to left). */
export const metadata = siteMetadata('ar')
export const viewport = siteViewport

export default function Layout({ children }: { children: React.ReactNode }) {
    return <SiteDocument locale="ar">{children}</SiteDocument>
}
