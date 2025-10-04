import StatsSection from "@/components/Main page/StatsSection";
import ServicesSection from "@/components/Main page/ServicesSection";
import PortfolioSection from "@/components/Main page/PortfolioSection";
import CTASection from "@/components/Main page/CTASection";
import Footer from "@/components/Main page/Footer";
import HeroSection from "@/components/Main page/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen hero text-foreground">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </div>
  );
}
