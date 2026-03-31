const flowSteps = [
  { title: "신청", desc: "변제계획안제출", sub: "신청일로부터 14일이내", highlight: false },
  { title: "개인회생위원 선임", desc: "", sub: "", highlight: false },
  { title: "보전처분중지명령", desc: "", sub: "", highlight: false },
  { title: "개시결정", desc: "", sub: "신청일로부터 1개월이내", highlight: false },
  { title: "채권이의기간", desc: "", sub: "개시결정일로부터 2개월이내", highlight: true, branch: "채권자의 이의", branchTo: "채권조사확정재판" },
  { title: "채권자집회", desc: "", sub: "개시결정일로부터 3개월이내", highlight: false },
  { title: "변제계획인가", desc: "", sub: "신용불량 등록해제", highlight: true, branch: "불인가", branchTo: "폐지" },
  { title: "변제계획의 수행", desc: "", sub: "개인회생위원 감독", highlight: true, branch: "미수행", branchTo: "폐지 (신용불량정보 재등록)" },
  { title: "면책", desc: "", sub: "5년이내 재신청 금지", highlight: true, branch: "부정방법", branchTo: "면책의 취소" },
];

function FlowCard({ step, num }: { step: typeof flowSteps[number]; num: number }) {
  return (
    <div className="flex flex-col w-[270px] shrink-0">
      <div className="bg-zinc-50 rounded-2xl p-6 relative h-[180px]">
        {step.highlight && <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 rounded-t-2xl" />}
        <span className={`text-xs font-bold ${step.highlight ? "text-amber-600" : "text-zinc-400"}`}>
          STEP {String(num).padStart(2, "0")}
        </span>
        <h3 className={`font-bold text-lg mt-2 ${step.highlight ? "text-amber-700" : "text-zinc-900"}`}>
          {step.title}
        </h3>
        {step.desc && <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{step.desc}</p>}
        {step.sub && <p className="text-zinc-400 text-xs mt-1">({step.sub})</p>}
        {step.branch && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-200">
            <span className="text-zinc-400 text-xs shrink-0">{step.branch}</span>
            <span className="text-zinc-300 shrink-0">→</span>
            <span className="text-red-600 font-bold text-xs shrink-0">{step.branchTo}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function HArrow({ reverse }: { reverse?: boolean }) {
  return (
    <div className="w-[40px] shrink-0 flex items-center justify-center h-[180px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-zinc-300 ${reverse ? "rotate-180" : ""}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </div>
  );
}

function VArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-300">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  );
}

export default function RehabilitationPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 */}
      <section className="bg-[#1a2744] py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">개인회생</h1>
          <div className="w-12 h-1 bg-sky-400 mb-4" />
          <p className="text-white/60 text-sm md:text-base">채무자의 경제적 재기를 위한 법적 절차</p>
        </div>
      </section>

      {/* 개인회생이란? */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">◆</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">개인회생이란?</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              개인회생제도는, 재정적 어려움으로 인하여 파탄에 직면하고 있는 개인채무자로서 장래 계속적으로
              또는 반복하여 수입을 얻을 가능성이 있는 자에 대하여 채권자 등 이해관계인의 법률관계를 조정함으로써
              채무자의 효율적 회생과 채권자의 이익을 도모하기 위하여 마련된 절차로서, 2004. 9. 23부터 시행하게
              되었습니다. 즉 개인회생제도란, 총 채무액이 무담보채무에 경우에는10억원,담보채무의 경우에는 15억원,
              이하인 개인채무자로서 장래 계속적으로 또는 반복하여 수입을 얻을 가능성이 있는 자가 3년 내지 5년간
              일정한 금액을 변제하면 나머지 채무의 면제를 받을 수 있는 절차입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 이용대상 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">개인회생 이용대상</h2>
          </div>
          <p className="text-zinc-600 text-sm md:text-base mb-6">
            무담보채무 10억원 담보부채무15억원이하의 채무를 가지신 분 중 아래와 같은 분들은 가능합니다.
          </p>
          <div className="space-y-3 mb-8">
            {[
              "급여소득자나 영업소득자",
              "공무원등 특정자격 소유자",
              "법정생계비이상의 소득이 있거나 재산을 유지하고 싶은경우",
              "외국인이라도 신청이 가능합니다.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#1a2744] font-bold text-sm mt-0.5">{i + 1}.</span>
                <span className="text-zinc-700 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 border border-zinc-200">
            <h3 className="font-bold text-zinc-900 mb-3">5. 제외대상</h3>
            <div className="space-y-2 text-sm md:text-base text-zinc-600">
              <p className="flex items-start gap-2"><span className="shrink-0">-</span> 채권자</p>
              <p className="flex items-start gap-2"><span className="shrink-0">-</span> 개인회생절차는 개인만이 이용할 수 있는 제도이기 때문에 조합이나 주식회사, 사단법인, 재단법인등 법인은 이용할 자격이 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 신청흐름도 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">개인회생 신청흐름도</h2>
          </div>

          {/* PC: 전체 폭 890px (카드270×3 + 화살표40×2) */}
          <div className="hidden md:block w-[890px] mx-auto">
            {/* Row 1: 1→2→3 */}
            <div className="flex">
              <FlowCard step={flowSteps[0]} num={1} />
              <HArrow />
              <FlowCard step={flowSteps[1]} num={2} />
              <HArrow />
              <FlowCard step={flowSteps[2]} num={3} />
            </div>
            {/* ↓ 오른쪽 정렬 (3번 카드 중앙) */}
            <div className="flex justify-end pr-[135px] py-2"><VArrow /></div>
            {/* Row 2: 6←5←4 (오른쪽→왼쪽) */}
            <div className="flex">
              <FlowCard step={flowSteps[5]} num={6} />
              <HArrow reverse />
              <FlowCard step={flowSteps[4]} num={5} />
              <HArrow reverse />
              <FlowCard step={flowSteps[3]} num={4} />
            </div>
            {/* ↓ 왼쪽 정렬 (6번 카드 중앙) */}
            <div className="flex justify-start pl-[135px] py-2"><VArrow /></div>
            {/* Row 3: 7→8→9 */}
            <div className="flex">
              <FlowCard step={flowSteps[6]} num={7} />
              <HArrow />
              <FlowCard step={flowSteps[7]} num={8} />
              <HArrow />
              <FlowCard step={flowSteps[8]} num={9} />
            </div>
          </div>

          {/* 모바일 */}
          <div className="md:hidden space-y-3">
            {flowSteps.map((step, i) => (
              <div key={i}>
                <div className="bg-zinc-50 rounded-2xl p-5 relative">
                  {step.highlight && <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 rounded-t-2xl" />}
                  <span className={`text-xs font-bold ${step.highlight ? "text-amber-600" : "text-zinc-400"}`}>
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`font-bold text-lg mt-1 ${step.highlight ? "text-amber-700" : "text-zinc-900"}`}>
                    {step.title}
                  </h3>
                  {step.desc && <p className="text-zinc-500 text-sm mt-1">{step.desc}</p>}
                  {step.sub && <p className="text-zinc-400 text-xs mt-1">({step.sub})</p>}
                  {step.branch && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-200">
                      <span className="text-zinc-400 text-sm">{step.branch}</span>
                      <span className="text-zinc-300">→</span>
                      <span className="text-red-600 font-bold text-sm">{step.branchTo}</span>
                    </div>
                  )}
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
