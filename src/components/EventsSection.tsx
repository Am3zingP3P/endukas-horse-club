import { Calendar, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const EventsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: eventsRef, isVisible: eventsVisible, getStaggerDelay } = useStaggeredAnimation(3);
  const { ref: pastEventsRef, isVisible: pastEventsVisible } = useScrollAnimation();
  const events = [
    {
      title: 'Prolećna Endurance Trka',
      date: '15. April 2025',
      time: '08:00',
      location: 'Mali Iđoš',
      description: 'Godišnja prolećna trka na distancama od 40km i 80km. Otvoreno za sve registrovane jahače.',
      status: 'upcoming',
    },
    {
      title: 'Letnji Kamp za Mlade',
      date: '1-15. Jul 2025',
      time: 'Ceo dan',
      location: 'Klub Endukas',
      description: 'Dvonedeljni program za mlade od 10-16 godina. Učenje jahanja, briga o konjima i zabava.',
      status: 'upcoming',
    },
    {
      title: 'Balkanska Endurance Liga',
      date: '20. Septembar 2025',
      time: '07:00',
      location: 'Srbija/Hrvatska',
      description: 'Regionalno takmičenje sa učesnicima iz cele regije. Distance 80km i 120km.',
      status: 'upcoming',
    },
  ];

  const pastEvents = [
    {
      title: 'Novogodišnja Trka 2024',
      date: 'Decembar 2024',
      result: 'Uspešno završeno - 25 učesnika',
    },
    {
      title: 'Jesenja Endurance Trka',
      date: 'Oktobar 2024',
      result: '3. mesto - Kategorija 80km',
    },
    {
      title: 'Vojvodina Cup',
      date: 'Septembar 2024',
      result: 'Pobednik - Kategorija 40km',
    },
  ];

  return (
    <section id="dogadjaji" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Događaji
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Kalendar Aktivnosti
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Pratite naše predstojeće događaje i pridružite nam se.
          </p>
        </div>

        {/* Upcoming Events */}
        <div ref={eventsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden ${
                eventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={getStaggerDelay(index)}
            >
              <div className="h-2 bg-gradient-warm" />
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary text-sm font-body mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div ref={pastEventsRef} className="max-w-3xl mx-auto">
          <h3 className={`font-heading text-2xl font-semibold text-foreground text-center mb-8 transition-all duration-700 ${
            pastEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Prošli Događaji
          </h3>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card rounded-xl border border-border/50 transition-all duration-500 ${
                  pastEventsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {event.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm">
                    {event.date}
                  </p>
                </div>
                <span className="mt-2 sm:mt-0 inline-flex px-4 py-2 bg-accent/10 text-accent rounded-full font-body text-sm">
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
