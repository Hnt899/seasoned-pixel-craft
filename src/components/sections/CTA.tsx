import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Send, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="bg-[hsl(var(--brand-lime))] text-foreground py-16 md:py-24"
    >
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2
          id="cta-title"
          className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          пора <span className="underline decoration-foreground/80 underline-offset-4">внедрять ии</span>
          <br className="hidden sm:block" /> в свой бизнес
        </h2>

        <p className="text-lg md:text-xl">
          <a href="tel:+79855551779" className="font-semibold hover:opacity-90 transition-opacity">
            +7 985-555-17-79
          </a>
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full bg-background/70">
            <a
              href="https://t.me/ai_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Наш Telegram"
            >
              <Send className="size-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon" className="rounded-full bg-background/70">
            <a
              href="https://wa.me/79855551779"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Наш WhatsApp"
            >
              <MessageCircle className="size-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon" className="rounded-full bg-background/70">
            <a href="tel:+79855551779" aria-label="Позвонить">
              <Phone className="size-5" />
            </a>
          </Button>
        </div>

        <div>
          <Button asChild variant="cta" className="mt-2">
            <Link to="/order">Оставить заявку</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
