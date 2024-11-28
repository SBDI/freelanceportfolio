import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navigation />
      <Hero />
      <PortfolioGrid />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;