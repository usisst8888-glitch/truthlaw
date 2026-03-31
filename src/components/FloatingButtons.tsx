"use client";

import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 flex flex-col gap-3">
      {/* 카카오톡 */}
      <Link
        href="https://pf.kakao.com/_HxlMxnG"
        target="_blank"
        className="w-14 h-14 rounded-full bg-[#FEE500] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="#3C1E1E" className="w-7 h-7">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.53-.96 3.41-1 3.56 0 .07.03.14.09.18a.17.17 0 00.19-.01c.27-.18 3.15-2.1 3.67-2.46.46.07.93.1 1.4.1 5.52 0 10-3.58 10-7.97C22 6.58 17.52 3 12 3z" />
        </svg>
      </Link>
      {/* 전화 */}
      <Link
        href="tel:032-710-1997"
        className="w-14 h-14 rounded-full bg-[#1a2744] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}
