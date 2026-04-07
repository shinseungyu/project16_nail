"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Calculator() {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full flex-1 flex flex-col pb-10 bg-white">
      <div className="px-5 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">네일샵 창업 비용<br/>계산기</h2>
        <p className="text-sm text-gray-500 mb-8">나만의 네일샵, 창업 비용을 예상해보세요.</p>
        
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-gray-600 text-sm">곧 업데이트 될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
}
