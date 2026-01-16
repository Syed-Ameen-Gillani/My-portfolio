"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [text, setText] = useState("")
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [experienceComplete, setExperienceComplete] = useState(false)
  const [projectsComplete, setProjectsComplete] = useState(false)
  const fullText = "Flutter Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Animate experience counter
    let experienceTimer: NodeJS.Timeout
    let currentExperience = 0
    const targetExperience = 2

    experienceTimer = setInterval(() => {
      if (currentExperience < targetExperience) {
        currentExperience += 0.1
        setExperienceCount(Math.min(currentExperience, targetExperience))
      } else {
        setExperienceComplete(true)
        // Remove bounce effect after 2 seconds
        setTimeout(() => setExperienceComplete(false), 2000)
        clearInterval(experienceTimer)
      }
    }, 100)

    // Animate projects counter
    let projectsTimer: NodeJS.Timeout
    let currentProjects = 0
    const targetProjects = 20

    projectsTimer = setInterval(() => {
      if (currentProjects < targetProjects) {
        currentProjects += 1
        setProjectsCount(Math.min(currentProjects, targetProjects))
      } else {
        setProjectsComplete(true)
        // Remove bounce effect after 2 seconds
        setTimeout(() => setProjectsComplete(false), 2000)
        clearInterval(projectsTimer)
      }
    }, 50)

    return () => {
      clearInterval(experienceTimer)
      clearInterval(projectsTimer)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - LEFT Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Syed Ameen
                </span>
              </h1>

              <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 h-12">
                <span className="border-r-2 border-primary animate-pulse">{text}</span>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I craft beautiful, high-performance mobile applications using Flutter. Passionate about creating
                seamless user experiences that delight users and drive business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Let's Talk
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                  <Link href="https://github.com/Syed-Ameen-Gillani" target="_blank">
                    <Github className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                  <Link href="https://www.linkedin.com/in/syed-ameen-gillani" target="_blank">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  onClick={() => {
                    const email = "syedameengillani512@gmail.com"
                    const subject = "Hello from your portfolio website"
                    const body =
                      "Hi Syed Ameen,\n\nI found your portfolio and would like to discuss a project with you.\n\nBest regards,"
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.open(gmailUrl, "_blank")
                  }}
                  title="Send Email via Gmail"
                >
                  <Mail className="h-6 w-6" />
                </Button>
              </div>

              {/* Experience Stats */}
              <div className="flex justify-center lg:justify-start mb-12">
                <div className="grid grid-cols-2 gap-8 text-center lg:text-left">
                  <div className="space-y-2">
                    <div
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                        experienceComplete ? "animate-bounce scale-110" : ""
                      }`}
                    >
                      {experienceCount.toFixed(1)}+
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 ${
                        projectsComplete ? "animate-pulse scale-110" : ""
                      }`}
                    >
                      {Math.floor(projectsCount)}+
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">Projects Completed</div>
                  </div>
                </div>
              </div>

              <div className="animate-bounce lg:hidden">
                <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
              </div>
            </div>

            {/* Profile Image - RIGHT Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                {/* Main image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src="/profile/ameen_gillani.jpeg"
                    alt="Syed Ameen Gillani - Flutter Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=450&width=450&text=Daniyal"
                    }}
                    loading="eager"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  Flutter Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  Code Survivor 💻
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - only show on desktop */}
          <div className="hidden lg:flex justify-center mt-16">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
