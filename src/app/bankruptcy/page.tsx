export default function BankruptcyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 */}
      <section className="bg-[#1a2744] py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">개인파산</h1>
          <div className="w-12 h-1 bg-sky-400 mb-4" />
          <p className="text-white/60 text-sm md:text-base">채무 탕감을 통한 경제적 재기 절차</p>
        </div>
      </section>

      {/* 개인파산이란? */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">◆</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">개인파산이란?</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              파산절차의 주된 목적은 총 채권자 사이의 평등한 채권만족을 보장하는데 있으나, 파산자가 자연인인 경우 파산절차
              종료 후 면책절차를 통하여 경제적으로 재기, 갱생할 수 있는 기회를 부여하는 것도 중요한 목적입니다. 파산신청은
              채무자나 채권자가 할 수 있고 그중 채무자가 스스로 파산신청을 하는 것을 자기 파산이라고 합니다.
              자신의 모든 재산으로도 채무를 변제할 수 없는 지급불능상태의 채무자가 이용할 수 있는 제도입니다. 신청자가 파산선고 후
              면책을 받으면 모든 채무를 탕감 받을 수 있으며, 법적불이익도 없고 파산했다는 기록도 남지 않아 완전히 새로운
              인생을 사실수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 파산신고 불이익 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">파산신고 불이익</h2>
          </div>
          <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-8">
            일반적으로 파산을 고려함에 있어 가장 우려하는 부분이 바로 파산으로 인한 무슨 불이익이 없는가 하는 점입니다.
            법원은 채무자가 지급불능, 즉 파산원인이 있다고 인정하면 파산선고를 하는데, 파산선고가 내려지면 채무자는 파산자가 되고,
            파산자는 파산법에 의하여 면책될 때까지 다음과 같은 불이익을 입게 됩니다. 그러나 현재 파산선고 후 면책때까지 3개월
            정도밖에 소요되지 않으므로 이기간 동안만 파산자의 지위에 서게 됩니다. 더욱이 아래에서 보는 것처럼 파산선고로 인한
            불이익은 일반인들에게는 거의 의미가 없는 것들입니다. 또한, 위 경미한 파산의 불이익은 파산자 본인만 받게 되며 가족 등
            다른사람에게는 영향을 미치지 않습니다.
          </p>

          {/* 1) 법적 제한 */}
          <div className="bg-white rounded-xl p-6 border border-zinc-200 mb-6">
            <h3 className="font-bold text-zinc-900 text-lg mb-4">1) 법적 제한</h3>

            <h4 className="font-bold text-zinc-800 mb-2">가) 사법상 자격</h4>
            <p className="text-zinc-600 text-sm leading-[1.9] mb-2">
              후견인, 친족회원, 유언집행자, 수탁자가 될 수 없습니다. 다만, 권리능력, 행위능력 &amp; 소송능력은 제한 받지 아니합니다.
            </p>
            <p className="text-zinc-500 text-sm mb-4">
              - 면책결정을 받자마자 이러한 제한은 소멸됩니다. 실질적으로 이러한 직책을 가질 수가 없다고 하여도 생활에 아무런 지장이 없습니다.
            </p>

            <h4 className="font-bold text-zinc-800 mb-2">나) 공법상 자격</h4>
            <p className="text-zinc-600 text-sm leading-[1.9] mb-2">
              공무원,변호사,공인회계사,변리사,공증인,부동산중개업자,사립학교교원,의사,한의사,간호사,약사,건축사 등이 될수 없습니다.
            </p>
            <p className="text-zinc-500 text-sm mb-2">
              - 아직 자격을 취득하지 않은 사람은 면책결정을 받으면 이러한 제한은 소멸되므로 다시 이러한 자격을 취득할수 있습니다.
            </p>
            <p className="text-zinc-500 text-sm mb-4">
              - 이미 자격을 취득한 전문직 종사자의 경우에는 파산선고가 있더라도 자격박탈이 되는 것이 아니라 자격정지만 되며 그것도
              면책 후에는 풀리게 됩니다. 하지만 이미 공무원, 교사의 지위에 있는 사람은 파산선고로 자동 퇴직이 되므로 주의하여야
              합니다. 다만, 대통령,국회의원,지방자치단체장의 선거권 및 피선거권은 유지 됩니다.
            </p>

            <h4 className="font-bold text-zinc-800 mb-2">다) 상법상 자격</h4>
            <p className="text-zinc-600 text-sm leading-[1.9] mb-2">
              합명회사, 합자회사 사원의 퇴사 원인이 되고, 주식회사, 유한회사와 위임관계에 있는 이사의 경우 그 위임관계가 파산서고로
              종료되어 당연 퇴임하게 되며, 회사의 사규나 취업규칙에 파산자는 당연퇴직사 사유가 되는지 확인하셔야 합니다.
            </p>
            <p className="text-zinc-500 text-sm mb-4">
              - 면책 후 회사에서 다시 선임하여 주면 되기 때문에 문제가 되지 않습니다.
            </p>

            <h4 className="font-bold text-zinc-800 mb-2">라) 파산관재인, 채권자집회의 요청이 있으면 파산에 관하여 필요한 경우 설명을 할 의무가 있습니다.</h4>
            <p className="text-zinc-500 text-sm mb-4">
              - 파산선고 후 파산절차 종결 전 비당할 때에 해당하는 것입니다. 개인파산은 파산선고와 동시에 절차가 폐지되기 때문에
              파산자는 이런의무를 부담하지 않습니다.
            </p>

            <h4 className="font-bold text-zinc-800 mb-2">마) 파산자는 법원의 허가를 얻지 아니하면 그 거주지를 떠날 수 없습니다.</h4>
            <p className="text-zinc-500 text-sm mb-2">
              - 이 부분은 일반에서 오해가 많이 되고 있는 조항입니다. 이것은 (라)항처럼 파산선고 후 파산종결시 까지 사이에 파산자가
              도망가는 것을 금지하기 위해서 만들어진 조항입니다.
            </p>
            <p className="text-zinc-500 text-sm">
              따라서 파산선고와 동시에 절차가 폐지되는 개인파산은 전혀 해당사항이 없습니다.
            </p>
          </div>

          {/* 2) 경제활동의 제한 */}
          <div className="bg-white rounded-xl p-6 border border-zinc-200 mb-6">
            <h3 className="font-bold text-zinc-900 text-lg mb-4">2) 경제활동의 제한</h3>
            <p className="text-zinc-600 text-sm leading-[1.9] mb-4">
              파산자는 법률상의 제한 이외에도 파산선고결정이 확정되면 파산자의 신원 증명 업무를 담당하는 본적지 시.구.읍 면장에게
              파산선고사실이 통지되어 신원증명서에 신원증명사항의 하나로 기재되어 사회적 평가상의 불이익을 받게 됩니다.
              그러나 면책결정이 확정되면 즉시 시.구.읍 면장에게 통지되어 파산사실이 삭제되므로, 신원조회상 불이익을 받는 기간은
              파산결정 확정 후부터 면책결정이 확정되기 전까지의 약 3개월 기간입니다. 이 기간 내에도 요즘은 취업 등에 있어서
              신원증명을 요구하거나 신원조회를 하지 않으므로 큰 문제는 없다고 보여집니다.
            </p>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 text-lg shrink-0">►</span>
              <p className="text-zinc-700 text-sm font-medium">이러한 불이익을 없앨 수 있는 절차가 면책 및 복권 절차입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 파산절차의 종결 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">파산절차의 종결</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
              개인파산의 경우, 대부분 채무자에게 배당의 재원이 될 만한 재산이 거의 남아있지 아니하여 이를 금전적으로 환가하여도
              파산절차의 비용에도 충당할 수 없기 때문에 파산관재인의 선임, 파산채권의 조사,확정, 파산재단의 관리,환가,배당등의
              절차를 진행하지 않고, 파산선고와 동시에 파산절차를 종결하는 것을[동시폐지]라고 하며, 동시폐지 결정이 확정되면
              파산절차는 마무리 됩니다.
            </p>
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              개인파산신청을 할때에는 파산신청서와 다음과 같은 서류와 각해당 서류별 첨부서류를 첨조 하여야 합니다.
            </p>
          </div>

          {/* 서류 스텝 */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
            {[
              { step: "STEP 1", label: "파산신청서" },
              { step: "STEP 2", label: "간술서" },
              { step: "STEP 3", label: "채권자일람표" },
              { step: "STEP 4", label: "재산목록" },
              { step: "STEP 5", label: "현재의생활\n상황" },
              { step: "STEP 6", label: "가계수지표" },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center">
                <span className="text-amber-600 text-xs font-bold">{item.step}</span>
                <p className="text-zinc-800 text-sm font-bold mt-1 whitespace-pre-line">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 파산에서 면책까지의 절차 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">파산에서 면책까지의 절차</h2>
          </div>
          <div className="space-y-4">
            {[
              "파산신청서를 법원에 제출하면 1달 정도 후에 심문일자가 정해져서 신청인(채무자)에게 심문기일을 채권자들에게 의견청취서를 보냅니다.(심리를 하지 않고 신청서류만으로 파산여부를 결정할 수도 있습니다.)",
              "심문)재판 증결 후 3주 정도 지나면 파산여부에 대한 결정문과 면책절차에 대한 안내문을 받게 됩니다.",
              "소정의 기간(1개월) 내에 면책신청서를 제출 하여야합니다.\n면책신청서의 양식은 파산과 접수계에 비치되어 있습니다.",
              "면책 신청서 접수 후, 1~2개월 후, 면책에 대한 심문기일이 지정됩니다.",
              "심문 종결 후 1개월 이상의 채권자 이의기간, 의견청취기일 등을 거쳐 면책신청일로 부터 4~5개월이 지나면 면책 여부에 대한 결정을 받게 됩니다.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-zinc-200">
                <span className="w-7 h-7 rounded-full bg-[#1a2744] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-zinc-700 text-sm leading-[1.9] whitespace-pre-line">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
