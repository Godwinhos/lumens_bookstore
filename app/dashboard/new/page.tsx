"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddBookPage() {
  const router = useRouter();

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Real app would make an API call to save the book.
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8]">
      <Navbar />

      <main className="flex-grow max-w-3xl w-full mx-auto px-4 py-12">
        <Link href="/dashboard" className="text-sm text-gray-500 hover:text-[#6FB3A7] transition-colors mb-6 inline-block">
          ← Back to Dashboard
        </Link>
        
        <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-serif text-black mb-2">Add New Book</h1>
          <p className="text-gray-500 mb-8">Fill in the details below to add a new book to the library.</p>

          <form onSubmit={handleAddBook} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Book Title</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors text-black"
                  placeholder="e.g. The Silent Echo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors text-black"
                  placeholder="e.g. Cameron Williamson"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors bg-white text-black">
                  <option value="">Select Category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Mystery">Mystery</option>
                  <option value="History">History</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Biography">Biography</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Initial Status</label>
                <select className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors bg-white text-black">
                  <option value="Available">Available</option>
                  <option value="Checked Out">Checked Out</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea 
                rows={4}
                className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors resize-none text-black"
                placeholder="Brief description of the book..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
              <Link 
                href="/dashboard"
                className="px-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
              >
                Cancel
              </Link>
              <button 
                type="submit" 
                className="bg-black text-white px-8 py-2.5 text-sm font-semibold hover:bg-[#6FB3A7] transition-colors"
              >
                Save Book
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}