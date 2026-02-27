"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Notice {
  title: string;
  content: string;
  createdAt: { seconds: number };
}

export default function NoticeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      const docRef = doc(db, "notices", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNotice(docSnap.data() as Notice);
      }
      setLoading(false);
    };
    fetchNotice();
  }, [id]);

  const formatDate = (seconds: number) => {
    return new Date(seconds * 1000).toLocaleDateString("ko-KR");
  };

  if (loading) return <p className="text-center py-20 text-zinc-500">불러오는 중...</p>;
  if (!notice) return <p className="text-center py-20 text-zinc-500">존재하지 않는 게시글입니다.</p>;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <button
        onClick={() => router.back()}
        className="text-sm text-zinc-400 hover:text-zinc-700 mb-8 flex items-center gap-1 transition-colors"
      >
        ← 목록으로
      </button>

      <div className="border-t border-zinc-200">
        <div className="py-6 border-b border-zinc-100">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">{notice.title}</h1>
          <p className="text-sm text-zinc-400">{formatDate(notice.createdAt.seconds)}</p>
        </div>
        <div className="py-8 text-zinc-700 leading-8 whitespace-pre-wrap">
          {notice.content}
        </div>
      </div>
    </div>
  );
}
