import type { StaticImageData } from 'next/image'

import circleOffice from '@/public/images/site/circle-office.webp'
import conceptBedroom from '@/public/images/site/concept-bedroom.webp'
import conceptDining from '@/public/images/site/concept-dining.webp'
import conceptKitchen from '@/public/images/site/concept-kitchen.webp'
import conceptLiving from '@/public/images/site/concept-living-wide.webp'
import conceptOverview from '@/public/images/site/concept-overview.webp'
import gymFloor from '@/public/images/site/gym-floor.webp'
import shaghofWindow from '@/public/images/site/shaghof-window.webp'

/**
 * Site photography. concept* are CG renders of a CC BY 4.0 apartment model (credited in the
 * footer); the others are stills from tours GateVerse captured on site.
 */
export const IMAGES = {
    circleOffice,
    conceptBedroom,
    conceptDining,
    conceptKitchen,
    conceptLiving,
    conceptOverview,
    gymFloor,
    shaghofWindow,
} satisfies Record<string, StaticImageData>

export type ImageKey = keyof typeof IMAGES

export const isImageKey = (k: string): k is ImageKey => k in IMAGES
