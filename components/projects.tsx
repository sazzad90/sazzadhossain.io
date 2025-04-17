import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Banglar Math",
      description:
        "A custom LMS for Bangladeshi students, featuring interactive math lessons and quizzes.",
      image: "/images/bm.png?height=300&width=200",
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://banglarmath.com/",
      githubUrl: "",
    },
    {
      title: "UKwayec",
      description: "A platform for UK-based students to find and book tutors, featuring a user-friendly interface and secure payment system.",
      image: "/images/uk.jpg?height=300&width=200",
      technologies: ["Next.js", "Nest.js", "Redux", "Material UI"],
      liveUrl: "https://ukwayec.co.uk/",
      githubUrl: "",
    },
    {
      title: "VIVR",
      description:
        "It's a banking solution featured in multiple banks of Bangladesh which is a voice-based system that allows users to interact with a computer system through voice commands.",
        image: "/images/ific.jpg?height=300&width=200",
        technologies: ["React.js", "Javascript", "Laravel"],
      liveUrl: "https://ificbank.com.bd/vivr-link-generation",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="min-h-screen pt-24 pb-16 px-8 bg-gradient-to-b from-background to-violet-100/10">
      <h2 className="text-3xl sm:text-3xl font-medium mb-8 text-violet-600 dark:text-violet-700">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full border-violet-600 dark:border-violet-700">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-violet-600 dark:text-violet-700">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-violet-600 dark:border-violet-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-violet-500 hover:bg-violet-600 dark:hover:bg-violet-700"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="default" size="sm" asChild className="bg-violet-600 hover:bg-violet-700 text-white">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
