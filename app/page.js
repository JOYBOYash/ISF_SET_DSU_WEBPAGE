"use client";
import styles from "@/app/styles/Landing.module.css";
import { useRouter } from "next/navigation";
import { ArrowBigRight } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex transition ease-in-out flex-col items-center justify-center min-h-screen py-2">
      <h1 className={styles.title}>
        Welcome to <br></br>
        <span className="font-bold">IETE STUDENTS FORUM </span> <br></br> DSU -
        SET
      </h1>
      <p className={styles.description}>Your gateway to the main page</p>
      <button
        className={`${styles.redirectbutton} transition ease-in-out flex items-center justify-center px-4 py-2 mt-2 text-white`}
        onClick={() => router.push("/main")}
      >
        Go to Main Page <ArrowBigRight className="w-8 h-8" />
      </button>
      <div></div>
      <div className="w-36 border-t mt-12 border-gray-300 my-4"></div>
      <footer className={styles.footer}>
        <a
          className="p-4  transition ease-in-out flex items-center justify-center hover:bg-blue-600 hover:font-bold rounded-lg "
          href="/manage-admin-login"
        >
          Access Admin Panel
        </a>
      </footer>
    </div>
  );
}
