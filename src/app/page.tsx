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

const serviceCards = [
  { src: "/pc_section/sec04_04.png", alt: "개인파산", href: "/bankruptcy" },
  { src: "/pc_section/sec04_03.png", alt: "개인회생", href: "/rehabilitation" },
  { src: "/pc_section/sec04_02.png", alt: "민사", href: "/civil" },
  { src: "/pc_section/sec04_01.png", alt: "등기", href: "/registry" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
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

      {/* 섹션 4 - 배경 이미지 위에 카드 배치 */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/pc_section/section_04.png)" }}
      >
        <div className="w-full aspect-[1920/600] flex items-end justify-center pb-[4%]">
          <div className="grid grid-cols-4 gap-4 w-full max-w-5xl px-6">
            {serviceCards.map((card) => (
              <Link key={card.href} href={card.href} className="block hover:opacity-90 transition-opacity">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
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
  );
}
