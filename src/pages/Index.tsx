import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SummaryCards } from "@/components/SummaryCards";
import { CategoryGrid } from "@/components/CategoryGrid";
import { MessageList } from "@/components/MessageList";
import { BottomNav } from "@/components/BottomNav";
import { StatsView } from "@/components/StatsView";
import { SettingsView } from "@/components/SettingsView";
import { SearchChat } from "@/components/SearchChat";

type ViewType = "home" | "messages" | "stats" | "settings";

const Index = () => {
  const [activeView, setActiveView] = useState<ViewType>("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveView("messages");
  };

  const renderView = () => {
    switch (activeView) {
      case "messages":
        return (
          <MessageList
            selectedCategory={selectedCategory}
            onClearFilter={() => setSelectedCategory(null)}
          />
        );
      case "stats":
        return <StatsView />;
      case "settings":
        return <SettingsView />;
      default:
        return (
          <>
            <SummaryCards />
            <CategoryGrid
              onCategoryClick={handleCategoryClick}
              showAll={showAllCategories}
              onToggleShowAll={() => setShowAllCategories(!showAllCategories)}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />
      <main className="container max-w-md mx-auto px-4 space-y-6 animate-fade-in pb-24">
        {renderView()}
      </main>
      <BottomNav
        activeView={activeView}
        onViewChange={setActiveView}
        onChatToggle={() => setShowChat(!showChat)}
        showChat={showChat}
      />
      {showChat && <SearchChat onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Index;
