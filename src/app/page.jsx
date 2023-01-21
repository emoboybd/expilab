import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <main>
        <Hero />
        <Vision />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
