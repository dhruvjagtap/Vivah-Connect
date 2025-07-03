"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import Link from "next/link";

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoggedIn === null) return null;

  return (
    <nav className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-serif">
          Vivah Connect
        </Link>

        <ul className="flex space-x-4 text-sm sm:text-base font-medium">
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:underline transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:underline transition-colors duration-200"
                >
                  Profile
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={scrollToAbout}
                  className="hover:underline transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:underline transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
