"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Notice {
  id: string;
  title: string;
  createdAt: { seconds: number };
}

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Notice[];
      setNotices(data);
      setLoading(false);
    };
    fetchNotices();
  }, []);

  const formatDate = (seconds: number) => {
    return new Date(seconds * 1000).toLocaleDateString("ko-KR");
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">공지사항</h1>

      {loading ? (
        <p className="text-zinc-500 text-center py-20">불러오는 중...</p>
      ) : notices.length === 0 ? (
        <p className="text-zinc-500 text-center py-20">등록된 공지사항이 없습니다.</p>
      ) : (
        <table className="w-full border-t border-zinc-200">
          <thead>
            <tr className="border-b border-zinc-200 text-sm text-zinc-500">
              <th className="py-3 text-left font-medium w-12">번호</th>
              <th className="py-3 text-left font-medium">제목</th>
              <th className="py-3 text-right font-medium w-32">날짜</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={notice.id} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                <td className="py-4 text-sm text-zinc-400">{notices.length - index}</td>
                <td className="py-4">
                  <Link
                    href={`/notice/${notice.id}`}
                    className="text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    {notice.title}
                  </Link>
                </td>
                <td className="py-4 text-sm text-zinc-400 text-right">
                  {formatDate(notice.createdAt.seconds)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
