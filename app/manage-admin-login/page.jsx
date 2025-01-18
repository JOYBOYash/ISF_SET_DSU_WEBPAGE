"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/config/firebase"; // Import Firestore
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { ArrowLeft } from "lucide-react";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch admin credentials from Firestore
      const adminRef = doc(db, "adminCredentials", "adminDoc"); // Update collection/document as per your setup
      const docSnap = await getDoc(adminRef);

      if (docSnap.exists()) {
        const adminData = docSnap.data();
        if (email === adminData.email && password === adminData.password) {
          // Save admin authentication state in local storage
          localStorage.setItem("isAdmin", "true");
          router.push("/manage-dashboard"); // Redirect to the admin dashboard
        } else {
          setError("Invalid credentials");
        }
      } else {
        setError("Admin credentials not found");
      }
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-900/40 to-blue-900/10">
      <div className="flex items-center justify-center flex-col mb-6">
        <img
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] p-2"
          src="./isfsetlogo.png"
          alt="Admin Logo"
        />
        <h1 className="text-lg sm:text-xl font-bold text-blue-900/70 text-center">
          Enter the provided admin credentials!
        </h1>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-blue-500/30 text-blue-500 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[400px]"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Admin Login
        </h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base text-white font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm sm:text-base text-white font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex flex-col items-center gap-3">
          <button
            type="submit"
            className="w-full px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>

          <a
            href="/"
            className="flex items-center justify-center gap-2 text-blue-300 hover:text-blue-100 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Go Back</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
