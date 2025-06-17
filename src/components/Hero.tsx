"use client";

import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  const toRegister = () => {
    router.push("/register");
  };
  return (
    <section className="bg-pink-100 text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Find Your Perfect Match
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        India&apos;s trusted platform for meaningful connections and lifetime
        bonds.
      </p>
      <div className="mt-6">
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
          onClick={toRegister}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
