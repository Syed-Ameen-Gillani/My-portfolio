"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const technicalSkills = [
    { name: "Flutter", level: 95, color: "bg-blue-500" },
    { name: "Dart", level: 90, color: "bg-blue-600" },
    { name: "Firebase", level: 85, color: "bg-orange-500" },
    { name: "REST APIs", level: 88, color: "bg-green-500" },
    { name: "State Management", level: 82, color: "bg-purple-500" },
    { name: "Git & GitHub", level: 80, color: "bg-gray-600" },
  ]

  const categories = [
    {
      title: "Frontend",
      skills: ["Flutter", "Dart", "Material Design", "Cupertino", "Custom Widgets", "Animations"],
    },
    {
      title: "Backend & APIs",
      skills: ["Firebase", "REST APIs", "Node.js", "Express", "MongoDB", "SQL","Supabase","Spcket Io","Cloudinary"],
    },
    {
      title: "State Management",
      skills: ["Provider", "Riverpod", "GetX","Bloc"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "VS Code","Figma", "Postman", "Git"],
    },
  ]

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Technical Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              {categories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
