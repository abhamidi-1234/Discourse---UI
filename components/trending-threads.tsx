"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp, MessageSquare } from "lucide-react"

export function TrendingThreads() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const trendingThreads = [
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
        avatar: "/placeholder.svg?text=JD&height=40&width=40",
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
        avatar: "/placeholder.svg?text=SJ&height=40&width=40",
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
        avatar: "/placeholder.svg?text=AC&height=40&width=40",
      },
    },
  ]

  return (
    <div className="space-y-4">
      {trendingThreads.map((thread, index) => (
        <div
          key={thread.id}
          className="flex gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-secondary"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex flex-col items-center gap-1 pt-1">
            <div
              className={`flex flex-col items-center justify-center rounded-md p-1 transition-all duration-300 ${
                hoveredIndex === index ? "bg-primary/10" : ""
              }`}
            >
              <ArrowUp
                className={`h-4 w-4 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {thread.upvotes}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <Image
                src={thread.author.avatar || "/placeholder.svg"}
                alt={thread.author.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-xs text-muted-foreground">{thread.author.username}</span>
            </div>
            <Link
              href={`/${thread.category}/${thread.slug}`}
              className={`line-clamp-2 font-medium transition-colors duration-300 ${
                hoveredIndex === index ? "text-primary" : ""
              }`}
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
  )
}
