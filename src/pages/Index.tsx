import { useEffect } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = 'LIEPNET™';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
