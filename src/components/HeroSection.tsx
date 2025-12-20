import heroImage from '@/assets/hero-horse.jpg';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Konj u trku na otvorenom polju"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-primary-foreground/80 text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Mali Iđoš, Vojvodina
          </p>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-semibold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Konjički Klub
            <span className="block italic text-primary-foreground/90">Endukas</span>
          </h1>
          
          <p className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Gde strast prema konjima susreće izdržljivost i avanturu. 
            Pridružite se našoj zajednici ljubitelja endurance jahanja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <a
              href="#o-nama"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium transition-all hover:shadow-glow hover:scale-105"
            >
              Saznaj Više
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 rounded-full font-body font-medium transition-all hover:bg-primary-foreground/20"
            >
              Kontaktiraj Nas
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#o-nama" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="font-body text-xs uppercase tracking-widest">Skroluj</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
