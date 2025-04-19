import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MessageSquare, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ForumHeader } from "@/components/forum-header"
import { TrendingThreads } from "@/components/trending-threads"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-90"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Forum discussions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container relative z-10 flex flex-col justify-center h-full px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl animate-fade-in">
            Join the conversation at Discourse
          </h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl animate-fade-in">
            Connect with a community of passionate individuals sharing ideas, knowledge, and experiences.
          </p>
          <div className="flex gap-4 mt-8 animate-fade-in">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Explore Topics
            </Button>
          </div>
        </div>
      </div>

      <main className="container px-4 py-12 md:py-16">
        <div className="flex flex-col gap-16">
          <section className="space-y-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Discover what's happening</h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with the latest discussions and trending topics
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden shadow-md border-0 card-hover animate-fade-in">
                <CardHeader className="bg-secondary pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    Trending
                  </CardTitle>
                  <CardDescription>Popular discussions right now</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <TrendingThreads />
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

              <Card className="overflow-hidden shadow-md border-0 card-hover animate-fade-in">
                <CardHeader className="bg-secondary pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MessageSquare className="h-5 w-5" />
                    Latest Discussions
                  </CardTitle>
                  <CardDescription>Recently active threads</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <Image
                              src={`/placeholder.svg?text=JD&height=32&width=32`}
                              alt="User avatar"
                              width={32}
                              height={32}
                              className="rounded-full avatar-ring"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Link
                            href={`/general/thread-${i}`}
                            className="line-clamp-1 font-medium hover:text-primary transition-colors"
                          >
                            How do you handle state management in large applications?
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Posted by @johndoe</span>
                            <span>•</span>
                            <span>2 hours ago</span>
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

              <Card className="overflow-hidden shadow-md border-0 card-hover animate-fade-in">
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
                      { name: "Sarah Johnson", username: "sarahj", posts: 142 },
                      { name: "Alex Chen", username: "alexc", posts: 98 },
                      { name: "Maria Garcia", username: "mariag", posts: 87 },
                    ].map((user, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="flex-shrink-0">
                          <Image
                            src={`/placeholder.svg?text=${user.username.substring(0, 2).toUpperCase()}&height=32&width=32`}
                            alt={`${user.name} avatar`}
                            width={32}
                            height={32}
                            className="rounded-full avatar-ring"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium group-hover:text-primary transition-colors">{user.name}</div>
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
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
              <Button variant="outline" size="sm" className="group">
                View All
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.id} href={`/${category.slug}`} className="group category-card">
                  <Card className="h-full overflow-hidden shadow-md border-0 transition-all duration-300 group-hover:shadow-lg">
                    <div className="category-image">
                      <Image src={category.image || "/placeholder.svg"} alt={category.name} width={400} height={200} />
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
        </div>
      </main>
    </div>
  )
}

const categories = [
  {
    id: 1,
    name: "General Discussion",
    slug: "general",
    description: "Talk about anything related to the community",
    icon: MessageSquare,
    image: "/placeholder.svg?text=General&height=200&width=400",
    threads: 324,
    posts: 1842,
  },
  {
    id: 2,
    name: "Technology",
    slug: "technology",
    description: "Discuss the latest in tech and programming",
    icon: TrendingUp,
    image: "/placeholder.svg?text=Technology&height=200&width=400",
    threads: 218,
    posts: 1253,
  },
  {
    id: 3,
    name: "Help & Support",
    slug: "help-support",
    description: "Get help from the community",
    icon: Users,
    image: "/placeholder.svg?text=Help&height=200&width=400",
    threads: 156,
    posts: 892,
  },
  {
    id: 4,
    name: "Announcements",
    slug: "announcements",
    description: "Important updates and news",
    icon: MessageSquare,
    image: "/placeholder.svg?text=Announcements&height=200&width=400",
    threads: 42,
    posts: 367,
  },
  {
    id: 5,
    name: "Showcase",
    slug: "showcase",
    description: "Share your projects and get feedback",
    icon: TrendingUp,
    image: "/placeholder.svg?text=Showcase&height=200&width=400",
    threads: 89,
    posts: 512,
  },
  {
    id: 6,
    name: "Off-Topic",
    slug: "off-topic",
    description: "Discussions not related to the main topics",
    icon: MessageSquare,
    image: "/placeholder.svg?text=Off-Topic&height=200&width=400",
    threads: 134,
    posts: 768,
  },
]
