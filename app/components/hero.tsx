"use client"

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#ECEEEB] via-[#F9FAF8] to-[#E1F0ED] flex items-center justify-center overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#6FB3A7] opacity-10 blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300 opacity-10 blur-[80px]"></div>
      </div>

      <section className="relative z-10 max-w-6xl w-full px-6 py-20 mt-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-sm font-medium text-[#6FB3A7] mb-4">
              📚 Discover Your Next Adventure
            </div>
            <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] text-gray-900 tracking-tight">
              Unlock a World of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FB3A7] to-[#45857a]">
                Knowledge
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Dive into our carefully curated collection. From timeless classics to modern masterpieces, your next great read is just a search away.
            </p>

            <div className="mt-8 flex w-full max-w-md bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN..."
                className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-[#6FB3A7] hover:shadow-lg hover:shadow-[#6FB3A7]/30 transition-all duration-300 transform active:scale-95">
                Search
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 z-[${3-i}]`}>
                    U{i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 flex items-center">
                <span className="font-bold text-black mr-1">10k+</span> active readers
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[500px]">
            {/* Book Stack Animation */}
            <div className="absolute right-0 w-full max-w-sm">
              <div className="relative w-full aspect-[3/4]">
                {/* Back Book */}
                <div className="absolute inset-0 bg-white shadow-2xl rounded-lg transform rotate-6 translate-x-8 translate-y-4 border border-gray-100 overflow-hidden transition-transform duration-700 hover:rotate-12 hover:translate-x-12">
                  <Image src="/cover_history.png" alt="History" fill className="object-cover opacity-80 mix-blend-multiply" />
                </div>
                {/* Middle Book */}
                <div className="absolute inset-0 bg-white shadow-2xl rounded-lg transform -rotate-3 -translate-x-4 translate-y-2 border border-gray-100 overflow-hidden transition-transform duration-700 hover:-rotate-6 hover:-translate-x-8">
                  <Image src="/cover_mystery.png" alt="Mystery" fill className="object-cover opacity-90 mix-blend-multiply" />
                </div>
                {/* Front Book */}
                <div className="absolute inset-0 bg-white shadow-2xl rounded-lg transform transition-transform duration-500 hover:-translate-y-4 hover:scale-105 border border-white p-2">
                  <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <Image
                      src="/photo2.png"
                      alt="Gone Dead Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                    <h3 className="text-lg font-serif font-bold text-gray-900">Gone Dead</h3>
                    <p className="text-[#6FB3A7] text-sm font-medium">C.R Bernard</p>
                    <div className="mt-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}