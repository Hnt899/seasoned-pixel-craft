import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Order = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Заявка отправлена', description: 'Мы свяжемся с вами в ближайшее время.' });
    }, 900);
  };

  return (
    <main className="min-h-screen bg-ambient">
      <div className="container mx-auto py-16 md:py-24">
        <h1 className="text-display text-5xl md:text-7xl font-extrabold mb-6">Оформление заявки</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">Заполните форму, чтобы обсудить ваш проект. Мы ответим в течение 1 рабочего дня.</p>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6 card-surface p-6 md:p-8">
          <div className="space-y-4">
            <Input required placeholder="Ваше имя" aria-label="Ваше имя" />
            <Input required type="email" placeholder="Email" aria-label="Email" />
            <Input placeholder="Компания" aria-label="Компания" />
            <Select>
              <SelectTrigger aria-label="Тип проекта"><SelectValue placeholder="Тип проекта" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ai">AI‑решение</SelectItem>
                <SelectItem value="platform">Платформа/интеграции</SelectItem>
                <SelectItem value="research">R&D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            <Textarea className="min-h-40" placeholder="Опишите задачу" aria-label="Описание" />
            <div className="flex gap-3 mt-auto">
              <Button type="submit" variant="cta" disabled={loading}>{loading ? 'Отправляем…' : 'Отправить заявку'}</Button>
              <Button variant="pill" asChild><a href="/">На главную</a></Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Order;
