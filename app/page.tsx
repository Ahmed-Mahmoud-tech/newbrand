import NavToggle from './components/NavToggle'
import PriceCalculator from './components/PriceCalculator'

/* ─── Virtual tours ─── */
const TOURS = [
    { id: 'f959X55n2Jf', title: 'شقة سكنية — سموحة', subtitle: '140 م² · سكني' },
]

/* ─── JSON-LD schemas ───────────────────────────────────────────────────── */
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://massah.tours/#business',
    name: 'GateVerse للجولات الافتراضية',
    alternateName: 'GateVerse Virtual Tours',
    description:
        'خدمات تصوير وإنشاء جولات افتراضية تفاعلية ثلاثية الأبعاد (3D) للعقارات السكنية والتجارية.',
    url: 'https://massah.tours',
    telephone: '+20-100-000-0000',
    email: 'hello@massah.tours',
    priceRange: '200–2000 EGP',
    currenciesAccepted: 'EGP, USD',
    paymentAccepted: 'Cash, Bank Transfer, InstaPay',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'الإسكندرية',
        addressRegion: 'الإسكندرية',
        addressCountry: 'EG',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.2001,
        longitude: 29.9187,
    },
    areaServed: { '@type': 'City', name: 'الإسكندرية', sameAs: 'https://www.wikidata.org/wiki/Q87' },
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
            {
                '@type': 'Offer',
                name: 'خدمة جولة افتراضية 3D',
                priceSpecification: [
                    {
                        '@type': 'UnitPriceSpecification',
                        name: 'تصوير (رسوم لمرة واحدة)',
                        price: '20',
                        priceCurrency: 'EGP',
                        unitText: 'م² (حد أدنى 2000 ج.م)',
                    },
                    {
                        '@type': 'UnitPriceSpecification',
                        name: 'استضافة شهرية',
                        price: '200',
                        priceCurrency: 'EGP',
                        billingDuration: 'P1M',
                        unitText: 'لكل 200 م² أو جزء منها',
                    },
                ],
                description: 'إنتاج واستضافة جولة تفاعلية كاملة مع رابط دائم وكود تضمين.',
                availability: 'https://schema.org/InStock',
            },
        ],
    },
    knowsAbout: ['3D Virtual Tours', 'Real Estate Photography', 'Virtual Reality', 'Digital Twin', 'Immersive Tours'],
    sameAs: ['https://www.facebook.com/gateverse', 'https://www.instagram.com/gateverse'],
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
    name: 'خطوات حجز وإنشاء جولة افتراضية لعقارك',
    description: 'خطوات بسيطة لتحويل عقارك في الإسكندرية إلى جولة تفاعلية ثلاثية الأبعاد.',
    totalTime: 'P2D',
    step: [
        {
            '@type': 'HowToStep',
            position: 1,
            name: 'الحجز والتقييم الأول',
            text: 'تواصل معنا عبر واتساب وزودنا بتفاصيل موقع العقار ومساحته التقريبية لتحديد الموعد المناسب.',
        },
        {
            '@type': 'HowToStep',
            position: 2,
            name: 'جلسة التصوير والمسح الميداني',
            text: 'يقوم فريقنا بزيارة العقار وإجراء المسح الضوئي الكامل للمساحة، وتستغرق الزيارة من 1 إلى 2 ساعة.',
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
            text: 'تستلم رابطًا تفاعلياً دائماً مع كود Embed جاهز للمشاركة والنشر على وسائل التواصل والمواقع العقارية.',
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
                        <img src="/images/logo.png" alt="GateVerse Logo" width="100" />
                    </div>
                    <div className="nav-links" role="list">
                        <a href="#benefits" role="listitem">لماذا GateVerse؟</a>
                        <a href="#portfolio" role="listitem">أعمالنا</a>
                        <a href="#pricing" role="listitem">الأسعار</a>
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
                                    اعرض عقارك بتقنية 3D.. <span>ودّع المعاينات غير الجادة</span>
                                </h1>
                                <p className="lead">
                                    GateVerse تحوّل الشقق، الفيلل، والمقارات التجارية إلى جولات تفاعلية واقعية بتقنية 3D.
                                    اسمح لعميلك بمعاينة كل زاوية وقياس المساحات من موبايله قبل الزيارة الفعلية.
                                </p>
                                <div className="btn-row">
                                    <a href="#pricing" className="btn btn-primary">ابدأ الآن</a>
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
                            <h2 id="benefits-heading">تجربة اقرب ما يكون للواقع تسرّع قرار الشراء</h2>
                            {/* <p>العميل ينفق وقتاً أطول بـ 3 أضعاف في استكشاف العقار عبر الجولة الـ 3D مقارنة بالصور التقليدية.</p> */}
                        </div>
                        <div className="benefits-grid">
                            {[
                                {
                                    n: '٠١',
                                    h: 'فلترة المعاينات وترشيد الوقت',
                                    p: 'يتعرف العميل على كافة التفاصيل والتقسيمات مسبقاً، مما يجعل المعاينة الميدانية مقتصرة على المشترين الجادين فقط.',
                                },
                                {
                                    n: '٠٢',
                                    h: 'سهولة المشاركة والتوافق',
                                    p: 'رابط تفاعلي واحد يعمل مباشرة عبر WhatsApp، صفحات التواصل، أو موقعك الإلكتروني بدون الحاجة لإنستال أي تطبيق.',
                                },
                                {
                                    n: '٠٣',
                                    h: 'إضافة نقاط اهتمام تفاعلية',
                                    p: 'تضمين تفاصيل الماتريال والماركات: تقدر تحط "نقطة تفاعلية" داخل الجولة؛ لما العميل يضغط عليها يظهرله: نوع الرخام، ماركة أجهزة المطبخ، نوع التكييفات، أو فيديو تشغيلي للأنظمة الذكية',
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

                {/* ── PORTFOLIO ── */}
                <section id="portfolio" aria-labelledby="portfolio-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">مكانك بين اديك</div>
                            <h2 id="portfolio-heading">استكشف التفاعل والتحرك داخل المساحات بنفسك</h2>
                            {/* <p>استكشف التفاعل والتحرك داخل المساحات بنفسك.</p> */}
                        </div>
                        <div>
                            {TOURS.map((tour) => (
                                <article key={tour.id} className="tour-card bracketed hideLogo">
                                    <div className="iframe-wrap">
                                        <iframe
                                            src={`https://my.matterport.com/show?play=1&lang=ar&m=${tour.id}`}
                                            allow="xr-spatial-tracking; gyroscope; accelerometer; magnetometer; camera; microphone; display-capture; encrypted-media; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                            title={`جولة افتراضية — ${tour.title}`}
                                        />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wrap"><div className="divider" /></div>

                {/* ── PRICING CALCULATOR ── */}
                <section id="pricing" aria-labelledby="pricing-heading">
                    <div className="wrap">
                        <div className="section-head">
                            <div className="eyebrow">احسب سعرك</div>
                            <h2 id="pricing-heading">تسعير واضح، بدون مفاجآت</h2>
                            <p>
                                تصوير بـ <strong>20 ج.م/م²</strong> (حد أدنى 2,000 ج.م) · استضافة بـ <strong>200 ج.م/شهر</strong> لكل 200 م² · خصم 10% على الدفع السنوي.
                            </p>
                        </div>
                        <PriceCalculator />
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
                                { n: '01', h: 'تحديد الموعد', p: 'تواصل معنا عبر واتساب و زودنا بموقع ومساحة العقار لتأكيد الموعد.' },
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
        </>
    )
}