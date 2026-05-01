import FormSection from "./FormSection"

export const metadata = { title: "상담 신청 폼", robots: "noindex,nofollow" }

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-[#324891]/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <FormSection />
      </div>
    </main>
  )
}
