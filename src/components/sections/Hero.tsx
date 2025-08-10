import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <img
        src="/lovable-uploads/17bcb995-c9c0-423c-ae58-8daf92da869d.png"
        alt="Фон главного экрана — ЭЙАЙ ТЕХ"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative container mx-auto pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="max-w-xl text-sm md:text-base text-muted-foreground/90 mb-6">
          Мы знаем, что такое нейросети и как их использовать для решения задач,
          которые стоят перед бизнесом.
        </p>
        <h1 className="text-display text-[14vw] leading-[0.9] md:text-[9rem] font-extrabold tracking-tight select-none">
          ЭЙАЙ ТЕХ
        </h1>
        <div className="mt-8 flex items-center gap-4">
          <Button variant="cta" size="lg" asChild>
            <Link to="/order">
              Оставить заявку
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button variant="pill" size="lg" asChild>
            <a href="#services">Наши услуги</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
