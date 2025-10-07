import { useState } from 'react';
import ParticleNetwork from '../components/ParticleNetwork';
import FloatingSatellites from '../components/FloatingSatellites';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [openFaq, setOpenFaq] = useState<string>('');

  return (
    <div className="min-h-screen text-white">
      <ParticleNetwork />
      <FloatingSatellites />
      
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Satellite" size={28} className="text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TrackGPS</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="hover:text-primary transition-colors">Функции</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent">Войти</Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              GPS Мониторинг
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Контролируйте транспорт в режиме реального времени с помощью технологий нейронного отслеживания
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/10 text-lg px-8">
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Функции системы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'MapPin', title: 'Геолокация в реальном времени', desc: 'Отслеживайте местоположение всех транспортных средств на интерактивной карте' },
              { icon: 'Activity', title: 'Мониторинг состояния', desc: 'Контролируйте топливо, скорость, обороты и другие параметры автомобиля' },
              { icon: 'Route', title: 'История маршрутов', desc: 'Просматривайте все перемещения за любой период времени' },
              { icon: 'AlertTriangle', title: 'Уведомления и тревоги', desc: 'Получайте мгновенные оповещения о нарушениях и событиях' },
              { icon: 'BarChart3', title: 'Аналитика и отчёты', desc: 'Детальная статистика по пробегу, расходу топлива и времени работы' },
              { icon: 'Users', title: 'Управление доступом', desc: 'Настройте роли и права для сотрудников компании' },
            ].map((feature, i) => (
              <Card key={i} className="p-8 bg-card/80 border-primary/20 backdrop-blur hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Алексей Петров', role: 'Директор ООО "Логистик"', text: 'За 6 месяцев работы сократили расход топлива на 18%. Система окупилась за 2 месяца!' },
              { name: 'Мария Козлова', role: 'Руководитель автопарка', text: 'Удобный интерфейс и точные данные. Теперь полностью контролируем перемещения техники.' },
              { name: 'Дмитрий Соколов', role: 'Владелец таксопарка', text: 'Отличная система мониторинга. Водители стали работать аккуратнее, меньше простоев.' },
            ].map((review, i) => (
              <Card key={i} className="p-8 bg-card/60 border-primary/20 backdrop-blur">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Преимущества TrackGPS
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { icon: 'Zap', title: 'Экономия до 25%', desc: 'Снижение расходов на топливо и техобслуживание' },
              { icon: 'Shield', title: 'Безопасность данных', desc: 'Шифрование и защита персональной информации' },
              { icon: 'Smartphone', title: 'Мобильное приложение', desc: 'iOS и Android с полным функционалом' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техническая помощь в любое время' },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shrink-0">
                  <Icon name={benefit.icon as any} size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Тарифные планы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Старт', price: '990', vehicles: '1-5', features: ['Базовый мониторинг', 'История 30 дней', 'Email поддержка'] },
              { name: 'Бизнес', price: '2490', vehicles: '6-20', features: ['Все функции Старт', 'История 90 дней', 'Аналитика', 'Приоритетная поддержка'], popular: true },
              { name: 'Корпоративный', price: '4990', vehicles: '20+', features: ['Все функции Бизнес', 'Безлимитная история', 'API интеграция', 'Персональный менеджер'] },
            ].map((plan, i) => (
              <Card key={i} className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary scale-105' : 'bg-card/60 border-primary/20'} backdrop-blur relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.vehicles} транспорта</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> ₽/мес</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted hover:bg-muted/80'}`}>
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Вопросы и ответы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
              {[
                { q: 'Как быстро можно начать работу?', a: 'Регистрация и подключение первого устройства занимает 15-20 минут. Наш специалист поможет настроить систему.' },
                { q: 'Какое оборудование требуется?', a: 'GPS/ГЛОНАСС трекер для каждого транспорта. Мы предлагаем сертифицированное оборудование с установкой.' },
                { q: 'Есть ли мобильное приложение?', a: 'Да, доступны приложения для iOS и Android с полным функционалом веб-версии.' },
                { q: 'Можно ли интегрировать с 1С?', a: 'Да, у нас есть готовые модули интеграции с 1С:Предприятие и API для других систем.' },
                { q: 'Какая точность определения координат?', a: 'Точность GPS/ГЛОНАСС составляет 2-5 метров в открытой местности.' },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/20">
                  <AccordionTrigger className="text-left text-xl hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@trackgps.ru</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-card/60 border-primary/20 backdrop-blur">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input type="text" className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-foreground" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-foreground" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none resize-none text-foreground" placeholder="Ваше сообщение" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-background/50 backdrop-blur">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Satellite" size={24} className="text-primary" />
              <span className="text-lg font-bold">TrackGPS</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 TrackGPS. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}