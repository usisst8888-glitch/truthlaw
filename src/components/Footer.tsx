import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pb-36 md:pb-48">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <Image src="/logo.png" alt="오현식 법무사 사무소" width={180} height={32} className="brightness-0 invert" />
          <div className="text-xs md:text-right space-y-0.5 leading-relaxed">
            <p>상호: 오현식 법무사 사무소 | 대표: 오현식 | 사업자등록번호: 765-74-00108</p>
            <p>주소: 경기도 부천시 길주로 219 드림빌딩 402호 | 연락처: 032-710-1997</p>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-4">
          <p className="text-[11px] text-zinc-500">Copyright All right reserved truthlaw.kr</p>
        </div>
      </div>
    </footer>
  );
}
