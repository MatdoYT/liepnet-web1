import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Gaming = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('gaming')} - Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This page is currently under construction. We're working on bringing you amazing gaming content!
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="mr-4">
                Return to Home
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Check back soon for gaming services, tips, and more!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;