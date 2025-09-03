import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gaming = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t('gaming')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gamingDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">{t('gamingServices')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t('gameServerSetup')}</li>
              <li>• {t('networkOptimization')}</li>
              <li>• {t('latencyReduction')}</li>
              <li>• {t('customGameConfigs')}</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">{t('supportedGames')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Minecraft</li>
              <li>• Counter-Strike</li>
              <li>• Valorant</li>
              <li>• League of Legends</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">{t('gamingTips')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t('optimizeConnection')}</li>
              <li>• {t('reduceInput')}</li>
              <li>• {t('improveFramerate')}</li>
              <li>• {t('troubleshooting')}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;