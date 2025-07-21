"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!auth) return;

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

  return (
    <nav className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-[200px]">
        {/* Left Section */}
        <div>
          <Link href="/" className="text-xl font-bold font-serif">
            Vivah Connect
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <ul className="flex space-x-6 text-sm sm:text-base font-medium">
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    href="/dashboard"
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="transition-transform duration-200 hover:scale-125"
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
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    About
                  </button>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="inline-block transition-transform duration-200 hover:scale-125"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
