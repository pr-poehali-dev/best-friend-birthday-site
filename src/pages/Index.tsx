import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isPaused = false;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      
      const singleSetWidth = scrollWidth / 3;
      
      if (scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = scrollLeft - singleSetWidth;
      } else if (scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      }
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.scrollLeft = container.scrollWidth / 3;

    const autoScroll = setInterval(() => {
      if (container && !isPaused) {
        container.scrollBy({ left: 2, behavior: 'auto' });
      }
    }, 15);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(autoScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  const memories = [
    {
      title: "Первое знакомство",
      description: "Всегда буду помнить наше первое знакомство, с тех пор моя жизнь заиграла самыми яркими красками!",
      icon: "Sparkles"
    },
    {
      title: "Наши приключения",
      description: "За всю нашу дружбу я ни раз убеждался, что ты способна удивить всё больше и больше, я рад, что ты делишься со мной всем этим!",
      icon: "Heart"
    },
    {
      title: "Поддержка",
      description: "Ты всегда поддерживаешь меня во всём, я стараюсь отвечать тебе тем же, спасибо за то, что ты есть у меня!",
      icon: "Users"
    }
  ];

  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/16703496-ce3d-4d9f-8b8e-edb241db93cf.jpg",
      caption: "Наши яркие моменты"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/708196b9-c8c9-45dd-80a1-9aefd918496a.jpg",
      caption: "Дружба навсегда"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/010cd53a-77cb-46b2-8e9f-b665034624ee.jpg",
      caption: "Особенные дни"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/c0278b91-2806-4f29-86b7-a2f3b17bf704.jpg",
      caption: "Твоя улыбка"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/248217eb-33cd-4036-89ea-23429de6ca04.jpg",
      caption: "Счастливые моменты"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/c0a118ec-3a72-4d02-b48f-37cd8fbef179.jpg",
      caption: "Прекрасная ты"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/a8947ed9-71b4-4251-8e58-1ce284fcb872.jpg",
      caption: "Радость жизни"
    },
    {
      url: "https://cdn.poehali.dev/projects/615676b8-1605-4479-908b-365d01866c93/files/4a4035b0-21b4-4dd3-9cca-4378663f41f2.jpg",
      caption: "Мечтательная"
    }
  ];

  const wishes = [
    "Пусть каждый твой день будет наполнен радостью и улыбками",
    "Пусть все твои мечты сбудутся",
    "Пусть рядом всегда будут верные друзья и любящие люди",
    "Надеюсь мы с тобой обязательно встретимся, молюсь об этом каждый день!"
  ];

  const friendsGreetings = [
    {
      name: "Аня",
      message: "Лизочка, с днём рождения! Ты самый светлый и добрый человек, которого я знаю. Желаю тебе счастья и улыбок каждый день!",
      icon: "Star"
    },
    {
      name: "Максим",
      message: "Лиза, поздравляю! Пусть все твои мечты сбываются, а жизнь дарит только приятные сюрпризы!",
      icon: "Smile"
    },
    {
      name: "Катя",
      message: "С днём рождения, солнышко! Ты делаешь этот мир ярче. Люблю тебя!",
      icon: "Heart"
    },
    {
      name: "Дима",
      message: "Лизуня, с праздником! Оставайся такой же весёлой и жизнерадостной. Ты лучшая!",
      icon: "PartyPopper"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-300/40 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-52 h-52 bg-rose-400/30 rounded-full blur-2xl -translate-x-1/3"></div>
      <div className="absolute top-3/4 right-0 w-60 h-60 bg-pink-400/30 rounded-full blur-2xl translate-x-1/3"></div>
      
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">💖</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>💕</div>
      <div className="absolute top-60 left-1/4 text-4xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}>💗</div>
      <div className="absolute bottom-40 right-1/4 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>💖</div>
      <div className="absolute bottom-60 left-20 text-6xl opacity-15 animate-pulse" style={{ animationDelay: '0.8s' }}>💕</div>
      <div className="absolute top-1/3 right-10 text-4xl opacity-20 animate-pulse" style={{ animationDelay: '1.2s' }}>💗</div>
      <div className="absolute bottom-1/3 left-1/3 text-5xl opacity-15 animate-pulse" style={{ animationDelay: '0.3s' }}>💖</div>
      <div className="absolute top-1/2 right-1/3 text-4xl opacity-20 animate-pulse" style={{ animationDelay: '1.8s' }}>💕</div>
      
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="confetti text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {['💖', '💕', '💗'][Math.floor(Math.random() * 3)]}
        </div>
      ))}
      
      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        
        <section className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <Icon name="Cake" size={64} className="text-primary mx-auto" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary-foreground">
            С Днём Рождения!
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Самой лучшей Лизе в мире
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            В этот особенный для тебя день я хотел бы подарить то, что уверен не дарил ещё никто)
          </p>
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">Поздравления от не менее значимых для тебя людей)</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-6">Поздравления от таких же близких💕</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {friendsGreetings.map((greeting, index) => (
                    <div 
                      key={index}
                      className="bg-accent/30 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/20 rounded-full">
                          <Icon name={greeting.icon} size={20} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {greeting.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {greeting.message}
                      </p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-foreground">
            Наши воспоминания
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name={memory.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-center text-card-foreground">
                    {memory.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {memory.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-primary/20">
            <div className="text-center mb-8">
              <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
                Мои пожелания
              </h2>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              {wishes.map((wish, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-lg text-card-foreground leading-relaxed">
                    {wish}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-4 opacity-60">
                <div className="flex-shrink-0 mt-1">
                  <Icon name="MoreHorizontal" size={20} className="text-primary" />
                </div>
                <p className="text-lg text-card-foreground italic">
                  ещё 99+ пожеланий
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Фотки реальной богини
          </h2>
          <div className="relative max-w-6xl mx-auto px-4">
            <div 
              ref={scrollContainerRef}
              className="relative overflow-x-auto scrollbar-hide"
            >
              <div className="flex gap-8 py-4" style={{ width: 'max-content' }}>
                {[...photos, ...photos, ...photos].map((photo, index) => {
                  return (
                    <div 
                      key={index} 
                      className="relative animate-scale-in flex-shrink-0" 
                      style={{ 
                        animationDelay: `${0.8 + (index % photos.length) * 0.1}s`
                      }}
                    >
                      <div className="relative group">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-700 to-red-900 rounded-full shadow-2xl flex items-center justify-center z-20 border-2 border-red-800">
                          <div className="w-1.5 h-1.5 bg-red-950 rounded-full"></div>
                        </div>
                        <img 
                          src={photo.url} 
                          alt={photo.caption}
                          className="w-72 h-96 object-cover rounded-2xl border-4 border-white group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group-hover:border-pink-400 group-hover:brightness-110 transition-all duration-300 cursor-pointer"
                          style={{
                            transform: `rotate(${index % 3 === 0 ? '2deg' : index % 3 === 1 ? '-2deg' : '0deg'})`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 rounded-3xl p-12 shadow-2xl border-4 border-purple-200">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Icon name="Lock" size={32} className="text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900">
                Тайное послание
              </h2>
              <Icon name="Lock" size={32} className="text-purple-600" />
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed">
              <p className="text-xl font-semibold text-purple-800">Дорогая моя, лучшая подруга Лиза ✨</p>
              <p>
                В этот особенный день я хочу сказать тебе то, что не всегда успеваю выразить словами в повседневной жизни. Ты — невероятный человек, и я безмерно благодарен судьбе за то, что она свела нас вместе.
              </p>
              <p>
                Спасибо тебе за то, что ты просто существуешь. За твою искренность, за твою доброту, за то, что ты всегда готова выслушать и поддержать. С тобой я могу быть собой, не боясь быть непонятым или осуждённым. Ты принимаешь меня таким, какой я есть, со всеми моими странностями и недостатками, и это дорогого стоит.
              </p>
              <p>
                Благодарю тебя за каждый наш разговор, за каждый смех, за каждую нашу встречу. Ты делаешь мир вокруг меня ярче и теплее. Даже в самые трудные моменты, когда кажется, что всё рушится, ты находишь слова, которые возвращают мне веру в себя и в будущее.
              </p>
              <p>
                Ты — тот человек, с которым можно молчать и это будет комфортно, с которым можно говорить часами и не заметить, как пролетело время. Ты умеешь радоваться моим успехам так искренне, будто это твои собственные победы. И ты всегда рядом, когда мне нужна поддержка.
              </p>
              <p className="text-xl font-semibold text-rose-700">
                Я желаю тебе, чтобы в твоей жизни было как можно больше счастья, любви и радости! 🎂
              </p>
              <p>
                Пусть сбудутся все твои мечты, даже самые смелые и невероятные. Пусть рядом с тобой всегда будут люди, которые ценят тебя так же, как я. Пусть каждый новый день приносит тебе улыбки, приятные сюрпризы и незабываемые моменты.
              </p>
              <p>
                Помни, что ты — удивительная, сильная, талантливая и невероятно красивая (и внешне, и внутренне). Не позволяй никому и ничему убедить тебя в обратном. Ты заслуживаешь всего самого лучшего в этом мире!
              </p>

              <p className="text-center text-lg italic text-gray-600">
                Люблю тебя и ценю нашу дружбу больше, чем можно выразить словами! 🌟
              </p>
            </div>
          </div>
        </section>

        <section className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-12 shadow-xl">
            <Icon name="HeartHandshake" size={56} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ты — самая лучшая подруга!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Спасибо тебе за то, что делаешь мою жизнь такой яркой, какая она есть сейчас! Ещё раз поздравляю тебя с Днём Рождения, люблю и обожаю тебя!</p>
          </div>
        </section>

      </div>
    </div>
  );
}