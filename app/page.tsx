import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SAME_AS, SITE_URL, TELEPHONE, WHATSAPP_URL } from '@/lib/site'
import logo from '@/public/images/logo-sm.png'
import { ADDONS, HOSTING_MONTHLY, PACKAGES, PORTFOLIO, SECTORS } from '@/lib/packages'
import NavToggle from './components/NavToggle'
import Packages from './components/Packages'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'

export const metadata: Metadata = {
    alternates: { canonical: '/' },
}

/* ─── JSON-LD schemas ───────────────────────────────────────────────────── */
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#business`,
    name: 'GateVerse للجولات الافتراضية',
    alternateName: 'GateVerse Virtual Tours',
    description:
        'GateVerse تُنتج جولات افتراضية ثلاثية الأبعاد للعقارات، قاعات المناسبات، الكافيهات والمطاعم، الجيم، الفنادق، السبا، الكيدز إيريا ومساحات العمل — عميلك يعاين كل زاوية من الموبايل قبل الزيارة الفعلية.',
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.png`,
    logo: `${SITE_URL}/images/icon-512.png`,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    telephone: TELEPHONE,
    email: 'contact@gateverse.net',
    priceRange: `${PACKAGES[0].price}–${PACKAGES[PACKAGES.length - 1].price} EGP`,
    currenciesAccepted: 'EGP, USD',
    paymentAccepted: 'Cash, Bank Transfer, InstaPay',
    address: {
        '@type': 'PostalAddress',
        // addressLocality: 'الإسكندرية',
        // addressRegion: 'الإسكندرية',
        addressCountry: 'EG',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.2001,
        longitude: 29.9187,
    },
    areaServed: { '@type': 'City', sameAs: 'https://www.wikidata.org/wiki/Q87' },
    // areaServed: { '@type': 'City', name: 'الإسكندرية', sameAs: 'https://www.wikidata.org/wiki/Q87' },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Virtual Tour Services',
        itemListElement: [
            ...PACKAGES.map((p) => ({
                '@type': 'Offer',
                name: `${p.name} — جولة افتراضية 3D حتى ${p.upTo} م²`,
                price: String(p.price),
                priceCurrency: 'EGP',
                description: `جولة 3D كاملة 360° لمكان حتى ${p.upTo} م² مع رابط مشاركة وكود تضمين${p.photos ? ` و${p.photos} صورة احترافية` : ''}، واستضافة مجانية ${p.hostingMonths} ${p.hostingMonths === 1 ? 'شهر' : 'شهور'} ثم ${HOSTING_MONTHLY} ج.م شهريًا.`,
                availability: 'https://schema.org/InStock',
            })),
            {
                '@type': 'Offer',
                name: 'استضافة الجولة الشهرية',
                priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: String(HOSTING_MONTHLY),
                    priceCurrency: 'EGP',
                    billingDuration: 'P1M',
                    unitText: 'للجولة',
                },
            },
        ],
    },
    knowsAbout: ['3D Virtual Tours', 'Real Estate Photography', 'Event Venues', 'Restaurants', 'Gyms', 'Hotels', 'Virtual Reality', 'Digital Twin', 'Immersive Tours'],
    sameAs: SAME_AS,
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        // {
        //     '@type': 'Question',
        //     name: 'ما هي تكلفة الجولة الافتراضية مع GateVerse؟',
        //     acceptedAnswer: {
        //         '@type': 'Answer',
        //         text: 'تبدأ تكلفة الاستضافة والخدمة من $30 شهريًا (أو ما يعادلها بالجنيه المصري عبر InstaPay/تحويل بنكي) لأي عقار بغض النظر عن مساحته، مع خصم خاص عند الاشتراك السنوي ($300/سنوياً).',
        //     },
        // },
        // {
        //     '@type': 'Question',
        //     name: 'ما هي تكلفة الجولة الافتراضية مع GateVerse؟',
        //     acceptedAnswer: {
        //         '@type': 'Answer',
        //         text: `السعر بالباقة حسب مساحة المكان: ${PACKAGES.map((p) => `حتى ${p.upTo} م² بـ ${p.price.toLocaleString('en-US')} ج.م`).join('، ')}. كل باقة فيها استضافة مجانية من شهر لـ 4 شهور، وبعدها ${HOSTING_MONTHLY} ج.م شهريًا. الأماكن الأكبر من 450 م² ليها سعر خاص. وفيه خدمات إضافية: ${ADDONS.map((a) => `${a.name} (${a.price})`).join('، ')}.`,
        //     },
        // },
        {
            '@type': 'Question',
            name: 'هل الجولات الافتراضية للعقارات بس؟',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'لا، بنصوّر أي مكان العميل محتاج يشوفه قبل ما ييجي: شقق وفيلل، قاعات مناسبات، كافيهات ومطاعم، جيم، فنادق، سبا، كيدز إيريا ومساحات عمل. ونقدر نضيف نقاط تفاعلية جوه الجولة للمنيو أو الأسعار أو تفاصيل الأجهزة.',
            },
        },
        {
            '@type': 'Question',
            name: 'كم يستغرق إنتاج وتسليم الجولة الافتراضية؟',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'يتم تسليم الرابط النهائي للجولة التفاعلية جاهزاً للنشر خلال 48 ساعة فقط من انتهاء جلسة التصوير.',
            },
        },
        {
            '@type': 'Question',
            name: 'ما هي التقنية المستخدمة في تصوير الجولات؟',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'نستخدم كاميرات ماسح ضوئي ومعدات متخصصة  لإنتاج المخططات ثلاثية الأبعاد بأعلى دقة.',
            },
        },
        {
            '@type': 'Question',
            name: 'هل تعمل الجولة على الهواتف المحمولة والمواقع العقارية؟',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'نعم، تعمل الجولات بمرونة كاملة على جميع الأجهزة (موبايل، تابلت، كمبيوتر) بدون الحاجة لتحميل أي تطبيقات، ويمكن تضمينها بسهولة في موقعك أو إرسالها عبر WhatsApp.',
            },
        },
    ],
}

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'خطوات حجز وإنشاء جولة افتراضية لمكانك',
    description: 'حوّل أي عقار أو مكان تجاري إلى تجربة حضور رقمي ثلاثية الأبعاد: معاينة كاملة من أي مكان، قياسات تفاعلية، ورابط دائم للمشاركة.',
    totalTime: 'P2D',
    step: [
        {
            '@type': 'HowToStep',
            position: 1,
            name: 'الحجز والتقييم الأول',
            text: 'تواصل معنا عبر واتساب وزودنا بنوع المكان وموقعه ومساحته التقريبية لاختيار الباقة وتحديد الموعد المناسب.',
        },
        {
            '@type': 'HowToStep',
            position: 2,
            name: 'جلسة التصوير والمسح الميداني',
            text: 'يقوم فريقنا بزيارة المكان وإجراء المسح الضوئي الكامل للمساحة، وتستغرق الزيارة من 1 إلى 2 ساعة.',
        },
        {
            '@type': 'HowToStep',
            position: 3,
            name: 'المعالجة وإعداد النموذج',
            text: 'نقوم بمعالجة البيانات الضوئية، ضبط المخططات، وإضافة أدوات القياس التفاعلية.',
        },
        {
            '@type': 'HowToStep',
            position: 4,
            name: 'استلام الرابط والتضمين',
            text: 'تستلم رابطًا تفاعلياً دائماً مع كود Embed جاهز للمشاركة والنشر على وسائل التواصل وجوجل ماب وموقعك.',
        },
    ],
}

export default function HomePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <div className="grid-bg" aria-hidden="true" />

            {/* ── HEADER ── */}
            <header>
                <nav aria-label="القائمة الرئيسية">
                    <div className="logo">
                        {/* <div className="logo-mark" aria-hidden="true" />
                        <span>GateVerse</span> */}
                        <Link href="/" aria-label="GateVerse — الصفحة الرئيسية">
                            <Image src={logo} alt="GateVerse" width={100} priority />
                        </Link>
                    </div>
                    <div className="nav-links" role="list">
                        <a href="#benefits" role="listitem">لماذا GateVerse؟</a>
                        <a href="#sectors" role="listitem">المجالات</a>
                        <a href="#portfolio" role="listitem">أعمالنا</a>
                        <a href="#pricing" role="listitem">الباقات</a>
                        <a href="#process" role="listitem">كيف نعمل؟</a>
                        <a href="#faq" role="listitem">الأسئلة الشائعة</a>
                    </div>
                    <a href="#pricing" className="nav-cta">احجز معاينتك</a>
                    <NavToggle />
                </nav>
            </header>

            <main>
                {/* ── HERO ── */}
                <section className="hero" aria-labelledby="hero-heading">
                    <div className="wrap">
                        <div className="hero-grid">
                            <div>
                                <div className="eyebrow">جولات افتراضية ثلاثية الأبعاد — </div>
                                <h1 id="hero-heading">
                                    اعرض مكانك بتقنية 3D.. <span>وخلّي عميلك يدخله قبل ما ييجي</span>
                                </h1>
                                <p className="lead">
                                    GateVerse تحوّل الشقق والفيلل، قاعات المناسبات، الكافيهات والمطاعم، الجيم، الفنادق والسبا لجولات تفاعلية واقعية.
                                    عميلك يتجوّل في كل زاوية من موبايله قبل ما يحجز أو يشتري.
                                </p>
                                <div className="btn-row">
                                    <a href="#pricing" className="btn btn-primary">شوف الباقات</a>
                                    <a href="#portfolio" className="btn btn-ghost">استعرض نماذج حية</a>
                                </div>
                                <div className="hero-stats">
                                    <div><b>48h</b><span>سرعة التسليم</span></div>
                                    <div><b>360°</b><span>تغطية وشاملة</span></div>
                                    <div><b>100%</b><span>دقة القياسات</span></div>
                                </div>
                            </div>

                            <div className="scan-box" aria-hidden="true">
                                <svg viewBox="0 0 400 400" role="img" aria-label="رسم توضيحي للمسح 3D">
                                    <g stroke="#4FE0C8" strokeWidth="1.3" fill="none" opacity="0.9">
                                        <polygon points="200,60 340,140 340,300 200,380 60,300 60,140" opacity="0.5" />
                                        <polygon points="200,60 340,140 200,220 60,140" />
                                        <line x1="200" y1="220" x2="200" y2="380" />
                                        <line x1="340" y1="140" x2="340" y2="300" />
                                        <line x1="60" y1="140" x2="60" y2="300" />
                                    </g>
                                    {[
                                        { cx: 200, cy: 60, d: '0.1s' },
                                        { cx: 340, cy: 140, d: '0.6s' },
                                        { cx: 340, cy: 300, d: '1.1s' },
                                        { cx: 200, cy: 380, d: '1.6s' },
                                        { cx: 60, cy: 300, d: '2.1s' },
                                        { cx: 60, cy: 140, d: '2.6s' },
                                    ].map((p) => (
                                        <circle key={`${p.cx}-${p.cy}`} className="capture-dot" cx={p.cx} cy={p.cy} r="4" fill="#D9A24B" style={{ animationDelay: p.d }} />
                                    ))}
                                </svg>
                                <div className="scan-line" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── BENEFITS ── */}
                <section id="benefits" aria-labelledby="benefits-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">لماذا الجولات الافتراضية؟</div>
                            <h2 id="benefits-heading">تجربة أقرب ما يكون للواقع تسرّع قرار الحجز والشراء</h2>
                            {/* <p>العميل ينفق وقتاً أطول بـ 3 أضعاف في استكشاف العقار عبر الجولة الـ 3D مقارنة بالصور التقليدية.</p> */}
                        </div>
                        <div className="benefits-grid">
                            {[
                                {
                                    n: '٠١',
                                    h: 'عملاء جادين ووقت أقل',
                                    p: 'العميل بيعرف المكان وتفاصيله قبل ما ييجي، فاللي بيتصل أو بيزور بيكون جاهز يحجز أو يشتري، مش جاي يتفرّج.',
                                },
                                {
                                    n: '٠٢',
                                    h: 'سهولة المشاركة والتوافق',
                                    p: 'رابط تفاعلي واحد يعمل مباشرة عبر WhatsApp، صفحات التواصل، أو موقعك الإلكتروني بدون الحاجة لإنستال أي تطبيق.',
                                },
                                {
                                    n: '٠٣',
                                    h: 'إضافة نقاط اهتمام تفاعلية',
                                    p: 'تقدر تحط "نقطة تفاعلية" جوه الجولة؛ لما العميل يضغط عليها يظهرله: المنيو، أسعار الاشتراك، نوع الرخام، ماركة الأجهزة، أو فيديو تعريفي.',
                                },
                            ].map((b) => (
                                <article key={b.n} className="benefit-card bracketed">
                                    <span className="num">{b.n}</span>
                                    <h3>{b.h}</h3>
                                    <p>{b.p}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── SECTORS ── */}
                <section id="sectors" aria-labelledby="sectors-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">مش عقارات بس</div>
                            <h2 id="sectors-heading">أي مكان عميلك محتاج يشوفه قبل ما ييجي</h2>
                            <p>من الشقة لقاعة الأفراح، ومن الكافيه للفندق: الجولة بتبيع المكان وهو مقفول.</p>
                        </div>
                        <div className="sectors-grid">
                            {SECTORS.map((s) => (
                                <article key={s.name} className="sector-card bracketed">
                                    <span className="sector-icon" aria-hidden="true">{s.icon}</span>
                                    <h3>{s.name}</h3>
                                    <p>{s.p}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── PORTFOLIO ── */}
                <section id="portfolio" aria-labelledby="portfolio-heading" style={{ zIndex: 100, background: '#0b1622' }}>
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">مكانك بين اديك</div>
                            <h2 id="portfolio-heading">من شغلنا: ادخل الجولة بنفسك</h2>
                            <p>{PORTFOLIO.length} أماكن صورناها: اتفرّج على الفيديوهات، أو ادخل الجولة 3D واتحرك جوه المكان.</p>
                        </div>
                        <Portfolio />
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── PACKAGES ── */}
                <section id="pricing" aria-labelledby="pricing-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">الباقات</div>
                            <h2 id="pricing-heading">باقة على قد مساحتك، بدون مفاجآت</h2>
                            <p>
                                السعر حسب مساحة المكان، وكل باقة فيها <strong>استضافة مجانية</strong>. ضيف اللي محتاجه من الخدمات الإضافية.
                            </p>
                        </div>
                        <Packages />
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── PROCESS ── */}
                <section id="process" aria-labelledby="process-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">آلية العمل</div>
                            <h2 id="process-heading">4 خطوات لإنجاز جولاتك الافتراضية</h2>
                        </div>
                        <div className="process-list">
                            {[
                                { n: '01', h: 'اختيار الباقة والموعد', p: 'تواصل معنا عبر واتساب وقولنا نوع المكان وموقعه ومساحته لتأكيد الباقة والموعد.' },
                                { n: '02', h: 'التصوير الميداني', p: 'يقوم المهندس المختص بمسح المكان كاملاً  (ساعة إلى ساعتين).' },
                                { n: '03', h: 'المعالجة والرندر', p: 'نبدأ في ضبط الإضاءة، الأبعاد، ومعالجة النموذج ثلاثي الأبعاد.' },
                                { n: '04', h: 'استلام الجولة', p: 'تستلم رابط الجولة التفاعلي وكود التضمين جاهزاً للاستخدام خلال 48 ساعة.' },
                            ].map((s) => (
                                <div key={s.n} className="process-step bracketed">
                                    <span className="step-n">{s.n}</span>
                                    <h3>{s.h}</h3>
                                    <p>{s.p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── FAQ ── */}
                <section id="faq" aria-labelledby="faq-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">الأسئلة الشائعة</div>
                            <h2 id="faq-heading">إجابات لأهم استفساراتك</h2>
                        </div>
                        <div className="faq-list">
                            {faqSchema.mainEntity.map((item, idx) => (
                                <div key={idx} className="faq-item bracketed">
                                    <h3>{item.name}</h3>
                                    <p className="faq-answer">{item.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* ── FOOTER ── */}
            <footer>
                <div className="wrap footer-row">
                    <div className="footer-brand">
                        <Image src={logo} alt="GateVerse" width={90} />
                        <p>جولات افتراضية ثلاثية الأبعاد للعقارات والقاعات والكافيهات والجيم والفنادق — معاينة كاملة من الموبايل.</p>
                    </div>
                    <div className="footer-social">
                        <span className="field-label">تابعنا</span>
                        <SocialLinks />
                    </div>
                    <div className="footer-meta">
                        <span>
                            واتساب:{' '}
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                {TELEPHONE.replace(/-/g, ' ')}
                            </a>
                        </span>
                        <span>© {new Date().getFullYear()} GateVerse</span>
                    </div>
                </div>
            </footer>
        </>
    )
}