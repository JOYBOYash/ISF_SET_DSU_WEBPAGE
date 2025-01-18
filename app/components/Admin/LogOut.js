"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin state
    router.push("/"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
