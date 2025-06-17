"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseConfig";

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

    if (!auth) {
      setError("Authentication service is not available.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save extra details to Firestore
      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        uid: userCredential.user.uid,
        email,
        firstName,
        lastName,
        phone,
        createdAt: new Date(),
      });

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Signup failed.");
      console.error(err);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Create Your Account
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            {[
              { name: "firstName", label: "First Name" },
              { name: "lastName", label: "Last Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "password", label: "Password", type: "password" },
              {
                name: "confirmPassword",
                label: "Confirm Password",
                type: "password",
              },
            ].map(({ name, label, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-pink-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
