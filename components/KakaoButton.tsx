'use client'

import Image from 'next/image'

interface Props {
  className: string
  imgSize?: number
  imgClass?: string
  children: React.ReactNode
  location: string
}

export default function KakaoButton({ className, imgSize = 18, imgClass, children, location }: Props) {
  function handleClick() {
    fetch('/api/kakao-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location }),
    }).catch(() => {})
  }

  return (
    <a
      href="https://open.kakao.com/o/sIOxvlZh"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      <Image src="/images/kakao_logo.webp" alt="카카오톡" width={imgSize} height={imgSize} className={imgClass} />
      {children}
    </a>
  )
}
