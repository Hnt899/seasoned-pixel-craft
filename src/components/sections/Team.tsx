const Team = () => {
  const members = [
    { name: 'Малхази', role: 'Генеральный директор' },
    { name: 'Денис', role: 'Технический директор' },
    { name: 'Галина', role: 'Креативный дизайнер' },
  ];

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">команда</h2>
        <div className="space-y-6">
          {members.map((m) => (
            <article key={m.name} className="border-y border-border/70 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <h3 className="text-3xl md:text-4xl font-extrabold opacity-90">{m.name}</h3>
              <div className="h-4 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-1/2 bg-[hsl(var(--brand-purple))] animate-float"/>
              </div>
              <p className="text-lg md:text-2xl font-extrabold text-right opacity-90">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
