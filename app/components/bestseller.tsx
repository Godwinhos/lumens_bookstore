"use client"
import Image from "next/image";

const books = [
  {
    title: "Bovary Made",
    author: "Floyd Miles",
    price: "$85.00",
    discount: "15% Off",
    image: "/cover_fiction.png",
  },
  {
    title: "Gurur Nyar I",
    author: "Dan Carter",
    price: "$70.00",
    discount: "10% Off",
    image: "/cover_mystery.png",
  },
  {
    title: "Beyaz Dias I",
    author: "Theresa Webb",
    price: "$45.00",
    discount: "5% Off",
    image: "/cover_history.png",
  },
  {
    title: "Sueve Ceza I",
    author: "Kathryn Murphy",
    price: "$99.00",
    discount: "10% Off",
    image: "/cover_fiction.png",
  },
];

export default function BestSellerBooks() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Best Seller Books</h2>
            <p className="text-gray-500">Discover our most popular reads this month.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#6FB3A7] hover:text-[#45857a] transition-colors">
            View All <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-[#F9FAF8] p-6 rounded-2xl mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:bg-[#E1F0ED]/30 overflow-hidden">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-white bg-[#6FB3A7] rounded-full shadow-sm">
                  {book.discount}
                </span>

                <div className="relative w-full aspect-[3/4] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-contain drop-shadow-xl p-4 mix-blend-multiply"
                  />
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-[#6FB3A7] transition-colors">
                    {book.title}
                  </h3>
                  <span className="text-[#6FB3A7] font-semibold">
                    {book.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  {book.author}
                </p>
                <button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden flex justify-center mt-12">
          <button className="flex items-center gap-2 text-sm font-semibold text-[#6FB3A7] hover:text-[#45857a] transition-colors">
            View All <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}