"use client"

import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] flex items-center justify-center">
      <section className="max-w-6xl w-full px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-5xl font-serif leading-tight text-gray-900">
              Buy and sell your
              <br />
              textbooks for the
              <br />
              best price
            </h1>

            <p className="mt-6 text-gray-500 max-w-md">
              From applied literature to educational resources,
              we have a lot of textbooks to offer you.
              We provide only the best books for rent.
            </p>

            <div className="mt-8 flex w-full max-w-md">
              <input
                type="text"
                placeholder="Search for ISBN number"
                className="flex-1 px-4 py-3 bg-white border outline-none"
              />

              <button className="bg-green-600 text-white px-8 py-3 hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            
        
            <div className="absolute left-[58%] top-5 w-44 h-64 bg-gray-300 rounded shadow-lg" />

            <div className="absolute left-[68%] top-10 w-44 h-64 bg-gray-400 rounded shadow-lg" />

            
            <div className="relative bg-white shadow-xl w-56">
              <Image
                src="/photo2.png"
                alt="Book Cover"
                width={300}
                height={400}
                className="w-full h-auto"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Gone Dead
                </h3>

                <p className="text-gray-500 text-sm">
                  C.R Bernard
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}