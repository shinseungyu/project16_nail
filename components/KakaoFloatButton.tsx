'use client'

import Image from 'next/image'

export default function KakaoFloatButton() {
  function handleClick() {
    fetch('/api/kakao-click', { method: 'POST' }).catch(() => {})
  }

  return (
    <a
      href="https://open.kakao.com/o/sIOxvlZh"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#FEE500] hover:bg-[#FADC00] hover:-translate-y-1 text-[#000000] font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl transition-all flex items-center gap-3 active:scale-95"
    >
      <Image src="/images/kakao_logo.webp" alt="카카오톡" width={20} height={20} />
      <span>멘토 1:1 무료 상담</span>
    </a>
  )
}
