import heroImage from "@/assets/hero-content.jpg";

const ContentSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">
              Transform Your Digital Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in creating stunning digital solutions that combine cutting-edge technology 
              with exceptional design. Our team delivers results that exceed expectations and drive 
              real business growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Innovative Design Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">Advanced Technology Stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground">24/7 Premium Support</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden stroke-border">
              <img
                src={heroImage}
                alt="Modern digital workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 card-gradient opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="card-gradient rounded-2xl p-8 stroke-border animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${item * 0.1}s` }}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded bg-primary"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Feature {item}
                </h3>
                <p className="text-muted-foreground">
                  Discover powerful features that help you achieve more with less effort. 
                  Our solutions are designed for modern workflows.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accomplishments Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Accomplishments</h2>
            <p className="text-muted-foreground">Celebrating our milestones and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Award Winner", desc: "Recognized for excellence in innovation and technology solutions." },
              { title: "Global Reach", desc: "Serving clients across 50+ countries with premium services." },
              { title: "Industry Leader", desc: "Setting new standards in digital transformation and growth." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;