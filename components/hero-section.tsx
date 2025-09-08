"use client"

import { Button } from "@/components/ui/button"
import { ChefHat, Star, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg "></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <ChefHat className="w-16 h-16 text-white animate-float" />
          </div>

          <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl mb-4 text-balance">
            Welcome to <span className="text-accent">Tasty Bites</span>
          </h1>

          <p className="text-xl md:text-2xl mb-2 opacity-90">by Halal Kababish</p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 text-pretty">
            Experience the authentic flavors of Pakistan and India with our signature biryanis, mouth-watering BBQ, and
            exceptional catering services.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="font-dm-sans">100% Halal</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-dm-sans">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ChefHat className="w-5 h-5 text-accent" />
              <span className="font-dm-sans">Authentic Recipes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-dm-sans text-lg px-8 py-3"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-dm-sans text-lg px-8 py-3 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
  </div>
</div>

    </section>
  )
}
