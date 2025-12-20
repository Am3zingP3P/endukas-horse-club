import { Heart, Users, Trophy, Mountain } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="o-nama" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            O Nama
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Tradicija i Strast
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Konjički Klub Endukas je građanski klub sa sedištem u Malom Iđošu, 
            posvećen promovisanju endurance jahanja i izgradnji zajednice ljubitelja konja 
            u Vojvodini i šire. Naša misija je da širimo ljubav prema ovom plemenitom sportu.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Godina Iskustva' },
            { number: '50+', label: 'Aktivnih Članova' },
            { number: '100+', label: 'Trka Učestvovano' },
            { number: '20+', label: 'Konja u Klubu' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="font-body text-muted-foreground text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
