import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { collection, getDocs, addDoc, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  const { name, email, phone, password } = await req.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json({ error: "모든 항목을 입력해주세요." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "비밀번호는 8자 이상이어야 합니다." }, { status: 400 });
  }

  // 이메일 중복 확인
  const q = query(collection(db, "users"), where("email", "==", email));
  const existing = await getDocs(q);
  if (!existing.empty) {
    return NextResponse.json({ error: "이미 사용 중인 이메일입니다." }, { status: 409 });
  }

  // bcrypt로 해시 (salt rounds: 12)
  const hashedPassword = await bcrypt.hash(password, 12);

  await addDoc(collection(db, "users"), {
    name,
    email,
    phone,
    password: hashedPassword,
    createdAt: serverTimestamp(),
  });

  return NextResponse.json({ message: "회원가입이 완료되었습니다." }, { status: 201 });
}
