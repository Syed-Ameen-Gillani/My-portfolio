"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play, Star, MapPin, Car, Wrench, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Checkin – Social App",
      description:
        "Social networking app with real-time features and location matching. Connect with people nearby and discover new social opportunities with advanced matching algorithms.",
      image: "/projects/checkin-app.jpg",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Location Services", "Push Notifications"],
      category: "social",
      appStoreUrl: "https://apps.apple.com/au/app/checkin-meet-new-people/id6736611885",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.checkin.org",
      featured: true,
      stats: { downloads: "Live", rating: 4.8, reviews: "App Store" },
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "FixIt Hub – Services Platform",
      description:
        "Role-based services application connecting service providers with customers. Features comprehensive booking system, real-time tracking, and multi-role user management.",
      image: "/projects/fixit-app.jpg",
      technologies: ["Flutter", "Node.js", "Role Management", "Booking System", "Payment Integration"],
      category: "business",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.fixit.org",
      featured: true,
      stats: { downloads: "Live", rating: 4.6, reviews: "Play Store" },
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      title: "Cas Cars – Ride Hailing",
      description:
        "Professional ride-hailing application with real-time GPS tracking, fare calculation, and seamless booking experience for modern transportation needs.",
      image: "/projects/cas-cars.jpg",
      technologies: ["Flutter", "Google Maps", "Real-time Tracking", "Payment Gateway", "GPS Navigation"],
      category: "transport",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cascarstaxi",
      featured: true,
      stats: { downloads: "Live", rating: 4.7, reviews: "Play Store" },
      icon: <Car className="w-5 h-5" />,
    },
    {
      title: "Peter Pan Taxis",
      description:
        "Established taxi service app with comprehensive booking features, driver tracking, and integrated payment solutions including Apple Pay and card payments.",
      image: "/projects/peter-pan-taxis.jpg",
      technologies: ["Flutter", "Real-time Tracking", "Booking System", "Payment Integration", "Apple Pay"],
      category: "transport",
      appStoreUrl: "https://apps.apple.com/gb/app/peter-pan-taxis/id1482382718",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.icabbi.peterpan.taxis",
      featured: false,
      stats: { downloads: "Live", rating: 4.5, reviews: "Both Stores" },
      icon: <MapPin className="w-5 h-5" />,
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "social", label: "Social" },
    { id: "business", label: "Business" },
    { id: "transport", label: "Transportation" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Published Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live mobile applications available on App Store and Google Play Store
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {project.appStoreUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.appStoreUrl} target="_blank">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                      {project.playStoreUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.playStoreUrl} target="_blank">
                            <Play className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      {project.stats.downloads}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {project.stats.rating}
                    </span>
                    <span>{project.stats.reviews}</span>
                  </div>

                  <div className="flex gap-2">
                    {project.appStoreUrl && (
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={project.appStoreUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          App Store
                        </Link>
                      </Button>
                    )}
                    {project.playStoreUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={project.playStoreUrl} target="_blank">
                          <Play className="w-4 h-4 mr-2" />
                          Play Store
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Syed-Ameen-Gillani" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View More Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
