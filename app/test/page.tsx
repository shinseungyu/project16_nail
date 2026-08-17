import FormSection from "./FormSection"

// canonical을 지정하지 않으면 루트 layout의 '/'를 상속해 홈의 중복 신호가 된다.
export const metadata = {
  title: { absolute: "상담 신청 폼" },
  description: "네일샵 창업 무료 상담 신청 폼입니다.",
  robots: "noindex,nofollow",
  alternates: { canonical: "/test" },
}

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-[#324891]/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <FormSection />
      </div>
    </main>
  )
}
