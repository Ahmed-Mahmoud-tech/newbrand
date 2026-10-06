'use client'
import { useMemo, useState } from 'react'

import { WHATSAPP_NUMBER } from '@/lib/site'
import {
  BUNDLES,
  bundleHosting,
  GIFTS,
  HOSTING,
  KITCHEN_PRICE,
  KITCHEN_SAME_DAY_PRICE,
  MIN_SHOOT,
  quote,
  SAME_DAY_PERCENT,
  SEGMENT_LABEL,
  tierBreakdown,
  TIERS,
  type Plan,
  type Segment,
} from '@/lib/pricing'

const TABS: Segment[] = ['real_estate', 'commercial', 'hotel', 'kitchen']

/** What each tab's size field means and starts at. */
const SIZE: Record<Segment, { label: string; unit: string; start: string; hint: string }> = {
  real_estate: { label: 'مساحة العقار (م²)', unit: 'م²', start: '150', hint: 'شقة، فيلا، دوبلكس' },
  commercial: { label: 'مساحة المكان (م²)', unit: 'م²', start: '300', hint: 'قاعة، جيم، سبا، معرض، كافيه، كيدز إيريا' },
  hotel: { label: 'مساحة الأماكن اللي هتتصوّر (م²)', unit: 'م²', start: '1500', hint: 'اللوبي، المطعم، القاعات، وأوضة من كل نوع' },
  kitchen: { label: 'عدد المطابخ', unit: 'مطبخ', start: '1', hint: `أول مطبخ ${KITCHEN_PRICE} ج.م، وكل مطبخ زيادة في نفس اليوم خصم ${SAME_DAY_PERCENT}%` },
}

/** "باقة 10 جولات + 2 جولة" — the bundles the calculator picked for this many kitchens. */
function bundleText(bundles: { tours: number; count: number }[], fmt: (n: number) => string): string {
  return bundles
    .map((b) => (b.tours === 1 ? `${fmt(b.count)} ${b.count === 1 ? 'جولة' : 'جولات'} × ${fmt(HOSTING.kitchenYearly)}` : `${b.count > 1 ? `${fmt(b.count)} × ` : ''}باقة ${fmt(b.tours)} جولات`))
    .join(' + ')
}

export default function PriceCalculator() {
  const [segment, setSegment] = useState<Segment>('real_estate')
  const [sizes, setSizes] = useState<Record<Segment, string>>({ real_estate: '150', commercial: '300', hotel: '1500', kitchen: '1' })
  const [plan, setPlan] = useState<Plan>('monthly')

  const size = Math.max(0, parseInt(sizes[segment]) || 0)
  const r = useMemo(() => quote(segment, size, plan), [segment, size, plan])
  const fmt = (n: number) => n.toLocaleString('ar-EG')
  const s = SIZE[segment]
  const bands = segment === 'kitchen' ? [] : tierBreakdown(size, TIERS[segment])

  const hostingLine = r.hostingIncluded
    ? `أول سنة استضافة داخلة في السعر، والتجديد ${r.renewal.toLocaleString()} ج.م/سنة`
    : `الاستضافة: ${r.hostingNow.toLocaleString()} ج.م/${r.renewalUnit}`

  const waUrl = useMemo(() => {
    if (size === 0) return `https://wa.me/${WHATSAPP_NUMBER}`
    const msg = [
      '🏠 طلب حجز جولة افتراضية — GateVerse',
      '',
      // The CRM reads these lines back (clientMangment/lib/calculator-message.ts): keep the labels.
      `🏷 المجال: ${SEGMENT_LABEL[segment]}`,
      segment === 'kitchen' ? `🍳 عدد المطابخ: ${size}` : `📐 المساحة: ${size} م²`,
      ...(segment === 'real_estate' ? [`📅 خطة الدفع: ${plan === 'annual' ? 'سنوي (خصم 10%)' : 'شهري'}`] : []),
      '',
      `📸 تكلفة التصوير (مرة واحدة): ${r.shooting.toLocaleString()} ج.م`,
      `📡 ${hostingLine}`,
      '',
      `💰 الإجمالي الأولي: ${r.total.toLocaleString()} ج.م`,
      '',
      'أرجو التواصل لتأكيد الموعد.',
    ].join('\n')
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }, [segment, size, plan, r, hostingLine])

  return (
    <div className="calc-panel bracketed">
      {/* ── Inputs ── */}
      <div className="calc-inputs">
        <span className="field-label">مجالك</span>
        <div className="type-toggle seg-tabs" role="tablist" aria-label="المجال">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={segment === t} className={segment === t ? 'active' : ''} onClick={() => setSegment(t)}>
              {SEGMENT_LABEL[t]}
            </button>
          ))}
        </div>

        {segment === 'real_estate' && (
          <>
            <span className="field-label">خطة الاستضافة</span>
            <div className="type-toggle" role="group" aria-label="خطة الدفع">
              <button className={plan === 'monthly' ? 'active' : ''} onClick={() => setPlan('monthly')} aria-pressed={plan === 'monthly'}>
                شهري
              </button>
              <button className={plan === 'annual' ? 'active' : ''} onClick={() => setPlan('annual')} aria-pressed={plan === 'annual'}>
                سنوي — خصم 10%
              </button>
            </div>
          </>
        )}

        <span className="field-label">{s.label}</span>
        <div className="area-input-row">
          <input
            type="number"
            id="area-input"
            value={sizes[segment]}
            min={1}
            onChange={(e) => setSizes({ ...sizes, [segment]: e.target.value })}
            aria-label={s.label}
            placeholder={`مثال: ${s.start}`}
          />
          <span>{s.unit}</span>
        </div>
        <p className="calc-hint">{s.hint}</p>

        {size > 0 && segment !== 'kitchen' && (
          <div className="tier-breakdown" aria-label="تفاصيل حساب التصوير">
            <div className="tb-title">سعر المتر بيقل كل ما المساحة تكبر</div>
            {bands.map((b) => (
              <div key={b.from} className="tb-row">
                <span>
                  {fmt(b.from)}–{fmt(b.to)} م² × {fmt(b.rate)} ج.م
                </span>
                <span>{fmt(b.cost)} ج.م</span>
              </div>
            ))}
            {r.belowMinimum && (
              <div className="tb-row discount">
                <span>الحد الأدنى للتصوير</span>
                <span>{fmt(MIN_SHOOT[segment])} ج.م</span>
              </div>
            )}
            <div className="tb-row total">
              <span>التصوير</span>
              <span>{fmt(r.shooting)} ج.م</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Results ── */}
      <div className="calc-result">
        {size === 0 ? (
          <p className="calc-empty">{segment === 'kitchen' ? 'أدخل عدد المطابخ لحساب التكلفة' : 'أدخل المساحة لحساب التكلفة'}</p>
        ) : (
          <>
            <div className="result-block">
              <div className="result-label">تكلفة التصوير (مرة واحدة)</div>
              <div className="result-formula mono">
                {segment === 'kitchen'
                  ? size > 1
                    ? `${fmt(KITCHEN_PRICE)} + ${fmt(size - 1)} × ${fmt(KITCHEN_SAME_DAY_PRICE)}`
                    : `${fmt(KITCHEN_PRICE)} ج.م للمطبخ`
                  : `${fmt(size)} م² بالشرائح`}
              </div>
              <div className="result-value sand">
                {fmt(r.shooting)} <span>ج.م</span>
              </div>
            </div>

            <div className="result-block">
              <div className="result-label">الاستضافة</div>
              {r.hostingIncluded ? (
                <>
                  <div className="result-formula mono">أول سنة مجانًا مع التصوير</div>
                  <div className="result-value cyan">
                    {fmt(0)} <span>ج.م الآن</span>
                  </div>
                  <div className="result-note">
                    التجديد بعد سنة: {fmt(r.renewal)} ج.م/سنة
                    {segment === 'hotel' ? ` (${HOSTING.hotelPercentYearly}% من التصوير)` : ''}
                  </div>
                </>
              ) : (
                <>
                  <div className="result-formula mono">
                    {segment === 'kitchen'
                      ? bundleText(bundleHosting('kitchen', size).bundles, fmt)
                      : plan === 'annual'
                        ? `${fmt(HOSTING.realEstateMonthly)} × 12 × 90%`
                        : `${fmt(HOSTING.realEstateMonthly)} ج.م للجولة`}
                  </div>
                  <div className="result-value cyan">
                    {fmt(r.hostingNow)} <span>ج.م/{r.renewalUnit}</span>
                  </div>
                </>
              )}
              {(segment === 'real_estate' || segment === 'kitchen') && (
                <div className="result-note">
                  باقات الاستضافة:{' '}
                  {BUNDLES[segment]
                    .map((b) => `${b.tours === 1 ? 'جولة' : `${fmt(b.tours)} جولات`} ${fmt(b.price)} ج.م`)
                    .join(' · ')}
                  {segment === 'real_estate' ? ' في الشهر. الاشتراك بينتقل لوحدة جديدة لما الوحدة تتباع أو تتأجر' : ' في السنة'}
                </div>
              )}
              {GIFTS[segment] && <div className="result-note">🎁 {GIFTS[segment]}</div>}
            </div>

            <div className="result-divider" />

            <div className="result-block total-block">
              <div className="result-label">الإجمالي الأولي</div>
              <div className="result-formula mono">{r.hostingIncluded ? 'تصوير + سنة استضافة' : 'تصوير + أول فترة استضافة'}</div>
              <div className="result-value grand">
                {fmt(r.total)} <span>ج.م</span>
              </div>
            </div>

            <a href={waUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              احجز بهذا السعر
            </a>
          </>
        )}
      </div>
    </div>
  )
}
