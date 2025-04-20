import Image from "next/image"
import { ForumHeader } from "@/components/forum-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MessageSquare, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <ForumHeader />

      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 text-gradient-primary">About Discourse</h1>
            <p className="text-xl text-muted-foreground">
              A community-driven platform for meaningful discussions and knowledge sharing
            </p>
          </div>

          <div className="grid gap-12">
            {/* Our Story Section */}
            <section
              className="grid md:grid-cols-2 gap-8 items-center animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Discourse was founded in 2023 with a simple mission: to create a space where people can have
                  meaningful conversations about topics they care about.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small project has grown into a vibrant community with thousands of active members
                  discussing everything from technology to philosophy.
                </p>
                <p className="text-muted-foreground">
                  We believe in the power of community-driven knowledge sharing and the importance of respectful,
                  thoughtful discourse.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <Image
                  src="/images/hero-bg.png"
                  alt="Community discussion"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg hover-lift"
                />
              </div>
            </section>

            {/* Our Values Section */}
            <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <MessageSquare className="h-8 w-8 text-primary" />,
                    title: "Open Dialogue",
                    description: "We encourage open and honest conversations where diverse perspectives are welcomed.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-primary" />,
                    title: "Community First",
                    description: "Our community members are at the heart of everything we do.",
                  },
                  {
                    icon: <Award className="h-8 w-8 text-primary" />,
                    title: "Quality Content",
                    description: "We prioritize thoughtful, well-reasoned contributions over quantity.",
                  },
                ].map((value, i) => (
                  <Card key={i} className="border-0 shadow-md hover-lift">
                    <CardHeader>
                      <div className="mb-2">{value.icon}</div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Community Stats Section */}
            <section
              className="bg-gradient-cool rounded-2xl p-8 text-white animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold mb-8 text-center">Our Community by the Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { number: "10K+", label: "Members" },
                  { number: "50K+", label: "Discussions" },
                  { number: "250K+", label: "Posts" },
                  { number: "120+", label: "Countries" },
                ].map((stat, i) => (
                  <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Us Section */}
            <section className="text-center py-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Become part of our growing community today. Share your knowledge, ask questions, and connect with
                like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover-lift">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="hover-lift">
                  Learn More
                </Button>
              </div>
            </section>

            {/* Testimonials */}
            <section className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl font-bold mb-6 text-center">What Our Members Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    quote:
                      "Discourse has become my go-to place for thoughtful discussions. The community is incredibly supportive and knowledgeable.",
                    name: "Sarah J.",
                    role: "Software Developer",
                    avatar: "/images/avatar-2.png",
                  },
                  {
                    quote:
                      "I've learned so much from the discussions here. It's refreshing to find a place where people can disagree respectfully and learn from each other.",
                    name: "Alex C.",
                    role: "UX Designer",
                    avatar: "/images/avatar-3.png",
                  },
                ].map((testimonial, i) => (
                  <Card key={i} className="border-0 shadow-md hover-lift">
                    <CardContent className="pt-6">
                      <div className="flex gap-4 items-start mb-4">
                        <div className="text-4xl text-primary/20">"</div>
                        <p className="italic text-muted-foreground">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full avatar-ring"
                        />
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
