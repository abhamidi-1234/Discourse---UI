"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, Menu, Search, Plus, Settings, User, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
                  <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <span className="font-bold">Discourse</span>
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
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="w-7 h-7 rounded bg-primary flex items-center justify-center text-white font-bold">D</div>
            <span className="hidden md:inline-block font-bold">Discourse</span>
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
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
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
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="text-muted-foreground relative group">
              <Bell className="h-5 w-5 group-hover:text-primary transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse-soft"></span>
              <span className="sr-only">Notifications</span>
            </Button>
          </Link>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                  JD
                </div>
                <span className="sr-only">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 animate-scale-in">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="hidden sm:flex gap-1 shadow-md hover:shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90 hover-lift">
            <Plus className="h-4 w-4" />
            New Thread
          </Button>
        </div>
      </div>
    </header>
  )
}
