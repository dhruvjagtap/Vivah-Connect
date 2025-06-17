"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
      {user && (
        <div>
          <p>Hello, {user.displayName || user.email} 👋</p>
          <button
            onClick={() => signOut(auth)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
