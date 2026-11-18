/**
 * The work shown on the marketing site. Completed spaces are real tours captured on site (their
 * files are under public/tours/<slug> and the reel videos under public/videos/<slug>); the
 * residential concept is a CG apartment rendered from a CC BY 4.0 model and is always labelled as a
 * concept demonstration.
 */
import type { Locale } from './i18n'

type T = Record<Locale, string>

export interface Project {
    slug: string
    name: T
    category: T
    experience: T
    description: T
    image: 'conceptLiving' | 'circleOffice' | 'shaghofWindow' | 'gymFloor'
    /** A live tour on this site, or null for the in-page concept viewer. */
    tour: string | null
    /** Reel videos under /videos/<slug>/ (n.mp4 + n.jpg, preview.mp4). */
    videos: number
    concept: boolean
}

export const PROJECTS: Project[] = [
    {
        slug: 'residential-concept',
        name: { en: 'Residential Apartment', ar: 'شقة سكنية' },
        category: { en: 'Residential · Off-plan concept', ar: 'سكني · نموذج لمشروع على الخريطة' },
        experience: { en: 'Render-based 360° experience', ar: 'تجربة 360° مبنية على التصميم' },
        description: {
            en: 'A CG apartment rendered room by room from a 3D model and presented as a navigable 360° experience: the format we use for units that are not built yet.',
            ar: 'شقة مُولّدة بالحاسوب غرفة بغرفة من نموذج ثلاثي الأبعاد، ومقدمة كتجربة 360° قابلة للتنقل: الصيغة التي نستخدمها للوحدات التي لم تُبنَ بعد.',
        },
        image: 'conceptLiving',
        tour: null,
        videos: 0,
        concept: true,
    },
    {
        slug: 'the-circle',
        name: { en: 'The Circle', ar: 'ذا سيركل' },
        category: { en: 'Commercial · Workspace', ar: 'تجاري · مساحة عمل' },
        experience: { en: 'On-site 360° virtual tour', ar: 'جولة افتراضية 360° بتصوير ميداني' },
        description: {
            en: 'A working office space in Alexandria, captured on site and published as a live, shareable 360° tour.',
            ar: 'مساحة عمل مكتبية في الإسكندرية، صُوّرت ميدانيًا ونُشرت كجولة 360° حية قابلة للمشاركة.',
        },
        image: 'circleOffice',
        tour: '/tour/the-circle',
        videos: 3,
        concept: false,
    },
    {
        slug: 'shaghof',
        name: { en: 'Shaghof', ar: 'شغف' },
        category: { en: 'Commercial · Cultural venue', ar: 'تجاري · مساحة ثقافية' },
        experience: { en: 'On-site 360° virtual tour', ar: 'جولة افتراضية 360° بتصوير ميداني' },
        description: {
            en: 'A multi-room cultural and art venue in a period building in Alexandria, presented room by room.',
            ar: 'مساحة ثقافية وفنية متعددة الغرف في مبنى تراثي بالإسكندرية، معروضة غرفة بغرفة.',
        },
        image: 'shaghofWindow',
        tour: '/tour/shaghof',
        videos: 7,
        concept: false,
    },
    {
        slug: 'king-gym',
        name: { en: 'King Gym', ar: 'كينج جيم' },
        category: { en: 'Commercial · Fitness facility', ar: 'تجاري · منشأة رياضية' },
        experience: { en: 'On-site 360° virtual tour', ar: 'جولة افتراضية 360° بتصوير ميداني' },
        description: {
            en: 'A large commercial interior across open training floors, captured on site in Alexandria.',
            ar: 'مساحة داخلية تجارية كبيرة بصالات تدريب مفتوحة، صُوّرت ميدانيًا في الإسكندرية.',
        },
        image: 'gymFloor',
        tour: '/tour/king-gym',
        videos: 4,
        concept: false,
    },
]

export interface Scene {
    id: string
    src: string
    preview: string
    /** Initial view direction, degrees (0 = panorama centre, positive = right). */
    yaw: number
    label: T
}

const scene = (n: string, yaw: number, en: string, ar: string): Scene => ({
    id: n,
    src: `/experiences/residential-concept/pano-${n}.webp`,
    preview: `/experiences/residential-concept/pano-${n}-preview.webp`,
    yaw,
    label: { en, ar },
})

/** The concept apartment's 360° scenes, in walking order. */
export const CONCEPT_SCENES: Scene[] = [
    scene('03', -125, 'Living room', 'غرفة المعيشة'),
    scene('04', 140, 'Dining area', 'منطقة الطعام'),
    scene('02', -150, 'Kitchen', 'المطبخ'),
    scene('08', -20, 'Bedroom', 'غرفة النوم'),
    scene('09', -135, 'Bedroom, window side', 'غرفة النوم: جهة النافذة'),
    scene('12', -45, 'Bathroom', 'الحمام'),
]
