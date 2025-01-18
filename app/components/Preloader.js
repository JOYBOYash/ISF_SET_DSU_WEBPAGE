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
    <Suspense fallback={<div>Loading...</div>}>
      <Preloader>{children}</Preloader>
    </Suspense>
  );
}
