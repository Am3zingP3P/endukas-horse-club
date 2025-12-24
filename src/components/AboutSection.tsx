import { Heart, Users, Trophy, Mountain } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useCounter } from '@/hooks/useCounter';

const StatCounter = ({ end, suffix, label, isVisible, delay }: { end: number; suffix: string; label: string; isVisible: boolean; delay: number }) => {
  const count = useCounter({ end, duration: 2500, delay, enabled: isVisible });
  
  return (
    <div 
      className={`text-center transition-all duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative inline-block">
        <p className="font-heading text-5xl md:text-7xl font-bold text-primary mb-2 counter-number">
          {count}{suffix}
        </p>
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl -z-10" />
      </div>
      <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible, getStaggerDelay } = useStaggeredAnimation(4);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const features = [
    {
      icon: Heart,
      title: 'Ljubav Prema Konjima',
      description: 'Naša strast prema konjima je u srcu svega što radimo. Brinemo se o svakom konju kao o članu porodice.',
    },
    {
      icon: Users,
      title: 'Zajednica',
      description: 'Okupljamo ljubitelje konja svih uzrasta i nivoa iskustva u podržavajućoj i prijateljskoj atmosferi.',
    },
    {
      icon: Trophy,
      title: 'Takmičenja',
      description: 'Učestvujemo na endurance trkama širom Srbije i Balkana, negujući sportski duh i fer-plej.',
    },
    {
      icon: Mountain,
      title: 'Avantura',
      description: 'Istražujemo predivne predele Vojvodine i šire, stvarajući nezaboravna iskustva na otvorenom.',
    },
  ];

  const stats = [
    { end: 15, suffix: '+', label: 'Godina Iskustva' },
    { end: 50, suffix: '+', label: 'Aktivnih Članova' },
    { end: 100, suffix: '+', label: 'Trka Učestvovano' },
    { end: 20, suffix: '+', label: 'Konja u Klubu' },
  ];

  return (
    <section id="o-nama" className="relative py-32 lg:py-40 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-primary/10 animate-spin-slow opacity-30" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full border border-primary/10 animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block font-body text-primary text-xs uppercase tracking-[0.3em] mb-6 relative">
            <span className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-12 h-px bg-primary/50 mr-4 hidden sm:block" style={{ left: '-60px' }} />
            O Nama
            <span className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 w-12 h-px bg-primary/50 ml-4 hidden sm:block" style={{ right: '-60px' }} />
          </span>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-8 leading-[1.1]">
            Tradicija i{' '}
            <span className="italic text-primary">Strast</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Konjički Klub Endukas je građanski klub sa sedištem u Malom Iđošu, 
            posvećen promovisanju endurance jahanja i izgradnji zajednice ljubitelja konja 
            u Vojvodini i šire.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group card-premium p-8 lg:p-10 ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                ...getStaggerDelay(index),
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="relative py-16 px-8 rounded-3xl bg-card shadow-elevated"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={statsVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
