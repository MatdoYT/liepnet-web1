import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { RadioPlayerProvider } from "@/contexts/RadioPlayerContext";
import liepnetLeaf from "@/assets/liepnet-leaf.webp";

// Eagerly load the index page for fast initial render
import Index from "./pages/Index";

// Lazy load other pages for code splitting
const Gaming = lazy(() => import("./pages/Gaming"));
const About = lazy(() => import("./pages/About"));
const Radio = lazy(() => import("./pages/Radio"));
const RadioStation = lazy(() => import("./pages/RadioStation"));
const Hosting = lazy(() => import("./pages/Hosting"));
const HostingCalculator = lazy(() => import("./pages/HostingCalculator"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// LIEPNET branded loading spinner
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <img 
      src={liepnetLeaf} 
      alt="" 
      className="w-12 h-12 animate-spin opacity-70"
      style={{ animationDuration: '1.5s' }}
    />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <RadioPlayerProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gaming" element={<Gaming />} />
                <Route path="/about" element={<About />} />
                <Route path="/radio" element={<Radio />} />
                <Route path="/radio/:stationId" element={<RadioStation />} />
                <Route path="/services" element={<NotFound />} />
                <Route path="/meteo" element={<NotFound />} />
                <Route path="/logos" element={<NotFound />} />
                <Route path="/network-planning" element={<NotFound />} />
                <Route path="/hosting" element={<Hosting />} />
                <Route path="/hosting/liepnet-website-hosting" element={<HostingCalculator />} />
                <Route path="/forums" element={<NotFound />} />
                <Route path="/maps" element={<NotFound />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </RadioPlayerProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;