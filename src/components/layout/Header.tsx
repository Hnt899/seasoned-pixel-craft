import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Button variant="pill" asChild>
            <a href="#hero" aria-label="О нас">О нас</a>
          </Button>
          <Button variant="pill" asChild>
            <a href="#services" aria-label="Услуги">Услуги</a>
          </Button>
          <Button variant="pill" asChild>
            <a href="#blog" aria-label="Блог">Блог</a>
          </Button>
        </div>
        <div className="hidden md:block">
          <Button variant="cta" asChild>
            <Link to="/">ЭйАй Тех</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="pill" asChild>
            <a href="#portfolio" aria-label="Портфолио">Портфолио</a>
          </Button>
          <Button variant="pill" asChild>
            <a href="#contacts" aria-label="Контакты">Контакты</a>
          </Button>
          <Button variant="cta" asChild>
            <Link to="/order" aria-label="Хочу проект">Хочу проект</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
