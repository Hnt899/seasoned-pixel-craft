import { useState } from 'react';
import knot from '@/assets/knot-square.png';
import { Button } from '@/components/ui/button';

const Team = () => {
  const members = [
    { id: 1, name: 'Малхази', role: 'Генеральный директор', about: 'Отвечает за стратегию и развитие продукта.', img: knot },
    { id: 2, name: 'Денис', role: 'Технический директор', about: 'Руководит разработкой и архитектурой.', img: knot },
    { id: 3, name: 'Галина', role: 'Креативный дизайнер', about: 'Создаёт визуальный язык и бренд.', img: knot },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-10">
          <p className="max-w-md text-sm opacity-90">Знакомьтесь с нашими героями!</p>
          <h2 className="text-display text-5xl md:text-7xl font-extrabold">команда</h2>
        </div>

        <div className="space-y-6">
          {members.map((m, idx) => (
            <article
              key={m.id}
              className="group border-y border-border/70 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4 transition-colors"
            >
              <button
                className="text-left contents"
                onClick={() => setExpanded(expanded === m.id ? null : m.id)}
                aria-expanded={expanded === m.id}
              >
                <h3 className="text-3xl md:text-4xl font-extrabold opacity-90">{m.name}</h3>
                <div className="h-4 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-1/2 bg-[hsl(var(--brand-purple))] animate-float"/>
                </div>
                <p className="text-lg md:text-2xl font-extrabold text-right opacity-90">{m.role}</p>
              </button>

              <div className={`md:col-span-3 overflow-hidden transition-all ${expanded === m.id ? 'max-h-[700px] mt-6' : 'max-h-0'}`}>
                <div className="rounded-[2rem] bg-[hsl(var(--brand-lime))] text-background p-6 md:p-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-2xl font-extrabold mb-2">{m.name}</h4>
                    <p className="text-base text-background/90 mb-3">{m.role}</p>
                    <p className="text-sm text-background/90">{m.about}</p>
                  </div>
                  <img src={m.img} alt={m.name} className="w-full h-80 object-cover rounded-[2rem]" />
                </div>
              </div>

              <div className="col-span-full h-px bg-border group-hover:bg-[hsl(var(--brand-lime))] transition-colors" />
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="pill">
            <a href="/team.pdf" download>вся команда здесь</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
