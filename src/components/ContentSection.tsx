import heroImage from "@/assets/hero-content.jpg";
import { Button } from "@/components/ui/button";
const ContentSection = () => {
  return <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">WHAT IS LIEPNET™?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">LIEPNET™ provides a range of services, including logo development, hosting, business WI-FI and network planning, meteorological information, and tech tips for everyone.</p>
            
          </div>

          {/* Image Column */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative rounded-2xl overflow-hidden stroke-border">
              <img src={heroImage} alt="Modern digital workspace" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 card-gradient opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(item => {
            const isFirst = item === 1;
            const isSecond = item === 2;
            const isThird = item === 3;
            const isFourth = item === 4;
            const isFifth = item === 5;
            const isSixth = item === 6;
            return (
              <div key={item} className={`${isFirst || isFourth ? 'light-blue-gradient' : isSecond || isFifth ? 'bright-green-gradient' : isThird || isSixth ? 'bright-red-gradient' : 'card-gradient'} rounded-2xl p-8 stroke-border animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300`} style={{
                animationDelay: `${item * 0.1}s`
              }}>
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${isFirst || isFourth ? 'from-blue-400/10' : isSecond || isFifth ? 'from-green-400/10' : isThird || isSixth ? 'from-red-400/10' : 'from-primary/10'} to-transparent group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg ${isFirst || isFourth ? 'bg-blue-400/20' : isSecond || isFifth ? 'bg-green-400/20' : isThird || isSixth ? 'bg-red-400/20' : 'bg-primary/20'} flex items-center justify-center mb-6`}>
                    <div className={`w-6 h-6 rounded ${isFirst || isFourth ? 'bg-blue-400' : isSecond || isFifth ? 'bg-green-400' : isThird || isSixth ? 'bg-red-400' : 'bg-primary'}`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {isFirst || isFourth ? 'Meteorological network' : isSecond || isFifth ? 'Logo development' : isThird || isSixth ? 'WI-FI & network planning' : `Feature ${item}`}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isFirst || isFourth
                      ? 'The LIEPNET™ meteorological network in Latvia.' 
                      : isSecond || isFifth
                      ? 'Does your business need a new refreshed look?'
                      : isThird || isSixth
                      ? 'Does your business have WI-FI or connectivity issues? Is your tech outdated?'
                      : 'Discover powerful features that help you achieve more with less effort. Our solutions are designed for modern workflows.'
                    }
                  </p>
                  {(isFirst || isFourth) && <Button variant="outline" className="mt-2">Explore</Button>}
                  {(isSecond || isFifth) && <Button variant="outline" className="mt-2">Order</Button>}
                  {(isThird || isSixth) && <Button variant="outline" className="mt-2">Request</Button>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accomplishments Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Accomplishments</h2>
            <p className="text-muted-foreground">Celebrating our milestones and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "Award Winner",
            desc: "Recognized for excellence in innovation and technology solutions."
          }, {
            title: "Global Reach",
            desc: "Serving clients across 50+ countries with premium services."
          }, {
            title: "Industry Leader",
            desc: "Setting new standards in digital transformation and growth."
          }].map((item, index) => <div key={index} className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300" style={{
            animationDelay: `${(index + 4) * 0.1}s`
          }}>
                {/* Card gradient overlay */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-600/10 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Image placeholder */}
                  <div className="w-full h-32 bg-emerald-800/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-emerald-400/60 text-sm">Achievement Image</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ContentSection;