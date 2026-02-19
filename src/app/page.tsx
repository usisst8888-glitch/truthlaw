import Image from "next/image";

const sections = [
  { src: "/pc_section/section_01.png", alt: "섹션 1" },
  { src: "/pc_section/section_02.png", alt: "섹션 2" },
  { src: "/pc_section/section_03.png", alt: "섹션 3" },
  { src: "/pc_section/section_04.png", alt: "섹션 4" },
  { src: "/pc_section/section_05.png", alt: "섹션 5" },
  { src: "/pc_section/section_06.png", alt: "섹션 6" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {sections.map((section) => (
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
