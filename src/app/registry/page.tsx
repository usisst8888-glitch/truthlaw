export default function RegistryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 히어로 */}
      <section className="bg-[#1a2744] py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">부동산 등기</h1>
          <div className="w-12 h-1 bg-sky-400 mb-4" />
          <p className="text-white/60 text-sm md:text-base">부동산 권리관계를 공적으로 증명하고 보호하는 절차</p>
        </div>
      </section>

      {/* 소유권 보존등기 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">소유권 보존등기</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              소유권 보전등기(소유권보존등기)란 건물신축후 건축물 대장을 근거로 등기소에 최초로 등기용지를 개설하는 등기를 말하며, 통상
              건축물대장 편성 및 건축물 사용인인서를 수령하게 되면 건축물을 취득한 것으로 보게 되므로 60일이내 취득세 납부를 해야 한다.
              취득세 납부를 위해서는 건축물의 기준과표 산정을 위해 건축물신축 비용 신고서를 제출하여 관할 관청은 이를 근거로 과표 산정후
              취득세 고지서를 발급하게 된다. 한편 보존등기신청인은 취득세납부 후 영수증 등을 첨부하여 물건지 관할 등기소에 보존등기를
              신청한다.
            </p>
          </div>
        </div>
      </section>

      {/* 소유권 이전등기 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">소유권 이전등기</h2>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              소유권 보전등기(소유권보존등기)란 건물신축후 건축물 대장을 근거로 등기소에 최초로 등기용지를 개설하는 등기를 말하며, 통상
              건축물대장 편성 및 건축물 사용인인서를 수령하게 되면 건축물을 취득한 것으로 보게 되므로 60일이내 취득세 납부를 해야 한다.
              취득세 납부를 위해서는 건축물의 기준과표 산정을 위해 건축물신축 비용 신고서를 제출하여 관할 관청은 이를 근거로 과표 산정후
              취득세 고지서를 발급하게 된다. 한편 보존등기(신청)인은 취득세납부 후 영수증 등을 첨부하여 물건지 관할 등기소에 보존등기를
              신청한다.
            </p>
          </div>
        </div>
      </section>

      {/* 필요서류 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">필요서류</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-50 rounded-xl p-6">
              <h3 className="font-bold text-zinc-900 mb-3">1) 부동산 매매의 경우</h3>
              <div className="space-y-1.5 text-zinc-600 text-sm leading-[1.8]">
                <p>- 매도인의 인감도장, 부동산매도용인감증명서1통, 주민등록초본1통, 등기권리증, 신분증사본</p>
                <p>- 매수인의 도장, 주민등록초본, 신분증사본</p>
                <p>- 부동산거래신고필증</p>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-xl p-6">
              <h3 className="font-bold text-zinc-900 mb-3">2) 증여의 경우</h3>
              <div className="space-y-1.5 text-zinc-600 text-sm leading-[1.8]">
                <p>- 증여자의 인감도장, 인감증명서 1통, 주민등록초본1통 등기권리증, 신분증사본</p>
                <p>- 수증자의 도장, 주민등록초본, 신분증사본</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상속등기 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">상속등기</h2>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
              상속에 의해 취득한 부동산을 상속인명의로 이전하는 절차를 말한다. 통상 법정지분에 의한 상속등기와 협의분할에 의한 상속등기를
              하게 되며, 협의 분할인 경우에는 공동 상속인들이 상속재산분할 협의서에 인감 날인후 인감증명서를 첨부해야 한다.
            </p>
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              한편 공동상속인 중 친권자와 이행상반되는 미성년의 자가 있는 경우에는 가정법원의 특별 대리인선임 심판서를 받아 동 대리인이
              미성년자를 대리하여 협의분할서 인감날인후 대리인의 인감증명서를 첨부해야 한다.
            </p>
          </div>
        </div>
      </section>

      {/* 외국인 상속 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">외국인 상속</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base">
              재 외국민 또는 외국국적 취득자가 상속재산을 협의취득 하는 경우에도 인감증명이나 이에 준하는 서면을 제출해야 한다.
              재외국민의 경우에는 관할 재외공관으로부터 인감증명발급에 대한 위임장을 공증받아 국내로 우송하여 수임인으로 하여금
              업무처리하게 할 수도 있고 또는 상속재산분할협의서상의 서명이 본인의 것을 증명하는 재외공관의 확인서나 이에 관한 공정증서로
              대신 할수 있다. 한편 인감날인 제도가 있는 외국인은 협의서에 인감날인 및 인감증명서를 첨부할 수있으나 인감날인제도가 없는
              외국인 경우 협의서상의 서명 또는 날인의 본인의 것임을 증명하는 본국의 공정증서로 대신 할수 있다
            </p>
          </div>
        </div>
      </section>

      {/* 필요서류 (상속) */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">필요서류</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-bold text-zinc-900 mb-3">1) 피상속인(사망자)의 서류</h3>
              <p className="text-zinc-600 text-sm leading-[1.8]">
                - 주민등록말소자초본, 기본증명서, 가족관계증명서, 혼인관계증명서, 입양관계증명서, 친양자관계증명서, 전호주의 재적등본 1통
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-bold text-zinc-900 mb-3">2) 상속인의 서류</h3>
              <div className="space-y-1.5 text-zinc-600 text-sm leading-[1.8]">
                <p>- 배우자의 경우 : 가족관계증명서, 혼인관계증명서, 주민등록등본, 인감증명서 각1통, 인감도장, 신분증사본</p>
                <p>- 자녀인 경우 : 기본증명서, 가족관계증명서, 주민등록등본, 인감증명서 각1통, 인감도장, 신분증사본</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="text-amber-800 text-sm font-bold">
                ✔ 상기서류는 모두 등기 신청일 기준 최근 3개월 내에 발급된 것이어야 함.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 근저당권 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">근저당권</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8 mb-6">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
              계속적 거래관계에서 발생하는 다수의 불특정 채권을 결산기까지 일정한 한도로 담보하는 권리가 근저당권이며, 이를 공사하기 위해
              근저당권설정등기를 하게 된다. 근저당권자는 담보사고의 경우 근저당권에 기한 임의경매신청을 통해 설정순위에 따른 우선변제를
              받게 된다.
            </p>
            <h4 className="font-bold text-zinc-800 mb-2">첨부서류</h4>
            <div className="space-y-1 text-zinc-600 text-sm leading-[1.8]">
              <p>- 근저당의무자 : 인감도장, 인감증명서, 등기권리증, 주민등록초본, 신분증사본</p>
              <p>- 근저당권자 : 도장(인감아니어도 무방), 주민등록초본</p>
            </div>
          </div>
        </div>
      </section>

      {/* 전세권 */}
      <section className="bg-zinc-50 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">전세권</h2>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200 mb-6">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
              전세금을 지급하고 타인의 부동산을 점유하여 그 부동산의 용도에 따라 사용 수익하는 권리를 전세권이라고 한다. 전세권은 용익물권
              으로서 특정 공간을 이용하는 권리이지만 전세권설정등기를 통해 후순위관리자 또는 채권자보다 전세금 우선변제를 받을 권리가
              있으므로 주택 및 사무실에 대한 전세계약 전세금(보증금)지급을 담보하기 위한 방법으로 많이 활용되나(민법 제303조).
            </p>
            <h4 className="font-bold text-zinc-800 mb-2">첨부서류</h4>
            <div className="space-y-1 text-zinc-600 text-sm leading-[1.8]">
              <p>- 전세권의무자 : 인감도장, 인감증명서, 등기권리증, 주민등록초본, 신분증사본</p>
              <p>- 전세권자 : 도장(인감아니어도 무방), 주민등록초본</p>
            </div>
          </div>
        </div>
      </section>

      {/* 가등기 */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber-700 text-xl">►</span>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">가등기</h2>
          </div>
          <div className="bg-zinc-50 rounded-xl p-6 md:p-8 mb-6">
            <p className="text-zinc-700 leading-[1.9] text-sm md:text-base mb-4">
              부동산매매계약 후 잔금납부시까지 매도인이 매매 목적물을 타에 처분하는 것을 방지하기 위한 목적으로 하는 가등기와 채권담보를
              목적으로 채무자소유의 부동산에 대물반환예약을 체결하고 이행기에 채무의 변제가 없는 경우 채권자의 예약완결권 행사에 따른
              소유권이전 등기청구권을 보전하는 가등기(담보가등기)가 있다
            </p>
            <h4 className="font-bold text-zinc-800 mb-2">첨부서류</h4>
            <div className="space-y-1 text-zinc-600 text-sm leading-[1.8]">
              <p>- 가등기의무자 : 인감도장, 인감증명서, 등기권리증, 주민등록초본, 신분증사본</p>
              <p>- 가등기권자 : 도장(인감아니어도 무방), 주민등록초본</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
