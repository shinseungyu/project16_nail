"use client"

import { useState } from "react"

type Props = {
  onConfirm: () => void
  onClose: () => void
}

export default function PrivacyModal({ onConfirm, onClose }: Props) {
  const [priAgree, setPriAgree] = useState(false)
  const [thirdAgree, setThirdAgree] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const allRequired = priAgree && thirdAgree

  const handleAllAgree = () => {
    const next = !allRequired
    setPriAgree(next)
    setThirdAgree(next)
  }

  const handleIndividual = (key: "pri" | "third", val: boolean) => {
    if (key === "pri") setPriAgree(val)
    if (key === "third") setThirdAgree(val)
  }

  const handleConfirm = () => {
    if (!priAgree) { alert("개인정보 수집 및 이용에 동의해 주세요."); return }
    if (!thirdAgree) { alert("개인정보 제3자 제공에 동의해 주세요."); return }
    onConfirm()
    onClose()
  }

  const handleClose = () => setShowAlert(true)

  const handleAlertDisagree = () => { setShowAlert(false); onClose() }
  const handleAlertAgree = () => { setShowAlert(false); handleConfirm() }

  return (
    <>
      {/* 개인정보 모달 */}
      <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
        <div className="relative bg-white rounded-2xl w-[90%] max-w-[720px] max-h-[85dvh] flex flex-col overflow-hidden p-[25px_30px_0_20px] box-border">

          {/* 닫기 X */}
          <button onClick={handleClose} className="absolute top-5 right-5 w-5 h-5 z-10">
            <span className="block absolute top-1/2 left-1/2 w-[2px] h-full bg-[#333] -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <span className="block absolute top-1/2 left-1/2 w-[2px] h-full bg-[#333] -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </button>

          {/* 타이틀 */}
          <div className="pr-16 mb-3">
            <h2 className="text-[20px] font-semibold tracking-[-1px] leading-snug mb-3">
              상담 신청을 위한<br />개인정보 수집·이용 동의
            </h2>
            <p className="text-[14px] text-[#777] leading-snug tracking-[-1px]">
              상담 서비스 제공을 위해 고객님의 개인정보 수집, 이용 및 마케팅 활용에 대한 동의를 받고 있습니다.
            </p>
          </div>

          {/* 전체 동의 */}
          <div className="mb-4">
            <label
              onClick={handleAllAgree}
              className={`flex items-center justify-center gap-2 w-full py-[10px] px-5 rounded-xl cursor-pointer ${allRequired ? "bg-[#bbb]" : "bg-[#324891]"}`}
            >
              <p className="text-[18px] font-semibold text-white tracking-[-1px]">전체 동의하기</p>
            </label>
          </div>

          {/* 스크롤 영역 */}
          <div className="overflow-y-auto flex-1 pb-[80px]" style={{ scrollbarWidth: "none" }}>

            {/* 개인정보 수집·이용 동의 */}
            <ContentBox
              id="pri"
              checked={priAgree}
              onChange={(v) => handleIndividual("pri", v)}
              label="개인정보 수집 및 이용 동의"
              required
            >
              <p>
                1. 수집·이용 목적 : 뷰티 서비스 상담 및 제공<br /><br />
                2. 수집 항목 : 이름, 성별, 생년월일, 휴대폰 번호<br /><br />
                3. 보유 및 이용 기간 : 제공일로부터 3년간<br /><br />
                4. 동의를 거부할 권리 : 정보주체는 개인정보 수집·이용 동의를 거부할 권리가 있습니다.
                다만, 동의를 거부하실 경우 뷰티 서비스 상담 관련 서비스를 이용할 수 없습니다.
              </p>
            </ContentBox>

            {/* 개인정보 제3자 제공 동의 */}
            <ContentBox
              id="third"
              checked={thirdAgree}
              onChange={(v) => handleIndividual("third", v)}
              label="개인정보 제3자 제공 동의"
              required
            >
              <p>
                1. 제공받는 자 : 정해나은(멘토)<br /><br />
                2. 제공 목적 : 뷰티 서비스 상담 및 제공<br /><br />
                3. 수집 항목 (필수) : 이름, 성별, 생년월일, 연락처<br /><br />
                4. 보유 기간 : 제공일로부터 3년간<br /><br />
                5. 상담 신청을 위해 필요한 최소한의 개인정보이므로 동의해주셔야 서비스를 이용하실 수 있습니다.
              </p>
            </ContentBox>

            {/* 안내 */}
            <div className="text-[14px] text-[#666] leading-snug tracking-[-1px] space-y-1 pb-2">
              <p>※ 당사는 수집된 개인정보를 이용목적 외 다른 용도로 절대 사용하지 않으며, 정보 주체는 언제든지 개인정보처리방침 내 이메일을 통해 동의를 철회할 수 있으며, 철회하는 경우 수집된 개인정보는 지체 없이 파기됩니다.</p>
              <p className="text-red-500">※ 귀하는 개인정보 수집·3자 제공 동의에 관한 동의를 거부하실 수 있습니다. 다만, 본 동의는 '뷰티 서비스 상담'을 위해 필수적인 사항이므로 동의를 거부하셨을 경우 '뷰티 서비스 상담'이 불가능합니다.</p>
            </div>
          </div>

          {/* 확인하기 버튼 */}
          <button
            onClick={handleConfirm}
            className={`absolute bottom-0 left-0 w-full py-[18px] text-[20px] font-medium text-white tracking-[-1px] text-center transition-colors ${allRequired ? "bg-[#324891]" : "bg-[#bbb] pointer-events-none"}`}
          >
            확인하기
          </button>
        </div>
      </div>

      {/* 이탈 경고 모달 */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center">
          <div className="relative bg-white rounded-2xl w-[90%] max-w-[400px] p-8 text-center">
            <button onClick={() => setShowAlert(false)} className="absolute top-4 right-4 w-5 h-5">
              <span className="block absolute top-1/2 left-1/2 w-[2px] h-full bg-[#333] -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <span className="block absolute top-1/2 left-1/2 w-[2px] h-full bg-[#333] -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </button>
            <span className="flex items-center justify-center gap-2 text-[18px] font-medium text-[#555] mb-5 tracking-[-1px]">
              <i className="flex items-center justify-center w-5 h-5 bg-[#ed4120] rounded-full text-white font-bold text-sm not-italic">!</i>
              알림
            </span>
            <h5 className="text-[20px] font-medium text-[#111] mb-3 tracking-[-1px]">
              <b className="font-semibold text-[#324891]">상담 신청을 포기</b>하고 그냥 나가시겠습니까?
            </h5>
            <p className="text-[16px] text-[#777] leading-snug tracking-[-1px]">
              귀하의 정보는 안전하게 보호되며,<br />동의 후 더욱 편리한 서비스를 이용할 수 있습니다.
            </p>
            <div className="flex justify-center gap-3 mt-5">
              <button onClick={handleAlertDisagree} className="w-[45%] py-3 bg-[#ccc] text-white rounded-xl text-[16px] font-medium tracking-[-1px]">괜찮아요</button>
              <button onClick={handleAlertAgree} className="w-[55%] py-3 bg-[#324891] text-white rounded-xl text-[16px] font-medium tracking-[-1px]">동의하고 계속</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ContentBox({
  id, checked, onChange, label, required, children
}: {
  id: string
  checked: boolean
  onChange: (v: boolean) => void
  label: string
  required: boolean
  children: React.ReactNode
}) {
  return (
    <div className="border border-[#ddd] rounded-[15px] p-[12px_0_12px_12px] mb-3">
      <div className="flex items-center pb-2 relative">
        <input
          type="checkbox"
          id={`${id}-agree`}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute left-0 w-5 h-5 opacity-0 cursor-pointer z-10"
        />
        <i className={`block w-5 h-5 rounded border flex-shrink-0 relative ${checked ? "bg-[#324891] border-[#324891]" : "bg-white border-[#ccc]"}`}>
          {checked && (
            <span className="block absolute top-[2px] left-[6px] w-[5px] h-[10px] border-white border-r-2 border-b-2 rotate-45" />
          )}
        </i>
        <label htmlFor={`${id}-agree`} className="text-[16px] font-semibold text-[#333] tracking-[-1px] pl-2 cursor-pointer">
          {label}
          {required
            ? <b className="text-[#324891] font-bold ml-1">[필수]</b>
            : <b className="text-[#818181] font-normal ml-1">[선택]</b>
          }
        </label>
      </div>
      <div className="h-[110px] overflow-y-auto pt-2 pr-4 text-[14px] text-[#666] leading-snug tracking-[-1px]">
        {children}
      </div>
    </div>
  )
}
