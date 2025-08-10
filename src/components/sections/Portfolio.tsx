import knotSquare from "@/assets/knot-square.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">портфолио</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2].map((i) => (
            <article key={i} className="card-surface overflow-hidden">
              <img
                src={knotSquare}
                alt={`Кейс №${i}`}
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-extrabold mb-2">Кейс #{i}</h3>
                <p className="text-sm text-muted-foreground">Делаем цифровые продукты с интеграциями и аналитикой.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
