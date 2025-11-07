import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ArrowLeft, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import calculatorBg from "@/assets/calculator-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HostingCalculator = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [changes, setChanges] = useState(3);
  const [priority, setPriority] = useState<"normal" | "high">("normal");
  const [setupFee, setSetupFee] = useState<"simple" | "complex">("simple");
  const [location, setLocation] = useState<"malpils">("malpils");
  const [showBackDialog, setShowBackDialog] = useState(false);
  
  useEffect(() => {
    document.title = t('priceCalculator');
  }, [t]);

  // Base prices WITHOUT VAT (whole numbers)
  const baseMonthlyPriceNoVAT = 13; // EUR without VAT for 3 changes, normal priority
  const changeIncreaseCostNoVAT = 4; // EUR without VAT per additional change
  const changeDecreaseCostNoVAT = 2; // EUR without VAT per reduced change

  const calculateMonthlyPriceWithVAT = () => {
    let priceNoVAT = baseMonthlyPriceNoVAT;
    
    if (changes > 3) {
      priceNoVAT += (changes - 3) * changeIncreaseCostNoVAT;
    } else if (changes < 3) {
      priceNoVAT -= (3 - changes) * changeDecreaseCostNoVAT;
    }

    if (priority === "high") {
      priceNoVAT *= 2;
    }

    // Add VAT (21%)
    return priceNoVAT * 1.21;
  };

  const monthlyPriceWithVAT = calculateMonthlyPriceWithVAT();
  const monthlyPriceNoVAT = monthlyPriceWithVAT / 1.21;
  const setupFeeBase = setupFee === "simple" ? 50 : 150; // Without VAT
  const setupFeeWithVAT = setupFeeBase * 1.21;
  const setupFeeVAT = setupFeeBase * 0.21;
  const monthlyVAT = monthlyPriceWithVAT - monthlyPriceNoVAT;
  const totalUpfrontWithVAT = setupFeeWithVAT + monthlyPriceWithVAT;
  const totalUpfrontVAT = setupFeeVAT + monthlyVAT;
  const totalUpfrontWithoutVAT = setupFeeBase + monthlyPriceNoVAT;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Banner Background with Fade */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover brightness-[0.3]"
            style={{ 
              backgroundImage: `url(${calculatorBg})`,
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          {/* Title with Gradient */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t('priceCalculator')}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">{t('priceCalculatorSubtitle')}</p>
          </div>

          {/* Calculator Card with Back Button */}
          <div className="max-w-2xl mx-auto flex items-start gap-4">
            {/* Back Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowBackDialog(true)}
              className="shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            {/* Calculator Card */}
            <div className="flex-1">
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
                    {t('changesPerMonth')}
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
                  </div>
                </div>

                {/* Priority */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    {t('priority')}
                  </Label>
                  <TooltipProvider>
                    <RadioGroup value={priority} onValueChange={(value: "normal" | "high") => setPriority(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="normal" id="normal" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="normal" className="cursor-pointer">{t('normalPriority')}</Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{t('tooltipNormalPriority')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="high" className="cursor-pointer">{t('highPriority')}</Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{t('tooltipHighPriority')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </RadioGroup>
                  </TooltipProvider>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    {t('location')}
                  </Label>
                  <TooltipProvider>
                    <RadioGroup value={location} onValueChange={(value: "malpils") => setLocation(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="malpils" id="malpils" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="malpils" className="cursor-pointer">Mālpils</Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{t('tooltipMalpils')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </RadioGroup>
                  </TooltipProvider>
                </div>

                {/* Website Setup Fee */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-foreground">
                    {t('websiteSetupFee')}
                  </Label>
                  <RadioGroup value={setupFee} onValueChange={(value: "simple" | "complex") => setSetupFee(value)}>
                    <TooltipProvider>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="simple" id="simple" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="simple" className="cursor-pointer">
                              {t('simpleWebsite')}
                            </Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              {t('tooltipSimpleWebsite')}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="complex" id="complex" />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Label htmlFor="complex" className="cursor-pointer">
                              {t('complexWebsite')}
                            </Label>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              {t('tooltipComplexWebsite')}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </RadioGroup>
                </div>

                {/* Price Summary */}
                <div className="pt-6 border-t border-foreground space-y-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex justify-between items-center cursor-help">
                          <span className="text-foreground font-bold text-lg">{t('monthlyHosting')}</span>
                          <span className="text-foreground font-bold text-lg">{monthlyPriceWithVAT.toFixed(2)} EUR/mo</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t('tooltipMonthlyHosting')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <Separator className="bg-foreground" />
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex justify-between items-center text-lg font-bold pt-3 cursor-help">
                          <span className="text-foreground">{t('upfrontCost')}</span>
                          <span className="text-foreground">{totalUpfrontWithVAT.toFixed(2)} EUR</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{t('tooltipUpfrontCost')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <Separator className="bg-foreground" />
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('totalInclVat')}</span>
                    <span className="text-muted-foreground">{totalUpfrontWithVAT.toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('vatAmount')}</span>
                    <span className="text-muted-foreground">{totalUpfrontVAT.toFixed(2)} EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('totalExclVat')}</span>
                    <span className="text-muted-foreground">{totalUpfrontWithoutVAT.toFixed(2)} EUR</span>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-6">
                  <Button 
                    asChild 
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                    size="lg"
                  >
                    <a href="mailto:matiss.apsitis@liepnet.id.lv">
                      <Mail className="mr-2 h-5 w-5" />
                      {t('contactUs')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Back Confirmation Dialog */}
      <AlertDialog open={showBackDialog} onOpenChange={setShowBackDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('unsavedChangesTitle')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('unsavedChangesDesc')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => navigate('/hosting')}
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              {t('goBack')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default HostingCalculator;
