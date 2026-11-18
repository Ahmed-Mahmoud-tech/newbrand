import type { Metadata } from 'next'

import AdminClient from './AdminClient'

export const metadata: Metadata = {
    title: 'Tour admin',
    robots: { index: false, follow: false },
}

/** Import tours exported from TourForge. Works on the local dev server only (see lib/tourImport.ts). */
export default function AdminPage() {
    return <AdminClient localOnly={process.env.NODE_ENV !== 'development'} />
}
