import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ChevronRight,
  Clock,
  Star,
  Trash2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface MessageListProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
}

export const MessageList = ({
  selectedCategory,
  onClearFilter,
}: MessageListProps) => {
  const { t } = useTranslation();
  const [starredMessages, setStarredMessages] = useState<number[]>([]);
  const [messages] = useState([
    {
      id: 1,
      category: "shopping",
      sender: "Amazon",
      summary: "Flat 40% off on electronics - Today only!",
      aiInsight:
        "Great deal on laptops and smartphones. Expires in 6 hours.",
      priority: "high",
      time: "2h ago",
      timeDetail: "Valid until 8:00 PM today",
      unread: true,
      tags: ["Limited Time", "Electronics"],
    },
    {
      id: 2,
      category: "banking",
      sender: "HDFC Bank",
      summary: "Credit card payment due in 3 days",
      aiInsight: "₹12,450 due. Pay now to avoid late fees.",
      priority: "urgent",
      time: "5h ago",
      timeDetail: "Due by Dec 28, 11:59 PM",
      unread: true,
      tags: ["Action Required", "Finance"],
    },
    {
      id: 3,
      category: "recharge",
      sender: "Jio",
      summary: "Recharge plan expires tomorrow",
      aiInsight: "₹299 plan with 2GB/day recommended based on usage.",
      priority: "medium",
      time: "1d ago",
      timeDetail: "Expires Dec 26, 12:00 AM",
      unread: false,
      tags: ["Expiring Soon"],
    },
    {
      id: 4,
      category: "travel",
      sender: "MakeMyTrip",
      summary: "Flight sale - 30% off on domestic bookings",
      aiInsight: "Save ₹2,500+ on your next trip. Valid for 48 hours.",
      priority: "medium",
      time: "1d ago",
      timeDetail: "Offer ends Dec 27, 11:59 PM",
      unread: false,
      tags: ["Travel Deals"],
    },
    {
      id: 5,
      category: "shopping",
      sender: "Flipkart",
      summary: "Your wishlist items now on sale",
      aiInsight: "3 items from wishlist discounted by up to 50%.",
      priority: "low",
      time: "2d ago",
      timeDetail: "Sale ends Dec 30",
      unread: false,
      tags: ["Personalized"],
    },
    {
      id: 6,
      category: "banking",
      sender: "SBI",
      summary: "Suspicious activity detected on your account",
      aiInsight: "⚠️ Verify transaction of ₹5,000 made at 3:45 PM",
      priority: "urgent",
      time: "30m ago",
      timeDetail: "Action required immediately",
      unread: true,
      tags: ["Security Alert", "Urgent"],
    },
    {
      id: 7,
      category: "recharge",
      sender: "Airtel",
      summary: "Get ₹1,500 cashback on recharge above ₹500",
      aiInsight: "Limited time offer. Cashback credited within 48 hours.",
      priority: "high",
      time: "3h ago",
      timeDetail: "Valid until 11:59 PM today",
      unread: true,
      tags: ["Cashback", "Today Only"],
    },
    {
      id: 8,
      category: "travel",
      sender: "IRCTC",
      summary: "PNR: 1234567890 - Train ticket booked successfully",
      aiInsight: "Journey on Jan 5. Download ticket from app.",
      priority: "medium",
      time: "4h ago",
      timeDetail: "Journey date: Jan 5, 2025",
      unread: false,
      tags: ["Confirmation", "Travel"],
    },
  ]);

  const filteredMessages = selectedCategory
    ? messages.filter((msg) => msg.category === selectedCategory)
    : messages;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-warning text-warning-foreground";
      case "high":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const toggleStar = (id: number) => {
    setStarredMessages((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const getTimeUrgency = (time: string) => {
    if (time.includes("h")) return "Act soon";
    if (time.includes("d")) return "Review today";
    return "Check later";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            {selectedCategory ? t(`categories.${selectedCategory}`) : t('messages.all')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {filteredMessages.length} {t('nav.messages').toLowerCase()}
          </p>
        </div>
        {selectedCategory && (
          <Button variant="ghost" size="sm" onClick={onClearFilter}>
            Clear filter
          </Button>
        )}
      </div>

      <div className="space-y-3">
        {filteredMessages.map((message) => (
          <Card
            key={message.id}
            className={`p-4 cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 ${
              message.unread ? "border-l-4 border-l-primary" : ""
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm">{message.sender}</p>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${getPriorityColor(
                        message.priority
                      )}`}
                    >
                      {message.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground mb-2">
                    {message.summary}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {message.time}
                  </span>
                  {message.unread && (
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  )}
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-3 border border-accent">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-accent-foreground mb-1">
                      AI Insight
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {message.aiInsight}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-2 flex-wrap flex-1">
                  {message.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs bg-accent/30 border-accent">
                    ⏰ {getTimeUrgency(message.time)}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {message.timeDetail}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => toggleStar(message.id)}
                  >
                    <Star
                      className={`h-4 w-4 ${
                        starredMessages.includes(message.id)
                          ? "fill-yellow-400 text-yellow-400"
                          : ""
                      }`}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      window.open(`sms:${message.sender}`, "_blank")
                    }
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle delete
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
