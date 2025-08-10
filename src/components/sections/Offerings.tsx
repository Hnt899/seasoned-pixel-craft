import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import knotHero from "@/assets/knot-hero.png";
import knotSquare from "@/assets/knot-square.png";
import { Link } from "react-router-dom";

const cards = [
  {
    title: 'Разработка AI-решений',
    desc: 'От идеи до продакшена: ML, NLP, CV и MLOps.',
    img: knotHero,
    extra: 'Проектирование архитектуры, прототипы, метрики качества, запуск.'
  },
  {
    title: 'Платформы и инструменты',
    desc: 'Интеграции, пайплайны, аналитика и автоматизация.',
    img: knotSquare,
    extra: 'CRM/BI интеграции, ETL, DataOps, мониторинг и алерты.'
  },
  {
    title: 'Специализированные AI-услуги',
    desc: 'Адаптация под домен и бизнес-процессы.',
    img: knotSquare,
    extra: 'Онтологии, доменные датасеты, безопасные развертывания.'
  },
  {
    title: 'Исследования и разработка',
    desc: 'Прототипирование новых моделей и подходов.',
    img: knotHero,
    extra: 'R&D эксперименты, бенчмарки, PoC → MVP.'
  },
];

const Offerings = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? cards.length - 1 : a - 1));
  const next = () => setActive((a) => (a === cards.length - 1 ? 0 : a + 1));

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-display text-5xl md:text-7xl font-extrabold">что мы предлагаем</h2>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={prev} aria-label="Предыдущая" className="rounded-full">
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={next} aria-label="Следующая" className="rounded-full">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {cards.map((c, i) => {
            const selected = i === active;
            return (
              <article
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer overflow-hidden card-surface flex flex-col transition-[width] duration-300 ease-out ${selected ? 'md:w-[387px]' : 'md:w-[285px]'} md:h-[498px]`}
              >
                <div className="relative">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-40 object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                  {selected && (
                    <p className="text-sm opacity-90 mb-4">{c.extra}</p>
                  )}
                  <Button variant="cta" asChild className="mt-auto">
                    <Link to="/order">Оставить заявку</Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
