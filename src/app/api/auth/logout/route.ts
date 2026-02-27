import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "로그아웃 완료" });
  res.cookies.set("token", "", { maxAge: 0, path: "/" });
  return res;
}
