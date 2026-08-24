import type { EnPage } from './types'
import { EN_RELEASED_STAGE } from './common'

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

import { microneedlingCost } from './microneedling-cost'
import { microneedlingAftercare } from './microneedling-aftercare'
import { microneedlingVsChemicalPeel } from './microneedling-vs-chemical-peel'
import { microneedlingHealingTime } from './microneedling-healing-time'
import { isMicroneedlingWorthIt } from './is-microneedling-worth-it'
import { microneedlingAtHomeVsProfessional } from './microneedling-at-home-vs-professional'
import { microneedlingSideEffects } from './microneedling-side-effects'
import { whoCanPerformMicroneedling } from './who-can-perform-microneedling'

import { howLongDoPressOnNailsLast } from './how-long-do-press-on-nails-last'
import { howToRemovePressOnNails } from './how-to-remove-press-on-nails'
import { pressOnNailsVsGel } from './press-on-nails-vs-gel'
import { pressOnNailsSizing } from './press-on-nails-sizing'
import { howToApplyPressOnNails } from './how-to-apply-press-on-nails'
import { doPressOnNailsDamageYourNails } from './do-press-on-nails-damage-your-nails'
import { pressOnNailsShortNails } from './press-on-nails-short-nails'
import { reusingPressOnNails } from './reusing-press-on-nails'

import { balayageCost } from './balayage-cost'
import { balayageVsHighlights } from './balayage-vs-highlights'
import { howLongDoesBalayageLast } from './how-long-does-balayage-last'
import { balayageDarkHair } from './balayage-dark-hair'
import { balayageMaintenance } from './balayage-maintenance'
import { balayageVsOmbre } from './balayage-vs-ombre'
import { balayageGoneWrong } from './balayage-gone-wrong'
import { balayageDamage } from './balayage-damage'

import { whatAreGelXNails } from './what-are-gel-x-nails'
import { gelXVsAcrylic } from './gel-x-vs-acrylic'
import { gelXCost } from './gel-x-cost'
import { gelXRemoval } from './gel-x-removal'
import { howLongDoGelXNailsLast } from './how-long-do-gel-x-nails-last'
import { gelXVsBuilderGel } from './gel-x-vs-builder-gel'
import { gelXDamage } from './gel-x-damage'

import { whatIsARussianManicure } from './what-is-a-russian-manicure'
import { russianManicureCost } from './russian-manicure-cost'
import { russianManicureSafety } from './russian-manicure-safety'
import { russianVsRegularManicure } from './russian-vs-regular-manicure'
import { howLongDoesARussianManicureLast } from './how-long-does-a-russian-manicure-last'
import { russianManicureAftercare } from './russian-manicure-aftercare'
import { russianManicureTraining } from './russian-manicure-training'

import { whatIsBuilderGel } from './what-is-builder-gel'
import { builderGelVsAcrylic } from './builder-gel-vs-acrylic'
import { builderGelCost } from './builder-gel-cost'
import { builderGelRemoval } from './builder-gel-removal'
import { builderGelForWeakNails } from './builder-gel-for-weak-nails'
import { builderGelAtHome } from './builder-gel-at-home'
import { builderGelDamage } from './builder-gel-damage'

import { whatIsDermaplaning } from './what-is-dermaplaning'
import { dermaplaningCost } from './dermaplaning-cost'
import { dermaplaningHairGrowth } from './dermaplaning-hair-growth'
import { dermaplaningVsWaxing } from './dermaplaning-vs-waxing'
import { dermaplaningAtHome } from './dermaplaning-at-home'
import { dermaplaningAftercare } from './dermaplaning-aftercare'
import { whoCanPerformDermaplaning } from './who-can-perform-dermaplaning'

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
  {
    key: 'microneedling',
    title: 'Microneedling, explained properly',
    blurb:
      'Cost, aftercare, healing time and side effects - plus the question most pages skip, which is who is legally allowed to perform it where you live.',
    icon: '✨',
    pages: [
      microneedlingCost,
      microneedlingAftercare,
      microneedlingHealingTime,
      microneedlingSideEffects,
      microneedlingVsChemicalPeel,
      isMicroneedlingWorthIt,
      microneedlingAtHomeVsProfessional,
      whoCanPerformMicroneedling,
    ],
  },
  {
    key: 'press-on-nails',
    title: 'Press on nails, done properly',
    blurb:
      'Sizing, application, and the removal method that decides whether they damage your nails. Written around the fact that prep is the whole game.',
    icon: '💅',
    pages: [
      howLongDoPressOnNailsLast,
      howToApplyPressOnNails,
      pressOnNailsSizing,
      howToRemovePressOnNails,
      doPressOnNailsDamageYourNails,
      pressOnNailsVsGel,
      pressOnNailsShortNails,
      reusingPressOnNails,
    ],
  },
  {
    key: 'balayage',
    title: 'Balayage, from cost to correction',
    blurb:
      'What it costs including the toner nobody quotes, why dark hair takes several sessions, and how to keep it from going brassy four weeks in.',
    icon: '🎨',
    pages: [
      balayageCost,
      balayageVsHighlights,
      howLongDoesBalayageLast,
      balayageMaintenance,
      balayageDarkHair,
      balayageVsOmbre,
      balayageGoneWrong,
      balayageDamage,
    ],
  },
  {
    key: 'gel-x',
    title: 'Gel X and soft gel extensions',
    blurb:
      'What the system actually is, how it compares with acrylic on cost and removal, and why soak-off is the part that decides whether your nails come out fine.',
    icon: '💎',
    pages: [
      whatAreGelXNails,
      gelXVsAcrylic,
      gelXCost,
      howLongDoGelXNailsLast,
      gelXRemoval,
      gelXVsBuilderGel,
      gelXDamage,
    ],
  },
  {
    key: 'russian-manicure',
    title: 'Russian manicure, both sides of it',
    blurb:
      'What the technique is, why the safety discussion exists, what to ask before booking, and why a training certificate does not settle the scope question.',
    icon: '🔎',
    pages: [
      whatIsARussianManicure,
      russianManicureSafety,
      russianManicureCost,
      russianVsRegularManicure,
      howLongDoesARussianManicureLast,
      russianManicureAftercare,
      russianManicureTraining,
    ],
  },
  {
    key: 'builder-gel',
    title: 'Builder gel and overlays',
    blurb:
      'The system people reach for when they want their own nails to survive long enough to grow. What it does, what it costs, and why it protects rather than strengthens.',
    icon: '🧴',
    pages: [
      whatIsBuilderGel,
      builderGelVsAcrylic,
      builderGelCost,
      builderGelForWeakNails,
      builderGelRemoval,
      builderGelAtHome,
      builderGelDamage,
    ],
  },
  {
    key: 'dermaplaning',
    title: 'Dermaplaning',
    blurb:
      'What it does and does not do, the hair-grows-back-thicker question answered properly, and who is legally allowed to hold the blade where you live.',
    icon: '🪒',
    pages: [
      whatIsDermaplaning,
      dermaplaningCost,
      dermaplaningHairGrowth,
      dermaplaningVsWaxing,
      dermaplaningAftercare,
      dermaplaningAtHome,
      whoCanPerformDermaplaning,
    ],
  },
]

/** 원고가 존재하는 전체 목록 (공개 여부 무관) */
export const EN_ALL_PAGES: EnPage[] = EN_SECTIONS.flatMap((s) => s.pages)

/** 공개된 페이지인지 */
export const isReleased = (p: EnPage) => (p.stage ?? 0) <= EN_RELEASED_STAGE

/** sitemap·허브·내부링크용 — 공개된 것만 */
export const EN_PAGES: EnPage[] = EN_ALL_PAGES.filter(isReleased)

/** 허브 섹션도 공개분만 남긴다. 빈 섹션은 통째로 감춘다. */
export const EN_RELEASED_SECTIONS: EnSection[] = EN_SECTIONS
  .map((s) => ({ ...s, pages: s.pages.filter(isReleased) }))
  .filter((s) => s.pages.length > 0)
