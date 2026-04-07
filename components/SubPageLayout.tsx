import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          {children}


        </div>

        <Sidebar />
      </div>
    </div>
  );
}
