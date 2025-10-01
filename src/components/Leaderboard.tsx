import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal } from "lucide-react";

interface LeaderboardItem {
  rank: number;
  website: string;
  traffic: string;
  score: number;
}

interface LeaderboardProps {
  data: LeaderboardItem[];
  title: string;
}

const Leaderboard = ({ data, title }: LeaderboardProps) => {
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-gray-400";
      case 3:
        return "text-amber-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                item.rank <= 3
                  ? "bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20"
                  : "bg-muted/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10">
                  {item.rank <= 3 ? (
                    <Medal className={`h-6 w-6 ${getMedalColor(item.rank)}`} />
                  ) : (
                    <span className="text-lg font-bold text-muted-foreground">
                      {item.rank}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.website}</p>
                  <p className="text-sm text-muted-foreground">{item.traffic}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{item.score}</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
