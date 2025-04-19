"use client"

import { useState } from "react"
import Image from "next/image"
import { ReplyIcon, ThumbsDown, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface Author {
  name: string
  username: string
  avatar: string
}

interface ReplyType {
  id: string
  content: string
  createdAt: string
  upvotes: number
  downvotes: number
  author: Author
}

interface Comment {
  id: string
  content: string
  createdAt: string
  upvotes: number
  downvotes: number
  author: Author
  replies: ReplyType[]
}

export function ThreadComment({ comment }: { comment: Comment }) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [upvoted, setUpvoted] = useState(false)
  const [downvoted, setDownvoted] = useState(false)
  const [upvotes, setUpvotes] = useState(comment.upvotes)
  const [downvotes, setDownvotes] = useState(comment.downvotes)

  const handleUpvote = () => {
    if (upvoted) {
      setUpvoted(false)
      setUpvotes(upvotes - 1)
    } else {
      setUpvoted(true)
      setUpvotes(upvotes + 1)
      if (downvoted) {
        setDownvoted(false)
        setDownvotes(downvotes - 1)
      }
    }
  }

  const handleDownvote = () => {
    if (downvoted) {
      setDownvoted(false)
      setDownvotes(downvotes - 1)
    } else {
      setDownvoted(true)
      setDownvotes(downvotes + 1)
      if (upvoted) {
        setUpvoted(false)
        setUpvotes(upvotes - 1)
      }
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <Image
              src={
                comment.author.avatar ||
                `/placeholder.svg?text=${comment.author.username.substring(0, 2).toUpperCase()}&height=40&width=40`
              }
              alt={comment.author.name}
              width={40}
              height={40}
              className="rounded-full avatar-ring"
            />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{comment.author.name}</div>
                <div className="text-xs text-primary">@{comment.author.username}</div>
              </div>
              <div className="text-xs text-muted-foreground">{comment.createdAt}</div>
            </div>
            <div className="text-sm">{comment.content}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/30 p-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full transition-colors duration-300 ${
                upvoted ? "text-primary bg-primary/10" : ""
              }`}
              onClick={handleUpvote}
            >
              <ThumbsUp className="h-4 w-4" />
              <span className="sr-only">Upvote</span>
            </Button>
            <span className={`text-sm transition-colors duration-300 ${upvoted ? "text-primary font-medium" : ""}`}>
              {upvotes}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full transition-colors duration-300 ${
                downvoted ? "text-destructive bg-destructive/10" : ""
              }`}
              onClick={handleDownvote}
            >
              <ThumbsDown className="h-4 w-4" />
              <span className="sr-only">Downvote</span>
            </Button>
            <span
              className={`text-sm transition-colors duration-300 ${downvoted ? "text-destructive font-medium" : ""}`}
            >
              {downvotes}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <ReplyIcon className="h-4 w-4" />
          Reply
        </Button>
      </CardFooter>

      {showReplyForm && (
        <div className="border-t bg-secondary/50 p-4 animate-fade-in">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?text=YO&height=32&width=32"
                alt="Your avatar"
                width={32}
                height={32}
                className="rounded-full avatar-ring"
              />
            </div>
            <div className="flex-1">
              <Textarea
                placeholder="Write your reply..."
                className="mb-3 min-h-20 resize-none focus-visible:ring-primary"
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowReplyForm(false)}>
                  Cancel
                </Button>
                <Button size="sm">Post Reply</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {comment.replies.length > 0 && (
        <div className="border-t">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="border-b last:border-0 animate-fade-in">
              <div className="p-4 pl-12 sm:pl-16">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        reply.author.avatar ||
                        `/placeholder.svg?text=${reply.author.username.substring(0, 2).toUpperCase()}&height=32&width=32`
                      }
                      alt={reply.author.name}
                      width={32}
                      height={32}
                      className="rounded-full avatar-ring"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{reply.author.name}</div>
                        <div className="text-xs text-primary">@{reply.author.username}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{reply.createdAt}</div>
                    </div>
                    <div className="text-sm">{reply.content}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t bg-muted/30 p-2 pl-12 sm:pl-16">
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <span className="text-xs">{reply.upvotes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-full hover:bg-destructive/10 hover:text-destructive"
                  >
                    <ThumbsDown className="h-3.5 w-3.5" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                  <span className="text-xs">{reply.downvotes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
