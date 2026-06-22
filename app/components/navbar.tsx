"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="flex gap-4 px-4 bg-[#ECEEEB] text-black items-center ">
      
      <div className="flex items-center gap-2  ">
        <Image src="/photo1.png" alt="logo" width={80} height={80} />
      </div>

      <nav className="flex gap-4 justify-center w-full">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}
        {isLoggedIn && <Link href="/dashboard/new">Add Book</Link>}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="font-semibold text-[#6FB3A7] hover:text-[#45857a] transition-colors">Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
      <div>
      </div>
    </div>
  );
}