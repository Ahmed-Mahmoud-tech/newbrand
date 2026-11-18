import type { Metadata } from 'next'
import Link from 'next/link'

import { arabic, sans, serif } from './_site/fonts'
import './_site/site.css'
import { ArrowIcon } from './_site/Icons'
import Wordmark from './_site/Wordmark'
import ar from '@/lib/content/ar'
import en from '@/lib/content/en'
import { SITE_URL } from '@/lib/site'

/**
 * The 404 for any URL that matches no route. The site has several root layouts (English, Arabic,
 * tools), so this page brings its own <html> (next.config.js: experimental.globalNotFound).
 */
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: `${en.notFound.title} | Gateverse`,
    robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
    return (
        <html lang="en" dir="ltr">
            <body className={`${serif.variable} ${sans.variable} ${arabic.variable}`}>
                <main className="page-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                    <div className="wrap">
                        <Link href="/" aria-label="Gateverse">
                            <Wordmark />
                        </Link>
                        <p className="eyebrow" style={{ marginTop: 56 }}>
                            404
                        </p>
                        <h1 className="display">{en.notFound.title}</h1>
                        <p className="lead">{en.notFound.text}</p>
                        <div className="btn-row">
                            <Link href="/" className="btn btn--primary">
                                {en.notFound.home}
                                <ArrowIcon />
                            </Link>
                        </div>
                        <div lang="ar" dir="rtl" style={{ marginTop: 56, borderTop: '1px solid var(--line-dark)', paddingTop: 32 }}>
                            <p className="lead">
                                {ar.notFound.title}. {ar.notFound.text}
                            </p>
                            <p style={{ marginTop: 16 }}>
                                <Link href="/ar" className="link-arrow">
                                    {ar.notFound.home}
                                    <ArrowIcon />
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}
