import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: 'Perplexity. Википедия, в которую прикрутили ИИ',
    href: 'https://www.perplexity.ai',
    date: '01.01.2025',
    tag: 'ИИ'
  },
  {
    title: 'DeepL. Удобный и крутой AI‑переводчик. Работает с VPN.',
    href: 'https://www.deepl.com/translator',
    date: '01.01.2025',
    tag: 'ИИ'
  },
  {
    title: 'DeepSeek — китайский ChatGPT без VPN',
    href: 'https://www.deepseek.com',
    date: '01.01.2025',
    tag: 'ИИ'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">блог</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="card-surface p-6 flex flex-col gap-4 group">
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-secondary/60">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
                <ArrowUpRight className="ml-auto opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
              </div>
              <h3 className="text-lg font-extrabold leading-snug">{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
