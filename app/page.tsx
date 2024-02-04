'use client'
import About from "@/components/About";
import CreatorSection from "@/components/CreatorSection";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";
import Slider from "@/components/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




export default function Home() {

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:"ease",
      once: true,
      anchorPlacement:'top-bottom',

    });
  },[])


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CreatorSection />
      <PopularItems />
      <Slider />
      <Creators />
      <Footer />
    </div>
  );
}
