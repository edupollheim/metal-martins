'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatsAppIcon from "@/components/whatsappIcon";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/galpao-fundo.jpg')", backgroundAttachment: 'fixed' }}>
      <div>
        <Header />
        <main className="flex-grow">
          <WhatsAppIcon />
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

