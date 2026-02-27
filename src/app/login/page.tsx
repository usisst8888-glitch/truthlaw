"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      router.push("/");
    } catch {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">로그인</h1>
        <p className="text-sm text-zinc-400 mb-8">오현식 법무사 사무소에 오신 것을 환영합니다.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">이메일</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="example@email.com" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">비밀번호</label>
            <input
              type="password" name="password" value={form.password} onChange={handleChange}
              placeholder="비밀번호 입력" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit" disabled={loading}
            className="mt-2 w-full rounded-lg bg-zinc-900 py-3 text-sm font-medium text-white hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          계정이 없으신가요?{" "}
          <Link href="/register" className="text-zinc-900 font-medium hover:underline">회원가입</Link>
        </p>
      </div>
    </div>
  );
}
