"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [recentCheckouts, setRecentCheckouts] = useState<any[]>([
    { title: "Gurur Nyar I", user: "Alice Johnson", date: "Oct 24", due: "Nov 07", status: "Borrowed", image: "/cover_mystery.png" },
    { title: "The Silent Echo", user: "Mark Spencer", date: "Oct 22", due: "Nov 05", status: "Overdue", image: "/cover_fiction.png" },
    { title: "Beyaz Dias I", user: "Sarah Connor", date: "Oct 20", due: "Nov 03", status: "Returned", image: "/cover_history.png" },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCheckouts = JSON.parse(localStorage.getItem('checkedOutBooks') || '[]');
      if (storedCheckouts.length > 0) {
        setRecentCheckouts([...storedCheckouts.reverse(), ...recentCheckouts]);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8]">
      <Navbar />
      
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-serif text-black mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here is an overview of your book statistics.</p>
          </div>
          <Link href="/dashboard/new" className="bg-black text-white px-6 py-2 text-sm font-semibold hover:bg-[#6FB3A7] transition-colors rounded-none inline-block">
            + Add New Book
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/books" className="bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#6FB3A7] transition-colors cursor-pointer group">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1 group-hover:text-[#6FB3A7] transition-colors">Total Books</p>
              <h2 className="text-3xl font-serif text-black group-hover:text-[#6FB3A7] transition-colors">124</h2>
            </div>
            <div className="w-12 h-12 bg-[#ECEEEB] rounded-full flex items-center justify-center text-xl group-hover:bg-[#E1F0ED] transition-colors">📚</div>
          </Link>
          <Link href="/books" className="bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#6FB3A7] transition-colors cursor-pointer group">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1 group-hover:text-[#6FB3A7] transition-colors">Checked Out</p>
              <h2 className="text-3xl font-serif text-[#6FB3A7]">18</h2>
            </div>
            <div className="w-12 h-12 bg-[#E1F0ED] text-[#6FB3A7] rounded-full flex items-center justify-center text-xl group-hover:bg-[#6FB3A7] group-hover:text-white transition-colors">↗️</div>
          </Link>
          <Link href="/books" className="bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#6FB3A7] transition-colors cursor-pointer group">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1 group-hover:text-[#6FB3A7] transition-colors">Available</p>
              <h2 className="text-3xl font-serif text-black group-hover:text-[#6FB3A7] transition-colors">106</h2>
            </div>
            <div className="w-12 h-12 bg-[#ECEEEB] rounded-full flex items-center justify-center text-xl group-hover:bg-[#E1F0ED] transition-colors">✅</div>
          </Link>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold text-lg text-black">Recent Checkouts</h3>
            <span className="text-sm text-[#6FB3A7] cursor-pointer hover:underline">View All</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAF8] text-gray-500 text-sm">
                  <th className="px-6 py-3 font-medium">Book</th>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Date Out</th>
                  <th className="px-6 py-3 font-medium">Due Date</th>
                  <th className="px-6 py-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                {recentCheckouts.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-[#F9FAF8] transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <Image src={row.image} alt={row.title} width={30} height={40} className="object-cover bg-gray-100" />
                      <span className="font-medium text-black">{row.title}</span>
                    </td>
                    <td className="px-6 py-4">{row.user}</td>
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="px-6 py-4">{row.due}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        row.status === 'Borrowed' ? 'bg-blue-50 text-blue-600' :
                        row.status === 'Overdue' ? 'bg-red-50 text-red-600' :
                        'bg-green-50 text-green-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}