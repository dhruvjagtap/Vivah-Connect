"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const toRegister = () => {
    router.push("/register");
  };

  return (
    <section
      className="bg-cover bg-center text-white text-center py-20 px-4 min-h-[700px] flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5633707/pexels-photo-5633707.jpeg')",
      }}
    >
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          Find Your Perfect Match
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
          India&apos;s trusted platform for meaningful connections and lifetime
          bonds.
        </p>
        <button
          onClick={toRegister}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
