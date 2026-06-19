import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ECEEEB] text-black mt-10 px-6 py-10">
      
      <div className="flex flex-col md:flex-row justify-between gap-8">
        
    
        <div className="flex items-center gap-3">
          <Image src="/photo1.png" alt="logo" width={50} height={50} />
          <span className="font-semibold text-lg">Lumen Books</span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>

    
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">About</h3>
          <p className="text-sm text-gray-600">
            Lumen Books is a simple bookstore platform for learning Next.js.
          </p>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Lumen Books. All rights reserved.
      </div>
    </footer>
  );
}