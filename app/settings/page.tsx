"use client"

import { useState } from "react"
import Image from "next/image"
import { ForumHeader } from "@/components/forum-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Upload, Save, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      <main className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gradient-primary animate-slide-up">Account Settings</h1>

          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 md:w-fit mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details and public information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="/images/avatar-1.png"
                          alt="Profile picture"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                        >
                          <Upload className="h-4 w-4" />
                          <span className="sr-only">Upload new picture</span>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="johndoe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Full-stack developer passionate about web technologies and community building. I love discussing new frameworks and sharing knowledge."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://johndoe.dev" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-primary hover-lift">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account credentials and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="theme">Theme</Label>
                          <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                        </div>
                        <select id="theme" className="rounded-md border border-input bg-background px-3 py-2">
                          <option value="system">System</option>
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <p className="text-sm text-muted-foreground">Select your preferred language</p>
                        </div>
                        <select id="language" className="rounded-md border border-input bg-background px-3 py-2">
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-primary hover-lift">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-0 shadow-md border-destructive/10">
                <CardHeader>
                  <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Delete Account</h3>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all of your content
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="notifications"
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>

                    <div className="space-y-4">
                      {[
                        {
                          id: "email-replies",
                          label: "Replies to your threads",
                          description: "Get notified when someone replies to your threads",
                        },
                        {
                          id: "email-mentions",
                          label: "Mentions",
                          description: "Get notified when someone mentions you in a post",
                        },
                        {
                          id: "email-follows",
                          label: "New followers",
                          description: "Get notified when someone follows you",
                        },
                        {
                          id: "email-digest",
                          label: "Weekly digest",
                          description: "Receive a weekly summary of activity in your communities",
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div>
                            <Label htmlFor={item.id}>{item.label}</Label>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <Switch id={item.id} defaultChecked={item.id !== "email-digest"} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-medium">In-App Notifications</h3>

                    <div className="space-y-4">
                      {[
                        {
                          id: "app-replies",
                          label: "Replies to your threads",
                          description: "Get notified when someone replies to your threads",
                        },
                        {
                          id: "app-mentions",
                          label: "Mentions",
                          description: "Get notified when someone mentions you in a post",
                        },
                        {
                          id: "app-follows",
                          label: "New followers",
                          description: "Get notified when someone follows you",
                        },
                        {
                          id: "app-likes",
                          label: "Likes on your posts",
                          description: "Get notified when someone likes your posts",
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div>
                            <Label htmlFor={item.id}>{item.label}</Label>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <Switch id={item.id} defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto bg-gradient-primary hover-lift">
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control your privacy and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Profile Privacy</h3>

                    <div className="space-y-4">
                      {[
                        {
                          id: "profile-visibility",
                          label: "Profile visibility",
                          description: "Control who can see your profile",
                        },
                        {
                          id: "activity-visibility",
                          label: "Activity visibility",
                          description: "Control who can see your activity",
                        },
                        {
                          id: "online-status",
                          label: "Online status",
                          description: "Show when you're active on the platform",
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div>
                            <Label htmlFor={item.id}>{item.label}</Label>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          {item.id === "profile-visibility" || item.id === "activity-visibility" ? (
                            <select id={item.id} className="rounded-md border border-input bg-background px-3 py-2">
                              <option value="public">Public</option>
                              <option value="members">Members only</option>
                              <option value="followers">Followers only</option>
                              <option value="private">Private</option>
                            </select>
                          ) : (
                            <Switch id={item.id} defaultChecked />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>

                    <div className="space-y-4">
                      {[
                        {
                          id: "two-factor",
                          label: "Two-factor authentication",
                          description: "Add an extra layer of security to your account",
                        },
                        {
                          id: "login-alerts",
                          label: "Login alerts",
                          description: "Get notified of new logins to your account",
                        },
                        {
                          id: "data-sharing",
                          label: "Data sharing",
                          description: "Allow anonymous usage data to improve the platform",
                        },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div>
                            <Label htmlFor={item.id}>{item.label}</Label>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          {item.id === "two-factor" ? (
                            <Button variant="outline" size="sm">
                              Enable
                            </Button>
                          ) : (
                            <Switch id={item.id} defaultChecked={item.id === "login-alerts"} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto bg-gradient-primary hover-lift">
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
