"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (!auth) {
      setIsLoggedIn(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) {
    return null;
  }

  return (
    <nav className="bg-pink-500 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Vivah Connect</div>

        <ul className="flex space-x-4 text-sm sm:text-base">
          {isLoggedIn ? (
            <>
              <li className="hover:underline cursor-pointer">Dashboard</li>
              <li className="hover:underline cursor-pointer">Profile</li>
            </>
          ) : (
            <>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Login</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
