import type { Metadata } from 'next'
import Image from 'next/image'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import logo from '@/public/images/logo-sm.png'
import { db } from '@/lib/db'
import { LINK_COLOR, LINK_ICON, LINK_KINDS, LINK_LABEL } from '@/lib/tourLinks'
import { statsForToken } from '@/lib/tourStats'

import LiveRefresh from './LiveRefresh'
import styles from './stats.module.css'

// Per request: the numbers change all day, and every link is private.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'إحصائيات جولاتك',
    robots: { index: false, follow: false },
    referrer: 'no-referrer',
}

const n = (x: number) => x.toLocaleString('ar-EG')
const dayLabel = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('ar-EG', { day: 'numeric', month: 'short' })

export default async function StatsPage({ params }: { params: Promise<{ token: string }> }) {
    const { token } = await params
    const pool = db()
    if (!pool || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) notFound()
    const h = await headers()
    const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000'
    const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https')
    const stats = await statsForToken(pool, token, `${proto}://${host}`)
    if (!stats) notFound()

    const sum = (k: 'views30' | 'clicks30' | 'views' | 'clicks') => stats.tours.reduce((s, t) => s + t[k], 0)
    const popups30 = stats.tours.reduce((s, t) => s + t.popups.reduce((a, p) => a + p.count, 0), 0)
    const peak = Math.max(1, ...stats.daily.map((d) => d.views))

    return (
        <main className={styles.page}>
            <header className={styles.head}>
                <Link href="/" className={styles.brand}>
                    <Image src={logo} alt="GateVerse" width={52} height={34} priority />
                </Link>
                <div>
                    <p className={styles.eyebrow}>إحصائيات جولاتك</p>
                    <h1>{stats.name}</h1>
                    <LiveRefresh seconds={15} />
                </div>
            </header>

            <section className={styles.kpis} aria-label="آخر 30 يوم">
                <div className={styles.kpi}>
                    <span>مشاهدات (آخر 30 يوم)</span>
                    <strong>{n(sum('views30'))}</strong>
                    <small>من الأول: {n(sum('views'))}</small>
                </div>
                <div className={styles.kpi}>
                    <span>ناس كلموك من الجولة</span>
                    <strong className={styles.ok}>{n(sum('clicks30'))}</strong>
                    <small>من الأول: {n(sum('clicks'))}</small>
                </div>
                <div className={styles.kpi}>
                    <span>فتحوا البوب أب</span>
                    <strong>{n(popups30)}</strong>
                    <small>من الأول</small>
                </div>
            </section>

            <section className={styles.card} aria-label="المشاهدات يوم بيوم">
                <h2>المشاهدات يوم بيوم</h2>
                <div className={styles.chart} role="img" aria-label={`أعلى يوم ${n(peak)} مشاهدة`}>
                    {stats.daily.map((d) => (
                        <div key={d.day} className={styles.col} title={`${dayLabel(d.day)}: ${n(d.views)} مشاهدة، ${n(d.clicks)} ضغطة`}>
                            <div className={styles.bar} style={{ height: `${Math.max(2, (d.views / peak) * 100)}%` }} />
                        </div>
                    ))}
                </div>
                <div className={styles.axis}>
                    <span>{dayLabel(stats.daily[0].day)}</span>
                    <span>النهارده</span>
                </div>
            </section>

            {stats.tours.length === 0 && <p className={styles.empty}>مفيش جولات متسجلة لسه.</p>}

            {stats.tours.map((t) => (
                <section key={t.slug} className={styles.card}>
                    <div className={styles.tourHead}>
                        <h2>{t.name}</h2>
                        <a href={`/tour/${t.slug}`} target="_blank" rel="noopener noreferrer" className={styles.open}>
                            افتح الجولة ↗
                        </a>
                    </div>
                    {!t.active && <p className={styles.off}>الجولة دي متوقفة حاليًا.</p>}
                    <div className={styles.row}>
                        <div><span>مشاهدات 30 يوم</span><strong>{n(t.views30)}</strong></div>
                        <div><span>ضغطات 30 يوم</span><strong className={styles.ok}>{n(t.clicks30)}</strong></div>
                        <div><span>مشاهدات من الأول</span><strong>{n(t.views)}</strong></div>
                    </div>

                    {t.clicks > 0 && (
                        <>
                            <h3>الناس ضغطت على إيه</h3>
                            <ul className={styles.kinds}>
                                {LINK_KINDS.filter((k) => t.byKind[k]).map((k) => (
                                    <li key={k}>
                                        <span className={styles.dot} style={{ background: LINK_COLOR[k] }}>
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff" aria-hidden><path d={LINK_ICON[k]} /></svg>
                                        </span>
                                        {LINK_LABEL[k]}
                                        <b>{n(t.byKind[k] ?? 0)}</b>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {t.popups.length > 0 && (
                        <>
                            <h3>أكتر بوب أب اتفتح</h3>
                            <ul className={styles.popups}>
                                {t.popups.slice(0, 8).map((p) => (
                                    <li key={p.id}>
                                        <span>{p.title}</span>
                                        <b>{n(p.count)}</b>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </section>
            ))}

            <footer className={styles.foot}>
                الأرقام بتتحدث تلقائي. بنعد المشاهدات والضغطات بس، ومش بنسجل أي بيانات عن الزوار.
                <br />
                <a href="https://wa.me/201113232886" target="_blank" rel="noopener noreferrer">GateVerse — كلمنا على واتساب</a>
            </footer>
        </main>
    )
}
