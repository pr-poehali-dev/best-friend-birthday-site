import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Index() {
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-primary/20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
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

        <section className="mb-20 animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Фото реальной богини
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all">Самые красивые фотки</Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-6">Самые красивые фотки 📸</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  {photos.map((photo, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl">
                      <img 
                        src={photo.url} 
                        alt={photo.caption}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-300 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all">Неудачные фотки</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-6">Неудачные фотки</DialogTitle>
                </DialogHeader>
                <div className="text-center py-8">
                  <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
                    <Icon name="X" size={64} className="text-red-500" />
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed">У данного человека отсутствуют фотки ниже оценки 11/10!</p>
                </div>
              </DialogContent>
            </Dialog>
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
            </div>
          </div>
        </section>

        <section className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
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