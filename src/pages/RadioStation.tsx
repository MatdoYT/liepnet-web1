import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RadioPlayer from '@/components/RadioPlayer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Radio as RadioIcon, MapPin, Clock } from 'lucide-react';

// Placeholder data - will be dynamic based on station ID
const stationData: Record<string, any> = {
  'radio-skonto': {
    name: 'Radio Skonto',
    logo: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream1',
    hasQualityOptions: true,
    description: 'Radio Skonto is one of the leading radio stations in Latvia, broadcasting a mix of contemporary hits and local content.',
    broadcastAreas: ['Riga', 'Jurmala', 'Sigulda', 'Valmiera'],
    programs: [
      'Morning Show (6:00-10:00)',
      'Midday Music (10:00-14:00)',
      'Drive Time (14:00-18:00)',
      'Evening Vibes (18:00-22:00)',
    ],
  },
};

const RadioStation = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const navigate = useNavigate();
  
  const station = stationData[stationId || ''] || {
    name: 'Station',
    logo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    description: 'A great radio station broadcasting quality content.',
    broadcastAreas: ['Area 1', 'Area 2'],
    programs: ['Program 1', 'Program 2'],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24 mb-32">
        <Button
          variant="ghost"
          onClick={() => navigate('/radio')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Radio
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Station Logo */}
          <div className="space-y-6">
            <img
              src={station.logo}
              alt={station.name}
              className="w-full max-w-md aspect-square rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </div>

          {/* Station Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{station.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {station.description}
              </p>
            </div>

            {/* Broadcast Areas */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <MapPin className="w-6 h-6 text-primary" />
                <h2>Broadcast Areas</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {station.broadcastAreas?.map((area: string) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
              {/* Placeholder for custom map */}
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Custom broadcast map will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Clock className="w-6 h-6 text-primary" />
                <h2>Programs</h2>
              </div>
              <div className="space-y-2">
                {station.programs?.map((program: string) => (
                  <div
                    key={program}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <RadioPlayer />
      <Footer />
    </div>
  );
};

export default RadioStation;
