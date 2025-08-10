import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import knotHero from "@/assets/knot-hero.png";
import knotSquare from "@/assets/knot-square.png";
import { Link } from "react-router-dom";

const cards = [
  {
    title: 'Разработка AI-решений',
    desc: 'От идеи до продакшена: ML, NLP, CV и MLOps.',
    img: knotHero,
  },
  {
    title: 'Платформы и инструменты',
    desc: 'Интеграции, пайплайны, аналитика и автоматизация.',
    img: knotSquare,
  },
  {
    title: 'Специализированные AI-услуги',
    desc: 'Адаптация под домен и бизнес-процессы.',
    img: knotSquare,
  },
  {
    title: 'Исследования и разработка',
    desc: 'Прототипирование новых моделей и подходов.',
    img: knotHero,
  },
];

const Offerings = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">что мы предлагаем</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {cards.map((c, i) => (
            <article key={i} className="card-surface overflow-hidden flex flex-col">
              <div className="relative">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-44 object-cover md:h-56" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-extrabold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{c.desc}</p>
                <Button variant="cta" asChild>
                  <Link to="/order">Оставить заявку <ArrowRight className="ml-1"/></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
