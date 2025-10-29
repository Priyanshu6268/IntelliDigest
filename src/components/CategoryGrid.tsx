import {
  ShoppingBag,
  CreditCard,
  Plane,
  Smartphone,
  Utensils,
  Gift,
  Building2,
  Percent,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

interface CategoryGridProps {
  onCategoryClick: (category: string) => void;
  showAll: boolean;
  onToggleShowAll: () => void;
}

export const CategoryGrid = ({
  onCategoryClick,
  showAll,
  onToggleShowAll,
}: CategoryGridProps) => {
  const { t } = useTranslation();

  const categories = [
    {
      name: t('categories.banking'),
      key: "banking",
      count: 5,
      icon: CreditCard,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-info-light",
      textColor: "text-info",
      priority: 1,
    },
    {
      name: t('categories.recharge'),
      key: "recharge",
      count: 4,
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      bgLight: "bg-success-light",
      textColor: "text-success",
      priority: 2,
    },
    {
      name: t('categories.shopping'),
      key: "shopping",
      count: 8,
      icon: ShoppingBag,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50 dark:bg-purple-950/20",
      textColor: "text-purple-600 dark:text-purple-400",
      priority: 3,
    },
    {
      name: t('categories.travel'),
      key: "travel",
      count: 3,
      icon: Plane,
      color: "from-orange-500 to-red-500",
      bgLight: "bg-warning-light",
      textColor: "text-warning",
      priority: 4,
    },
    {
      name: t('categories.food'),
      key: "food",
      count: 2,
      icon: Utensils,
      color: "from-yellow-500 to-orange-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/20",
      textColor: "text-amber-600 dark:text-amber-400",
      priority: 5,
    },
    {
      name: "Offers",
      key: "offers",
      count: 2,
      icon: Percent,
      color: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50 dark:bg-rose-950/20",
      textColor: "text-rose-600 dark:text-rose-400",
      priority: 6,
    },
  ];

  const displayedCategories = showAll ? categories : categories.slice(0, 2);
  const totalMessages = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {showAll ? "All Categories" : "Priority Categories"}
        </h2>
        <button
          onClick={onToggleShowAll}
          className="text-xs text-primary hover:underline font-medium"
        >
          {showAll ? "Show less" : `View all (${totalMessages} total)`}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 animate-scale-in">
        {displayedCategories.map((category, index) => (
          <Card
            key={index}
            className="p-4 cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => onCategoryClick(category.key)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-xl ${category.bgLight}`}>
                <category.icon className={`h-5 w-5 ${category.textColor}`} />
              </div>
              <Badge
                variant="secondary"
                className="text-xs font-semibold bg-muted"
              >
                {category.count}
              </Badge>
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">{category.name}</p>
              <p className="text-xs text-muted-foreground">
                {category.count} messages
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
