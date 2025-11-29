import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import OurWorks from "./components/OurWorks";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import ClientsMarquee from "./components/ClientsMarquee";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import OurWorksServer from "./components/OurWorksServer";

export const revalidate = 60; // ISR (обновление каждые 60 сек)

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
    next: { revalidate: 60 },
  });
  const categories = await res.json();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* === HERO === */}
      <HeroSection />


      {/* === КАТЕГОРИИ === */}
      <CategoriesSection />

      <OurWorksServer />

      {/* <OurWorks categories={categories} /> */}
      <AboutSection />


      <ClientsMarquee
        speed={28}
        logos={[
          { src: "/images/clients/yandex.svg", alt: "Yandex" },
          { src: "/images/clients/s7.svg", alt: "S7 Airlines" },
          { src: "/images/clients/gazprom.svg", alt: "Gazprom" },
          { src: "/images/clients/tele2.svg", alt: "Tele2" },
          { src: "/images/clients/rostec.svg", alt: "Rostec" },
          { src: "/images/clients/megafon.svg", alt: "MegaFon" },
        ]} />
      <ReviewsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
