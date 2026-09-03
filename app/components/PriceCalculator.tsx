'use client'
import { useState, useMemo } from 'react'

type Plan = 'monthly' | 'annual'

function calcHostingMonthly(area: number): number {
  if (area <= 0) return 0
  return Math.ceil(area / 200) * 200
}

function calcResults(area: number, plan: Plan) {
  const shooting = Math.max(area * 20, area > 0 ? 2000 : 0)
  const monthly = calcHostingMonthly(area)
  const annualFull = monthly * 12
  const annualDiscount = Math.round(annualFull * 0.1)
  const annualFinal = annualFull - annualDiscount
  const hosting = plan === 'annual' ? annualFinal : monthly
  const total = shooting + hosting
  return { shooting, monthly, annualFull, annualDiscount, annualFinal, hosting, total }
}

export default function PriceCalculator() {
  const [area, setArea] = useState<string>('150')
  const [plan, setPlan] = useState<Plan>('monthly')

  const sqm = Math.max(0, parseInt(area) || 0)
  const r = useMemo(() => calcResults(sqm, plan), [sqm, plan])

  const fmt = (n: number) => n.toLocaleString('ar-EG')

  const waUrl = useMemo(() => {
    if (sqm === 0) return 'https://wa.me/201113232886'
    const planLabel = plan === 'annual' ? `سنوي (خصم 10%)` : 'شهري'
    const hostingLine =
      plan === 'annual'
        ? `الاستضافة السنوية: ${r.annualFinal.toLocaleString()} ج.م/سنة (بعد خصم ${r.annualDiscount.toLocaleString()} ج.م)`
        : `الاستضافة الشهرية: ${r.monthly.toLocaleString()} ج.م/شهر`
    const msg = [
      '🏠 طلب حجز جولة افتراضية — GateVerse',
      '',
      `📐 المساحة: ${sqm} م²`,
      `📅 خطة الدفع: ${planLabel}`,
      '',
      `📸 تكلفة التصوير (مرة واحدة): ${r.shooting.toLocaleString()} ج.م`,
      `📡 ${hostingLine}`,
      '',
      `💰 الإجمالي الأولي: ${r.total.toLocaleString()} ج.م`,
      '',
      'أرجو التواصل لتأكيد الموعد.',
    ].join('\n')
    return `https://wa.me/201113232886?text=${encodeURIComponent(msg)}`
  }, [sqm, plan, r])

  const hostingTiers = useMemo(() => {
    if (sqm <= 0) return []
    const tiers: { label: string; cost: number }[] = []
    let remaining = sqm
    let tier = 1
    while (remaining > 0) {
      const chunk = Math.min(remaining, 200)
      const from = (tier - 1) * 200
      const to = from + chunk
      tiers.push({ label: `${from + 1}–${to} م²`, cost: 200 })
      remaining -= chunk
      tier++
    }
    return tiers
  }, [sqm])

  return (
    <div className="calc-panel bracketed">
      {/* ── Inputs ── */}
      <div className="calc-inputs">
        <span className="field-label">خطة الاستضافة</span>
        <div className="type-toggle" role="group" aria-label="خطة الدفع">
          <button
            className={plan === 'monthly' ? 'active' : ''}
            onClick={() => setPlan('monthly')}
            aria-pressed={plan === 'monthly'}
          >
            شهري
          </button>
          <button
            className={plan === 'annual' ? 'active' : ''}
            onClick={() => setPlan('annual')}
            aria-pressed={plan === 'annual'}
          >
            سنوي — خصم 10%
          </button>
        </div>

        <span className="field-label">مساحة العقار (م²)</span>
        <div className="area-input-row">
          <input
            type="number"
            id="area-input"
            value={area}
            min={1}
            onChange={(e) => setArea(e.target.value)}
            aria-label="مساحة العقار بالمتر المربع"
            placeholder="مثال: 150"
          />
          <span>م²</span>
        </div>

        {sqm > 0 && (
          <div className="tier-breakdown" aria-label="تفاصيل حساب الاستضافة">
            <div className="tb-title">تفصيل الاستضافة الشهرية</div>
            {hostingTiers.map((t) => (
              <div key={t.label} className="tb-row">
                <span>{t.label}</span>
                <span>200 ج.م</span>
              </div>
            ))}
            <div className="tb-row total">
              <span>إجمالي شهري</span>
              <span>{fmt(r.monthly)} ج.م/شهر</span>
            </div>
            {plan === 'annual' && (
              <>
                <div className="tb-row">
                  <span>× 12 شهر</span>
                  <span>{fmt(r.annualFull)} ج.م</span>
                </div>
                <div className="tb-row discount">
                  <span>خصم 10%</span>
                  <span>− {fmt(r.annualDiscount)} ج.م</span>
                </div>
                <div className="tb-row total">
                  <span>إجمالي الاستضافة السنوية</span>
                  <span>{fmt(r.annualFinal)} ج.م/سنة</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ── Results ── */}
      <div className="calc-result">
        {sqm === 0 ? (
          <p className="calc-empty">أدخل مساحة العقار لحساب التكلفة</p>
        ) : (
          <>
            <div className="result-block">
              <div className="result-label">تكلفة التصوير (مرة واحدة)</div>
              <div className="result-formula mono">
                {sqm * 20 < 2000
                  ? `${sqm} م² × 20 ج.م = ${fmt(sqm * 20)} ج.م → حد أدنى`
                  : `${sqm} م² × 20 ج.م`}
              </div>
              <div className="result-value sand">{fmt(r.shooting)} <span>ج.م</span></div>
            </div>

            <div className="result-block">
              <div className="result-label">
                تكلفة الاستضافة ({plan === 'annual' ? 'سنوي — خصم 10%' : 'شهري'})
              </div>
              <div className="result-formula mono">
                {plan === 'annual'
                  ? `${fmt(r.monthly)} × 12 × 90%`
                  : `${Math.ceil(sqm / 200)} × 200 ج.م`}
              </div>
              <div className="result-value cyan">
                {fmt(r.hosting)}{' '}
                <span>{plan === 'annual' ? 'ج.م/سنة' : 'ج.م/شهر'}</span>
              </div>
            </div>

            <div className="result-divider" />

            <div className="result-block total-block">
              <div className="result-label">الإجمالي الأولي</div>
              <div className="result-formula mono">تصوير + استضافة</div>
              <div className="result-value grand">{fmt(r.total)} <span>ج.م</span></div>
              {plan === 'annual' && (
                <div className="result-note">يشمل الدفع المقدم للاستضافة السنوية</div>
              )}
            </div>

            <a
              href={waUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              احجز بهذا السعر
            </a>
          </>
        )}
      </div>
    </div>
  )
}
