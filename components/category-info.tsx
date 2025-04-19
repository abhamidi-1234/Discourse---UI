"use client"

import { MessageSquare, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function CategoryInfo({ category }: { category: string }) {
  const categoryData = getCategoryData(category)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`rounded-lg border border-violet-100 dark:border-violet-900/50 bg-card p-4 text-card-foreground shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-violet-100 dark:border-violet-900/50 bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-950/40 dark:to-violet-900/20 p-3 transition-transform duration-300 hover:scale-105">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-violet-600 dark:from-violet-500 dark:to-violet-400 text-transparent bg-clip-text">
            {categoryData.threads}
          </div>
          <div className="text-sm text-muted-foreground">Threads</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-teal-100 dark:border-teal-900/50 bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/40 dark:to-teal-900/20 p-3 transition-transform duration-300 hover:scale-105">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-500 dark:to-teal-400 text-transparent bg-clip-text">
            {categoryData.posts}
          </div>
          <div className="text-sm text-muted-foreground">Posts</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-amber-100 dark:border-amber-900/50 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/40 dark:to-amber-900/20 p-3 transition-transform duration-300 hover:scale-105">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-500 dark:to-amber-400 text-transparent bg-clip-text">
            {categoryData.members}
          </div>
          <div className="text-sm text-muted-foreground">Members</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-violet-500 dark:text-violet-400" />
          <span>Last post {categoryData.lastPost}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-amber-500 dark:text-amber-400" />
          <span className="font-medium text-amber-700 dark:text-amber-300">
            {categoryData.activeMembers} members online
          </span>
        </div>
      </div>
    </div>
  )
}

function getCategoryData(slug: string) {
  const categories: Record<string, any> = {
    general: {
      threads: 324,
      posts: 1842,
      members: 1253,
      lastPost: "2 hours ago",
      activeMembers: 42,
    },
    technology: {
      threads: 218,
      posts: 1253,
      members: 987,
      lastPost: "1 hour ago",
      activeMembers: 36,
    },
    "help-support": {
      threads: 156,
      posts: 892,
      members: 745,
      lastPost: "30 minutes ago",
      activeMembers: 28,
    },
    announcements: {
      threads: 42,
      posts: 367,
      members: 1432,
      lastPost: "1 day ago",
      activeMembers: 15,
    },
    showcase: {
      threads: 89,
      posts: 512,
      members: 678,
      lastPost: "4 hours ago",
      activeMembers: 23,
    },
    "off-topic": {
      threads: 134,
      posts: 768,
      members: 892,
      lastPost: "3 hours ago",
      activeMembers: 31,
    },
  }

  return (
    categories[slug] || {
      threads: 0,
      posts: 0,
      members: 0,
      lastPost: "never",
      activeMembers: 0,
    }
  )
}
