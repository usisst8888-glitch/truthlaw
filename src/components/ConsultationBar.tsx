"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const categories = ["개인회생", "개인파산", "민사", "등기"];

export default function ConsultationBar() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const resetForm = () => { setName(""); setPhone(""); setCategory(""); setContent(""); };

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !category) {
      alert("이름, 연락처, 상담분야를 입력해주세요.");
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, "consultations"), {
        name: name.trim(), phone: phone.trim(), category,
        content: content.trim(), createdAt: serverTimestamp(), status: "new",
      });
      setDone(true);
      resetForm();
      setTimeout(() => { setDone(false); setOpen(false); }, 2500);
    } catch {
      alert("전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* 모바일 드롭업 */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] flex items-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full z-10 animate-slide-up">
            <div className="bg-white rounded-t-[28px] px-6 pt-5 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
              <div className="w-10 h-1 bg-zinc-200 rounded-full mx-auto mb-5" />

              {done ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-zinc-900 font-bold text-lg">접수 완료!</p>
                  <p className="text-zinc-500 text-sm mt-1">곧 연락드리겠습니다</p>
                </div>
              ) : (
                <>
                  <h3 className="text-zinc-900 font-bold text-xl mb-1">상담 신청</h3>
                  <p className="text-zinc-400 text-sm mb-6">정보를 입력하시면 빠르게 연락드립니다</p>
                  <div className="space-y-4">
                    <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-100 rounded-xl px-4 py-3.5 text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1a2744]" />
                    <input type="tel" placeholder="연락처" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-100 rounded-xl px-4 py-3.5 text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1a2744]" />
                    <div className="flex gap-2">
                      {categories.map((c) => (
                        <button key={c} onClick={() => setCategory(c)}
                          className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${
                            category === c
                              ? "bg-[#1a2744] text-white shadow-lg"
                              : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                          }`}
                        >{c}</button>
                      ))}
                    </div>
                    <textarea placeholder="간단한 내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)} rows={2}
                      className="w-full bg-zinc-100 rounded-xl px-4 py-3.5 text-sm text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1a2744] resize-none" />
                    <button onClick={handleSubmit} disabled={submitting}
                      className="w-full py-4 rounded-2xl bg-[#1a2744] text-white font-bold text-base hover:bg-[#243456] transition-colors disabled:opacity-50 shadow-xl">
                      {submitting ? "전송 중..." : "무료 상담 신청하기"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 모바일 하단 고정 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <button onClick={() => setOpen(true)}
          className="w-full py-5 bg-[#1a2744] rounded-t-2xl flex items-center justify-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] active:bg-[#243456] transition-colors">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a2744" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white font-extrabold text-lg tracking-wide">무료 상담 신청</span>
        </button>
      </div>

      {/* PC 하단 고정 */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[#1a2744] shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
          {done ? (
            <div className="py-7 text-center flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="text-white font-bold text-lg">접수 완료! 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-8 py-5">
              {/* 첫줄: 타이틀 + 분야 */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a2744" className="w-6 h-6">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg">무료 상담 신청</h3>
                    <p className="text-sky-300/70 text-sm">전문 법무사가 직접 상담해드립니다</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setCategory(c)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                        category === c
                          ? "bg-white text-[#1a2744] shadow-lg"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >{c}</button>
                  ))}
                </div>
              </div>
              {/* 둘째줄: 입력 한줄 */}
              <div className="flex items-end gap-4">
                <div className="w-[130px]">
                  <label className="text-sky-300 text-xs font-bold block mb-2">이름</label>
                  <input type="text" placeholder="홍길동" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-3 text-white text-sm font-medium placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all" />
                </div>
                <div className="w-[170px]">
                  <label className="text-sky-300 text-xs font-bold block mb-2">연락처</label>
                  <input type="tel" placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-3 text-white text-sm font-medium placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all" />
                </div>
                <div className="flex-1">
                  <label className="text-sky-300 text-xs font-bold block mb-2">상담 내용</label>
                  <input type="text" placeholder="간단한 상담 내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)}
                    className="w-full bg-white/10 rounded-lg px-4 py-3 text-white text-sm font-medium placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all" />
                </div>
                <button onClick={handleSubmit} disabled={submitting}
                  className="shrink-0 bg-white hover:bg-sky-100 text-[#1a2744] font-extrabold text-base px-10 py-3 rounded-xl transition-all disabled:opacity-50 shadow-xl">
                  {submitting ? "전송 중..." : "신청하기"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
