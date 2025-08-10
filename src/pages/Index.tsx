import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Tech from "@/components/sections/Tech";
import Offerings from "@/components/sections/Offerings";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ЭйАй Тех',
    url: 'https://lovable.app',
    sameAs: ['https://lovable.dev'],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Tech />
        <Portfolio />
        <Offerings />
        <Team />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <footer id="contacts" className="border-t border-border/60 py-10 text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-3">
            <a href="#services" className="story-link">Услуги</a>
            <a href="#team" className="story-link">О нас</a>
            <a href="#portfolio" className="story-link">Портфолио</a>
            <a href="#blog" className="story-link">Блог</a>
            <a href="/privacy.pdf" download className="story-link">Политика конфиденциальности</a>
          </nav>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} ЭйАй Тех • Все права защищены
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </div>
  );
};

export default Index;
