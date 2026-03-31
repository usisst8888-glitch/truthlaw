import Image from "next/image";
import Link from "next/link";
import MapPopup from "@/components/MapPopup";

const pcSections = [
  { content: "/pc_section/section_01.png", bg: "/pc_section/main_banner_bg01.png", alt: "섹션 1", w: 1259, h: 358, bgRatio: "1920/590" },
  { content: "/pc_section/section_02.png", bg: "/pc_section/main_banner_bg02.png", alt: "섹션 2", w: 1724, h: 742, bgRatio: "1920/742" },
  { content: "/pc_section/section_03.png", bg: "/pc_section/main_banner_bg03.png", alt: "섹션 3", w: 1420, h: 395, bgRatio: "1920/700" },
];

const pcSection5 = { content: "/pc_section/section_05.png", bg: "/pc_section/main_banner_bg05.png", alt: "섹션 5", w: 1760, h: 590, bgRatio: "1920/698" };

const mobileTopSections = [
  { src: "/mobile_section/m_section_01.png", alt: "모바일 섹션 1" },
  { src: "/mobile_section/m_section_02.png", alt: "모바일 섹션 2" },
  { src: "/mobile_section/m_section_03.png", alt: "모바일 섹션 3" },
];

const mobileBottomSections = [
  { src: "/mobile_section/m_section_05.png", alt: "모바일 섹션 5" },
  { src: "/mobile_section/m_section_07.png", alt: "모바일 섹션 7" },
];

const serviceCards = [
  {
    title: "개인파산",
    desc: "채무자가 빚을 갚을 수 없는 상태일 때 법원을 통해 채무를 탕감받고 경제적 재기를 돕는 절차입니다.",
    href: "/bankruptcy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "개인회생",
    desc: "지속적 수입이 있는 채무자가 법원의 인가를 받아 일정 기간 빚을 분할 상환하고 나머지를 면책받는 제도입니다.",
    href: "/rehabilitation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
  },
  {
    title: "민사",
    desc: "개인 또는 단체 간 발생한 금전, 계약, 재산 등 권리 분쟁을 해결하기 위한 법률상 절차를 말합니다.",
    href: "/civil",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "등기",
    desc: "동산이나 법인의 권리관계를 공적으로 증명하고 보호하기 위해 법원 또는 등기소에 등록하는 절차입니다.",
    href: "/registry",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 모바일: 상단 이미지 */}
      <div className="md:hidden">
        {mobileTopSections.map((section) => (
          <Image
            key={section.src}
            src={section.src}
            alt={section.alt}
            width={750}
            height={1334}
            className="w-full h-auto"
          />
        ))}
      </div>

      {/* 데스크탑: 상단 섹션 (배경 비율 고정 + 콘텐츠 원본 최대) */}
      <div className="hidden md:block">
        {pcSections.map((section) => (
          <div
            key={section.content}
            className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${section.bg})`, aspectRatio: section.bgRatio }}
          >
            <Image
              src={section.content}
              alt={section.alt}
              width={section.w}
              height={section.h}
              className="h-auto"
              style={{ maxWidth: `${section.w}px`, width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* 섹션 4 - 코드 기반 (모바일/데스크탑 공통) */}
      <section className="bg-zinc-900 py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-xl md:text-4xl font-bold mb-2 md:mb-3 text-right">
            의뢰인의 소중한 권익을 지키는 것을 최우선으로 하며,
          </h2>
          <p className="text-zinc-400 text-sm md:text-xl mb-8 md:mb-12 text-right">
            끝까지 책임감 있게 함께하여 만족스러운 결과로 보답하겠습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block rounded-lg p-4 md:p-10 hover:brightness-95 transition-all relative min-h-[150px] md:min-h-[280px]"
                style={{ backgroundColor: "#D3D3D3" }}
              >
                <div className="absolute top-3 right-3 md:top-8 md:right-8 text-zinc-400 group-hover:text-zinc-500 transition-colors">
                  {card.icon}
                </div>
                <div className="absolute bottom-3 left-4 right-4 md:bottom-8 md:left-10 md:right-10">
                  <h3 className="text-base md:text-2xl font-bold text-zinc-800 mb-1 md:mb-3">{card.title}</h3>
                  <p className="text-[11px] md:text-sm text-zinc-500 leading-relaxed">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 모바일: 하단 이미지 */}
      <div className="md:hidden">
        {mobileBottomSections.map((section) => (
          <Image
            key={section.src}
            src={section.src}
            alt={section.alt}
            width={750}
            height={1334}
            className="w-full h-auto"
          />
        ))}
      </div>

      {/* 데스크탑: 섹션 5 */}
      <div className="hidden md:block">
        <div
          className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          id="section5"
          style={{ backgroundImage: `url(${pcSection5.bg})`, aspectRatio: pcSection5.bgRatio }}
        >
          <Image
            src={pcSection5.content}
            alt={pcSection5.alt}
            width={pcSection5.w}
            height={pcSection5.h}
            className="h-auto"
            style={{ maxWidth: `${pcSection5.w}px`, width: "100%" }}
          />
        </div>
      </div>

      {/* 섹션 6 (모바일/데스크탑 공통 - 배경 + 조합) */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/pc_section/main_banner_bg06.png)" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center px-4 md:px-8 py-8 md:py-10">
          {/* 타이틀 */}
          <Image
            src="/pc_section/section_06_title.png"
            alt="오현식 법무사 사무소 오시는길"
            width={460}
            height={144}
            className="h-auto mb-6 md:mb-8"
            style={{ maxWidth: "460px", width: "100%" }}
          />
          {/* PC: 가로 배치 */}
          <div className="hidden md:flex items-start gap-10 w-full">
            <MapPopup />
            <div className="flex flex-col gap-5">
              <Image
                src="/pc_section/section_06_dec.png"
                alt="사무소 정보"
                width={492}
                height={166}
                className="h-auto"
                style={{ maxWidth: "492px" }}
              />
              <div className="grid grid-cols-2 gap-3">
                <Link href="https://open.kakao.com" target="_blank">
                  <Image src="/pc_section/section_06_item_01.png" alt="카카오톡 상담하기" width={255} height={54} className="h-auto" style={{ maxWidth: "220px" }} />
                </Link>
                <Link href="tel:032-710-1997">
                  <Image src="/pc_section/section_06_item_02.png" alt="전화상담하기" width={255} height={54} className="h-auto" style={{ maxWidth: "220px" }} />
                </Link>
                <Link href="#section5">
                  <Image src="/pc_section/section_06_item_03.png" alt="자주묻는질문 가기" width={255} height={54} className="h-auto" style={{ maxWidth: "220px" }} />
                </Link>
                <Link href="/support">
                  <Image src="/pc_section/section_06_item_04.png" alt="공지사항 가기" width={255} height={54} className="h-auto" style={{ maxWidth: "220px" }} />
                </Link>
              </div>
            </div>
          </div>
          {/* 모바일: 세로 배치 */}
          <div className="md:hidden flex flex-col items-center gap-5 w-full">
            <MapPopup />
            <Image
              src="/pc_section/section_06_dec.png"
              alt="사무소 정보"
              width={492}
              height={166}
              className="h-auto w-full"
              style={{ maxWidth: "400px" }}
            />
            <div className="grid grid-cols-2 gap-2 w-full" style={{ maxWidth: "400px" }}>
              <Link href="https://open.kakao.com" target="_blank">
                <Image src="/pc_section/section_06_item_01.png" alt="카카오톡 상담하기" width={255} height={54} className="w-full h-auto" />
              </Link>
              <Link href="tel:032-710-1997">
                <Image src="/pc_section/section_06_item_02.png" alt="전화상담하기" width={255} height={54} className="w-full h-auto" />
              </Link>
              <Link href="#section5">
                <Image src="/pc_section/section_06_item_03.png" alt="자주묻는질문 가기" width={255} height={54} className="w-full h-auto" />
              </Link>
              <Link href="/support">
                <Image src="/pc_section/section_06_item_04.png" alt="공지사항 가기" width={255} height={54} className="w-full h-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
