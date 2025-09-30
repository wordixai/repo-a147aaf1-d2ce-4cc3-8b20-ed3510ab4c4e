import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import GlobalPresence from "@/components/GlobalPresence";
import AIAssistant from "@/components/AIAssistant";
import SalesFeatures from "@/components/SalesFeatures";
import ToolsGrid from "@/components/ToolsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-black antialiased h-full w-full">
      <main>
        <Navigation />
        <div className="relative overflow-hidden">
          <GridBackground />
          <main>
            <HeroSection />
            <FeatureCards />
            <GlobalPresence />
            <AIAssistant />
            <SalesFeatures />
            <ToolsGrid />
            <div className="relative z-20 pt-0 pb-40">
              <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
                Loved by Indie Hackers and VC Backed SaaS
              </h2>
              <h2 className="text-sm md:text-base my-4 text-muted-foreground font-normal text-center max-w-lg mx-auto">
                Creem is used by companies of every size. Here's what some of them have to say.
              </h2>
            </div>
            <CTASection />
          </main>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;