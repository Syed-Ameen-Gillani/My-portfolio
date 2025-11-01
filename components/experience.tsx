import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Infinite Algos",
      location: "Remote",
      period: "Nov 2024 - Jan 2025",
      type: "Full-time",
      description:
        "Developed and maintained cross-platform mobile applications using Flutter, focusing on high performance and responsive UI/UX design.",
      achievements: [
        "Implemented RESTful APIs using Node.js for seamless app functionality",
        "Utilized GetX for efficient state management improving app stability",
        "Integrated Firebase for real-time database, authentication, and cloud storage",
        "Developed in-app payment solutions using Stripe for secure transactions",
        "Optimized performance by refactoring code and reducing app size",
        "Worked with clean architectures like MVC and MVVM",
      ],
      technologies: ["Flutter", "Node.js", "Firebase", "GetX", "Stripe", "MVC", "MVVM"],
    },
    {
      title: "Flutter Intern",
      company: "ITSOLERA",
      location: "Remote",
      period: "Sept 2024 - Nov 2024",
      type: "Internship",
      description:
        "Developed responsive and modern UI components using Flutter, ensuring smooth performance across both Android and iOS platforms.",
      achievements: [
        "Built responsive UI components with smooth cross-platform performance",
        "Implemented state management using GetX for reactive UI interactions",
        "Integrated Firebase and Supabase for authentication and real-time database",
        "Collaborated with backend teams on REST API integration using Node.js",
        "Gained hands-on experience with modern Flutter development practices",
      ],
      technologies: ["Flutter", "GetX", "Firebase", "Supabase", "Node.js", "REST APIs"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Engineering and Technology Taxila",
      location: "Taxila, Pakistan",
      period: "2021 - 2025",
      cgpa: "3.51",
      description:
        "Comprehensive computer science education with focus on software engineering, algorithms, and mobile development.",
    },
    {
      degree: "FSc. ICS (Intermediate in Computer Science)",
      institution: "Superior Group of College Islamabad",
      location: "Islamabad, Pakistan",
      period: "2019 - 2021",
      description: "Foundation in computer science, mathematics, and physics preparing for university studies.",
    },
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background in mobile app development
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative overflow-hidden border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary flex items-center">
                          <Building className="mr-2 h-4 w-4" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="mr-2 h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {edu.location}
                        </div>
                        {edu.cgpa && <Badge variant="outline">CGPA: {edu.cgpa}</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
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
