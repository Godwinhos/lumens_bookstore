"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/books');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF8]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-black mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h1>
            <p className="text-gray-500 text-sm">
              {isLogin ? "Please enter your details to sign in." : "Fill in your details to get started."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors text-black"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                required
                className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors text-black"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                {isLogin && <Link href="#" className="text-xs text-[#6FB3A7] hover:underline">Forgot password?</Link>}
              </div>
              <input 
                type="password" 
                required
                className="w-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#6FB3A7] transition-colors text-black"
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 text-sm font-semibold hover:bg-[#6FB3A7] transition-colors mt-4"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-black font-semibold hover:text-[#6FB3A7] transition-colors cursor-pointer"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}