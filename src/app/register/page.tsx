"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(user, { displayName: form.name });
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        createdAt: serverTimestamp(),
      });
      router.push("/");
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/email-already-in-use") setError("이미 사용 중인 이메일입니다.");
      else if (code === "auth/weak-password") setError("비밀번호는 6자 이상이어야 합니다.");
      else if (code === "auth/invalid-email") setError("올바른 이메일 형식이 아닙니다.");
      else setError("회원가입 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">회원가입</h1>
        <p className="text-sm text-zinc-400 mb-8">오현식 법무사 사무소에 오신 것을 환영합니다.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">이름</label>
            <input
              type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="홍길동" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">이메일</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="example@email.com" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">연락처</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="010-0000-0000" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">비밀번호</label>
            <input
              type="password" name="password" value={form.password} onChange={handleChange}
              placeholder="6자 이상 입력" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">비밀번호 확인</label>
            <input
              type="password" name="confirm" value={form.confirm} onChange={handleChange}
              placeholder="비밀번호를 다시 입력" required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit" disabled={loading}
            className="mt-2 w-full rounded-lg bg-zinc-900 py-3 text-sm font-medium text-white hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            {loading ? "처리 중..." : "회원가입"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-zinc-900 font-medium hover:underline">로그인</Link>
        </p>
      </div>
    </div>
  );
}
