import Header from "@/sections/Header";
import homelogo from "../assets/homebg.jpg"
import Hero from "@/sections/Hero";
import Image from "next/image";
import Footer from "@/sections/Footer";
import Products from "@/sections/Products";
import Application from "@/sections/Application";

export default function Home() {
  return (
    <main className="">
    {/* Background Image */}
    <Image
      src={homelogo}
      alt="Homepage Background"
      fill
      style={{ objectFit: "cover", zIndex: -1 }}
      priority
    />

    {/* Content Wrapper */}
    <div className="">
      <Header />
      <div>
          <Hero />
      </div>
      <Products />
      <Application />
      <Footer />
    </div>
  </main> 
  );
}
