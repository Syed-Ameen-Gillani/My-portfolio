"use client"

import type React from "react"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp, Copy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    const email = "syedameengillani512@gmail.com"
    const subject = "Hello from your portfolio website"
    const body =
      "Hi Ameen,\n\nI found your portfolio and would like to discuss a project with you.\n\nBest regards,"

    // Method 1: Try Gmail web interface first (most reliable)
    try {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, "_blank")
      return
    } catch (error) {
      console.log("Gmail web interface failed")
    }

    // Method 2: Try default mailto (might be blocked)
    try {
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      const link = document.createElement("a")
      link.href = mailtoUrl
      link.click()
    } catch (error) {
      console.log("Mailto failed")
    }

    // Method 3: Always copy email as backup
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    }
  }

  const openEmailOptions = () => {
    const email = "syedameengillani512@gmail.com"
    const subject = "Hello from your portfolio website"

    // Open Gmail directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`
    window.open(gmailUrl, "_blank")
  }

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "syedameengillani512@gmail.com"

    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Ameen.dev
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Computer Science graduate and Flutter developer passionate about creating beautiful mobile experiences.
                Focused on creating clean, user-friendly applications
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 mb-6">
                <Button variant="ghost" size="icon" className="hover:bg-blue-600 transition-colors" asChild>
                  <Link href="https://github.com/Syed-Ameen-Gillani" target="_blank" title="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-600 transition-colors" asChild>
                  <Link
                    href="www.linkedin.com/in/syed-ameen-gillani

"
                    target="_blank"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>

                {/* Enhanced Email Button with Multiple Options */}
                <div className="relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-blue-600 transition-colors"
                    onClick={openEmailOptions}
                    title="Open Email Client"
                  >
                    {emailCopied ? <CheckCircle className="h-5 w-5 text-green-400" /> : <Mail className="h-5 w-5" />}
                  </Button>

                  {/* Dropdown with email options */}
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 rounded-lg shadow-lg p-2 min-w-[200px] z-10">
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          window.open(
                            `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("syedameengillani512@gmail.com")}`,
                            "_blank",
                          )
                        }
                        className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Open Gmail
                      </button>
                      <button
                        onClick={copyEmail}
                        className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded flex items-center"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Display with Click to Copy */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Email:</p>
                <button
                  onClick={copyEmail}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>syedameengillani512@gmail.com</span>
                  <Copy className="h-3 w-3" />
                </button>
                {emailCopied && <p className="text-green-400 text-xs mt-1">✓ Email address copied to clipboard!</p>}
              </div>

              {/* Alternative Contact Methods */}
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Alternative contact:</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 hover:bg-green-600"
                    asChild
                  >
                    <Link href="https://wa.me/923428938407" target="_blank">
                      WhatsApp
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 hover:bg-blue-600"
                    asChild
                  >
                    <Link href="https://calendly.com/mdaniyalkhan783" target="_blank">
                      Schedule Call
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 hover:bg-purple-600"
                    asChild
                  >
                    <Link href="#contact">Contact Form</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Mobile App Development</li>
                <li>Cross-Platform Solutions</li>
                <li>UI/UX Implementation</li>
                <li>API Integration</li>
                <li>Performance Optimization</li>
                <li>AI Integration</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-gray-300 text-center">© 2025 Syed Ameen Gillani. All rights reserved.</p>
              <Button variant="ghost" size="icon" onClick={scrollToTop} className="hover:bg-blue-600 transition-colors">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
