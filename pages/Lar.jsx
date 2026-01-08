import HeroSection from "@/Componentes/Pousar/secaoDeHerois";
import BenefitsSection from "@/Componentes/Pousar/secaoDeBeneficios";
import ResultsSection from "@/Componentes/Pousar/secaoDeResultados";
import ServicesSection from "@/Componentes/Pousar/secaoDeServicos";
import TestimonialsSection from "@/Componentes/Pousar/secaoDeDepoimentos";
import PricingSection from "@/Componentes/Pousar/secaoDePrecos";
import CTASection from "@/Componentes/Pousar/secaoDeCTAs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <BenefitsSection />
      <ResultsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
