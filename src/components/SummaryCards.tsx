import { Card } from "./ui/card";
import { TrendingUp, AlertCircle, Star, Sparkles, DollarSign, Shield, Tag } from "lucide-react";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

export const SummaryCards = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Main Headline Summary */}
      <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-card">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-3">{t('summary.title')}</h3>
            
            {/* Critical Info */}
            <div className="mb-3">
              <p className="text-[10px] font-semibold text-destructive mb-1">{t('summary.critical')}</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive mt-0.5">•</span>
                  <span>⚠️ Fake bank SMS detected - verify before clicking links</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive mt-0.5">•</span>
                  <span>🏥 Medicine delivery scheduled today by 6 PM</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-destructive mt-0.5">•</span>
                  <span>🔒 OTP verification required for bank transaction</span>
                </li>
              </ul>
            </div>

            {/* Major Updates */}
            <div className="mb-3">
              <p className="text-[10px] font-semibold text-warning mb-1">{t('summary.major')}</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-warning mt-0.5">•</span>
                  <span>💳 Credit card bill payment due in 3 days - ₹12,450</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-warning mt-0.5">•</span>
                  <span>✈️ Flight booking confirmation for Mumbai trip on Dec 28</span>
                </li>
              </ul>
            </div>

            {/* Minor Info */}
            <div>
              <p className="text-[10px] font-semibold text-primary mb-1">{t('summary.minor')}</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>📱 3 recharge offers expiring today</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>🛍️ 2 shopping coupons valid till weekend</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Savings Opportunity */}
      <Card className="p-4 bg-gradient-to-br from-success/10 to-success/5 border-success/20 shadow-card hover:shadow-lg transition-all cursor-pointer">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-success/10">
            <DollarSign className="h-5 w-5 text-success" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm">{t('summary.savings')}</h3>
              <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/20">
                {t('summary.limitedTime')}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ✈️ ₹2,000 off flights • 📱 ₹1,500 recharge cashback • 🛍️ ₹1,500 shopping voucher (6 hrs left)
            </p>
          </div>
        </div>
      </Card>


      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-card">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-primary/10 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">24</p>
            <p className="text-xs text-muted-foreground">New Today</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20 shadow-card">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-warning/10 mb-2">
              <AlertCircle className="h-5 w-5 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">5</p>
            <p className="text-xs text-muted-foreground">Urgent</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-success/10 to-success/5 border-success/20 shadow-card">
          <div className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full bg-success/10 mb-2">
              <Star className="h-5 w-5 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">12</p>
            <p className="text-xs text-muted-foreground">Starred</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
