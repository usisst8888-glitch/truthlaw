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
  // localStorage에서 즉시 읽어 초기값으로 사용 → 깜빡임 없음
  const [displayName, setDisplayName] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY);
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
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
  }, []);

  return (
    <AuthContext.Provider value={{ user, displayName, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
