import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Wallet, Trophy, Brain, TrendingUp, Settings, Award, CreditCard } from "lucide-react";
import { HexagonPattern } from "./HexagonPattern";
import { HeroBanner } from "./HeroBanner";

export function ProfilePage() {
  const userStats = {
    username: "CalcioFan2024",
    level: 28,
    xp: 7450,
    xpToNextLevel: 10000,
    totalPoints: 18450,
    quizzesCompleted: 156,
    predictionsWin: 89,
    predictionsTotal: 234,
    winRate: 38,
  };
  
  const transactions = [
    { id: 1, type: "purchase", amount: 1050, price: 8.09, date: "2024-10-06", status: "succeeded" },
    { id: 2, type: "reward", amount: 500, date: "2024-10-05", status: "succeeded" },
    { id: 3, type: "purchase", amount: 500, price: 4.04, date: "2024-10-03", status: "succeeded" },
  ];
  
  const achievements = [
    { id: 1, title: "Prima Vittoria", icon: Trophy, unlocked: true },
    { id: 2, title: "Quiz Master", icon: Brain, unlocked: true },
    { id: 3, title: "Pronosticatore", icon: TrendingUp, unlocked: false },
    { id: 4, title: "Leggenda", icon: Award, unlocked: false },
  ];
  
  return (
    <div className="space-y-6 pb-24 md:pb-8">
      <HeroBanner
        imageUrl="https://images.unsplash.com/photo-1708577907839-1240466aee53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBqZXJzZXklMjBtZXJjaGFuZGlzZXxlbnwxfHx8fDE3NTk4NjMzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Il Tuo Profilo"
        subtitle="Gestisci il tuo account, visualizza le tue statistiche e i premi"
        badge="LIVELLO 28"
        height="small"
      />
      
      {/* Profile Header */}
      <Card className="bg-gradient-to-br from-[#111318] via-[#111318] to-[#2B2F3A] border-white/10 overflow-hidden">
        <HexagonPattern />
        <div className="relative p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-[#A7FF1A]">
                <AvatarFallback className="bg-[#A7FF1A] text-[#0A1020] text-2xl">
                  CF
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl text-white mb-1">{userStats.username}</h2>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#A7FF1A] text-[#0A1020] border-0">
                    Livello {userStats.level}
                  </Badge>
                  <Badge variant="outline" className="border-[#00E0FF]/30 text-[#00E0FF]">
                    IT
                  </Badge>
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="icon" className="border-white/10 hover:bg-[#2B2F3A]">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
          
          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#A9AFBC]">Esperienza</span>
              <span className="text-white">{userStats.xp} / {userStats.xpToNextLevel} XP</span>
            </div>
            <Progress value={(userStats.xp / userStats.xpToNextLevel) * 100} className="h-2 bg-[#2B2F3A]" />
          </div>
        </div>
      </Card>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-[#111318] border-white/10 text-center">
          <Wallet className="w-6 h-6 text-[#A7FF1A] mx-auto mb-2" />
          <div className="text-2xl text-white mb-1">{userStats.totalPoints.toLocaleString()}</div>
          <div className="text-sm text-[#A9AFBC]">Fans Points</div>
        </Card>
        
        <Card className="p-4 bg-[#111318] border-white/10 text-center">
          <Brain className="w-6 h-6 text-[#00E0FF] mx-auto mb-2" />
          <div className="text-2xl text-white mb-1">{userStats.quizzesCompleted}</div>
          <div className="text-sm text-[#A9AFBC]">Quiz Completati</div>
        </Card>
        
        <Card className="p-4 bg-[#111318] border-white/10 text-center">
          <Trophy className="w-6 h-6 text-[#A7FF1A] mx-auto mb-2" />
          <div className="text-2xl text-white mb-1">{userStats.winRate}%</div>
          <div className="text-sm text-[#A9AFBC]">Win Rate</div>
        </Card>
        
        <Card className="p-4 bg-[#111318] border-white/10 text-center">
          <TrendingUp className="w-6 h-6 text-[#00E0FF] mx-auto mb-2" />
          <div className="text-2xl text-white mb-1">{userStats.predictionsWin}/{userStats.predictionsTotal}</div>
          <div className="text-sm text-[#A9AFBC]">Pronostici</div>
        </Card>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="bg-[#2B2F3A] border-white/10">
          <TabsTrigger value="transactions" className="data-[state=active]:bg-[#A7FF1A] data-[state=active]:text-[#0A1020]">
            Transazioni
          </TabsTrigger>
          <TabsTrigger value="collection" className="data-[state=active]:bg-[#A7FF1A] data-[state=active]:text-[#0A1020]">
            Collezione
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-[#A7FF1A] data-[state=active]:text-[#0A1020]">
            Obiettivi
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions" className="space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">Cronologia Transazioni</h3>
            <span className="text-sm text-[#A9AFBC]">Ultimi 30 giorni</span>
          </div>
          
          {transactions.map((txn) => (
            <Card key={txn.id} className="bg-[#111318] border-white/10">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${
                    txn.type === "purchase" ? "bg-[#A7FF1A]/10" : "bg-[#00E0FF]/10"
                  } flex items-center justify-center`}>
                    {txn.type === "purchase" ? (
                      <CreditCard className="w-5 h-5 text-[#A7FF1A]" />
                    ) : (
                      <Trophy className="w-5 h-5 text-[#00E0FF]" />
                    )}
                  </div>
                  
                  <div>
                    <div className="text-white">
                      {txn.type === "purchase" ? "Acquisto Fans Points" : "Premio Quiz"}
                    </div>
                    <div className="text-sm text-[#A9AFBC]">{txn.date}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-[#A7FF1A]">+{txn.amount.toLocaleString()} FP</div>
                  {txn.price && (
                    <div className="text-sm text-[#A9AFBC]">€{txn.price.toFixed(2)}</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="collection" className="space-y-4">
          <div className="text-center py-12 space-y-4">
            <Trophy className="w-16 h-16 text-[#A9AFBC] mx-auto" />
            <div className="space-y-2">
              <h3 className="text-white">Collezione Card</h3>
              <p className="text-[#A9AFBC]">Le tue card collezionabili appariranno qui</p>
            </div>
            <Button className="bg-[#A7FF1A] hover:bg-[#8FE515] text-[#0A1020]">
              Esplora Store
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.id} 
                  className={`p-4 border ${
                    achievement.unlocked 
                      ? "bg-gradient-to-br from-[#A7FF1A]/10 to-transparent border-[#A7FF1A]/30" 
                      : "bg-[#111318] border-white/10 opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${
                      achievement.unlocked ? "bg-[#A7FF1A]" : "bg-[#2B2F3A]"
                    } flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${
                        achievement.unlocked ? "text-[#0A1020]" : "text-[#A9AFBC]"
                      }`} />
                    </div>
                    <div>
                      <div className="text-white">{achievement.title}</div>
                      {achievement.unlocked && (
                        <Badge className="mt-1 bg-[#A7FF1A]/20 text-[#A7FF1A] border-0 text-xs">
                          Sbloccato
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}