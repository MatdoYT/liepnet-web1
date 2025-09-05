import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Gaming from "./pages/Gaming";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/services" element={<NotFound />} />
            <Route path="/meteo" element={<NotFound />} />
            <Route path="/logos" element={<NotFound />} />
            <Route path="/network-planning" element={<NotFound />} />
            <Route path="/hosting" element={<NotFound />} />
            <Route path="/forums" element={<NotFound />} />
            <Route path="/radio" element={<NotFound />} />
            <Route path="/maps" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
