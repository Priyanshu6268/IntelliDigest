import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

export const StatsView = () => {
  const stats = {
    thisWeek: {
      total: 168,
      change: 12,
      trend: "up",
    },
    categoriesBreakdown: [
      { name: "Shopping", count: 45, percentage: 27, color: "bg-purple-500" },
      { name: "Banking", count: 38, percentage: 23, color: "bg-info" },
      { name: "Recharge", count: 32, percentage: 19, color: "bg-success" },
      { name: "Travel", count: 28, percentage: 17, color: "bg-warning" },
      { name: "Others", count: 25, percentage: 14, color: "bg-muted" },
    ],
    insights: [
      {
        title: "Peak Activity",
        value: "2-4 PM",
        description: "Most messages arrive during afternoon",
      },
      {
        title: "Most Active",
        value: "Shopping",
        description: "Highest category this week",
      },
      {
        title: "Action Rate",
        value: "32%",
        description: "Messages you interacted with",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">Analytics</h2>
        <p className="text-sm text-muted-foreground">
          Your SMS patterns this week
        </p>
      </div>

      <Card className="p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Total Messages
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-bold">{stats.thisWeek.total}</p>
              <Badge
                variant="secondary"
                className="bg-success-light text-success"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                {stats.thisWeek.change}%
              </Badge>
            </div>
          </div>
          <div className="p-3 bg-primary/10 rounded-full">
            <Activity className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">Category Breakdown</p>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </div>
          {stats.categoriesBreakdown.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{cat.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{cat.count}</span>
                  <span className="text-xs text-muted-foreground">
                    {cat.percentage}%
                  </span>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${cat.color} transition-all duration-500`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-3">
        {stats.insights.map((insight, idx) => (
          <Card key={idx} className="p-4 shadow-card">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent rounded-lg">
                <BarChart3 className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  {insight.title}
                </p>
                <p className="text-xl font-bold mb-1">{insight.value}</p>
                <p className="text-xs text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
