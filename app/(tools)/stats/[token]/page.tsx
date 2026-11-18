import type { Metadata } from 'next'
import Image from 'next/image'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import logo from '@/public/images/logo-sm.png'
import { db } from '@/lib/db'
import { LINK_COLOR, LINK_ICON, LINK_KINDS, LINK_LABEL } from '@/lib/tourLinks'
import { statsForToken, type Day, type TourStat } from '@/lib/tourStats'

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
const popups30 = (t: TourStat) => t.popups.reduce((a, p) => a + p.count30, 0)
const popupsAll = (t: TourStat) => t.popups.reduce((a, p) => a + p.count, 0)

export default async function StatsPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ tour?: string }> }) {
    const [{ token }, { tour }] = await Promise.all([params, searchParams])
    const pool = db()
    if (!pool || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) notFound()
    const h = await headers()
    const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000'
    const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https')
    const stats = await statsForToken(pool, token, `${proto}://${host}`)
    if (!stats) notFound()

    // One tour: always its own detail. Several: all of them, or the one picked in the tabs.
    const selected = stats.tours.length === 1 ? stats.tours[0] : stats.tours.find((t) => t.slug === tour)
    const base = `/stats/${token}`
    const sum = (k: 'views30' | 'clicks30' | 'views' | 'clicks') => stats.tours.reduce((s, t) => s + t[k], 0)

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

            {stats.tours.length > 1 && (
                <nav className={styles.tabs} aria-label="اختار الجولة">
                    <Link href={base} className={selected ? styles.tab : `${styles.tab} ${styles.tabOn}`} aria-current={selected ? undefined : 'page'} scroll={false}>
                        كل الجولات <b>{n(sum('views30'))}</b>
                    </Link>
                    {stats.tours.map((t) => (
                        <Link
                            key={t.slug}
                            href={`${base}?tour=${t.slug}`}
                            className={selected?.slug === t.slug ? `${styles.tab} ${styles.tabOn}` : styles.tab}
                            aria-current={selected?.slug === t.slug ? 'page' : undefined}
                            scroll={false}
                        >
                            {t.name} <b>{n(t.views30)}</b>
                        </Link>
                    ))}
                </nav>
            )}

            {stats.tours.length === 0 && <p className={styles.empty}>مفيش جولات متسجلة لسه.</p>}

            {selected ? (
                <TourDetail t={selected} />
            ) : (
                stats.tours.length > 0 && (
                    <>
                        <Kpis
                            views30={sum('views30')}
                            views={sum('views')}
                            clicks30={sum('clicks30')}
                            clicks={sum('clicks')}
                            popups30={stats.tours.reduce((s, t) => s + popups30(t), 0)}
                            popups={stats.tours.reduce((s, t) => s + popupsAll(t), 0)}
                        />
                        <Chart daily={stats.daily} title="المشاهدات يوم بيوم (كل الجولات)" />
                        <section className={styles.card}>
                            <h2>كل جولة لوحدها</h2>
                            <ul className={styles.tourList}>
                                {[...stats.tours]
                                    .sort((a, b) => b.views30 - a.views30)
                                    .map((t) => (
                                        <li key={t.slug}>
                                            <Link href={`${base}?tour=${t.slug}`} scroll={false}>
                                                <span className={styles.tourName}>
                                                    {t.name}
                                                    {!t.active && <em className={styles.off}> · متوقفة</em>}
                                                </span>
                                                <span>👁 {n(t.views30)}</span>
                                                <span className={styles.ok}>👆 {n(t.clicks30)}</span>
                                                <span className={styles.more}>التفاصيل ←</span>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                            <p className={styles.note}>الأرقام لآخر 30 يوم. اضغط على أي جولة تشوف تفاصيلها.</p>
                        </section>
                    </>
                )
            )}

            <footer className={styles.foot}>
                الأرقام بتتحدث تلقائي. بنعد المشاهدات والضغطات بس، ومش بنسجل أي بيانات عن الزوار.
                <br />
                <a href="https://wa.me/201113232886" target="_blank" rel="noopener noreferrer">GateVerse — كلمنا على واتساب</a>
            </footer>
        </main>
    )
}

function Kpis({ views30, views, clicks30, clicks, popups30, popups }: Record<'views30' | 'views' | 'clicks30' | 'clicks' | 'popups30' | 'popups', number>) {
    return (
        <section className={styles.kpis} aria-label="آخر 30 يوم">
            <div className={styles.kpi}>
                <span>مشاهدات (آخر 30 يوم)</span>
                <strong>{n(views30)}</strong>
                <small>من الأول: {n(views)}</small>
            </div>
            <div className={styles.kpi}>
                <span>ناس كلموك من الجولة</span>
                <strong className={styles.ok}>{n(clicks30)}</strong>
                <small>من الأول: {n(clicks)}</small>
            </div>
            <div className={styles.kpi}>
                <span>فتحوا البوب أب</span>
                <strong>{n(popups30)}</strong>
                <small>من الأول: {n(popups)}</small>
            </div>
        </section>
    )
}

function Chart({ daily, title }: { daily: Day[]; title: string }) {
    const peak = Math.max(1, ...daily.map((d) => d.views))
    return (
        <section className={styles.card} aria-label={title}>
            <h2>{title}</h2>
            <div className={styles.chart} role="img" aria-label={`أعلى يوم ${n(peak)} مشاهدة`}>
                {daily.map((d) => (
                    <div key={d.day} className={styles.col} title={`${dayLabel(d.day)}: ${n(d.views)} مشاهدة، ${n(d.clicks)} ضغطة`}>
                        <div className={styles.bar} style={{ height: `${Math.max(2, (d.views / peak) * 100)}%` }} />
                    </div>
                ))}
            </div>
            <div className={styles.axis}>
                <span>{dayLabel(daily[0].day)}</span>
                <span>النهارده</span>
            </div>
        </section>
    )
}

function TourDetail({ t }: { t: TourStat }) {
    const kinds = LINK_KINDS.filter((k) => t.byKind[k])
    return (
        <>
            <section className={styles.card}>
                <div className={styles.tourHead}>
                    <h2>{t.name}</h2>
                    <a href={`/tour/${t.slug}`} target="_blank" rel="noopener noreferrer" className={styles.open}>
                        افتح الجولة ↗
                    </a>
                </div>
                {!t.active && <p className={styles.off}>الجولة دي متوقفة حاليًا.</p>}
                <Kpis views30={t.views30} views={t.views} clicks30={t.clicks30} clicks={t.clicks} popups30={popups30(t)} popups={popupsAll(t)} />
                {t.views > 0 && <p className={styles.note}>من كل ١٠٠ مشاهدة، {n(Math.round((t.clicks / t.views) * 100))} كلموك من الجولة.</p>}
            </section>

            <Chart daily={t.daily} title="المشاهدات يوم بيوم" />

            <section className={styles.card}>
                <h2>الناس ضغطت على إيه</h2>
                {kinds.length === 0 ? (
                    <p className={styles.note}>لسه محدش ضغط على أزرار التواصل في الجولة دي.</p>
                ) : (
                    <>
                        <ul className={styles.kinds}>
                            {kinds.map((k) => (
                                <li key={k}>
                                    <span className={styles.dot} style={{ background: LINK_COLOR[k] }}>
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff" aria-hidden><path d={LINK_ICON[k]} /></svg>
                                    </span>
                                    {LINK_LABEL[k]}
                                    <b>
                                        {n(t.byKind30[k] ?? 0)} <small>/ {n(t.byKind[k] ?? 0)}</small>
                                    </b>
                                </li>
                            ))}
                        </ul>
                        <p className={styles.note}>آخر 30 يوم / من الأول</p>
                    </>
                )}
            </section>

            <section className={styles.card}>
                <h2>البوب أب اللي اتفتح</h2>
                {t.popups.length === 0 ? (
                    <p className={styles.note}>لسه محدش فتح أي بوب أب في الجولة دي.</p>
                ) : (
                    <>
                        <ul className={styles.popups}>
                            {t.popups.map((p) => (
                                <li key={p.id}>
                                    <span>{p.title}</span>
                                    <b>
                                        {n(p.count30)} <small>/ {n(p.count)}</small>
                                    </b>
                                </li>
                            ))}
                        </ul>
                        <p className={styles.note}>آخر 30 يوم / من الأول</p>
                    </>
                )}
            </section>
        </>
    )
}
