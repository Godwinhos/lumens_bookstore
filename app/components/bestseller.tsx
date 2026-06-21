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
    <section className="bg-[#ECEEEB] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">
          Best Seller Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index}>
              <div className="relative bg-white p-4 shadow-sm">
                <span className="absolute top-3 right-3 text-xs font-medium text-black ml-10 bg-[#FFFFFF] ">
                  {book.discount}
                </span>

                <Image
                  src={book.image}
                  alt={book.title}
                  width={180}
                  height={180}
                  className="mx-auto bg-[#E3E3E3]"
                />
              </div>

              <div className="">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold ">{book.title}</h3>
                  <span className="text-[#6FB3A7] font-semibold ">
                    {book.price}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-12">
          <div className="w-12 h-1 bg-[#6FB3A7]" />
          <button className="text-[#6FB3A7] text-3xl">
            →
          </button>
        </div>
      </div>
    </section>
  );
}