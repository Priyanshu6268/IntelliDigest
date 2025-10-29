import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Bell,
  Shield,
  Sparkles,
  Filter,
  Download,
  Trash2,
  ChevronRight,
  Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const SettingsView = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
    { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
    { code: "te", name: "Telugu", nativeName: "తెలుగు" },
    { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  const settings = [
    {
      title: "Smart Notifications",
      description: "Get notified only for high-priority messages",
      icon: Bell,
      enabled: true,
      badge: "Recommended",
    },
    {
      title: "AI Summarization",
      description: "Automatically generate message summaries",
      icon: Sparkles,
      enabled: true,
      badge: "Active",
    },
    {
      title: "Privacy Mode",
      description: "Process messages on-device only",
      icon: Shield,
      enabled: true,
    },
    {
      title: "Auto-filter Spam",
      description: "Hide low-value promotional messages",
      icon: Filter,
      enabled: false,
    },
  ];

  const categories = [
    { name: "Shopping", enabled: true },
    { name: "Banking", enabled: true },
    { name: "Travel", enabled: true },
    { name: "Recharge", enabled: true },
    { name: "Food", enabled: false },
    { name: "Entertainment", enabled: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">{t('nav.settings')}</h2>
        <p className="text-sm text-muted-foreground">
          Customize your SMS experience
        </p>
      </div>

      {/* Language Selector */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          {t('settings.language')}
        </h3>
        <Card className="p-4 shadow-card">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-accent rounded-lg">
              <Globe className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm mb-2">{t('settings.selectLanguage')}</p>
              <Select value={i18n.language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2">
                        <span>{lang.nativeName}</span>
                        <span className="text-muted-foreground text-xs">({lang.name})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Preferences
        </h3>
        {settings.map((setting, idx) => (
          <Card key={idx} className="p-4 shadow-card">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-accent rounded-lg">
                  <setting.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm">{setting.title}</p>
                    {setting.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {setting.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {setting.description}
                  </p>
                </div>
              </div>
              <Switch checked={setting.enabled} />
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Active Categories
        </h3>
        <Card className="p-4 shadow-card">
          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm">{cat.name}</span>
                <Switch checked={cat.enabled} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Data</h3>
        <Card className="p-3 shadow-card space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-between"
            size="sm"
          >
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-between text-destructive hover:text-destructive"
            size="sm"
          >
            <div className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              <span>Clear All Messages</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Card>
      </div>

      <Card className="p-4 shadow-card bg-accent/50 border-accent">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">AI Learning Active</p>
            <p className="text-xs text-muted-foreground">
              The system adapts to your preferences over time for better
              summaries and categorization.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
