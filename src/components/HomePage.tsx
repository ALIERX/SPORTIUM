import { Zap, Trophy, Brain, Gift, ArrowRight, Volume2, Target, Sparkles, Users, Swords, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { HexagonPattern } from "./HexagonPattern";
import { Badge } from "./ui/badge";
import { HeroBanner } from "./HeroBanner";

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onBuyPoints: () => void;
}

export function HomePage({ onNavigate, onBuyPoints }: HomePageProps) {
  const upcomingMatches = [
    { id: 1, home: "Inter", away: "Milan", league: "Serie A", time: "20:45", date: "Oggi" },
    { id: 2, home: "Juventus", away: "Napoli", league: "Serie A", time: "18:00", date: "Domani" },
  ];
  
  return (
    <div className="space-y-6 pb-24 md:pb-8">
      {/* Hero Banner */}
      <HeroBanner
        imageUrl="https://images.unsplash.com/photo-1551384732-fb4f003640e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmYW5zJTIwY2VsZWJyYXRpb24lMjBzdGFkaXVtfGVufDF8fHx8MTc1OTg2MzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
        title="Vinci 10.000 Fans Points!"
        subtitle="Partecipa ai quiz della settimana e scala la classifica per vincere premi incredibili"
        ctaText="Gioca Ora"
        ctaAction={() => onNavigate("quiz")}
        badge="EVENTO SPECIALE"
        height="medium"
      />
      
      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card 
          className="p-6 bg-[#111318] border-white/10 hover:border-[#A7FF1A]/50 transition-all cursor-pointer group"
          onClick={() => onNavigate("quiz")}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#A7FF1A]/10 flex items-center justify-center group-hover:bg-[#A7FF1A]/20 transition-colors">
              <Brain className="w-6 h-6 text-[#A7FF1A]" />
            </div>
            <div>
              <h3 className="text-white">Quiz</h3>
              <p className="text-sm text-[#A9AFBC]">Gioca e vinci</p>
            </div>
          </div>
        </Card>
        
        <Card 
          className="p-6 bg-[#111318] border-white/10 hover:border-[#00E0FF]/50 transition-all cursor-pointer group"
          onClick={() => onNavigate("matches")}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#00E0FF]/10 flex items-center justify-center group-hover:bg-[#00E0FF]/20 transition-colors">
              <Trophy className="w-6 h-6 text-[#00E0FF]" />
            </div>
            <div>
              <h3 className="text-white">Pronostici</h3>
              <p className="text-sm text-[#A9AFBC]">Fai la tua puntata</p>
            </div>
          </div>
        </Card>
        
        <Card 
          className="p-6 bg-[#111318] border-white/10 hover:border-[#A7FF1A]/50 transition-all cursor-pointer group"
          onClick={() => onNavigate("rewards")}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A7FF1A]/20 to-[#00E0FF]/20 flex items-center justify-center">
              <Gift className="w-6 h-6 text-[#A7FF1A]" />
            </div>
            <div>
              <h3 className="text-white">Premi</h3>
              <p className="text-sm text-[#A9AFBC]">Riscatta ora</p>
            </div>
          </div>
        </Card>
        
        <Card 
          className="p-6 bg-[#111318] border-white/10 hover:border-[#00E0FF]/50 transition-all cursor-pointer group"
          onClick={() => onNavigate("noisemeter")}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-white">Noise Meter</h3>
              <p className="text-sm text-[#A9AFBC]">Fai rumore!</p>
            </div>
          </div>
        </Card>
        
        <Card 
          className="p-6 bg-gradient-to-br from-[#A7FF1A]/10 to-[#A7FF1A]/5 border-[#A7FF1A]/30 hover:border-[#A7FF1A]/50 transition-all cursor-pointer group"
          onClick={onBuyPoints}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#A7FF1A] flex items-center justify-center glow-neon">
              <Zap className="w-6 h-6 text-[#0A1020]" />
            </div>
            <div>
              <h3 className="text-white">Ricarica</h3>
              <p className="text-sm text-[#A9AFBC]">Fans Points</p>
            </div>
          </div>
        </Card>
      </div>

      {/* New Features Highlight */}
      <div className="space-y-4">
        <h3 className="text-xl text-white">✨ Nuove Funzionalità</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <Card 
            className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer group"
            onClick={() => onNavigate("battlepass")}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crown className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white text-sm">Battle Pass</h4>
                <p className="text-xs text-[#A9AFBC]">Stagione 1</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-[#A7FF1A]/10 to-transparent border-[#A7FF1A]/30 hover:border-[#A7FF1A]/50 transition-all cursor-pointer group"
            onClick={() => onNavigate("challenges")}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#A7FF1A]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-[#A7FF1A]" />
              </div>
              <div>
                <h4 className="text-white text-sm">Sfide</h4>
                <p className="text-xs text-[#A9AFBC]">4 attive</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/50 transition-all cursor-pointer group"
            onClick={() => onNavigate("spinwheel")}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-white text-sm">Ruota</h4>
                <p className="text-xs text-[#A9AFBC]">1 spin gratis</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-[#00E0FF]/10 to-transparent border-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all cursor-pointer group"
            onClick={() => onNavigate("squad")}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#00E0FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-[#00E0FF]" />
              </div>
              <div>
                <h4 className="text-white text-sm">Squad</h4>
                <p className="text-xs text-[#A9AFBC]">Build team</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/50 transition-all cursor-pointer group"
            onClick={() => onNavigate("teambattles")}
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Swords className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h4 className="text-white text-sm">Battles</h4>
                <p className="text-xs text-[#A9AFBC]">2 live</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Upcoming Matches */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-white">Prossime Partite</h3>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate("matches")}
            className="text-[#A7FF1A] hover:text-[#8FE515]"
          >
            Vedi tutto
          </Button>
        </div>
        
        <div className="space-y-3">
          {upcomingMatches.map((match) => (
            <Card 
              key={match.id}
              className="p-4 bg-[#111318] border-white/10 hover:border-[#A7FF1A]/30 transition-all cursor-pointer"
              onClick={() => onNavigate("matches")}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs border-[#00E0FF]/30 text-[#00E0FF]">
                      {match.league}
                    </Badge>
                    <span className="text-xs text-[#A9AFBC]">{match.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">{match.home}</span>
                    <span className="text-[#A9AFBC]">vs</span>
                    <span className="text-white">{match.away}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#A7FF1A]">{match.time}</div>
                  <div className="text-xs text-[#A9AFBC] mt-1">Pronostica</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Community Highlights */}
      <div className="space-y-4">
        <h3 className="text-xl text-white">Community Highlights</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 bg-[#111318] border-white/10">
            <div className="space-y-2">
              <div className="text-2xl text-[#A7FF1A]">1,247</div>
              <div className="text-sm text-[#A9AFBC]">Giocatori Online</div>
            </div>
          </Card>
          <Card className="p-4 bg-[#111318] border-white/10">
            <div className="space-y-2">
              <div className="text-2xl text-[#00E0FF]">42,891</div>
              <div className="text-sm text-[#A9AFBC]">Pronostici Oggi</div>
            </div>
          </Card>
          <Card className="p-4 bg-[#111318] border-white/10">
            <div className="space-y-2">
              <div className="text-2xl text-[#A7FF1A]">€156K</div>
              <div className="text-sm text-[#A9AFBC]">Premi Distribuiti</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}