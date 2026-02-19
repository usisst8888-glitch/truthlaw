"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          TruthLaw
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

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

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
