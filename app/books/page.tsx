"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const allBooks = [
  {
    title: "Bovary Made",
    author: "Floyd Miles",
    status: "Available",
    category: "Fiction",
    image: "/cover_fiction.png",
  },
  {
    title: "Gurur Nyar I",
    author: "Dan Carter",
    status: "Checked Out",
    category: "Mystery",
    image: "/cover_mystery.png",
  },
  {
    title: "Beyaz Dias I",
    author: "Theresa Webb",
    status: "Available",
    category: "History",
    image: "/cover_history.png",
  },
  {
    title: "Sueve Ceza I",
    author: "Kathryn Murphy",
    status: "Available",
    category: "Biography",
    image: "/cover_fiction.png",
  },
  {
    title: "Lumen's Guide",
    author: "Eleanor Pena",
    status: "Available",
    category: "Education",
    image: "/cover_history.png",
  },
  {
    title: "The Silent Echo",
    author: "Cameron Williamson",
    status: "Checked Out",
    category: "Sci-Fi",
    image: "/cover_mystery.png",
  },
  {
    title: "Crimson Dawn",
    author: "Bessie Cooper",
    status: "Available",
    category: "Fantasy",
    image: "/cover_fiction.png",
  },
  {
    title: "Modern Horizons",
    author: "Brooklyn Simmons",
    status: "Available",
    category: "Non-Fiction",
    image: "/cover_history.png",
  },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8]">
      <Navbar />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[#ECEEEB] py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif mb-4 text-black">Our Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our vast collection of books. Find your next favorite read and check it out directly from our library.
            </p>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-serif text-black">All Books</h2>
            <div className="flex gap-4">
              <select className="bg-white border border-gray-300 px-4 py-2 text-sm outline-none text-black">
                <option>All Categories</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>History</option>
                <option>Fantasy</option>
              </select>
              <select className="bg-white border border-gray-300 px-4 py-2 text-sm outline-none text-black">
                <option>Sort by: Newest</option>
                <option>Sort by: A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allBooks.map((book, index) => (
              <div key={index} className="group flex flex-col h-full bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="relative mb-4 overflow-hidden">
                  <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 z-10 ${book.status === 'Available' ? 'bg-[#6FB3A7] text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {book.status}
                  </span>
                  <div className="bg-[#E3E3E3] h-[240px] flex items-center justify-center relative overflow-hidden">
                    <div className="group-hover:scale-105 transition-transform duration-500 w-full h-full flex items-center justify-center">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={140}
                        height={180}
                        className="object-contain drop-shadow-md max-h-[200px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider mb-1 block font-medium">
                      {book.category}
                    </span>
                    <h3 className="font-semibold text-lg leading-tight mb-1 text-black">{book.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{book.author}</p>
                  </div>
                  
                  <button 
                    disabled={book.status !== 'Available'}
                    className={`w-full py-2.5 text-sm font-semibold transition-colors duration-300 ${
                      book.status === 'Available' 
                      ? 'bg-black text-white hover:bg-[#6FB3A7]' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {book.status === 'Available' ? 'Check Out' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}