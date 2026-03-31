"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const STORAGE_KEY = "auth_name";

interface AuthContextType {
  user: User | null;
  displayName: string | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, displayName: null, loading: true, isAdmin: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) setDisplayName(cached);

    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        const name = u.displayName ?? u.email ?? "";
        setDisplayName(name);
        localStorage.setItem(STORAGE_KEY, name);

        // admin 체크 - users 컬렉션의 role 필드
        const userDoc = await getDoc(doc(db, "users", u.uid));
        setIsAdmin(userDoc.exists() && userDoc.data()?.role === "admin");
      } else {
        setDisplayName(null);
        setIsAdmin(false);
        localStorage.removeItem(STORAGE_KEY);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, displayName, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
