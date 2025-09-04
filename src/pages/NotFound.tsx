import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 bg-clip-text text-transparent mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We've searched everywhere but didn't find the page you're looking for.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="px-8">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
