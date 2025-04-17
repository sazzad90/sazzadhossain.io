"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import profileImage from "@/public/images/profile.png";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 pb-16 px-8 bg-gradient-to-b from-background to-primary-100/10"
    >
      <div className="space-y-8">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <TypeAnimation
              sequence={["Sazzad hossain", 1000]}
              wrapper="span"
              cursor={true}
              speed={10}
              className="text-6xl sm:text-6xl md:text-6xl font-semibold" // Increased sizes
              repeat={0}
            />
            <h2 className="text-3xl sm:text-3xl text-muted-foreground">
              Software Engineer
            </h2>
          </div>

          {/* Circular image holder */}
          <div className="relative w-40 h-40 md:w-70 md:h-70 rounded-full overflow-hidden border-0 border-background shadow-xl mr-10 md:mr-14">
            <Image
              src={profileImage}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/sazzad90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/sazzad-hossain-0a99081a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-5 w-5" />
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
        </div>

        <div className="max-w-2xl space-y-4">
          <p className="text-lg">
            I'm a passionate fullstack developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create seamless, user-friendly
            experiences that solve real-world problems.
          </p>
          <p className="text-lg">
            My approach combines technical excellence with creative
            problem-solving, allowing me to deliver solutions that are both
            innovative and practical.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "Django",
              "MongoDB",
              "MySQL",
              "Docker",
              "Git",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="border-black-900 dark:border-white-700"
              >
                <div
                  key={skill}
                  className="px-1 py-1 bg-primary/10 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
