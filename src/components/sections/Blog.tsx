import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: 'Perplexity. Википедия, в которую прикрутили ИИ', href: 'https://www.perplexity.ai', date: '01.01.2025', tag: 'ИИ', desc: 'Поиск с генерацией ответов, ссылки на источники, быстрые сборки ресёрча.' },
  { title: 'DeepL. Удобный и крутой AI‑переводчик. Работает с VPN.', href: 'https://www.deepl.com/translator', date: '01.01.2025', tag: 'ИИ', desc: 'Высокое качество перевода, глоссарии и контекстные подсказки.' },
  { title: 'DeepSeek — китайский ChatGPT без VPN', href: 'https://www.deepseek.com', date: '01.01.2025', tag: 'ИИ', desc: 'Сильная reasoning‑модель, удобный веб‑интерфейс и API.' },
  { title: 'Claude — рассуждения и длинный контекст', href: 'https://claude.ai', date: '01.01.2025', tag: 'ИИ', desc: 'Большие окна контекста и опора на безопасность.' },
  { title: 'Midjourney — генерация изображений', href: 'https://www.midjourney.com', date: '01.01.2025', tag: 'ИИ', desc: 'Фотореализм и стилизация для брендинга.' },
  { title: 'GitHub Copilot — помощник для кода', href: 'https://github.com/features/copilot', date: '01.01.2025', tag: 'ИИ', desc: 'Подсказывает код, тесты и рефакторинг.' },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <h2 className="text-display text-5xl md:text-7xl font-extrabold">блог</h2>
          <aside className="max-w-md text-sm text-muted-foreground/90 hidden md:block">
            Мы следим за тем, как развиваются технологии и куда стремится научный прогресс. Пробуем современные подходы и используем передовые нейросети.
          </aside>
        </div>

        <div className="grid md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-6">
          {posts.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative card-surface p-6 group overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 text-sm relative z-10">
                <span className="px-3 py-1 rounded-full bg-secondary/60">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
                <ArrowUpRight className="ml-auto opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
              </div>
              <h3 className="text-lg font-extrabold leading-snug mt-3 relative z-10">{p.title}</h3>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10">{p.desc}</p>

              <div className="absolute inset-0 bg-[hsl(var(--brand-purple))] text-[hsl(var(--brand-purple-foreground))] opacity-0 group-hover:opacity-100 transition-opacity"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
