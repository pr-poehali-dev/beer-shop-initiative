import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BeerProduct {
  id: number;
  name: string;
  type: string;
  price: number;
  oldPrice?: number;
  description: string;
  alcohol: string;
  volume: string;
  image: string;
  isSpecial?: boolean;
}

const Index = () => {
  const [cart, setCart] = useState<number[]>([]);

  const beers: BeerProduct[] = [
    {
      id: 1,
      name: 'Крафтовый IPA',
      type: 'India Pale Ale',
      price: 320,
      oldPrice: 450,
      description: 'Насыщенный хмелевой вкус с цитрусовыми нотами',
      alcohol: '6.5%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg',
      isSpecial: true
    },
    {
      id: 2,
      name: 'Тёмный стаут',
      type: 'Imperial Stout',
      price: 380,
      oldPrice: 520,
      description: 'Бархатистый вкус с оттенками кофе и шоколада',
      alcohol: '8.0%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg',
      isSpecial: true
    },
    {
      id: 3,
      name: 'Пшеничное',
      type: 'Wheat Beer',
      price: 280,
      description: 'Освежающее пиво с пряными нотами',
      alcohol: '5.2%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg'
    },
    {
      id: 4,
      name: 'Лагер премиум',
      type: 'Premium Lager',
      price: 250,
      description: 'Классический чистый вкус с лёгкой горчинкой',
      alcohol: '4.8%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg'
    },
    {
      id: 5,
      name: 'Американский эль',
      type: 'American Pale Ale',
      price: 340,
      description: 'Сбалансированный вкус с фруктовыми нотами',
      alcohol: '5.5%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg'
    },
    {
      id: 6,
      name: 'Бельгийский трипель',
      type: 'Belgian Tripel',
      price: 420,
      description: 'Крепкое золотистое пиво с пряным ароматом',
      alcohol: '9.0%',
      volume: '0.5л',
      image: 'https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/1497bd9a-a466-426d-943b-1eddd55ba8a8.jpg'
    }
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const specialOffers = beers.filter(beer => beer.isSpecial);

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🍺</div>
            <span className="text-2xl font-bold font-heading">BeerShop</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#special" className="text-sm font-medium hover:text-primary transition-colors">
              Акции
            </a>
            <Button variant="outline" className="gap-2">
              <Icon name="ShoppingCart" size={18} />
              Корзина
              {cart.length > 0 && (
                <Badge variant="destructive" className="ml-1">{cart.length}</Badge>
              )}
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2">
                🔥 Специальные предложения
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
                Крафтовое пиво премиум класса
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Эксклюзивная коллекция пива от лучших пивоварен мира. Скидки до 30% на избранные сорта!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 text-lg px-8 py-6">
                  <Icon name="ShoppingBag" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                  <Icon name="Percent" size={20} />
                  Акции
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/e3979756-67b8-4a03-bc2c-0e27b76f74e2/files/bb68a1cd-b2ff-47de-8522-f0d9aca6800c.jpg" 
                alt="Craft Beer" 
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="special" className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-destructive text-destructive-foreground text-base font-bold px-6 py-2">
              <Icon name="Zap" size={16} className="mr-2" />
              Горячие предложения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Специальные предложения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Успей купить по выгодной цене! Ограниченное количество товара со скидками.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialOffers.map((beer, index) => (
              <Card 
                key={beer.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground font-bold text-sm">
                    -{Math.round(((beer.oldPrice! - beer.price) / beer.oldPrice!) * 100)}%
                  </Badge>
                  <img 
                    src={beer.image} 
                    alt={beer.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                        {beer.name}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">{beer.type}</CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{beer.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <Badge variant="outline" className="gap-1">
                      <Icon name="Wine" size={14} />
                      {beer.alcohol}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Icon name="Droplet" size={14} />
                      {beer.volume}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary font-heading">{beer.price}₽</span>
                    {beer.oldPrice && (
                      <span className="text-lg line-through text-muted-foreground">{beer.oldPrice}₽</span>
                    )}
                  </div>
                  <Button 
                    onClick={() => addToCart(beer.id)}
                    className="gap-2 group-hover:scale-105 transition-transform"
                  >
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Наш каталог
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент крафтового и премиального пива на любой вкус
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beers.map((beer, index) => (
              <Card 
                key={beer.id} 
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  {beer.isSpecial && (
                    <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground font-semibold">
                      АКЦИЯ
                    </Badge>
                  )}
                  <img 
                    src={beer.image} 
                    alt={beer.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                    {beer.name}
                  </CardTitle>
                  <CardDescription>{beer.type}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{beer.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 text-xs">
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Wine" size={12} />
                      {beer.alcohol}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Icon name="Droplet" size={12} />
                      {beer.volume}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary font-heading">{beer.price}₽</span>
                    {beer.oldPrice && (
                      <span className="text-sm line-through text-muted-foreground">{beer.oldPrice}₽</span>
                    )}
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => addToCart(beer.id)}
                    className="gap-2"
                  >
                    <Icon name="Plus" size={16} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Почему выбирают нас?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
                <div className="text-5xl">🎯</div>
                <h3 className="text-xl font-bold font-heading">Только качество</h3>
                <p className="text-muted-foreground">Проверенные производители и свежее пиво</p>
              </div>
              <div className="space-y-3 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
                <div className="text-5xl">🚚</div>
                <h3 className="text-xl font-bold font-heading">Быстрая доставка</h3>
                <p className="text-muted-foreground">Доставим за 2 часа в пределах города</p>
              </div>
              <div className="space-y-3 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
                <div className="text-5xl">💰</div>
                <h3 className="text-xl font-bold font-heading">Лучшие цены</h3>
                <p className="text-muted-foreground">Регулярные акции и скидки до 30%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-3xl">🍺</div>
                <span className="text-2xl font-bold font-heading">BeerShop</span>
              </div>
              <p className="text-sm opacity-80">
                Лучший выбор крафтового пива в вашем городе
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">IPA</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Стауты</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Лагеры</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Эли</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О нас</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Оплата</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@beershop.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Пивная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm opacity-60">
            © 2024 BeerShop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
