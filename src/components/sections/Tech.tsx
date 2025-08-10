import { Button } from "@/components/ui/button";

const aiLinks = [
  { name: "ChatGPT", href: "https://chat.openai.com" },
  { name: "grok", href: "https://x.ai" },
  { name: "DeepSeek", href: "https://www.deepseek.com" },
  { name: "Perplexity", href: "https://www.perplexity.ai" },
  { name: "Gemini", href: "https://ai.google" },
  { name: "n8n.io", href: "https://n8n.io" },
  { name: "lovable.dev", href: "https://lovable.dev" },
  { name: "cursor.com", href: "https://www.cursor.com" },
];

const Tech = () => {
  return (
    <section id="tech" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <h2 className="text-display text-5xl md:text-7xl font-extrabold">используем</h2>
          <p className="max-w-sm text-sm text-muted-foreground/90 hidden md:block">
            все передовые нейросети для решения любых задач
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {aiLinks.map((l) => (
            <Button key={l.name} variant="pill" asChild>
              <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.name}>
                {l.name}
              </a>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'РАБОТАЕМ', desc: 'со всеми компаниями и с каждым: b2b, b2g, b2c, b2b2c.', tone: 'card'
          },{
            title: 'ДЕЛАЕМ', desc: 'индивидуальный дизайн персонально для каждого.', tone: 'purple'
          },{
            title: 'НАЧИНАЕМ', desc: 'разработку после согласованных целей и говорим с вами на одном, понятном каждому, языке.', tone: 'lime'
          },{
            title: 'ЗАПУСКАЕМ', desc: 'разработку с нуля, знаем технические особенности «чёрных ящиков».', tone: 'purple'
          },{
            title: 'ГОТОВЫ', desc: 'принимать участие в комплексных решениях и современных проектах.', tone: 'lime'
          },{
            title: 'ДЕЛАЕМ', desc: 'интеграции с различными сервисами: CRM, PowerBI, Telegram и др.', tone: 'card'
          }].map((c, i) => (
            <article
              key={i}
              className={
                c.tone === 'lime'
                  ? 'rounded-3xl p-6 md:p-8 text-[hsl(var(--sidebar-primary-foreground))] bg-[hsl(var(--brand-lime))]'
                  : c.tone === 'purple'
                  ? 'rounded-3xl p-6 md:p-8 bg-[hsl(var(--brand-purple))] text-[hsl(var(--brand-purple-foreground))]'
                  : 'card-surface p-6 md:p-8'
              }
            >
              <h3 className="text-2xl font-extrabold mb-3">{c.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
