"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Use navigation hooks

export default function Preloader({ children }) {
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
    <Suspense fallback={<div className="page-loader"><div className="spinner"></div></div>}>
      {loading && (
        <div className="page-loader">
          <div className="spinner"></div>
        </div>
      )}
      {children}
    </Suspense>
  );
}
