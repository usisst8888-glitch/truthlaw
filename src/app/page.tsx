import Image from "next/image";
import Link from "next/link";

const topSections = [
  { src: "/pc_section/section_01.png", alt: "섹션 1" },
  { src: "/pc_section/section_02.png", alt: "섹션 2" },
  { src: "/pc_section/section_03.png", alt: "섹션 3" },
];

const bottomSections = [
  { src: "/pc_section/section_05.png", alt: "섹션 5" },
  { src: "/pc_section/section_06.png", alt: "섹션 6" },
];

const mobileTopSections = [
  { src: "/mobile_section/m_section_01.png", alt: "모바일 섹션 1" },
  { src: "/mobile_section/m_section_02.png", alt: "모바일 섹션 2" },
  { src: "/mobile_section/m_section_03.png", alt: "모바일 섹션 3" },
];

const mobileBottomSections = [
  { src: "/mobile_section/m_section_05.png", alt: "모바일 섹션 5" },
  { src: "/mobile_section/m_section_06.png", alt: "모바일 섹션 6" },
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
      {/* 모바일 */}
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

        {/* 모바일 섹션 4 - 이미지 위에 카드 오버레이 */}
        <div className="relative w-full">
          <Image
            src="/mobile_section/m_section_04.png"
            alt="모바일 섹션 4"
            width={750}
            height={1334}
            className="w-full h-auto"
          />
          <div className="absolute bottom-[8%] left-0 right-0 flex justify-center">
            <div className="grid grid-cols-2 gap-2 w-[90%]">
              {serviceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block rounded-lg p-4 hover:brightness-95 transition-all relative min-h-[130px]"
                  style={{ backgroundColor: "#D3D3D3" }}
                >
                  <div className="absolute top-3 right-3 text-zinc-400 group-hover:text-zinc-500 transition-colors">
                    {card.icon}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-base font-bold text-zinc-800 mb-1">{card.title}</h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

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

      {/* 데스크탑: PC 전용 이미지 + 섹션4 카드 오버레이 */}
      <div className="hidden md:block">
        {topSections.map((section) => (
          <Image
            key={section.src}
            src={section.src}
            alt={section.alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        ))}

        {/* 섹션 4 - 이미지 위에 카드 오버레이 */}
        <div className="relative w-full">
          <Image
            src="/pc_section/section_04.png"
            alt="섹션 4"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <div className="flex absolute bottom-[15%] left-0 right-0 justify-center">
            <div className="grid grid-cols-4 gap-6 w-[85%]">
              {serviceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block rounded-lg p-10 hover:brightness-95 transition-all relative min-h-[280px]"
                  style={{ backgroundColor: "#D3D3D3" }}
                >
                  <div className="absolute top-8 right-8 text-zinc-400 group-hover:text-zinc-500 transition-colors">
                    {card.icon}
                  </div>
                  <div className="absolute bottom-8 left-10 right-10">
                    <h3 className="text-2xl font-bold text-zinc-800 mb-3">{card.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {bottomSections.map((section) => (
          <Image
            key={section.src}
            src={section.src}
            alt={section.alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
}
