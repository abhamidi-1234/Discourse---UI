"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, Menu, MessageSquare, Search, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function ForumHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md border-b" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Discourse</span>
                </Link>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/general" className="hover:text-primary transition-colors">
                  General Discussion
                </Link>
                <Link href="/technology" className="hover:text-primary transition-colors">
                  Technology
                </Link>
                <Link href="/help-support" className="hover:text-primary transition-colors">
                  Help & Support
                </Link>
                <Link href="/announcements" className="hover:text-primary transition-colors">
                  Announcements
                </Link>
                <Link href="/showcase" className="hover:text-primary transition-colors">
                  Showcase
                </Link>
                <Link href="/off-topic" className="hover:text-primary transition-colors">
                  Off-Topic
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="hidden md:inline-block">Discourse</span>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/general" className="text-sm font-medium hover:text-primary transition-colors">
              General
            </Link>
            <Link href="/technology" className="text-sm font-medium hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="/help-support" className="text-sm font-medium hover:text-primary transition-colors">
              Help
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[200px] lg:w-[300px] bg-background/80 backdrop-blur-sm"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="text-muted-foreground relative group">
            <Bell className="h-5 w-5 group-hover:text-primary transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse-soft"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg?text=JD&height=32&width=32"
              alt="User avatar"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="sr-only">Profile</span>
          </Button>
          <Button className="hidden sm:flex gap-1 shadow-md hover:shadow-lg transition-all duration-300">
            <Plus className="h-4 w-4" />
            New Thread
          </Button>
        </div>
      </div>
    </header>
  )
}
