import SiteDocument, { siteMetadata, siteViewport } from '@/app/_site/SiteDocument'

/** Root layout for the English marketing pages (served at the root). */
export const metadata = siteMetadata('en')
export const viewport = siteViewport

export default function Layout({ children }: { children: React.ReactNode }) {
    return <SiteDocument locale="en">{children}</SiteDocument>
}
