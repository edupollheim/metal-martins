'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Location from "@/components/Location";
import WhatsAppIcon from "@/components/whatsappIcon";
import Works from "@/components/Obras";
import Careers from "@/components/TrabalheConosco";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <div>
        <main className="flex-grow">
          {/* <WhatsAppIcon /> */}
          <WhatsAppIcon />
          <Hero />
          <About />
          <Contact />
          <Solutions />
          <Location />
          <Works />
          <Careers />
        </main>
        <Footer />
      </div>
    </div>
  );
}

