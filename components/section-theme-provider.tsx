"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type SectionTheme = "about" | "experience" | "projects" | "contact"

type SectionThemeContextType = {
  currentSection: SectionTheme
  setCurrentSection: (section: SectionTheme) => void
}

const SectionThemeContext = createContext<SectionThemeContextType | undefined>(undefined)

export function SectionThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<SectionTheme>("about")

  return (
    <SectionThemeContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionThemeContext.Provider>
  )
}

export const useSectionTheme = () => {
  const context = useContext(SectionThemeContext)
  if (context === undefined) {
    throw new Error("useSectionTheme must be used within a SectionThemeProvider")
  }
  return context
}
