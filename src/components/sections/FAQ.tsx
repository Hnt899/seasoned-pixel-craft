import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: 'Какая экспертиза у нашей компании?',
    a: 'Техническая экспертиза в ML/DL, обработке данных, NLP, CV, MLOps и аналитике. Реализуем проекты от идеи до продакшена.'
  },
  { q: 'Кто наши клиенты?', a: 'Мы работаем с компаниями разного масштаба: от стартапов до корпораций и госструктур.' },
  { q: 'Как стать клиентом или партнёром?', a: 'Оставьте заявку и мы обсудим цели, задачи и подход к реализации.' }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold mb-10">FAQ</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none">
              <AccordionTrigger className="rounded-full px-6 py-4 bg-[hsl(var(--popover-foreground))] text-background data-[state=open]:rounded-b-none">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="rounded-b-3xl bg-muted p-6 text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
