import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer L1",
      company: "Ontik Technology",
      period: "April 2025 - Present",
      description:
        "Led the development of a scalable SaaS platform using MERN stack, also contributed in multiple project migrations.",
      skills: ["React.js", "Express.js", "MySQL", "Airtable", "SuperMetrics"],
    },
    {
      title: "Software Engineer",
      company: "Factoryze Tech",
      period: "July 2024 - March 2025",
      description:
        "Developed and maintained multiple client projects. Collaborated with UX design with proper R&D in respective marketplace.",
      skills: ["React.js", "Express.js", "MongoDB", "RTK", "Tailwind CSS"],
    },
    {
      title: "Software Engineer Intern",
      company: "Genuity Systems Ltd.",
      period: "Jan 2024 - June 2024",
      description:
        "Worked on a headless CMS project dedicated for banking sectors of Bangladesh. Developed a custom API for the project using Laravel.",
      skills: ["React.js", "Express.js", "MySQL", "Laravel"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen pt-24 pb-16 px-8 bg-gradient-to-b from-background to-emerald-100/10">
      <h2 className="text-3xl sm:text-3xl font-medium mb-8 text-emerald-500 dark:text-emerald-400">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-emerald-500 dark:border-l-emerald-400">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <CardTitle className="text-emerald-500 dark:text-emerald-400">{exp.title}</CardTitle>
                <Badge variant="outline" className="w-fit border-emerald-500 dark:border-emerald-400">
                  {exp.period}
                </Badge>
              </div>
              <CardDescription className="text-lg">{exp.company}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-700 dark:text-emerald-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
