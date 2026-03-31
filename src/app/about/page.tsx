const timelineItems = [
  {
    title: "출생·혼인",
    items: ["개명·이혼", "가사소송·가사비송"],
  },
  {
    title: "기업 법무",
    items: ["창업·상업등기", "기업법률상담", "상사소송"],
  },
  {
    title: "파산·회생",
    items: ["개인회생", "법인회생", "파산·면책"],
  },
  {
    title: "부동산등기",
    items: ["소유권이전", "담보설정", "재개발·재건축"],
  },
  {
    title: "법률 분쟁",
    items: ["민사·형사", "가압류·가처분", "집행·공탁"],
  },
  {
    title: "성년후견",
    items: ["신탁", "재산관리", "신상보호"],
  },
  {
    title: "사망·상속",
    items: ["상속등기", "상속포기", "한정승인"],
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 */}
      <section className="relative bg-stone-100 py-16 md:py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-amber-600 text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Oh Hyun-Sik Judicial Scrivener Office
          </p>
          <h1 className="font-serif text-3xl md:text-6xl font-bold text-stone-800 mb-3 tracking-tight">
            오현식 법무사 사무소
          </h1>
          <div className="w-10 h-[2px] bg-amber-500 mx-auto mb-3" />
          <p className="text-stone-500 text-sm md:text-base">
            당신의 권리, 끝까지 함께하겠습니다
          </p>
        </div>
      </section>

      {/* 인사말 섹션 */}
      <section className="bg-white py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-3/5">
            <p className="font-serif text-lg md:text-xl text-stone-700 leading-[1.9] mb-5">
              저희 법무사 사무소는
            </p>
            <p className="font-serif text-lg md:text-xl text-stone-600 leading-[1.9] mb-5">
              살아오면서 힘든 순간을<br />
              벗어나기 위해 분투하시는<br />
              분들에게 <span className="text-amber-600 font-bold">도움</span>이 되겠습니다.
            </p>
            <p className="font-serif text-lg md:text-xl text-stone-600 leading-[1.9] mb-5">
              살아오면서 기쁜 시간을<br />
              영위하기 위해 노력하시는<br />
              분들에게 <span className="text-amber-600 font-bold">보탬</span>이 되겠습니다.
            </p>
            <p className="font-serif text-lg md:text-xl text-stone-600 leading-[1.9] mb-6">
              항상 고객의 입장에서 성실하고<br />
              정직하게 사건을 진행하여<br />
              <span className="text-amber-600 font-bold">만족</span>을 드리겠습니다.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-amber-500" />
              <p className="font-serif text-base md:text-lg text-stone-800 font-bold">
                법무사 오현식
              </p>
            </div>
          </div>

          {/* 오른쪽 장식 */}
          <div className="hidden md:flex w-2/5 flex-col items-center">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50 border border-stone-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-amber-400/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-amber-500/70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <p className="text-amber-600/50 text-xs tracking-[0.25em] uppercase">Justice &amp; Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 업무 분야 타임라인 */}
      <section className="bg-stone-50 py-10 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-amber-600 text-xs tracking-[0.3em] uppercase mb-2">Our Services</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-stone-800 mb-3">업무 분야</h2>
            <div className="w-10 h-[2px] bg-amber-500 mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-300/0 via-amber-400/40 to-amber-300/0" />
            <div className="md:hidden absolute left-[5px] top-2 bottom-2 w-[1px] bg-amber-300/40" />

            <div className="space-y-4 md:space-y-0">
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 pl-7 md:pl-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } md:mb-6`}
                >
                  <div className={`w-full md:w-[calc(50%-30px)] ${i % 2 === 0 ? "md:text-right md:pr-3" : "md:text-left md:pl-3"}`}>
                    <div className="bg-white border border-stone-200 rounded-lg p-4 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 group">
                      <h3 className="text-base md:text-lg font-bold text-stone-800 mb-1 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 text-xs md:text-sm">
                        {item.items.join("  ·  ")}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-[60px] justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-stone-50" />
                  </div>

                  <div className="md:hidden absolute left-0 top-4 w-[11px] h-[11px] rounded-full bg-amber-400 ring-3 ring-stone-50" />

                  <div className="hidden md:block w-[calc(50%-30px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
