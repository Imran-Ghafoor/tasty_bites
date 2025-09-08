"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-space-grotesk font-bold text-lg gradient-text">Tasty Bites</span>
              <span className="text-xs text-muted-foreground">by Halal Kababish</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary font-bold transition-colors font-dm-sans"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary font-bold transition-colors font-dm-sans"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground font-bold hover:text-primary transition-colors font-dm-sans"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground font-bold hover:text-primary transition-colors font-dm-sans"
            >
              Contact
            </button>
            <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-dm-sans w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-dm-sans w-full text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-dm-sans w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-dm-sans w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">Order Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
