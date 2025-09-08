"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Halal Kababish has been serving authentic Pakistani cuisine for over two decades",
  },
  {
    icon: Heart,
    title: "100% Halal",
    description: "All our ingredients are carefully sourced and certified halal for your peace of mind",
  },
  {
    icon: Users,
    title: "Family Recipes",
    description: "Traditional recipes passed down through generations, prepared with love and care",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Everything is prepared fresh daily using the finest spices and ingredients",
  },
]

// ✅ Counter hook with reset
function useCountUp(end: number, start = 0, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!trigger) {
      setCount(start) // reset jab trigger false ho
      return
    }
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [end, duration, start, trigger])

  return count
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  // ✅ Trigger animations when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        } else {
          setInView(false) // jab section bahar ho jaye toh reset
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // ✅ Animated numbers (reset every time inView changes)
  const years = useCountUp(25, 0, 2000, inView)
  const customers = useCountUp(10000, 0, 2000, inView)

  return (
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-space-grotesk font-bold text-3xl md:text-5xl mb-6 gradient-text">
              About Tasty Bites
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Tasty Bites is the newest venture from Halal Kababish, bringing you the same authentic flavors and
              quality that has made us a trusted name in Pakistani cuisine. Our passion for food and commitment to
              excellence drives everything we do.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              From our signature biryanis to our mouth-watering BBQ, every dish is prepared with traditional techniques
              and the finest halal ingredients. We take pride in serving food that brings families together and creates
              lasting memories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{years}+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {customers.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/pakistani-restaurant-kitchen-with-chefs-cooking-bi.jpg"
              alt="Halal Kababish Kitchen"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-float">
              <Award className="w-12 h-12 text-accent-foreground" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`text-center p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border-0 shadow-md ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
