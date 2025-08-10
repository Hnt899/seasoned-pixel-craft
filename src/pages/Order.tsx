import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Send, MessageCircle, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) return toast({ title: 'Подтвердите соглашение', description: 'Поставьте галочку согласия на обработку данных.' });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Заявка отправлена', description: 'Мы свяжемся с вами в ближайшее время.' });
    }, 900);
  };

  return (
    <main className="min-h-screen bg-ambient">
      <div className="container mx-auto py-16 md:py-24">
        <h1 className="text-display text-5xl md:text-7xl font-extrabold mb-6">заказать проект</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">Выберите задачу и расскажите о своём проекте</p>

        <form onSubmit={onSubmit} className="card-surface p-6 md:p-8 max-w-2xl rounded-[2rem]">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {["Услуга", "Услуга", "Услуга", "Услуга", "Услуга"].map((t, i) => (
              <button key={i} type="button" className="flex items-center justify-between rounded-full bg-secondary px-4 py-2 text-sm">
                <span>{t}</span>
                <Plus className="size-4" />
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <Input required placeholder="Ваше имя" aria-label="Ваше имя" className="bg-transparent" />

            <div>
              <p className="mb-3">Удобный способ связи</p>
              <div className="flex gap-3">
                <Button type="button" variant="pill"><Phone className="mr-2 size-4"/>Телефон</Button>
                <Button type="button" variant="pill"><Send className="mr-2 size-4"/>Telegram</Button>
                <Button type="button" variant="pill"><MessageCircle className="mr-2 size-4"/>WhatsApp</Button>
              </div>
            </div>

            <Input required type="tel" placeholder="+7 (999) 999-99-99" aria-label="Телефон" className="bg-transparent" />

            <div>
              <p className="mb-3">Расскажите в двух словах про ваш проект</p>
              <Textarea className="min-h-32 bg-transparent" placeholder="Короткое описание" aria-label="Описание" />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(Boolean(v))} />
              <label htmlFor="agree" className="text-sm text-muted-foreground">
                я согласен с условиями <a href="/privacy.pdf" download className="underline">политики конфиденциальности</a>
              </label>
            </div>

            <div className="flex gap-3">
              <Button type="submit" variant="cta" disabled={loading} className="rounded-full px-8">{loading ? 'Отправляем…' : 'отправить'}</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Order;
