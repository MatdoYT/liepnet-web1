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

        {/* Feature Cards with Image */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Text Columns */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${item * 0.1}s` }}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-600/10 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-700/30 flex items-center justify-center mb-4">
                    <div className="w-5 h-5 rounded bg-emerald-600"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Feature {item}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover powerful features that help you achieve more with less effort. 
                    Our solutions are designed for modern workflows.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 h-full flex items-center justify-center">
              <div className="w-full aspect-square bg-emerald-800/20 rounded-xl flex items-center justify-center">
                <div className="text-emerald-400/60 text-sm">Image Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;