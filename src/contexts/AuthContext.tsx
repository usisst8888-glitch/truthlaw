"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

const STORAGE_KEY = "auth_name";

interface AuthContextType {
  user: User | null;
  displayName: string | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, displayName: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // SSR과 클라이언트 초기값을 null로 통일 → Hydration 에러 없음
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 마운트 직후 localStorage에서 읽어 즉시 반영 (Firebase 응답 전에)
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) setDisplayName(cached);

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        const name = u.displayName ?? u.email ?? "";
        setDisplayName(name);
        localStorage.setItem(STORAGE_KEY, name);
      } else {
        setDisplayName(null);
        localStorage.removeItem(STORAGE_KEY);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, displayName, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
