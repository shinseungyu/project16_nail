"use client"

import { useState } from "react"
import PrivacyModal from "./PrivacyModal"
import { validateForm, parsePhone } from "./validate"

export default function FormSection() {
  const [form, setForm] = useState({
    customer_name: "",
    customer_birth: "",
    mobile1: "010",
    mobile2: "",
    customer_sex: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (key: string, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i
  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      alert("특수문자는 입력하실수 없습니다.")
      set("customer_name", value.slice(0, -1))
      return
    }
    set("customer_name", value)
  }

  const handleSubmitClick = () => {
    const error = validateForm({ ...form, privacy: true })
    if (error) { alert(error); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === "string") { alert(phoneResult); return }

    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: "",
      customer_sex: form.customer_sex,
    }

    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        alert(`전송 실패: ${err.error ?? res.status}`)
        setSubmitted(false)
        return
      }
      alert("신청이 완료되었습니다.")
      setForm({ customer_name: "", customer_birth: "", mobile1: "010", mobile2: "", customer_sex: "" })
    } catch {
      alert("네트워크 오류가 발생했습니다.")
    }
    setSubmitted(false)
  }

  return (
    <>
      {showModal && (
        <PrivacyModal
          onConfirm={handleConfirm}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow space-y-4">
        <h2 className="text-xl font-bold text-center">상담 신청 (테스트)</h2>

        {/* 이름 */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">이름</label>
          <input
            type="text"
            value={form.customer_name}
            onChange={(e) => handleNameChange(e.target.value)}
            maxLength={8}
            placeholder="이름 입력"
            className="w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* 생년월일 */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">생년월일 (6자리)</label>
          <input
            type="text"
            value={form.customer_birth}
            onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            placeholder="예) 901215"
            className="w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* 성별 */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">성별</label>
          <div className="flex gap-4">
            {[{ label: "남", value: "1" }, { label: "여", value: "2" }].map((s) => (
              <label key={s.value} className="flex items-center gap-1.5 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="customer_sex"
                  value={s.value}
                  checked={form.customer_sex === s.value}
                  onChange={() => set("customer_sex", s.value)}
                />
                {s.label}
              </label>
            ))}
          </div>
        </div>

        {/* 전화번호 */}
        <div className="space-y-1">
          <label className="text-sm font-semibold">전화번호</label>
          <div className="flex gap-2">
            <select
              value={form.mobile1}
              onChange={(e) => set("mobile1", e.target.value)}
              className="border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {["010","011","016","017","019"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <input
              type="text"
              value={form.mobile2}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "")
                set("mobile2", val)
              }}
              maxLength={form.mobile2.startsWith("01") ? 11 : 8}
              placeholder="숫자만 입력"
              className="flex-1 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmitClick}
          disabled={submitted}
          className="w-full py-3 bg-[#324891] text-white rounded-xl font-semibold hover:bg-[#253a7a] disabled:opacity-50"
        >
          신청하기
        </button>

        <p className="text-xs text-center text-gray-400">※ 테스트 페이지 — 실제 전송되지 않습니다</p>
      </div>
    </>
  )
}
