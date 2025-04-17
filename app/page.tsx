"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about")

  // Function to change active section
  const changeSection = (section: string) => {
    setActiveSection(section)
    // Update URL hash without scrolling
    window.history.pushState(null, "", `#${section}`)
  }

  // Initialize from URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && ["about", "experience", "projects", "contact"].includes(hash)) {
      setActiveSection(hash)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} onSectionChange={changeSection} />
      <div className="container mx-auto">
        {activeSection === "about" && <About />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </div>
    </main>
  )
}
