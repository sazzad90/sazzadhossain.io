"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Get button color based on current section
  const getButtonColor = () => {
    switch (activeSection) {
      case "about":
        return "bg-primary hover:bg-primary/90";
      case "experience":
        return "bg-emerald-500 hover:bg-emerald-600";
      case "projects":
        return "bg-violet-500 hover:bg-violet-500";
      case "contact":
        return "bg-amber-500 hover:bg-amber-600";
      default:
        return "bg-primary hover:bg-primary/90";
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="font-mono font-bold text-xl tracking-widest" // Added tracking-widest
            onClick={toggleMenu}
          >
            MENU
          </Button>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className={cn(
                "text-foreground bg-background shadow-sm",
                getButtonColor()
              )}
            >
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                mounted && setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-40",
          "backdrop-blur-enhanced",
          "transition-opacity duration-300 ease-in-out",
          theme === "dark" ? "backdrop-dark" : "backdrop-light", // Use custom classes based on theme
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-300"
        )}
        onClick={toggleMenu}
        style={{
          // Inline styles as a fallback
          backgroundColor:
            theme === "dark"
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
        }}
      />

      {/* Menu panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[85vh]",
          "bg-background", // Use the theme's background variable
          "border border-border", // Use the theme's border variable
          "shadow-xl",
          "transition-transform duration-300 ease-in-out",
          "rounded-b-3xl overflow-hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-10 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon" // Makes the button square and compact
            className="font-mono pl-6 text-red-400 font-bold text-sm tracking-widest h-8 w-8" // Smaller text and fixed dimensions
            onClick={toggleMenu}
          >
            CLOSE
          </Button>

          <div className="flex items-center space-x-2">
            {/* Social links in the backdrop header */}
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/sazzad90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/sazzad-hossain-0a99081a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.facebook.com/sazzad.sazzad.77312?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                mounted && setTheme(theme === "dark" ? "light" : "dark")
              }
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <nav className="container mx-auto px-12 flex flex-col justify-center h-[calc(100vh-4rem)]">
          <ul className="space-y-8 text-lg sm:text-xl font-medium">
            <li>
              <button
                onClick={() => handleSectionChange("about")}
                className={cn(
                  "transition-colors duration-200",
                  activeSection === "about"
                    ? "text-primary"
                    : "hover:text-primary"
                )}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("experience")}
                className={cn(
                  "transition-colors duration-200",
                  activeSection === "experience"
                    ? "text-emerald-500"
                    : "hover:text-emerald-500"
                )}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("projects")}
                className={cn(
                  "transition-colors duration-200",
                  activeSection === "projects"
                    ? "text-violet-500"
                    : "hover:text-violet-500"
                )}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("contact")}
                className={cn(
                  "transition-colors duration-200",
                  activeSection === "contact"
                    ? "text-amber-500"
                    : "hover:text-amber-500"
                )}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
