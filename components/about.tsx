"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Cross-Platform",
      description: "Building apps that work seamlessly on iOS and Android",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing apps for speed and smooth user experience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Centric",
      description: "Designing with users in mind for maximum engagement",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Computer Science graduate passionate about creating mobile experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Syed Ameen Gillani, a dedicated Flutter developer and Computer Science graduate. 
                I specialize in building cross-platform mobile applications with Flutter, focusing on 
                delivering efficient, user-friendly, and scalable solutions to real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans the entire mobile development lifecycle, from UI/UX design to backend integration.
                I'm passionate about clean architecture, performance optimization, and delivering exceptional user
                experiences using Flutter, Node.js, and modern development practices.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 mb-6">
                <Badge variant="secondary">Flutter Expert</Badge>
                <Badge variant="secondary">Full-Stack Mobile</Badge>
                <Badge variant="secondary">AI Integration</Badge>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                      <div className="text-sm text-muted-foreground">Projects Built</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Flutter Focused</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-800">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
