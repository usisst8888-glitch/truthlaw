"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SupportWritePage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push("/support");
    }
  }, [user, isAdmin, loading, router]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, "support"), {
        title: title.trim(),
        content: content.trim(),
        createdAt: serverTimestamp(),
      });
      router.push("/support");
    } catch {
      alert("등록에 실패했습니다.");
      setSubmitting(false);
    }
  };

  if (loading || !isAdmin) {
    return <div className="max-w-4xl mx-auto px-4 py-10 text-zinc-400 text-center">로딩 중...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900 mb-8">글쓰기</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-none focus:border-[#1a2744]"
        />
        <textarea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#1a2744] resize-none"
        />
        <div className="flex gap-3 justify-end">
          <button onClick={() => router.push("/support")}
            className="px-6 py-2.5 rounded-lg border border-zinc-300 text-zinc-600 font-semibold text-sm hover:bg-zinc-50 transition-colors">
            취소
          </button>
          <button onClick={handleSubmit} disabled={submitting}
            className="px-6 py-2.5 rounded-lg bg-[#1a2744] text-white font-bold text-sm hover:bg-[#243456] transition-colors disabled:opacity-50">
            {submitting ? "등록 중..." : "등록하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
