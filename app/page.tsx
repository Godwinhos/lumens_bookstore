import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BestSellerBooks from "./components/bestseller";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <BestSellerBooks/>
    <Footer/>
    </>

  );
}
