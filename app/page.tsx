import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Clientele from "@/components/Clientele";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Section 00: Why Us */}
        <WhyUs />

        {/* Section 01: Engineering Services Grid */}
        <Services />

        {/* Section 02: Smarter Solutions Left-Sticky & Right-Scroll */}
        <Solutions />

        {/* Section 03: Cutting-Edge Tech Tab selector */}
        <TechStack />

        {/* Section 04: What's Good Slider Carousel */}
        <Portfolio />

        {/* Section 05: Client Testimonials */}
        <Testimonials />

        {/* Section 06: Clientele scrolling logo marquee */}
        <Clientele />

        {/* Section 07: Blog Article slider */}
        <Blog />
      </main>
      
      {/* Footer & Estimate Request form */}
      <Footer />
    </>
  );
}
