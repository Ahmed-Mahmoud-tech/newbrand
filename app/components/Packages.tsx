import { WHATSAPP_NUMBER } from '@/lib/site'
import { ADDONS, CUSTOM_QUOTE_FROM, HOSTING_MONTHLY, HOSTING_YEARLY, PACKAGES, type Package } from '@/lib/packages'

const fmt = (n: number) => n.toLocaleString('ar-EG')

function waLink(lines: string[]): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

function bookUrl(p: Package): string {
    return waLink([
        '🏠 طلب حجز جولة افتراضية — GateVerse',
        '',
        `📦 الباقة: ${p.name} (حتى ${p.upTo} م²)`,
        `💰 السعر: ${p.price.toLocaleString()} ج.م`,
        '',
        'نوع المكان: ',
        'المنطقة: ',
        '',
        'أرجو التواصل لتأكيد الموعد.',
    ])
}

/** Each package's lines: [text, included]. */
function features(p: Package): [string, boolean][] {
    return [
        ['جولة 3D كاملة 360° للمكان', true],
        ['رابط مباشر للمشاركة + كود تضمين للموقع', true],
        // [p.photos ? `${fmt(p.photos)} صورة احترافية` : 'صور احترافية', p.photos > 0],
        [`استضافة مجانية ${p.hostingMonths === 1 ? 'شهر' : `${fmt(p.hostingMonths)} شهور`}`, true],
        ['نقاط معلومات داخل الجولة', p.infoPoints > 0],
        ['أولوية في التنفيذ', p.priority],
    ]
}

export default function Packages() {
    return (
        <>
            <div className="pkg-grid">
                {PACKAGES.map((p) => (
                    <article key={p.id} className={`pkg-card bracketed${p.featured ? ' featured' : ''}`}>
                        {p.featured && <span className="pkg-badge">الأكثر طلبًا</span>}
                        <h3>{p.name}</h3>
                        <div className="pkg-area">حتى {fmt(p.upTo)} م²</div>
                        <div className="pkg-price">
                            {fmt(p.price)} <span>ج.م</span>
                        </div>
                        <p className="pkg-tagline">{p.tagline}</p>
                        <ul className="pkg-features">
                            {features(p).map(([text, on]) => (
                                <li key={text} className={on ? '' : 'off'}>
                                    <span aria-hidden="true">{on ? '✓' : '✕'}</span>
                                    {on ? text : <s>{text}</s>}
                                    {!on && <span className="sr-only"> (غير متضمن)</span>}
                                </li>
                            ))}
                        </ul>
                        <a href={bookUrl(p)} className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`} target="_blank" rel="noopener noreferrer">
                            احجز الباقة
                        </a>
                    </article>
                ))}
            </div>

            <p className="pkg-note">
                بعد فترة الاستضافة المجانية، الجولة بتفضل شغالة بـ <strong>{fmt(HOSTING_MONTHLY)} ج.م شهريًا</strong> أو <strong>{fmt(HOSTING_YEARLY)} ج.م سنويًا</strong>. المكان أكبر من {fmt(CUSTOM_QUOTE_FROM)} م²؟{' '}
                <a href={waLink(['مرحبًا GateVerse، عندي مكان مساحته أكبر من 450 م² وعايز عرض سعر.', '', 'نوع المكان: ', 'المساحة التقريبية: '])} target="_blank" rel="noopener noreferrer">
                    كلّمنا على سعر خاص
                </a>
            </p>

            <div className="addons bracketed">
                <h3 id="addons-heading">خدمات إضافية</h3>
                <ul aria-labelledby="addons-heading">
                    {ADDONS.map((a) => (
                        <li key={a.name}>
                            <div>
                                <strong>{a.name}</strong>
                                {a.note && <span>{a.note}</span>}
                            </div>
                            <b>{a.price}</b>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
