"use client";

import { auth } from "@/lib/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
  };

  const handleEmailLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleEmailLogin} className="space-y-4 w-full max-w-sm">
        <input
          className="w-full border px-4 py-2 rounded"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          Login with Email
        </button>
      </form>

      <p className="mt-4">or</p>

      <button
        onClick={handleGoogleLogin}
        className="mt-2 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
