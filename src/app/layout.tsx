import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConsultationBar from "@/components/ConsultationBar";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "오현식 법무사 사무소",
  description: "개인회생,개인파산 전문 법무사사무소입니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifKR.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <FloatingButtons />
          <ConsultationBar />
        </AuthProvider>
      </body>
    </html>
  );
}
