"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate position accounting for header height
      const headerHeight = 64 // 4rem or 64px
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">John Hope</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Data scientist transforming complex data into innovative solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <Link
              href="https://github.com/johnhope829"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/john-hope-22903/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:johnhope829@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" onClick={(e) => handleScrollToSection(e, "about")}>
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  )
}
