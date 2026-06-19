import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-4 px-4 bg-[#ECEEEB] text-black items-center">
      
      <div className="flex items-center gap-2">
        <Image src="/photo1.png" alt="logo" width={80} height={80} />
      </div>

      <nav className="flex gap-4 justify-center w-full">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/new">Add Book</Link>
        <Link href="/login">Login</Link>
      </nav>
      <div>
        <Image src="/menu.svg" alt="logo" width={40} height={40} />
      </div>
    </div>
  );
}