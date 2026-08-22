import type { EnPage } from './types'

import { nailSalonKorea } from './nail-salon-korea'
import { nailArtKorea } from './nail-art-korea'
import { waxingKorea } from './waxing-korea'
import { eyelashExtensionsKorea } from './eyelash-extensions-korea'
import { hairSalonKorea } from './hair-salon-korea'
import { koreanPermGuide } from './korean-perm-guide'
import { skinClinicVsSalon } from './skin-clinic-vs-salon'
import { semiPermanentMakeupKorea } from './semi-permanent-makeup-korea'
import { aquaPeel } from './aqua-peel'
import { scalpScaling } from './scalp-scaling'
import { volumeMagicPerm } from './volume-magic-perm'
import { personalColorKorea } from './personal-color-korea'
import { beautyLicenseKorea } from './beauty-license-korea'
import { workBeautyIndustryKorea } from './work-beauty-industry-korea'
import { openBeautySalonKorea } from './open-beauty-salon-korea'

import { estheticianSalary } from './esthetician-salary'
import { nailTechSalary } from './nail-tech-salary'
import { barberHairstylistSalary } from './barber-hairstylist-salary'
import { lashTechSalary } from './lash-tech-salary'
import { cosmetologyLicenseRenewal } from './cosmetology-license-renewal'
import { onlineEstheticianSchool } from './online-esthetician-school'
import { nailTechLicense } from './nail-tech-license'
import { lashCertification } from './lash-certification'
import { cosmetologyLicenseRequirements } from './cosmetology-license-requirements'
import { howLongDoLashExtensionsLast } from './how-long-do-lash-extensions-last'
import { howLongDoesWaxingLast } from './how-long-does-waxing-last'
import { howLongDoGelNailsLast } from './how-long-do-gel-nails-last'
import { gelNailRemovalAtHome } from './gel-nail-removal-at-home'
import { nailDustCollector } from './nail-dust-collector'
import { salonBusinessCosts } from './salon-business-costs'
import { acrylicNailApplication } from './acrylic-nail-application'

/**
 * 영문 콘텐츠 페이지 전체 목록.
 * 허브의 섹션 카드와 sitemap이 여기서 파생되므로, 페이지를 추가하면 이 파일만 갱신하면 된다.
 * (/en, /en/about, /en/privacy 는 아티클 모델이 아니라 여기에 포함하지 않는다.)
 */

export type EnSection = {
  key: string
  title: string
  blurb: string
  icon: string
  pages: EnPage[]
}

export const EN_SECTIONS: EnSection[] = [
  {
    key: 'guide',
    title: 'Booking beauty services in Korea',
    blurb:
      'Prices, how appointments actually work, and what to check before you sit down. Written for people getting treatments here, not for people reading about them.',
    icon: '📍',
    pages: [nailSalonKorea, nailArtKorea, waxingKorea, eyelashExtensionsKorea, hairSalonKorea, semiPermanentMakeupKorea],
  },
  {
    key: 'treatments',
    title: 'K-beauty treatments explained',
    blurb:
      'Services that developed in Korea and have no clean equivalent elsewhere — what they are, what the mechanism is, and what they can and cannot do.',
    icon: '🧪',
    pages: [aquaPeel, scalpScaling, koreanPermGuide, volumeMagicPerm, personalColorKorea, skinClinicVsSalon],
  },
  {
    key: 'working',
    title: 'Working in Korean beauty',
    blurb:
      'Licensing, the career ladder, pay, and opening your own shop — including the visa question that decides whether any of it is possible.',
    icon: '📋',
    pages: [beautyLicenseKorea, workBeautyIndustryKorea, openBeautySalonKorea],
  },
  {
    key: 'us-careers',
    title: 'Beauty careers in the US: pay, licensing, school',
    blurb:
      'What the pay actually is once tips and commission are separated out, and what each licence really requires. Rules are set state by state, so every page points you back to your own board.',
    icon: '💵',
    pages: [
      estheticianSalary,
      nailTechSalary,
      barberHairstylistSalary,
      lashTechSalary,
      cosmetologyLicenseRequirements,
      cosmetologyLicenseRenewal,
      nailTechLicense,
      onlineEstheticianSchool,
      lashCertification,
    ],
  },
  {
    key: 'treatment-faq',
    title: 'How long does it last?',
    blurb:
      'The questions people actually search before or after an appointment, and more usefully, why the answer is what it is and what changes it.',
    icon: '⏱️',
    pages: [howLongDoLashExtensionsLast, howLongDoesWaxingLast, howLongDoGelNailsLast, gelNailRemovalAtHome],
  },
  {
    key: 'salon-business',
    title: 'Equipment and salon business',
    blurb:
      'Booth rent versus commission with the break-even worked out, what to charge, and the equipment decisions that turn out to be occupational health questions.',
    icon: '🧰',
    pages: [salonBusinessCosts, nailDustCollector, acrylicNailApplication],
  },
]

/** sitemap·내부링크용 평면 목록 */
export const EN_PAGES: EnPage[] = EN_SECTIONS.flatMap((s) => s.pages)
