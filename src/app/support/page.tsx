"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  createdAt: { seconds: number } | null;
}

export default function SupportPage() {
  const { isAdmin } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "support"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setPosts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Post)));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (ts: { seconds: number } | null) => {
    if (!ts) return "-";
    return new Date(ts.seconds * 1000).toLocaleDateString("ko-KR");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">고객센터</h1>
          <p className="text-zinc-400 text-sm mt-1">공지사항 및 안내</p>
        </div>
        {isAdmin && (
          <Link href="/support/write"
            className="bg-[#1a2744] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#243456] transition-colors">
            글쓰기
          </Link>
        )}
      </div>

      {loading ? (
        <p className="text-zinc-400 text-center py-10">불러오는 중...</p>
      ) : posts.length === 0 ? (
        <p className="text-zinc-400 text-center py-10">등록된 게시글이 없습니다.</p>
      ) : (
        <div className="border-t border-zinc-200">
          {posts.map((post, i) => (
            <Link key={post.id} href={`/support/${post.id}`}
              className="flex items-center justify-between py-4 px-2 border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
              <div className="flex items-center gap-4">
                <span className="text-zinc-300 text-sm w-8 text-center">{posts.length - i}</span>
                <h3 className="text-zinc-800 font-medium group-hover:text-[#1a2744] transition-colors">{post.title}</h3>
              </div>
              <span className="text-zinc-400 text-sm shrink-0">{formatDate(post.createdAt)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
