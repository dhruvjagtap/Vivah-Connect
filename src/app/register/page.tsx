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

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth!, provider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ")[1] || "",
        phone: user.phoneNumber || "",
        createdAt: new Date(),
      });

      router.push("/dashboard");
    } catch (err) {
      setError("Google sign-up failed.");
      console.error(err);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth!, provider);

      const fbProvider = new FacebookAuthProvider();
      await signInWithPopup(auth!, fbProvider);

      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ")[1] || "",
        phone: user.phoneNumber || "",
        createdAt: new Date(),
      });

      router.push("/dashboard");
    } catch (err) {
      setError("Facebook sign-up failed.");
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

      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}

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
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-500 text-black"
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

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 mb-2">or sign up with</p>
            <div className="space-y-2">
              <button
                onClick={handleGoogleSignup}
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition flex items-center justify-center"
              >
                <Image
                  src="/google-icon.webp"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign up with Google
              </button>

              <button
                onClick={handleFacebookSignup}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.94 9.95v-7.05h-2.6v-2.9h2.6V9.4c0-2.6 1.54-4.04 3.9-4.04 1.13 0 2.3.2 2.3.2v2.52H16c-1.27 0-1.66.79-1.66 1.6v1.9h2.82l-.45 2.9h-2.37v7.05A10 10 0 0 0 22 12z" />
                </svg>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
