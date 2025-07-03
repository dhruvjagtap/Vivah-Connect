"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseConfig";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [clientReady, setClientReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady || !auth) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword, firstName, lastName, phone } =
      formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth!,
        email,
        password
      );
      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        uid: userCredential.user.uid,
        email,
        firstName,
        lastName,
        phone,
        createdAt: new Date(),
      });
      router.push("/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error(err);
      } else {
        setError("Signup failed.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Main Registration Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-serif font-bold text-gray-800 tracking-tight">
              Create Your Account
            </h1>
            <p className="text-gray-600 font-light">
              Your journey to forever begins here
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Password Fields */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                placeholder="Create a password"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-pink-500 transition-all duration-200 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            >
              Create Account
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 transition-all duration-200"
              >
                Log in
              </Link>
            </p>

            <Link
              href="/"
              className="inline-block text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
