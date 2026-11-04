/**
 * The home page's price list: fixed packages by area, plus add-ons. Replaced the per-m² calculator
 * (lib/pricing.ts stays only because the CRM's tests still read its price lists).
 */

/** What hosting costs per month once a package's free months are over. */
export const HOSTING_MONTHLY = 100;
export const HOSTING_YEARLY = 1000;

export interface Package {
  id: string;
  name: string;
  /** Largest area the package covers, m². */
  upTo: number;
  price: number;
  hostingMonths: number;
  photos: number;
  priority: boolean;
  infoPoints: number;
  featured?: boolean;
  tagline: string;
}

export const PACKAGES: Package[] = [
  {
    id: "starter",
    name: "باقة البداية",
    upTo: 100,
    price: 950,
    hostingMonths: 1,
    photos: 0,
    priority: false,
    infoPoints: 0,
    tagline: "استوديو، شقة صغيرة، كافيه أو محل",
  },
  {
    id: "bronze",
    name: "الباقة البرونزية",
    upTo: 150,
    price: 1950,
    hostingMonths: 2,
    photos: 10,
    priority: false,
    infoPoints: 0,
    tagline: "شقة، عيادة، سبا أو كيدز إيريا",
  },
  {
    id: "silver",
    name: "الباقة الفضية",
    upTo: 250,
    price: 2950,
    hostingMonths: 3,
    photos: 20,
    priority: true,
    infoPoints: 5,
    featured: true,
    tagline: "دوبلكس، مطعم، جيم أو مساحة عمل",
  },
  {
    id: "gold",
    name: "الباقة الذهبية",
    upTo: 450,
    price: 4950,
    hostingMonths: 4,
    photos: 30,
    priority: true,
    infoPoints: 5,
    tagline: "فيلا، قاعة مناسبات أو مكان كبير",
  },
];

/** Above the largest package the price is quoted per place. */
export const CUSTOM_QUOTE_FROM = 450;

export interface Addon {
  name: string;
  price: string;
  note?: string;
}

export const ADDONS: Addon[] = [
  //   { name: "إضافة اللوجو وبيانات التواصل", price: "200 ج" },
  {
    name: "نقطة تفاعلية (بوب أب)",
    price: "100 ج",
    note: "للنقطة: صورة، فيديو أو تفاصيل منتج جوه الجولة",
  },
  { name: "صورة ثابتة", price: "100 ج" },
  {
    name: "فيديو دعائي قصير",
    price: "400 ج",
    note: "ريلز جاهز للسوشيال ميديا",
  },
  { name: "طابق إضافي", price: "400 ج" },
  {
    name: "تحديث الجولة",
    price: "50%",
    note: "من سعر الباقة، لو المكان اتغيّر",
  },
];

/** The kinds of places we shoot, for the sectors section. */
export const SECTORS = [
  {
    icon: "🏠",
    name: "العقارات",
    p: "شقق، فيلل ودوبلكس: المشتري يعاين كل أوضة ويقيس المساحات قبل ما ينزل.",
  },
  {
    icon: "🎉",
    name: "قاعات المناسبات",
    p: "العروسين والشركات يشوفوا القاعة والترابيزات والكوشة قبل ما يحجزوا.",
  },
  {
    icon: "☕",
    name: "الكافيهات والمطاعم",
    p: "اعرض الجو والقعدة والديكور على جوجل ماب والسوشيال، وخلّي الزبون يختار ترابيزته.",
  },
  {
    icon: "🏋️",
    name: "الجيم",
    p: "الأجهزة والمساحات والكلاسات كلها قدام المشترك الجديد قبل الاشتراك.",
  },
  {
    icon: "🏨",
    name: "الفنادق",
    p: "الضيف يدخل الأوضة واللوبي والمطعم وهو بيحجز، فيحجز وهو متطمن.",
  },
  {
    icon: "💆",
    name: "السبا",
    p: "اعرض الهدوء والنظافة وغرف العلاج، ودي أكتر حاجة بتطمّن العميل.",
  },
  {
    icon: "🧸",
    name: "الكيدز إيريا",
    p: "الأهل يشوفوا الألعاب والأمان والمساحة قبل ما يجيبوا ولادهم.",
  },
  {
    icon: "💻",
    name: "مساحات العمل",
    p: "الأوض والمكاتب وقاعات الاجتماعات، والعميل يختار مكانه من الموبايل.",
  },
];

export interface PortfolioTour {
  slug: string;
  name: string;
  kind: string;
  /** Videos live at /videos/<slug>/<n>.mp4 with a poster at /videos/<slug>/<n>.jpg. */
  videos: number;
}

export const PORTFOLIO: PortfolioTour[] = [
  { slug: "the-circle", name: "The Circle", kind: "مساحة عمل", videos: 3 },
  { slug: "king-gym", name: "King Gym", kind: "جيم", videos: 4 },
  { slug: "shaghof", name: "Shaghof", kind: "مساحة ثقافية", videos: 7 },
];
