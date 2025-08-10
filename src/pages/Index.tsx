import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Tech from "@/components/sections/Tech";
import Offerings from "@/components/sections/Offerings";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";

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
        <Offerings />
        <Portfolio />
        <Team />
        <FAQ />
        <Blog />
      </main>
      <footer id="contacts" className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          © {new Date().getFullYear()} ЭйАй Тех • Все права защищены
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </div>
  );
};

export default Index;
