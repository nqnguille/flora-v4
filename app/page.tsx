import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import PorQueFlora from "@/components/PorQueFlora";
import Membresias from "@/components/Membresias";
import Testimonial from "@/components/Testimonial";
import Educacion from "@/components/Educacion";
import Legalidad from "@/components/Legalidad";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComoFunciona />
        <PorQueFlora />
        <Membresias />
        <Testimonial />
        <Educacion />
        <Legalidad />
      </main>
      <Footer />
    </>
  );
}
