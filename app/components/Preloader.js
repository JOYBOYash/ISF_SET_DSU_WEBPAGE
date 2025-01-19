"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Use navigation hooks

// Preloader component
function Preloader({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get current route
  const searchParams = useSearchParams(); // Get query parameters

  useEffect(() => {
    // Show loader on route changes
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader after a short delay
    }, 500); // Adjust delay as needed (e.g., 500ms)

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [pathname, searchParams]); // Run effect on route change

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="spinner"></div>
        </div>
      )}
      {children}
    </>
  );
}

// Page component where Suspense is applied
export default function PageWrapper({ children }) {
  return (
    <Suspense fallback={<div className="w-100vw h-100vh text-center items-center justify-center m-12 flex flex-col gap-12 ">

<img
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] p-2"
          src="./isfsetlogo.png"
          alt="Admin Logo"
        />
        <h1 className="text-3xl font-bold animate-pulse p-6">Loading...</h1>
    </div>}>
      <Preloader>{children}</Preloader>
    </Suspense>
  );
}
