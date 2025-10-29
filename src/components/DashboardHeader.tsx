import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { useTranslation } from "react-i18next";

export const DashboardHeader = () => {
  const { t } = useTranslation();
  const [notifications] = useState([
    {
      id: 1,
      title: "Save ₹2,000 on Flights",
      description: "Exclusive coupon code expires in 6 hours",
      time: "5 min ago",
      type: "offer",
      urgent: true,
    },
    {
      id: 2,
      title: "⚠️ Scam Alert Detected",
      description: "Fake bank SMS from unknown sender blocked",
      time: "15 min ago",
      type: "critical",
      urgent: true,
    },
    {
      id: 3,
      title: "Banking Payment Due",
      description: "Credit card bill payment due in 3 days",
      time: "1 hour ago",
      type: "reminder",
      urgent: false,
    },
    {
      id: 4,
      title: "Medicine Delivery",
      description: "Your prescription order will arrive today by 6 PM",
      time: "2 hours ago",
      type: "health",
      urgent: false,
    },
    {
      id: 5,
      title: "Recharge Offer",
      description: "Get ₹1,500 cashback on recharge above ₹500",
      time: "3 hours ago",
      type: "offer",
      urgent: false,
    },
  ]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background to-background/80 backdrop-blur-lg border-b border-border">
      <div className="container max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t('app.title')}
            </h1>
            <p className="text-sm text-muted-foreground">{t('app.subtitle')}</p>
          </div>
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] text-primary-foreground flex items-center justify-center animate-pulse">
                    {notifications.filter(n => n.urgent).length}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>{t('notifications.title')}</SheetTitle>
                  <SheetDescription>
                    {t('notifications.description')}
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-120px)] mt-6">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-sm">{notification.title}</h4>
                          {notification.urgent && (
                            <Badge variant="destructive" className="text-[10px]">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {notification.description}
                        </p>
                        <p className="text-[10px] text-muted-foreground">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
