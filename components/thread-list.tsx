"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageSquare, Pin, ThumbsUp } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ThreadList({
  category,
  sort = "latest",
}: {
  category: string
  sort?: "latest" | "top" | "unanswered"
}) {
  const threads = getThreads(category, sort)
  const [visibleThreads, setVisibleThreads] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newVisibleThreads: number[] = []
      threads.forEach((_, index) => {
        setTimeout(() => {
          setVisibleThreads((prev) => [...prev, index])
        }, index * 100)
      })
      return newVisibleThreads
    }, 200)

    return () => clearTimeout(timer)
  }, [threads])

  return (
    <div className="space-y-4">
      {threads.map((thread, index) => (
        <Card
          key={thread.id}
          className={`overflow-hidden transition-all duration-500 border-violet-100 dark:border-violet-900/50 hover:shadow-md hover:shadow-violet-500/10 ${
            visibleThreads.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <CardContent className="p-0">
            <div className="flex border-b p-4">
              <div className="mr-4 flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/30 text-xs font-medium text-violet-700 dark:text-violet-300 shadow-sm">
                  {thread.author.username.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-xs font-medium text-violet-600 dark:text-violet-400">{thread.author.username}</div>
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  {thread.pinned && (
                    <Badge
                      variant="outline"
                      className="gap-1 px-1.5 text-xs font-normal border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20"
                    >
                      <Pin className="h-3 w-3" />
                      Pinned
                    </Badge>
                  )}
                  <Link
                    href={`/${category}/${thread.slug}`}
                    className="font-semibold hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-300"
                  >
                    {thread.title}
                  </Link>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">{thread.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {thread.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-1.5 text-xs font-normal bg-violet-100/50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800/30 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-muted/50 px-4 py-2 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 group">
                  <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" />
                  <span className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {thread.upvotes}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 group">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                  <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {thread.comments}
                  </span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{thread.createdAt}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function getThreads(category: string, sort: string) {
  // This would normally come from an API or database
  const threads = [
    {
      id: 1,
      title: "What's your preferred state management solution for React applications?",
      slug: "thread-1",
      excerpt:
        "I've been working on a large-scale React application and I'm trying to decide on the best state management solution. I've used Redux in the past, but I'm curious about newer alternatives like Zustand, Jotai, and React Query.",
      author: {
        name: "John Doe",
        username: "johndoe",
        avatar: "/placeholder-user.jpg",
      },
      createdAt: "2 days ago",
      upvotes: 24,
      comments: 12,
      tags: ["React", "State Management", "Frontend"],
      pinned: true,
    },
    {
      id: 2,
      title: "How do you handle authentication in your Next.js applications?",
      slug: "thread-2",
      excerpt:
        "I'm building a Next.js application and I'm trying to decide on the best approach for authentication. I've looked at NextAuth.js, but I'm also considering Auth0 and Firebase Authentication.",
      author: {
        name: "Sarah Johnson",
        username: "sarahj",
        avatar: "/placeholder-user.jpg",
      },
      createdAt: "3 days ago",
      upvotes: 18,
      comments: 8,
      tags: ["Next.js", "Authentication", "Security"],
      pinned: false,
    },
    {
      id: 3,
      title: "Best practices for organizing CSS in a large project?",
      slug: "thread-3",
      excerpt:
        "Our CSS is becoming unwieldy as our project grows. We're currently using a mix of CSS modules and global styles, but it's getting harder to maintain. I'm considering switching to Tailwind CSS or styled-components.",
      author: {
        name: "Alex Chen",
        username: "alexc",
        avatar: "/placeholder-user.jpg",
      },
      createdAt: "4 days ago",
      upvotes: 15,
      comments: 10,
      tags: ["CSS", "Frontend", "Best Practices"],
      pinned: false,
    },
    {
      id: 4,
      title: "Recommendations for learning TypeScript in 2023?",
      slug: "thread-4",
      excerpt:
        "I'm a JavaScript developer looking to learn TypeScript. What resources would you recommend for someone with my background? Are there any good courses or books that you found particularly helpful?",
      author: {
        name: "Maria Garcia",
        username: "mariag",
        avatar: "/placeholder-user.jpg",
      },
      createdAt: "5 days ago",
      upvotes: 12,
      comments: 7,
      tags: ["TypeScript", "Learning", "JavaScript"],
      pinned: false,
    },
    {
      id: 5,
      title: "How do you handle form validation in React?",
      slug: "thread-5",
      excerpt:
        "I'm working on a complex form in React and I'm looking for the best approach to validation. I've tried a few libraries like Formik and React Hook Form, but I'm curious about what others are using.",
      author: {
        name: "David Kim",
        username: "davidk",
        avatar: "/placeholder-user.jpg",
      },
      createdAt: "1 week ago",
      upvotes: 10,
      comments: 6,
      tags: ["React", "Forms", "Validation"],
      pinned: false,
    },
  ]

  // Sort threads based on the sort parameter
  if (sort === "top") {
    return [...threads].sort((a, b) => b.upvotes - a.upvotes)
  } else if (sort === "unanswered") {
    return [...threads].filter((thread) => thread.comments === 0)
  }

  // Default to latest
  return threads
}
