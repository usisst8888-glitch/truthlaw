"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Post {
  title: string;
  content: string;
  createdAt: { seconds: number } | null;
}

export default function SupportDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const snap = await getDoc(doc(db, "support", id as string));
      if (snap.exists()) {
        setPost(snap.data() as Post);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  const formatDate = (ts: { seconds: number } | null) => {
    if (!ts) return "-";
    return new Date(ts.seconds * 1000).toLocaleDateString("ko-KR", {
      year: "numeric", month: "long", day: "numeric",
    });
  };

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-10 text-zinc-400 text-center">불러오는 중...</div>;
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-zinc-500 mb-4">게시글을 찾을 수 없습니다.</p>
        <button onClick={() => router.push("/support")} className="text-[#1a2744] font-semibold hover:underline">목록으로</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 mb-3">{post.title}</h1>
        <p className="text-zinc-400 text-sm">{formatDate(post.createdAt)}</p>
      </div>
      <div className="border-t border-zinc-200 pt-8">
        <div className="text-zinc-700 leading-relaxed whitespace-pre-wrap min-h-[200px]">
          {post.content}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-zinc-200">
        <Link href="/support" className="text-sm font-semibold text-[#1a2744] hover:underline">
          ← 목록으로
        </Link>
      </div>
    </div>
  );
}
