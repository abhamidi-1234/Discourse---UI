"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ForumHeader } from "@/components/forum-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, User, Bell, CheckCircle2, Clock, MoreHorizontal } from "lucide-react"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const notifications = {
    all: [
      {
        id: 1,
        type: "reply",
        user: { name: "Sarah Johnson", username: "sarahj", avatar: "/images/avatar-2.png" },
        content: "replied to your thread",
        thread: "What's your preferred state management solution for React applications?",
        time: "2 hours ago",
        read: false,
      },
      {
        id: 2,
        type: "like",
        user: { name: "Alex Chen", username: "alexc", avatar: "/images/avatar-3.png" },
        content: "liked your comment",
        thread: "How do you handle authentication in your Next.js applications?",
        time: "4 hours ago",
        read: false,
      },
      {
        id: 3,
        type: "mention",
        user: { name: "Maria Garcia", username: "mariag", avatar: "/images/avatar-4.png" },
        content: "mentioned you in a comment",
        thread: "Best practices for API error handling",
        time: "1 day ago",
        read: true,
      },
      {
        id: 4,
        type: "follow",
        user: { name: "David Kim", username: "davidk", avatar: "/images/avatar-5.png" },
        content: "started following you",
        thread: "",
        time: "2 days ago",
        read: true,
      },
      {
        id: 5,
        type: "reply",
        user: { name: "Emily Wilson", username: "emilyw", avatar: "/images/avatar-1.png" },
        content: "replied to your comment",
        thread: "Introducing myself to the community",
        time: "3 days ago",
        read: true,
      },
    ],
    unread: [],
    mentions: [],
    follows: [],
  }

  // Filter notifications for other tabs
  notifications.unread = notifications.all.filter((n) => !n.read)
  notifications.mentions = notifications.all.filter((n) => n.type === "mention")
  notifications.follows = notifications.all.filter((n) => n.type === "follow")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      <main className="container px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6 animate-slide-up">
            <h1 className="text-3xl font-bold text-gradient-primary">Notifications</h1>
            <Button variant="outline" size="sm" className="hover-lift">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          </div>

          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all" className="relative">
                All
                {notifications.unread.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    {notifications.unread.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
              <TabsTrigger value="follows">Follows</TabsTrigger>
            </TabsList>

            {["all", "unread", "mentions", "follows"].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-4">
                {notifications[tab as keyof typeof notifications].length > 0 ? (
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-0">
                      {notifications[tab as keyof typeof notifications].map((notification, i) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-4 p-4 border-b last:border-0 hover:bg-secondary/50 transition-colors ${
                            !notification.read ? "bg-primary/5" : ""
                          }`}
                          style={{ animationDelay: `${i * 0.05}s` }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            {notification.type === "reply" && <MessageSquare className="h-5 w-5 text-primary" />}
                            {notification.type === "like" && <ThumbsUp className="h-5 w-5 text-accent" />}
                            {notification.type === "mention" && <Bell className="h-5 w-5 text-amber-500" />}
                            {notification.type === "follow" && <User className="h-5 w-5 text-green-500" />}
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <Image
                                src={notification.user.avatar || "/placeholder.svg"}
                                alt={notification.user.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="font-medium">{notification.user.name}</span>
                              <span className="text-muted-foreground">{notification.content}</span>
                            </div>
                            {notification.thread && (
                              <Link href={`/general/thread-1`} className="text-sm hover:text-primary transition-colors">
                                {notification.thread}
                              </Link>
                            )}
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">No notifications</h3>
                    <p className="text-muted-foreground">
                      You don't have any {tab === "all" ? "" : tab} notifications at the moment.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}
