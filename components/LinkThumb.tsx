import Image from 'next/image'

/**
 * 내부링크 카드용 1:1 썸네일.
 *
 * 주제가 맞는 사진이 있으면 사진을, 없으면 코드로 그린 아이콘 타일을 쓴다.
 *
 * **왜 섞어 쓰나:** 보유 사진이 전부 네일 계열이다. 왁싱·립블러시·페이셜 스티머
 * 같은 글에 네일 사진을 붙이면 오히려 신뢰를 깎아먹는다. 주제가 맞을 때만 사진을 쓰고
 * 나머지는 아이콘으로 떨어뜨리는 편이 안전하다. 사진이 늘어나면 PHOTOS 에만 추가하면 된다.
 *
 * 사진은 public/images 에 1:1 로 잘라 640px, webp 로 넣어둔다(파일명은 검색 노출을 고려한 영문 키워드).
 */

/**
 * 키워드 → 사진. **위에서부터 먼저 맞는 것을 쓰므로 구체적인 것을 위에 둔다.**
 * 네일 주제가 아닌 글은 여기서 매칭되지 않고 아이콘으로 넘어간다.
 */
const PHOTOS: [string, string[]][] = [
  ['/images/nail-salon-gel-manicure-service.webp', ['창업', '샵', '홈', '개업', 'salon', 'hub', 'business', 'korea', '수익', '비용']],
  ['/images/nail-care-hand-cream-cuticle-oil.webp', ['제거', 'removal', 'remove', '리무버', 'aftercare', '관리', '케어', 'care']],
  ['/images/nail-care-botanical-oil-spa.webp', ['강화', '손상', '보습', '큐티클', 'strengthener', 'peeling', 'damage', 'grow', 'healthy']],
  ['/images/gel-nail-tips-design-set.webp', ['팁', '연장', '익스텐션', 'press-on', 'tips', 'extension', 'gel-x', 'builder', 'dip']],
  ['/images/nail-art-manicure-design.webp', ['아트', 'art', 'design', '디자인']],
  ['/images/gel-nail-manicure-hand.webp', ['젤', '네일', '매니큐어', '아크릴', 'gel', 'nail', 'manicure', 'acrylic', 'polish']],
]

function pickPhoto(text: string): string | null {
  const t = text.toLowerCase()
  for (const [src, keys] of PHOTOS) {
    if (keys.some((k) => t.includes(k))) return src
  }
  return null
}

/* ---------- 사진이 없는 주제용 아이콘 타일 ---------- */

const PALETTES: [string, string][] = [
  ['#fb7185', '#e11d48'],
  ['#fbbf24', '#ea580c'],
  ['#34d399', '#059669'],
  ['#60a5fa', '#2563eb'],
  ['#c084fc', '#7c3aed'],
  ['#22d3ee', '#0891b2'],
]

type IconKey =
  | 'sparkle' | 'droplet' | 'home' | 'scissors' | 'wave'
  | 'face' | 'eye' | 'lips' | 'wax' | 'cert' | 'coin' | 'clock' | 'shield'

const RULES: [IconKey, string[]][] = [
  ['droplet', ['제거', 'removal', 'remove', 'aftercare']],
  ['coin', ['비용', '가격', '수익', '연봉', 'cost', 'price', 'salary', 'worth it']],
  ['clock', ['얼마나', '지속', 'how long', 'last', 'healing', 'heal']],
  ['shield', ['부작용', '손상', '안전', '위생', 'safety', 'damage', 'side effect', 'hygiene', 'risk']],
  ['cert', ['자격', '면허', '시험', '학원', 'license', 'licence', 'exam', 'school', 'board', 'training']],
  ['eye', ['속눈썹', '눈썹', 'lash', 'brow', 'microblading', 'lamination']],
  ['lips', ['립', 'lip']],
  ['wax', ['왁싱', '제모', 'wax', 'sugaring']],
  ['face', ['피부', '페이셜', '필링', '두피', 'skin', 'facial', 'peel', 'derma', 'steamer', 'microneedling', 'scaling']],
  ['scissors', ['커트', '헤어', '미용실', 'cut', 'hair', 'barber']],
  ['wave', ['펌', '매직', 'perm', 'keratin', 'blowout', 'smoothing', 'straight', 'balayage', 'color', 'colour']],
  ['home', ['창업', '홈', 'hub', 'guide', 'business']],
]

const ICONS: Record<IconKey, React.ReactNode> = {
  sparkle: (
    <>
      <path d="M10 3l1.7 4.8L16.5 9.5 11.7 11.2 10 16l-1.7-4.8L3.5 9.5l4.8-1.7z" />
      <path d="M17.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3z" />,
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M7.8 16.2L18 4" />
      <path d="M16.2 16.2L6 4" />
    </>
  ),
  wave: (
    <>
      <path d="M3 8c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M3 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M8.8 14.8c1.4 1.4 5 1.4 6.4 0" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  lips: (
    <>
      <path d="M12 8.5c2-2.2 6-2.2 8.5 0-2.2 4.2-5.3 7-8.5 7s-6.3-2.8-8.5-7c2.5-2.2 6.5-2.2 8.5 0z" />
      <path d="M3.5 8.5h17" />
    </>
  ),
  wax: (
    <>
      <path d="M9 6.5c0-1 1-1.5 1-2.5M14 6.5c0-1 1-1.5 1-2.5" />
      <path d="M5 10h14" />
      <path d="M6 10h12v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
    </>
  ),
  cert: (
    <>
      <rect x="4" y="3" width="16" height="12" rx="2" />
      <path d="M8 7h8M8 11h5" />
      <path d="M9 15.5l-1 5.5 4-2 4 2-1-5.5" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 8.5l3.5 6 3.5-6" />
      <path d="M7.5 13h9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5V12l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6z" />
      <path d="M12 9v3.5M12 15.5h.01" />
    </>
  ),
}

function pickIcon(text: string): IconKey {
  const t = text.toLowerCase()
  for (const [icon, keys] of RULES) {
    if (keys.some((k) => t.includes(k))) return icon
  }
  return 'sparkle'
}

function hashOf(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

type Props = {
  /** 사진·색을 고르는 씨앗 겸 alt 보조. 링크 경로를 넣는다. */
  seed: string
  /** 카드 제목. 사진 선택과 alt 에 쓴다. */
  label: string
  /** 부모가 크기를 정한다. 항상 1:1 로 채운다. */
  className?: string
  /** 반응형 이미지 크기 힌트 */
  sizes?: string
}

export default function LinkThumb({ seed, label, className = '', sizes = '(max-width: 640px) 100vw, 33vw' }: Props) {
  const photo = pickPhoto(`${label} ${seed}`)

  if (photo) {
    return (
      <span className={`relative block aspect-square overflow-hidden bg-stone-100 ${className}`}>
        <Image
          src={photo}
          alt={label}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </span>
    )
  }

  const h = hashOf(seed)
  const [from, to] = PALETTES[h % PALETTES.length]
  const id = `lt${h % 100000}`

  return (
    <span className={`relative block aspect-square overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="w-full h-full" role="presentation">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${id})`} />
        <circle cx="76" cy="24" r="26" fill="#fff" opacity="0.13" />
        <g
          transform="translate(26 26) scale(2)"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[pickIcon(`${label} ${seed}`)]}
        </g>
      </svg>
    </span>
  )
}
