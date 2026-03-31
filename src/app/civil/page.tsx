export default function CivilPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 */}
      <section className="bg-[#1a2744] py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">민사소송</h1>
          <div className="w-12 h-1 bg-sky-400 mb-4" />
          <p className="text-white/60 text-sm md:text-base">개인간 분쟁을 법적으로 해결하는 절차</p>
        </div>
      </section>

      {/* 민사소송이란? */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">민사소송이란?</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              개인간 분쟁을 법원이 주체가 되어 국가의 법에 따라 재판으로 해결하는 절차 입니다.
              사법상의 분쟁을 대상으로 하는 점에서 공법인 형사소송과 행정소송과 구별되며 강제력이 있어서 조정이나 중재와는 또 구분됩니다.
              즉, 국가와 사회의 필요성에 의해 국가가법원을 설치하고 개인이 이용할 수 있도록 한 것이 민사소송제도 입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 민사소송의 필요성 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">민사소송의 필요성</h2>
          </div>
          <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-6">
            개인간 분쟁시 항상 당사자간이 화해나 협의에 의해 자주적으로 해결되지는 않습니다. 강자의 입장에 있는 경우 힘에 의한
            폭력사태등이 발생할 수도 있습니다. 이때에는 국가도 사적 자치의 원리를 내세워 무관심할 수없고, 한쪽의 의사에 어긋나더라도
            사회안정과 사회정의를 실현하는 방향으로 해결을 도모해야 합니다. 개인간 분쟁이 협상이나 해결의 실마리가 보이지 않을 경우
            민사소송을 통해 당사자의 의사에 반하더라도 분쟁해결을 꾀한다는 점에서 민사분쟁을 강제적으로 해결 할 수 있습니다.
          </p>
          <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
            실생활을 예로 들면 개인간의 분쟁에는 토지, 가옥의 인도 및 소유권 귀속분쟁, 빌려준 돈의 반환, 매매대금의 지급, 손해배상등
            여러가지가 있는데, 분쟁당사자간의 합의에 따라 해결이 되지 않으면 민사소송을 통해 강제적으로 해결 해야 합니다.
          </p>
          <p className="text-zinc-600 text-sm font-medium">유언공증의 경우</p>
        </div>
      </section>

      {/* 민사소송의 장점 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">민사소송의 장점</h2>
          </div>
          <div className="space-y-4">
            {[
              "소송과 같은 엄격한 절차를 거치지 아니하고 자유로운 분위기에서 자신의 의견을 충분히 말할 수 있습니다.",
              "소송에 비하여 신속한 해결이 가능합니다. 민사조정을 신청하면 빠른시일내에 조정기일이 정해지고, 대부분 한번의 기일로 종료",
              "소송에 비하여 인지대가 1/5로 비용이 저렴합니다.",
              "당사자 사이의 상호타협과 양보에 의하여 분쟁을 해결하므로 감정대립이 남지 아니합니다.",
              "일반적으로 민사조정절차는 조정담당판사 또는 조정위원회가 딱딱한 법정이 아닌 자유로운 분위기의 조정실에서 당사자의 말을 충분히 듣고 실정에 맞게 분쟁을 해결하고 비공개로 진행되기 때문에 비밀이 철저히 보장됩니다.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                <p className="text-zinc-700 text-sm md:text-base leading-[1.9]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 민사소송의 절차 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">민사소송의 절차</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <p className="text-zinc-700 text-sm md:text-base leading-[1.9]">
                이해관계의 한쪽측 당사자가 소를 제기하면 상대방의 의사와 상관없이 민사소송 절차는 시작됩니다.
                소장이 법원을 통해 상대방에게 전달되면 정해진 날에 법원에 출두해야 하는데, 이때 출두하지 않거나 출두해도 답변이 없으면
                원고의 주장대로 자신에게 불리한 판결을 받게 됩니다. 불리한 판결에 대해서는 상급법원에 상소 할 수 있지만, 정해진 기간 내에
                하지 않으면 권리를 잃게 되어 판결은 확정됩니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <p className="text-zinc-700 text-sm md:text-base leading-[1.9]">
                판결이 확정되면 피고는 그 대로 실행 할 의무를 가지며, 원고는 법원과 집행기관에 강제집행을 할수 있고국가권력에 의해 판결내용의
                실현을 보장받게 됩니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <p className="text-zinc-700 text-sm md:text-base leading-[1.9] mb-2">
                <span className="font-bold text-zinc-900">조정</span>은 한쪽당사자만의 의사에 의해서도 절차가 시작된다는 점에서 민사소송과 유사하지만 절차상으로는 양당사자를 조정위원이
                설득하여 합의가 성립되도록하는 것으로 당사자가 합의 하지 않으면 조정불성립으로 분쟁은 해결되지 않습니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <p className="text-zinc-700 text-sm md:text-base leading-[1.9]">
                <span className="font-bold text-zinc-900">중재</span>는 중재인이 최종적판단에 양쪽 당사자가 구속되므로 중재재판을 하면 분쟁은 해결 수있지만, 중재 자체는 당사자간의 합의가
                있을때만 시작되는 절차라는 점에서 당사자간의 합의에 기초를 둔 해결절차 입니다. 민사분쟁은 가능한 한 당사자간의 합의에 의해
                해결하는 것이 바람직하기 때문에 조정과 분쟁해결제도로서 중요한 역할을 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 민사소소의 과정 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">민사소송의 과정</h2>
          </div>
          <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-6">
            민사소송은 원고가 소장을 법원에 제기하면 법원에서는 우선 소장을 심사하고, 소장의 기재사항이나 인지의 미납,
            기타사항에 대하여 불비가 있는 경우에는 당사자에게 보정명령을 하여 보정하도록 합니다. 소장이 접수되면 소장
            부본을 상대방에게 송달하고, 상대방이 이에 대하여 답변서등을 제출하도록 하고, 피고가 답변서를 제출하면 이를
            원고에 송달합니다.
          </p>
          <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-8">
            이러한 서면공방이 있고 쟁점이 어느정도 정리가 되면, 변론에 앞서 변론준비절차에 회부합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 변론준비절차 */}
            <div className="bg-zinc-50 rounded-xl p-6">
              <h3 className="font-bold text-amber-700 text-base mb-3 border-b border-amber-200 pb-2">변론준비절차</h3>
              <div className="space-y-2 text-zinc-700 text-sm leading-[1.8]">
                <p>①쟁점정리, ②서류증거의 제출, ③검증의 신청, ④증인의 신청</p>
              </div>
            </div>

            {/* 변론 */}
            <div className="bg-zinc-50 rounded-xl p-6">
              <h3 className="font-bold text-amber-700 text-base mb-3 border-b border-amber-200 pb-2">변론</h3>
              <div className="space-y-2 text-zinc-700 text-sm leading-[1.8]">
                <p>①증인신문을 하거나, ②현장검증, ③감정등을 실시한다.</p>
                <p>변론은 미리 재판장이 정한 기일에 당사자 쌍방을 소환하여 공개법정에서 합니다.</p>
                <p>사건과 당사자의 호명으로 기일이개시되며, 재판장의 지휘하에 변론이 진행됩니다.</p>
                <p>변론기일에 당사자의 공격 방법으로 변론이 이루어지면, 변론을종결하고, 법원이 종국판결을 함으로서 소송을 종료하게 됩니다. 보통은 소송종료가 판결이지만,</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-xl p-6 mt-6">
            <p className="text-zinc-700 text-sm leading-[1.8] mb-4">
              판결 이외에도, ①소의 취하, ②재판상화해, ③조정, ④청구의 포기, 인낙 으로 소이 종료되는경우도 있습니다.
            </p>
            <p className="text-zinc-700 text-sm leading-[1.8]">
              소송당사자가 판결이 있고나서, 이에 대하여 불복을 할 경우에는 상급법원에
              그 판결의 취소내지 변경을 구할 수 있습니다. 이러한 불복방법으로 판결에
              대하여는 항소와 상고로서 할 수 있고 결정이나 명령에 대하여는 항고로서
              할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
