"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();
  const toLogin = () => {
    router.push("/login");
  };

  const toRegister = () => {
    router.push("/register");
  };

  return (
    <section className="py-20 bg-pink-200 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Meet Your Match?</h2>
      <p className="mb-6">
        Create a profile or sign in to get started on your journey.
      </p>
      <div className="flex justify-center gap-4">
        <button
          className="bg-white text-pink-500 px-6 py-2 rounded-full"
          onClick={toRegister}
        >
          Sign Up
        </button>
        <button
          className="bg-pink-600 text-white px-6 py-2 rounded-full"
          onClick={toLogin}
        >
          Login
        </button>
      </div>
    </section>
  );
}
