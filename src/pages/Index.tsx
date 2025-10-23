import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default Index;
