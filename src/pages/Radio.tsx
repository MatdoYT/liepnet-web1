import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RadioStationCard from '@/components/RadioStationCard';
import RadioPlayer from '@/components/RadioPlayer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder stations - user will edit these
const stations = [
  {
    id: 'radio-skonto',
    name: 'Radio Skonto',
    logo: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream1',
    hasQualityOptions: true,
  },
  {
    id: 'station-2',
    name: 'Station 2',
    logo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream2',
    hasQualityOptions: false,
  },
  {
    id: 'station-3',
    name: 'Station 3',
    logo: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream3',
    hasQualityOptions: true,
  },
  {
    id: 'station-4',
    name: 'Station 4',
    logo: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream4',
    hasQualityOptions: false,
  },
  {
    id: 'station-5',
    name: 'Station 5',
    logo: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    streamUrl: 'https://example.com/stream5',
    hasQualityOptions: true,
  },
];

const Radio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Radio Stations</h1>
          <p className="text-muted-foreground text-lg">Listen to your favorite radio stations</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Stations</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {stations.map((station) => (
                <RadioStationCard key={station.id} {...station} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {stations.slice(0, 3).map((station) => (
                <RadioStationCard key={station.id} {...station} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="local" className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {stations.slice(0, 2).map((station) => (
                <RadioStationCard key={station.id} {...station} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="international" className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {stations.slice(2).map((station) => (
                <RadioStationCard key={station.id} {...station} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <RadioPlayer />
      <Footer />
    </div>
  );
};

export default Radio;
