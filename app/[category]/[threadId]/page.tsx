"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MessageSquare, Share2, ThumbsDown, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ForumHeader } from "@/components/forum-header"
import { ThreadComment } from "@/components/thread-comment"

export default function ThreadPage({
  params,
}: {
  params: { category: string; threadId: string }
}) {
  const { category, threadId } = params
  const categoryName = getCategoryName(category)
  const thread = getThreadData(threadId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />
      <main className="container px-4 py-6 md:py-12">
        <div className="mb-8 flex flex-col gap-2 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/${category}`} className="hover:text-primary transition-colors">
              {categoryName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="line-clamp-1 font-medium text-foreground">{thread.title}</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-md border-0 animate-scale-in">
              <CardHeader className="border-b bg-secondary p-4 sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Image
                        src={
                          thread.author.avatar ||
                          `/placeholder.svg?text=${thread.author.username.substring(0, 2).toUpperCase()}&height=40&width=40`
                        }
                        alt={thread.author.name}
                        width={40}
                        height={40}
                        className="rounded-full avatar-ring"
                      />
                      <div>
                        <div className="font-semibold">{thread.author.name}</div>
                        <div className="text-sm text-primary">@{thread.author.username}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{thread.createdAt}</div>
                  </div>
                  <div>
                    <h1 className="mb-2 text-2xl font-bold">{thread.title}</h1>
                    <div className="flex flex-wrap gap-2">
                      {thread.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="prose max-w-none dark:prose-invert prose-primary">
                  <p>{thread.content}</p>
                  {thread.contentParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-muted/30 p-4 sm:p-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 group">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span className="sr-only">Upvote</span>
                    </Button>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {thread.upvotes}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 group">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full group-hover:bg-destructive/10 group-hover:text-destructive transition-colors duration-300"
                    >
                      <ThumbsDown className="h-4 w-4" />
                      <span className="sr-only">Downvote</span>
                    </Button>
                    <span className="text-sm font-medium group-hover:text-destructive transition-colors duration-300">
                      {thread.downvotes}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 group">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors duration-300"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Comments</span>
                    </Button>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {thread.comments.length}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Comments ({thread.comments.length})</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  Newest First
                </Button>
              </div>

              <Card className="shadow-md border-0 animate-fade-in">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?text=YO&height=40&width=40"
                        alt="Your avatar"
                        width={40}
                        height={40}
                        className="rounded-full avatar-ring"
                      />
                    </div>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Write your comment..."
                        className="mb-3 min-h-24 resize-none focus-visible:ring-primary"
                      />
                      <div className="flex justify-end">
                        <Button>Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {thread.comments.map((comment, i) => (
                  <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <ThreadComment comment={comment} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-md border-0 overflow-hidden rounded-lg animate-fade-in-right">
              <CardHeader className="pb-3 bg-secondary">
                <h3 className="text-lg font-semibold">About the Author</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Image
                    src={
                      thread.author.avatar ||
                      `/placeholder.svg?text=${thread.author.username.substring(0, 2).toUpperCase()}&height=48&width=48`
                    }
                    alt={thread.author.name}
                    width={48}
                    height={48}
                    className="rounded-full avatar-ring"
                  />
                  <div>
                    <div className="font-semibold">{thread.author.name}</div>
                    <div className="text-sm text-primary">@{thread.author.username}</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member since</span>
                    <span>Mar 2022</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total posts</span>
                    <span>142</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reputation</span>
                    <span className="font-medium text-primary">1,245</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  View Profile
                </Button>
              </CardFooter>
            </Card>

            <Card
              className="shadow-md border-0 overflow-hidden rounded-lg animate-fade-in-right"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader className="pb-3 bg-secondary">
                <h3 className="text-lg font-semibold">Similar Threads</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-1 group">
                    <Link
                      href="#"
                      className="line-clamp-2 font-medium group-hover:text-primary transition-colors duration-300"
                    >
                      How do you organize your project structure for large applications?
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-1.5 py-0.5 rounded-full bg-secondary text-primary">12 replies</span>
                      <span>•</span>
                      <span>3 days ago</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  View More
                </Button>
              </CardFooter>
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

function getThreadData(threadId: string) {
  return {
    id: threadId,
    title: "What's your preferred state management solution for React applications?",
    content:
      "I've been working on a large-scale React application and I'm trying to decide on the best state management solution. I've used Redux in the past, but I'm curious about newer alternatives like Zustand, Jotai, and React Query.",
    contentParagraphs: [
      "Currently, our application has grown quite complex with many interconnected components that need to share state. We're experiencing some performance issues and the codebase is becoming harder to maintain.",
      "I've heard good things about Zustand being simpler than Redux, and React Query seems great for server state. What are your experiences with these libraries? Are there any other solutions I should consider?",
      "Also, how do you typically structure your state management code for maintainability as the application grows? Any patterns or best practices you've found helpful would be greatly appreciated!",
    ],
    createdAt: "2 days ago",
    upvotes: 24,
    downvotes: 2,
    tags: ["React", "State Management", "Frontend"],
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "/placeholder.svg?text=JD&height=48&width=48",
    },
    comments: [
      {
        id: "comment-1",
        content:
          "I've been using Zustand for my recent projects and it's been a breath of fresh air after Redux. The simplicity and flexibility are great, and it integrates well with React's concurrent features.",
        createdAt: "1 day ago",
        upvotes: 15,
        downvotes: 0,
        author: {
          name: "Sarah Johnson",
          username: "sarahj",
          avatar: "/placeholder.svg?text=SJ&height=40&width=40",
        },
        replies: [
          {
            id: "reply-1",
            content:
              "I second this! Zustand's API is so much cleaner than Redux. The devtools integration is also pretty good.",
            createdAt: "1 day ago",
            upvotes: 8,
            downvotes: 0,
            author: {
              name: "Alex Chen",
              username: "alexc",
              avatar: "/placeholder.svg?text=AC&height=32&width=32",
            },
          },
        ],
      },
      {
        id: "comment-2",
        content:
          "For server state, React Query has been a game-changer for us. It handles caching, background updates, and stale data really well. We use it alongside Zustand (for UI state) and it's a powerful combination.",
        createdAt: "23 hours ago",
        upvotes: 12,
        downvotes: 1,
        author: {
          name: "Maria Garcia",
          username: "mariag",
          avatar: "/placeholder.svg?text=MG&height=40&width=40",
        },
        replies: [],
      },
      {
        id: "comment-3",
        content:
          "I still prefer Redux, especially with Redux Toolkit which reduces a lot of the boilerplate. The ecosystem is mature and there are solutions for almost any problem you might encounter.",
        createdAt: "18 hours ago",
        upvotes: 7,
        downvotes: 3,
        author: {
          name: "David Kim",
          username: "davidk",
          avatar: "/placeholder.svg?text=DK&height=40&width=40",
        },
        replies: [
          {
            id: "reply-2",
            content:
              "Redux Toolkit is definitely better than vanilla Redux, but I still find it overly complex for many use cases. Have you tried the simpler alternatives?",
            createdAt: "12 hours ago",
            upvotes: 5,
            downvotes: 0,
            author: {
              name: "Emily Wilson",
              username: "emilyw",
              avatar: "/placeholder.svg?text=EW&height=32&width=32",
            },
          },
        ],
      },
    ],
  }
}
