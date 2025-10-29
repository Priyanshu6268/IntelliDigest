import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X, Send, Sparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useTranslation } from "react-i18next";

interface SearchChatProps {
  onClose: () => void;
}

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
}

export const SearchChat = ({ onClose }: SearchChatProps) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content:
        "Hi! I'm your AI assistant. Ask me anything about your messages - I can help you find offers, check payment dates, or summarize categories.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        content: getAIResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);

    setInput("");
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("recharge") || lowerQuery.includes("expire")) {
      return "You have 3 recharge offers:\n\n• Jio plan expires tomorrow (₹299 with 2GB/day recommended)\n• Airtel validity ending in 2 days\n• Vi recharge due in 5 days\n\nWould you like me to show you the best plans?";
    }

    if (lowerQuery.includes("payment") || lowerQuery.includes("bank")) {
      return "You have 1 urgent payment:\n\n• HDFC Bank credit card payment of ₹12,450 due in 3 days\n\nShall I remind you again tomorrow?";
    }

    if (lowerQuery.includes("shopping") || lowerQuery.includes("deal")) {
      return "Here are today's best shopping deals:\n\n• Amazon: 40% off on electronics (expires in 6 hours)\n• Flipkart: 3 wishlist items on sale (up to 50% off)\n\nTotal potential savings: ₹3,200+";
    }

    if (lowerQuery.includes("travel")) {
      return "Found 2 travel offers:\n\n• MakeMyTrip: 30% off domestic flights (valid 48 hours)\n• Potential savings of ₹2,500+ on your next trip\n\nWant to see specific destinations?";
    }

    if (lowerQuery.includes("summary") || lowerQuery.includes("today")) {
      return "Today's summary:\n\n📱 3 recharge offers expiring soon\n✈️ 2 travel deals active\n💳 1 urgent banking payment (3 days)\n🛍️ 8 shopping messages\n\nMost urgent: Credit card payment due soon!";
    }

    return "I found relevant information about your messages. Could you be more specific? Try asking about:\n\n• Recharge plans and expiry\n• Payment due dates\n• Shopping deals\n• Travel offers\n• Daily summary";
  };

  const quickActions = [
    "Show urgent messages",
    "What's expiring soon?",
    "Best deals today",
    "Payment deadlines",
  ];

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 animate-fade-in">
      <div className="container max-w-md mx-auto h-full flex flex-col p-4">
        <Card className="flex-1 flex flex-col shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">AI Assistant</h2>
                <p className="text-xs text-muted-foreground">
                  Powered by LLM
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-muted-foreground px-2">
                    Quick actions:
                  </p>
                  {quickActions.map((action, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={() => setInput(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about your messages..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
