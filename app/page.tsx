import Link from "next/link"
import { ChevronRight, MessageSquare, TrendingUp, Users, ArrowRight, Sparkles, ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ForumHeader } from "@/components/forum-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container relative z-10 flex flex-col justify-center h-full px-4 py-16">
          <div className="max-w-3xl animate-slide-up opacity-100">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Join the conversation at <span className="text-white border-b-2 border-white/70">Discourse</span>
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-2xl">
              Connect with a community of passionate individuals sharing ideas, knowledge, and experiences.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
                Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 hover-lift"
              >
                Explore Topics
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden lg:block">
            <div className="flex items-center gap-2 animate-float">
              <div className="relative -space-x-4 flex">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold border-2 border-white">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold border-2 border-white">
                  SJ
                </div>
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold border-2 border-white">
                  AC
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                <span className="font-semibold">1,200+</span> members online
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container px-4 py-12 md:py-16">
        <div className="flex flex-col gap-16">
          <section className="space-y-8">
            <div className="flex flex-col gap-2 animate-slide-up opacity-100">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Discover what's happening</h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with the latest discussions and trending topics
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Trending Card */}
              <Card className="overflow-hidden shadow-md border-0 card-hover opacity-100">
                <CardHeader className="bg-secondary pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    Trending
                  </CardTitle>
                  <CardDescription>Popular discussions right now</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: "What's your preferred state management solution for React applications?",
                        category: "technology",
                        slug: "thread-1",
                        upvotes: 42,
                        comments: 18,
                        timeAgo: "2 days ago",
                        author: {
                          name: "John Doe",
                          username: "johndoe",
                        },
                      },
                      {
                        id: 2,
                        title: "Introducing our new community guidelines and code of conduct",
                        category: "announcements",
                        slug: "thread-2",
                        upvotes: 36,
                        comments: 7,
                        timeAgo: "1 day ago",
                        author: {
                          name: "Sarah Johnson",
                          username: "sarahj",
                        },
                      },
                      {
                        id: 3,
                        title: "How do you handle authentication in your Next.js applications?",
                        category: "help-support",
                        slug: "thread-3",
                        upvotes: 29,
                        comments: 24,
                        timeAgo: "3 days ago",
                        author: {
                          name: "Alex Chen",
                          username: "alexc",
                        },
                      },
                    ].map((thread, index) => (
                      <div
                        key={thread.id}
                        className="flex gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-secondary"
                      >
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex flex-col items-center justify-center rounded-md p-1">
                            <ArrowUp className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">{thread.upvotes}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                              {thread.author.username.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="text-xs text-muted-foreground">{thread.author.username}</span>
                          </div>
                          <Link
                            href={`/${thread.category}/${thread.slug}`}
                            className="line-clamp-2 font-medium hover:text-primary transition-colors"
                          >
                            {thread.title}
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>{thread.comments}</span>
                            </div>
                            <span>•</span>
                            <span>{thread.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Link
                    href="/trending"
                    className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Latest Discussions Card */}
              <Card className="overflow-hidden shadow-md border-0 card-hover opacity-100">
                <CardHeader className="bg-secondary pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MessageSquare className="h-5 w-5" />
                    Latest Discussions
                  </CardTitle>
                  <CardDescription>Recently active threads</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: "How do you handle state management in large applications?",
                        author: "johndoe",
                        initials: "JD",
                        time: "2 hours ago",
                      },
                      {
                        id: 2,
                        title: "What's your favorite CSS framework in 2023?",
                        author: "sarahj",
                        initials: "SJ",
                        time: "4 hours ago",
                      },
                      {
                        id: 3,
                        title: "Best practices for API error handling?",
                        author: "alexc",
                        initials: "AC",
                        time: "6 hours ago",
                      },
                    ].map((thread) => (
                      <div key={thread.id} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                            {thread.initials}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Link
                            href={`/general/thread-${thread.id}`}
                            className="line-clamp-1 font-medium hover:text-primary transition-colors"
                          >
                            {thread.title}
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Posted by @{thread.author}</span>
                            <span>•</span>
                            <span>{thread.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Link
                    href="/latest"
                    className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Active Members Card */}
              <Card className="overflow-hidden shadow-md border-0 card-hover opacity-100">
                <CardHeader className="bg-secondary pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    Active Members
                  </CardTitle>
                  <CardDescription>Community contributors</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sarah Johnson",
                        username: "sarahj",
                        posts: 142,
                        initials: "SJ",
                        color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
                      },
                      {
                        name: "Alex Chen",
                        username: "alexc",
                        posts: 98,
                        initials: "AC",
                        color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                      },
                      {
                        name: "Maria Garcia",
                        username: "mariag",
                        posts: 87,
                        initials: "MG",
                        color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
                      },
                    ].map((user, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-xs font-medium`}
                          >
                            {user.initials}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium group-hover:text-primary transition-colors duration-300">
                            {user.name}
                          </div>
                          <div className="text-xs text-muted-foreground">@{user.username}</div>
                        </div>
                        <div className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-primary">
                          {user.posts} posts
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 px-6 py-3">
                  <Link
                    href="/members"
                    className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View all
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center justify-between animate-slide-up opacity-100">
              <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
              <Button variant="outline" size="sm" className="group hover-lift">
                View All
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  name: "General Discussion",
                  slug: "general",
                  description: "Talk about anything related to the community",
                  color: "from-blue-500 to-indigo-600",
                  threads: 324,
                  posts: 1842,
                },
                {
                  id: 2,
                  name: "Technology",
                  slug: "technology",
                  description: "Discuss the latest in tech and programming",
                  color: "from-violet-500 to-purple-600",
                  threads: 218,
                  posts: 1253,
                },
                {
                  id: 3,
                  name: "Help & Support",
                  slug: "help-support",
                  description: "Get help from the community",
                  color: "from-emerald-500 to-teal-600",
                  threads: 156,
                  posts: 892,
                },
                {
                  id: 4,
                  name: "Announcements",
                  slug: "announcements",
                  description: "Important updates and news",
                  color: "from-amber-500 to-orange-600",
                  threads: 42,
                  posts: 367,
                },
                {
                  id: 5,
                  name: "Showcase",
                  slug: "showcase",
                  description: "Share your projects and get feedback",
                  color: "from-pink-500 to-rose-600",
                  threads: 89,
                  posts: 512,
                },
                {
                  id: 6,
                  name: "Off-Topic",
                  slug: "off-topic",
                  description: "Discussions not related to the main topics",
                  color: "from-cyan-500 to-blue-600",
                  threads: 134,
                  posts: 768,
                },
              ].map((category, index) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}`}
                  className="group category-card opacity-100"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Card className="h-full overflow-hidden shadow-md border-0 transition-all duration-300 group-hover:shadow-lg hover-glow">
                    <div className="category-image">
                      <div className={`w-full h-full bg-gradient-to-r ${category.color}`}></div>
                      <div className="category-overlay">
                        <h3 className="category-title">{category.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <span>{category.posts} posts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{category.threads} threads</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Section */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 animate-slide-up opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-overlay"></div>
            <div className="relative z-10 grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>Featured</span>
                </div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">Join our weekly community discussions</h2>
                <p className="text-white/80">
                  Every Friday at 3 PM EST, we host live discussions on trending topics. Join us to share your insights
                  and learn from others.
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 mt-2 hover-lift">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/30 rounded-full blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold border-2 border-white">
                      DM
                    </div>
                    <div>
                      <h4 className="text-white font-medium">David Miller</h4>
                      <p className="text-white/70 text-sm">Community Host</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">
                    "Our community discussions have been incredibly insightful. I've learned so much from everyone's
                    diverse perspectives."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
