import { Clock, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const ActivitiesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: activitiesRef, isVisible: activitiesVisible, getStaggerDelay } = useStaggeredAnimation(4);

  const activities = [
    {
      title: 'Endurance Trke',
      description: 'Takmičenja na različitim distancama od 40km do 160km. Testiramo izdržljivost i partnerstvo između jahača i konja.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
      accent: 'from-primary/80 to-accent/60',
    },
    {
      title: 'Škola Jahanja',
      description: 'Lekcije jahanja za sve uzraste i nivoe. Od početnika do naprednih jahača, pružamo stručno vođenje.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&h=400&fit=crop',
      accent: 'from-accent/80 to-primary/60',
    },
    {
      title: 'Rekreativno Jahanje',
      description: 'Opuštene vožnje kroz prirodu Vojvodine. Idealno za ljubitelje konja koji žele da uživaju u prirodi.',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      accent: 'from-gold/80 to-primary/60',
    },
    {
      title: 'Letnji Kampovi',
      description: 'Programi za mlade jahače tokom letnjeg raspusta. Kombinacija učenja, zabave i druženja sa konjima.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      accent: 'from-primary/80 to-gold/60',
    },
  ];

  return (
    <section id="aktivnosti" className="relative py-32 lg:py-40 bg-gradient-section overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-40 right-0 w-1/3 h-96 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-1/3 h-96 bg-gradient-radial from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block font-body text-primary text-xs uppercase tracking-[0.3em] mb-6">
            Naše Aktivnosti
          </span>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-8 leading-[1.1]">
            Šta{' '}
            <span className="italic text-primary">Nudimo</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Od profesionalnih takmičenja do opuštenog rekreativnog jahanja, 
            imamo program za svakoga ko voli konje.
          </p>
        </div>

        {/* Activities Grid */}
        <div ref={activitiesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-700 ${
                activitiesVisible 
                  ? 'opacity-100 translate-y-0' 
                  : `opacity-0 ${index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
              }`}
              style={{ 
                ...getStaggerDelay(index),
                transitionDuration: '900ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.accent} mix-blend-multiply opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40`} />
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute bottom-6 right-6 z-20">
                    <span className="font-heading text-6xl font-bold text-primary-foreground/20">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {activity.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-body text-sm font-medium group/link cursor-pointer">
                    <span className="link-underline">Saznaj više</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border border-border/50 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
