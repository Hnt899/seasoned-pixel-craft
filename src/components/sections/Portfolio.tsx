import knotSquare from "@/assets/knot-square.png";

const Portfolio = () => {
  const items = [
    { t: 'ритейл', d: 'Делаем цифровой аналог для магазина с интеграциями и аналитикой.' },
    { t: 'персональный бренд', d: 'Создаём цифровую упаковку и помогаем с продвижением.' },
    { t: 'медицина', d: 'AI для ранней диагностики и поддержки принятия решений.' },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">портфолио</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((it, i) => (
            <article key={i} className={`${i % 2 === 1 ? 'md:mt-20' : ''}`}>
              <div className="card-surface overflow-hidden rounded-[2rem]">
                <img src={knotSquare} alt={it.t} loading="lazy" className="w-full md:w-[488px] md:h-[520px] h-72 object-cover rounded-[2rem]" />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[hsl(var(--brand-lime))]">{it.t}</h3>
                <p className="text-sm text-muted-foreground max-w-sm">{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
