"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "사무실소개", href: "/about" },
  { label: "개인회생", href: "/rehabilitation" },
  { label: "개인파산", href: "/bankruptcy" },
  { label: "민사", href: "/civil" },
  { label: "등기", href: "/registry" },
  { label: "고객센터", href: "/support" },
  { label: "상담문의", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { displayName } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/">
          <Image src="/logo.png" alt="오현식 법무사 사무소" width={180} height={32} />
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 데스크탑 - displayName 기반으로 즉시 렌더 (깜빡임 없음) */}
        <div className="hidden md:flex items-center gap-2 min-w-[160px] justify-end">
          {displayName ? (
            <>
              <span className="text-sm text-zinc-600">{displayName}</span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 transition-colors px-4 py-1.5 rounded-full"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors px-3 py-1.5">
                로그인
              </Link>
              <Link href="/register" className="text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 transition-colors px-4 py-1.5 rounded-full">
                회원가입
              </Link>
            </>
          )}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <nav className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-zinc-100">
            {displayName ? (
              <div className="flex flex-col gap-2">
                <span className="text-sm text-zinc-500">{displayName}</span>
                <button onClick={handleLogout} className="w-full text-center text-sm font-medium text-white bg-zinc-900 rounded-lg py-2 hover:bg-zinc-700 transition-colors">
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/login" className="flex-1 text-center text-sm text-zinc-600 border border-zinc-300 rounded-lg py-2 hover:bg-zinc-50 transition-colors" onClick={() => setMenuOpen(false)}>
                  로그인
                </Link>
                <Link href="/register" className="flex-1 text-center text-sm font-medium text-white bg-zinc-900 rounded-lg py-2 hover:bg-zinc-700 transition-colors" onClick={() => setMenuOpen(false)}>
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
