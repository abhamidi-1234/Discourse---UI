import Link from "next/link"
import { ChevronRight, Filter, PlusCircle, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ForumHeader } from "@/components/forum-header"
import { CategoryInfo } from "@/components/category-info"
import { ThreadList } from "@/components/thread-list"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const categoryName = getCategoryName(category)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <ForumHeader />
      <main className="container px-4 py-6 md:py-12">
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{categoryName}</span>
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="text-3xl font-bold tracking-tight">{categoryName}</h1>
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              New Thread
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <CategoryInfo category={category} />

            <Tabs defaultValue="latest" className="w-full">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="top">Top</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <SortAsc className="h-3.5 w-3.5" />
                    Sort
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                </div>
              </div>
              <TabsContent value="latest" className="mt-4">
                <ThreadList category={category} sort="latest" />
              </TabsContent>
              <TabsContent value="top" className="mt-4">
                <ThreadList category={category} sort="top" />
              </TabsContent>
              <TabsContent value="unanswered" className="mt-4">
                <ThreadList category={category} sort="unanswered" />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About this category</CardTitle>
                <CardDescription>{getCategoryDescription(category)}</CardDescription>
              </CardHeader>
              <CardContent className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Created</span>
                    <span>Jan 15, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total threads</span>
                    <span>324</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total posts</span>
                    <span>1,842</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last activity</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <Button variant="outline" size="sm" className="w-full">
                  View Stats
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>Most active members in this category</CardDescription>
              </CardHeader>
              <CardContent className="border-t pt-4">
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", username: "sarahj", posts: 142 },
                    { name: "Alex Chen", username: "alexc", posts: 98 },
                    { name: "Maria Garcia", username: "mariag", posts: 87 },
                    { name: "John Smith", username: "johns", posts: 76 },
                    { name: "David Kim", username: "davidk", posts: 65 },
                  ].map((user, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {user.username.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">@{user.username}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{user.posts} posts</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function getCategoryName(slug: string): string {
  const categories: Record<string, string> = {
    general: "General Discussion",
    technology: "Technology",
    "help-support": "Help & Support",
    announcements: "Announcements",
    showcase: "Showcase",
    "off-topic": "Off-Topic",
  }

  return categories[slug] || "Category"
}

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    general: "Talk about anything related to the community",
    technology: "Discuss the latest in tech and programming",
    "help-support": "Get help from the community",
    announcements: "Important updates and news",
    showcase: "Share your projects and get feedback",
    "off-topic": "Discussions not related to the main topics",
  }

  return descriptions[slug] || "A place to discuss topics related to this category"
}
