"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">John Hope's</span> Portfolio
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "about")}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "certifications")}
          >
            Certifications
          </a>
          <a
            href="#classes"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "classes")}
          >
            Classes
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleScrollToSection(e, "contact")}
          >
            Contact
          </a>
          <ModeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "skills")}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#certifications"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "certifications")}
              >
                Certifications
              </a>
              <a
                href="#classes"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "classes")}
              >
                Classes
              </a>
              <a
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleScrollToSection(e, "contact")}
              >
                Contact
              </a>
              <div className="pt-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
