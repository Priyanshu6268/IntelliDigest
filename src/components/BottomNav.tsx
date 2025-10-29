import { Home, MessageSquare, BarChart3, Settings, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

type ViewType = "home" | "messages" | "stats" | "settings";

interface BottomNavProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onChatToggle: () => void;
  showChat: boolean;
}

export const BottomNav = ({
  activeView,
  onViewChange,
  onChatToggle,
  showChat,
}: BottomNavProps) => {
  const { t } = useTranslation();
  
  const navItems = [
    { id: "home" as ViewType, icon: Home, label: t('nav.home') },
    { id: "messages" as ViewType, icon: MessageSquare, label: t('nav.messages') },
    { id: "stats" as ViewType, icon: BarChart3, label: t('nav.stats') },
    { id: "settings" as ViewType, icon: Settings, label: t('nav.settings') },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg z-50">
        <div className="container max-w-md mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-8 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <Button
        onClick={onChatToggle}
        size="icon"
        className={`fixed bottom-20 right-4 h-14 w-14 rounded-full shadow-lg z-50 transition-all ${
          showChat ? "bg-primary/90" : "bg-primary"
        }`}
      >
        <Bot className="h-6 w-6" />
      </Button>
    </>
  );
};
