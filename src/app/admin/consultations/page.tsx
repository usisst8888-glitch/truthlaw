"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface Consultation {
  id: string;
  name: string;
  phone: string;
  category: string;
  content: string;
  status: string;
  createdAt: { seconds: number } | null;
}

export default function AdminConsultationsPage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push("/");
    }
  }, [user, isAdmin, loading, router]);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchData = async () => {
      const q = query(collection(db, "consultations"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setConsultations(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Consultation))
      );
      setFetching(false);
    };
    fetchData();
  }, [isAdmin]);

  if (loading || !isAdmin) {
    return <div className="flex items-center justify-center min-h-screen text-zinc-500">로딩 중...</div>;
  }

  const formatDate = (ts: { seconds: number } | null) => {
    if (!ts) return "-";
    return new Date(ts.seconds * 1000).toLocaleString("ko-KR");
  };

  const statusColor = (status: string) => {
    if (status === "new") return "bg-red-100 text-red-700";
    if (status === "confirmed") return "bg-blue-100 text-blue-700";
    return "bg-zinc-100 text-zinc-600";
  };

  const statusLabel = (status: string) => {
    if (status === "new") return "신규";
    if (status === "confirmed") return "확인됨";
    return status;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">상담 신청 관리</h1>

      {fetching ? (
        <p className="text-zinc-500">불러오는 중...</p>
      ) : consultations.length === 0 ? (
        <p className="text-zinc-500">상담 신청 내역이 없습니다.</p>
      ) : (
        <>
          {/* 데스크탑 테이블 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-left text-zinc-500">
                  <th className="py-3 px-3 font-medium">상태</th>
                  <th className="py-3 px-3 font-medium">이름</th>
                  <th className="py-3 px-3 font-medium">연락처</th>
                  <th className="py-3 px-3 font-medium">분야</th>
                  <th className="py-3 px-3 font-medium">내용</th>
                  <th className="py-3 px-3 font-medium">신청일</th>
                </tr>
              </thead>
              <tbody>
                {consultations.map((c) => (
                  <tr key={c.id} className="border-b border-zinc-100 hover:bg-zinc-50">
                    <td className="py-3 px-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor(c.status)}`}>
                        {statusLabel(c.status)}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-zinc-800 font-medium">{c.name}</td>
                    <td className="py-3 px-3 text-zinc-600">{c.phone}</td>
                    <td className="py-3 px-3 text-zinc-600">{c.category}</td>
                    <td className="py-3 px-3 text-zinc-600 max-w-[200px] truncate">{c.content || "-"}</td>
                    <td className="py-3 px-3 text-zinc-400 text-xs">{formatDate(c.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 */}
          <div className="md:hidden space-y-3">
            {consultations.map((c) => (
              <div key={c.id} className="bg-white border border-zinc-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor(c.status)}`}>
                    {statusLabel(c.status)}
                  </span>
                  <span className="text-xs text-zinc-400">{formatDate(c.createdAt)}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-zinc-800">{c.name}</span>
                  <span className="text-zinc-500 text-sm">{c.phone}</span>
                </div>
                <span className="inline-block text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded mb-2">{c.category}</span>
                {c.content && <p className="text-sm text-zinc-600">{c.content}</p>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
