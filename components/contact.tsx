"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Method 1: Using Formspree (Recommended - Easy Setup)
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const formspreeResponse = await fetch("https://formspree.io/f/xqadzvlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form - ${formData.subject}`,
          timestamp: new Date().toLocaleString("en-US", {
            timeZone: "Asia/Karachi",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        }),
      })

      if (formspreeResponse.ok) {
        console.log("✅ Email sent successfully via Formspree")
        setSubmitStatus("success")

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Clear success message after 8 seconds
        setTimeout(() => setSubmitStatus("idle"), 8000)
      } else {
        throw new Error(`Formspree error: ${formspreeResponse.status}`)
      }
    } catch (error: any) {
      console.error("❌ Email sending failed:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "syedameengillani512@gmail.com",
      link: "mailto:syedameengillani512@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 342 8938407",
      link: "tel:+923428938407",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your mobile app idea to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - RIGHT SIDE */}
            <div className="lg:order-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">Message sent successfully! 🎉</p>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Thank you for reaching out. I'll get back to you with in hour.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-800 dark:text-red-200">Unable to send message</p>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Please contact me directly via email or WhatsApp below.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleChange}
                          className={`h-12 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={handleChange}
                          className={`h-12 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                          disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`h-12 ${errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project... *"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info - LEFT SIDE */}
            <div className="lg:order-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you need a
                  mobile app built from scratch, want to improve an existing Flutter application, or just want to chat
                  about mobile development, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.link}
                    className="flex items-center group hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-8">
                <h4 className="font-semibold">Quick Actions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button variant="outline" className="bg-transparent" asChild>
                    <Link href="https://calendly.com/mdaniyalkhan783" target="_blank">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Call
                    </Link>
                  </Button>
                  <Button variant="outline" className="bg-transparent" asChild>
                    <Link href="https://wa.me/923465130895" target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
