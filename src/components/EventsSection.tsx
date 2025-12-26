import { Calendar, MapPin, Clock, ChevronRight, Trophy } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/context/LanguageContext';

const EventsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: eventsRef, isVisible: eventsVisible, getStaggerDelay } = useStaggeredAnimation(3);
  const { ref: pastEventsRef, isVisible: pastEventsVisible } = useScrollAnimation();
  const { t } = useLanguage(); // Nyelv hook használata

  const events = [
    {
      title: t('events.spring_race_title'),
      date: t('events.spring_race_date'),
      time: '08:00',
      location: 'Mali Iđoš',
      description: t('events.spring_race_desc'),
      featured: true,
    },
    {
      title: t('events.summer_camp_title'),
      date: t('events.summer_camp_date'),
      time: 'Ceo dan',
      location: 'Klub Endukas',
      description: t('events.summer_camp_desc'),
      featured: false,
    },
    {
      title: t('events.balkan_league_title'),
      date: t('events.balkan_league_date'),
      time: '07:00',
      location: 'Srbija/Hrvatska',
      description: t('events.balkan_league_desc'),
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: t('events.ny_race'),
      date: '12/2024', // Dátumok maradhatnak számok
      result: t('events.ny_result'),
      icon: Trophy,
    },
    {
      title: t('events.autumn_race'),
      date: '10/2024',
      result: t('events.autumn_result'),
      icon: Trophy,
    },
    {
      title: t('events.vojvodina_cup'),
      date: '09/2024',
      result: t('events.vojvodina_result'),
      icon: Trophy,
    },
  ];

  return (
    <section id="dogadjaji" className="relative py-32 lg:py-40 bg-gradient-section overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full border border-primary/5 animate-pulse-scale pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full border border-accent/5 animate-pulse-scale pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block font-body text-primary text-xs uppercase tracking-[0.3em] mb-6">
            {t('events.badge')}
          </span>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-8 leading-[1.1]">
            {t('events.title')}{' '}
            <span className="italic text-primary">{t('events.title_accent')}</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div ref={eventsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 items-stretch">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative card-premium h-full flex flex-col !scale-100 !transform-none hover:!scale-[0.98] hover:shadow-2xl ${event.featured ? 'shadow-elevated' : 'shadow-soft'} transition-all duration-300 ${
                eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                ...getStaggerDelay(index),
              }}
            >
              {event.featured && (
                <div className="absolute top-5 right-6 z-10">
                  <span className="px-4 py-1.5 bg-gradient-gold text-gold-foreground text-xs font-body font-semibold uppercase tracking-wider rounded-full shadow-gold">
                    {t('events.featured')}
                  </span>
                </div>
              )}

              <div className={`h-1 ${event.featured ? 'bg-gradient-gold' : 'bg-gradient-warm'}`} />
              
              <div className="p-8 lg:p-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-primary text-sm font-medium">{event.date}</span>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 pb-2 leading-tight">
                  {event.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 mt-auto">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary/60" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/60" />
                    {event.location}
                  </span>
                </div>

                <button className="flex items-center gap-2 text-primary font-body text-sm font-medium group/btn">
                  <span className="link-underline">{t('events.more')}</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div ref={pastEventsRef} className="max-w-4xl mx-auto">
          <h3 
            className={`font-heading text-3xl font-semibold text-foreground text-center mb-12 transition-all duration-700 ${
              pastEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('events.past_title')}
          </h3>
          
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className={`group flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-500 ${
                  pastEventsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <event.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h4>
                    <p className="font-body text-muted-foreground text-sm">
                      {event.date}
                    </p>
                  </div>
                </div>
                
                <span className="mt-4 sm:mt-0 inline-flex px-5 py-2.5 bg-accent/10 text-accent rounded-full font-body text-sm font-medium group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {event.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;