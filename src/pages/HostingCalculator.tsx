import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import hostingBanner from "@/assets/hosting-banner.png";

const HostingCalculator = () => {
  const [changes, setChanges] = useState(3);
  const [priority, setPriority] = useState<"normal" | "high">("normal");
  const [setupFee, setSetupFee] = useState<"simple" | "complex">("simple");

  const basePrice = 25.32;
  const changeIncreaseCost = 5;
  const changeDecreaseCost = 3;

  const calculateMonthlyPrice = () => {
    let price = basePrice;
    
    if (changes > 3) {
      price += (changes - 3) * changeIncreaseCost;
    } else if (changes < 3) {
      price -= (3 - changes) * changeDecreaseCost;
    }

    if (priority === "high") {
      price *= 2;
    }

    return price;
  };

  const monthlyPrice = calculateMonthlyPrice();
  const setupFeeAmount = setupFee === "simple" ? 100 : 200;
  const totalWithVAT = monthlyPrice + setupFeeAmount;
  const totalWithoutVAT = totalWithVAT / 1.21;
  const vatAmount = totalWithVAT - totalWithoutVAT;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Banner Background with Fade */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover brightness-[0.7]"
            style={{ 
              backgroundImage: `url(${hostingBanner})`,
              backgroundPosition: 'center 75%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            PRICE CALCULATOR
          </h1>

          {/* Calculator Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-lg">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
              
              {/* Border with Gradient */}
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-emerald-900/50 via-emerald-700/30 to-emerald-900/50">
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-background/95 via-muted/20 to-background/95" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 space-y-8">
                {/* Changes per Month */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    Changes per Month
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setChanges(Math.max(0, changes - 1))}
                      disabled={changes <= 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold text-foreground min-w-[3ch] text-center">
                      {changes}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setChanges(Math.min(10, changes + 1))}
                      disabled={changes >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground ml-2">
                      (max 10)
                    </span>
                  </div>
                </div>

                {/* Priority */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    Priority
                  </Label>
                  <RadioGroup value={priority} onValueChange={(value: "normal" | "high") => setPriority(value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal" className="cursor-pointer">Normal Priority</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high" className="cursor-pointer">High Priority (2x price)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    Location
                  </Label>
                  <div className="text-foreground">Mālpils</div>
                </div>

                {/* Website Setup Fee */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    Website Setup Fee
                  </Label>
                  <RadioGroup value={setupFee} onValueChange={(value: "simple" | "complex") => setSetupFee(value)}>
                    <TooltipProvider>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="simple" id="simple" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="simple" className="cursor-pointer">
                              Simple Website (100 EUR)
                            </Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              A simple website includes simple static or slightly dynamic pages.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="complex" id="complex" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="complex" className="cursor-pointer">
                              Complex Website (200 EUR)
                            </Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              A complex website includes mostly dynamic pages and can include places where the contents can change or get updated externally.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </RadioGroup>
                </div>

                {/* Price Summary */}
                <div className="pt-6 border-t border-muted space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monthly Hosting:</span>
                    <span className="text-foreground font-semibold">{monthlyPrice.toFixed(2)} EUR/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Setup Fee:</span>
                    <span className="text-foreground font-semibold">{setupFeeAmount} EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold pt-3 border-t border-muted">
                    <span className="text-foreground">Total (incl. VAT 21%):</span>
                    <span className="text-foreground">{totalWithVAT.toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">VAT Amount:</span>
                    <span className="text-muted-foreground">{vatAmount.toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Total (excl. VAT):</span>
                    <span className="text-muted-foreground">{totalWithoutVAT.toFixed(2)} EUR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HostingCalculator;
