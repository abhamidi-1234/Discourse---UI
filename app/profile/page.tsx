"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ForumHeader } from "@/components/forum-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Award, Calendar, Mail, MapPin, LinkIcon, Edit, BookMarked } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const user = {
    name: "John Doe",
    username: "johndoe",
    avatar: "/images/avatar-1.png",
    bio: "Full-stack developer passionate about web technologies and community building. I love discussing new frameworks and sharing knowledge.",
    joinDate: "March 2022",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    email: "john@example.com",
    stats: {
      posts: 142,
      threads: 38,
      likes: 1245,
      following: 56,
      followers: 124,
    },
    badges: [
      { name: "Early Adopter", icon: Award, color: "bg-amber-500" },
      { name: "Top Contributor", icon: ThumbsUp, color: "bg-primary" },
      { name: "Helpful Member", icon: MessageSquare, color: "bg-accent" },
    ],
    recentActivity: [
      { type: "post", title: "How to optimize React performance", date: "2 days ago", category: "technology" },
      { type: "thread", title: "Introducing myself to the community", date: "1 week ago", category: "general" },
      { type: "like", title: "Best practices for API design", date: "3 days ago", category: "help-support" },
    ],
    threads: [
      {
        id: 1,
        title: "What's your preferred state management solution for React applications?",
        replies: 18,
        likes: 42,
        date: "2 weeks ago",
        category: "technology",
      },
      {
        id: 2,
        title: "Introducing myself to the community",
        replies: 24,
        likes: 36,
        date: "1 month ago",
        category: "general",
      },
      {
        id: 3,
        title: "How do you handle authentication in your Next.js applications?",
        replies: 12,
        likes: 29,
        date: "2 months ago",
        category: "help-support",
      },
    ],
    bookmarks: [
      {
        id: 1,
        title: "The future of web development in 2023",
        author: "sarahj",
        date: "1 week ago",
        category: "technology",
      },
      {
        id: 2,
        title: "Best resources for learning TypeScript",
        author: "alexc",
        date: "2 weeks ago",
        category: "help-support",
      },
      { id: 3, title: "Community guidelines update", author: "admin", date: "1 month ago", category: "announcements" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      <main className="container px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md overflow-hidden animate-slide-up">
              <div className="h-24 bg-gradient-cool"></div>
              <div className="px-6 pb-6 -mt-12">
                <div className="flex justify-between">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-background"
                  />
                  <Button variant="outline" size="sm" className="mt-4 hover-lift">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-primary">@{user.username}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{user.bio}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <div>
                    <div className="font-bold text-lg">{user.stats.threads}</div>
                    <div className="text-xs text-muted-foreground">Threads</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{user.stats.posts}</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{user.stats.likes}</div>
                    <div className="text-xs text-muted-foreground">Likes</div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <a href={`https://${user.website}`} className="text-primary hover:underline">
                      {user.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-lg">Badges</CardTitle>
                <CardDescription>Achievements earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {user.badges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${badge.color}`}>
                        <badge.icon className="h-4 w-4 text-white" />
                      </div>
                      <span>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 md:w-fit">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="threads">Threads</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 mt-1">
                            {activity.type === "post" && <MessageSquare className="h-5 w-5 text-primary" />}
                            {activity.type === "thread" && <MessageSquare className="h-5 w-5 text-accent" />}
                            {activity.type === "like" && <ThumbsUp className="h-5 w-5 text-amber-500" />}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground capitalize">{activity.type}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{activity.date}</span>
                            </div>
                            <Link
                              href={`/${activity.category}/thread-1`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {activity.title}
                            </Link>
                            <div className="text-xs text-muted-foreground">
                              in{" "}
                              <Link href={`/${activity.category}`} className="text-primary hover:underline">
                                {activity.category.replace("-", " ")}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Popular Threads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.threads.slice(0, 2).map((thread, i) => (
                        <div key={i} className="p-3 rounded-lg border group hover:bg-secondary transition-colors">
                          <Link
                            href={`/${thread.category}/thread-${thread.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {thread.title}
                          </Link>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MessageSquare className="h-4 w-4" />
                              <span>{thread.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{thread.likes} likes</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{thread.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="threads" className="mt-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>My Threads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.threads.map((thread, i) => (
                        <div key={i} className="p-3 rounded-lg border group hover:bg-secondary transition-colors">
                          <div className="flex justify-between">
                            <Link
                              href={`/${thread.category}/thread-${thread.id}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {thread.title}
                            </Link>
                            <Badge variant="outline" className="text-xs">
                              {thread.category.replace("-", " ")}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MessageSquare className="h-4 w-4" />
                              <span>{thread.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{thread.likes} likes</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{thread.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[...user.recentActivity, ...user.recentActivity].map((activity, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 mt-1">
                            {activity.type === "post" && <MessageSquare className="h-5 w-5 text-primary" />}
                            {activity.type === "thread" && <MessageSquare className="h-5 w-5 text-accent" />}
                            {activity.type === "like" && <ThumbsUp className="h-5 w-5 text-amber-500" />}
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground capitalize">{activity.type}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{activity.date}</span>
                            </div>
                            <Link
                              href={`/${activity.category}/thread-1`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {activity.title}
                            </Link>
                            <div className="text-xs text-muted-foreground">
                              in{" "}
                              <Link href={`/${activity.category}`} className="text-primary hover:underline">
                                {activity.category.replace("-", " ")}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookmarks" className="mt-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>My Bookmarks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {user.bookmarks.map((bookmark, i) => (
                        <div key={i} className="p-3 rounded-lg border group hover:bg-secondary transition-colors">
                          <div className="flex justify-between">
                            <Link
                              href={`/${bookmark.category}/thread-${bookmark.id}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {bookmark.title}
                            </Link>
                            <BookMarked className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-sm">
                            <span className="text-muted-foreground">by @{bookmark.author}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{bookmark.date}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <Link href={`/${bookmark.category}`} className="text-xs text-primary hover:underline">
                              {bookmark.category.replace("-", " ")}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
