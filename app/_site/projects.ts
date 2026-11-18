import { dict } from '@/lib/content'
import { href, type Locale } from '@/lib/i18n'
import { CONCEPT_SCENES, PROJECTS } from '@/lib/portfolio'

import { IMAGES } from './images'
import type { ProjectCardData, ProjectText } from './ProjectGrid'
import type { ViewerScene, ViewerText } from './ExperienceViewer'

/** Projects resolved to one locale for the client grid. */
export function projectCards(locale: Locale, only?: 'live' | 'all'): ProjectCardData[] {
    const t = dict(locale)
    return PROJECTS.filter((p) => only !== 'live' || !p.concept).map((p) => ({
        slug: p.slug,
        name: p.name[locale],
        category: p.category[locale],
        experience: p.experience[locale],
        description: p.description[locale],
        image: IMAGES[p.image],
        imageAlt: `${p.name[locale]}: ${p.category[locale]}`,
        caption: p.concept ? t.common.cgRender : t.common.capturedOnSite,
        tour: p.tour,
        conceptHref: p.concept ? `${href(locale, '/portfolio')}#concept` : null,
        videos: p.videos,
        concept: p.concept,
    }))
}

const REEL = {
    en: {
        close: 'Close',
        prev: 'Previous video',
        next: 'Next video',
        play: 'Play',
        mute: 'Mute',
        unmute: 'Turn sound on',
        swipe: 'Swipe up for the next video',
        pick: 'Choose a video',
        video: 'Walkthrough videos',
        enterTour: 'Open the live tour',
    },
    ar: {
        close: 'إغلاق',
        prev: 'الفيديو السابق',
        next: 'الفيديو التالي',
        play: 'تشغيل',
        mute: 'كتم الصوت',
        unmute: 'تشغيل الصوت',
        swipe: 'اسحب لأعلى للفيديو التالي',
        pick: 'اختر فيديو',
        video: 'فيديوهات الجولة',
        enterTour: 'افتح الجولة الحية',
    },
}

export function projectText(locale: Locale): ProjectText {
    const t = dict(locale)
    return {
        category: t.projectsSection.category,
        experience: t.projectsSection.experience,
        concept: t.common.concept,
        openLiveTour: t.common.openLiveTour,
        watchVideos: t.common.watchVideos,
        exploreConcept: locale === 'ar' ? 'استكشف النموذج التوضيحي' : 'Explore the concept',
        opensNewTab: t.common.opensNewTab,
        reel: REEL[locale],
    }
}

export function viewerProps(locale: Locale): { scenes: ViewerScene[]; text: ViewerText; badge: string; posterAlt: string } {
    const t = dict(locale)
    return {
        scenes: CONCEPT_SCENES.map((s) => ({ id: s.id, src: s.src, preview: s.preview, yaw: s.yaw, label: s.label[locale] })),
        text: {
            label: t.viewer.label,
            hint: t.viewer.hint,
            hintTouch: t.viewer.hintTouch,
            loading: t.viewer.loading,
            fallback: t.viewer.fallback,
            scenes: t.viewer.scenes,
            fullscreen: t.viewer.fullscreen,
            exitFullscreen: t.viewer.exitFullscreen,
            zoomIn: t.viewer.zoomIn,
            zoomOut: t.viewer.zoomOut,
        },
        badge: t.common.concept,
        posterAlt: `${t.viewer.label}: ${CONCEPT_SCENES[0].label[locale]}`,
    }
}
