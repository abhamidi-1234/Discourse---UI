import Link from "next/link"
import { ForumHeader } from "@/components/forum-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, HelpCircle, ArrowRight } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 text-gradient-primary">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions about Discourse</p>
          </div>

          <div className="grid gap-12">
            {/* FAQ Categories */}
            <section className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {[
                {
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                  title: "Using Discourse",
                  description: "Learn how to use the forum effectively",
                },
                {
                  icon: <HelpCircle className="h-8 w-8 text-accent" />,
                  title: "Account Help",
                  description: "Questions about your account and settings",
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                  title: "Community Guidelines",
                  description: "Understanding our rules and policies",
                },
              ].map((category, i) => (
                <Card key={i} className="border-0 shadow-md hover-lift">
                  <CardHeader>
                    <div className="mb-2">{category.icon}</div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>

            {/* General Questions */}
            <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">General Questions</h2>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "What is Discourse?",
                        answer:
                          "Discourse is a community-driven forum platform where users can engage in discussions, share knowledge, and connect with others who have similar interests. Our platform is designed to foster meaningful conversations across a variety of topics.",
                      },
                      {
                        question: "How do I create an account?",
                        answer:
                          "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You'll need to provide a valid email address, choose a username, and set a password. Once you've completed the registration form, you'll receive a verification email to activate your account.",
                      },
                      {
                        question: "Is it free to use Discourse?",
                        answer:
                          "Yes, Discourse is completely free to use for basic features. We offer premium memberships with additional features for those who want to support the platform, but all core functionality is available to free users.",
                      },
                      {
                        question: "What topics can I discuss on Discourse?",
                        answer:
                          "Discourse covers a wide range of topics including technology, programming, design, business, hobbies, and more. Each topic has dedicated categories and subcategories to help organize discussions. If you don't see a category for your interest, you can suggest new ones to the moderators.",
                      },
                      {
                        question: "How do I start a new discussion?",
                        answer:
                          "To start a new discussion, navigate to the relevant category, then click the 'New Thread' button. You'll be prompted to enter a title, content, and optional tags for your discussion. Make sure to follow the community guidelines when posting new content.",
                      },
                      {
                        question: "How do upvotes and downvotes work?",
                        answer:
                          "Upvotes and downvotes help the community identify valuable content. When you upvote a post or comment, you're indicating that you find it helpful, insightful, or valuable. Downvotes indicate that content is unhelpful or inappropriate. Your reputation on Discourse is partly determined by the votes your contributions receive.",
                      },
                      {
                        question: "Can I edit or delete my posts?",
                        answer:
                          "Yes, you can edit your posts at any time by clicking the 'Edit' button below your post. You can delete your own posts as well, though in some cases, especially if others have already replied, a placeholder may remain to maintain conversation context.",
                      },
                    ].map((item, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Account Questions */}
            <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-6">Account & Privacy</h2>
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How do I change my profile picture?",
                        answer:
                          "To change your profile picture, go to your account settings by clicking on your avatar in the top right corner and selecting 'Settings'. In the Profile tab, you'll find an option to upload a new profile picture.",
                      },
                      {
                        question: "Can I change my username?",
                        answer:
                          "Yes, you can change your username once every 30 days. Go to your account settings, navigate to the Account tab, and look for the username field. Keep in mind that changing your username will affect all links to your profile.",
                      },
                      {
                        question: "How do I reset my password?",
                        answer:
                          "If you're logged in, you can change your password in your account settings under the Account tab. If you've forgotten your password, click on the 'Login' button, then select 'Forgot Password'. You'll receive an email with instructions to reset your password.",
                      },
                      {
                        question: "Who can see my email address?",
                        answer:
                          "Your email address is private by default and only visible to you and site administrators. You can control the visibility of other profile information in your privacy settings.",
                      },
                      {
                        question: "How do I delete my account?",
                        answer:
                          "To delete your account, go to your account settings, navigate to the Account tab, and scroll down to the Danger Zone section. Click on 'Delete Account' and follow the confirmation steps. Please note that account deletion is permanent and cannot be undone.",
                      },
                    ].map((item, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Still Need Help */}
            <section className="text-center py-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you couldn't find the answer to your question, feel free to reach out to our support team or post in
                the Help & Support category.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-primary hover-lift">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/help-support">
                  <Button size="lg" variant="outline" className="hover-lift">
                    Visit Help Forum
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
