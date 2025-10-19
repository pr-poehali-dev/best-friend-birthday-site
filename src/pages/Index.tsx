import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Index() {
  const memories = [
    {
      title: "Первое знакомство",
      description: "Помню, как мы встретились... С тех пор моя жизнь заиграла новыми красками!",
      icon: "Sparkles"
    },
    {
      title: "Наши приключения",
      description: "Все эти смешные моменты, путешествия, бесконечные разговоры до утра — бесценны!",
      icon: "Heart"
    },
    {
      title: "Твоя поддержка",
      description: "Ты всегда рядом, когда нужно. Спасибо за то, что ты есть в моей жизни!",
      icon: "Users"
    }
  ];

  const wishes = [
    "Пусть каждый твой день будет наполнен радостью и улыбками",
    "Желаю тебе исполнения всех заветных мечтаний",
    "Пусть рядом всегда будут верные друзья и любящие люди",
    "Здоровья, счастья, любви и вдохновения на каждый новый день",
    "Пусть жизнь дарит тебе яркие моменты и незабываемые впечатления"
  ];

  const friendsGreetings = [
    {
      name: "От меня",
      message: "Спасибо за то, что ты есть! Ты делаешь этот мир лучше просто своим присутствием. С днём рождения, моя лучшая подруга!",
      icon: "HeartHandshake"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <section className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <Icon name="Cake" size={64} className="text-pink-500 mx-auto" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            С Днём Рождения!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Моей лучшей подруге ✨
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            В этот особенный день хочу сказать, как ты важна для меня
          </p>
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all">
                  <Icon name="MessageCircleHeart" size={24} className="mr-2" />
                  Специальное послание
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center mb-6">
                    Для тебя 💕
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {friendsGreetings.map((greeting, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 hover:border-purple-300 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-pink-100 rounded-full">
                          <Icon name={greeting.icon} size={20} className="text-pink-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {greeting.name}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed pl-11">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Наши воспоминания
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-pink-100 rounded-full">
                      <Icon name={memory.icon} size={32} className="text-pink-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-center text-gray-800">
                    {memory.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {memory.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-pink-200">
            <div className="text-center mb-8">
              <Icon name="Gift" size={48} className="text-pink-500 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
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
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {wish}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center animate-fade-in py-12" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200">
            <Icon name="Sparkles" size={40} className="text-pink-500 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
              С любовью, твоя лучшая подруга 💕
            </p>
            <p className="text-gray-600">
              Пусть этот год принесёт тебе всё самое лучшее!
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
