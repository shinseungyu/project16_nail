// 브라우저에서 이미지 줄이기 → webp (project15 와 같은 방식). 큰 사진도 보통 100~300KB 로 줄어든다.
export async function toWebp(
  file: File,
  maxWidth = 1600,
  quality = 0.82
): Promise<{ dataUrl: string; width: number; height: number }> {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, maxWidth / bitmap.width)
  const width = Math.round(bitmap.width * scale)
  const height = Math.round(bitmap.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('이미지를 처리할 수 없습니다.')
  ctx.drawImage(bitmap, 0, 0, width, height)
  bitmap.close()
  let dataUrl = canvas.toDataURL('image/webp', quality)
  // webp 를 못 만드는 브라우저면 jpeg
  if (!dataUrl.startsWith('data:image/webp')) dataUrl = canvas.toDataURL('image/jpeg', quality)
  return { dataUrl, width, height }
}
