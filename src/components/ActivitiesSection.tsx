import { Clock, MapPin, Users, Award } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      title: 'Endurance Trke',
      description: 'Takmičenja na različitim distancama od 40km do 160km. Testiramo izdržljivost i partnerstvo između jahača i konja.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
    },
    {
      title: 'Škola Jahanja',
      description: 'Lekcije jahanja za sve uzraste i nivoe. Od početnika do naprednih jahača, pružamo stručno vođenje.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&h=400&fit=crop',
    },
    {
      title: 'Rekreativno Jahanje',
      description: 'Opuštene vožnje kroz prirodu Vojvodine. Idealno za ljubitelje konja koji žele da uživaju u prirodi.',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    },
    {
      title: 'Letnji Kampovi',
      description: 'Programi za mlade jahače tokom letnjeg raspusta. Kombinacija učenja, zabave i druženja sa konjima.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="aktivnosti" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Naše Aktivnosti
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Šta Nudimo
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Od profesionalnih takmičenja do opuštenog rekreativnog jahanja, 
            imamo program za svakoga ko voli konje.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group flex flex-col md:flex-row gap-6 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {activity.title}
                  </h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
