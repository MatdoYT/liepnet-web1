import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ContentSection from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-8">
        <HeroBanner />
        <ContentSection />
      </main>
    </div>
  );
};

export default Index;
