"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Flame } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const menuItems = [
  { id: 1, name: "Lamb Biryani", description: "Aromatic basmati rice cooked with tender lamb pieces, traditional spices, and saffron", price: "$18.99", image: "/delicious-lamb-biryani-with-rice-and-spices.jpg", category: "Biryani", popular: true, spiceLevel: 2 },
  { id: 2, name: "Chicken Biryani", description: "Classic chicken biryani with fragrant rice, succulent chicken, and authentic Pakistani spices", price: "$15.99", image: "/chicken-biryani-with-basmati-rice-and-herbs.jpg", category: "Biryani", popular: true, spiceLevel: 2 },
  { id: 3, name: "BBQ Platter", description: "Mixed grill featuring chicken tikka, lamb seekh kebabs, and beef boti with naan", price: "$22.99", image: "/bbq-mixed-grill-platter-with-kebabs-and-naan.jpg", category: "BBQ", popular: false, spiceLevel: 3 },
  { id: 4, name: "Catering Package", description: "Complete catering solution for events - serves 20+ people with variety of dishes", price: "From $299", image: "/catering-buffet-setup-with-multiple-pakistani-dish.jpg", category: "Catering", popular: false, spiceLevel: 1 },
  { id: 5, name: "Karahi Chicken", description: "Traditional Pakistani chicken karahi cooked in a wok with tomatoes and green chilies", price: "$16.99", image: "/pakistani-chicken-karahi-in-traditional-wok.jpg", category: "Main Course", popular: true, spiceLevel: 3 },
  { id: 6, name: "Haleem Special", description: "Slow-cooked lentil and meat stew, a traditional Pakistani comfort food", price: "$12.99", image: "/pakistani-haleem-lentil-stew-with-garnish.jpg", category: "Traditional", popular: false, spiceLevel: 2 },
  { id: 7, name: "Seekh Kebabs", description: "Juicy minced meat skewers grilled to perfection with spices", price: "$14.50", image: "/seekh-kebab-grilled.jpg", category: "BBQ", popular: false, spiceLevel: 3 },
  { id: 8, name: "Butter Naan", description: "Soft, fluffy naan bread brushed with butter – perfect with curries", price: "$3.99", image: "/butter-naan-fresh.jpg", category: "Bread", popular: false, spiceLevel: 1 },
  { id: 9, name: "Gulab Jamun", description: "Sweet fried dough balls soaked in rose-scented sugar syrup", price: "$6.99", image: "/gulab-jamun-sweet.jpg", category: "Dessert", popular: true, spiceLevel: 0 },
]

const categories = ["All", "Biryani", "BBQ", "Main Course", "Catering", ]

export function MenuSection() {
  const [isOpen, setIsOpen] = useState(false)

  const renderSpiceLevel = (level: number) => (
    <div className="flex items-center space-x-1 ">
      {[...Array(3)].map((_, i) => (
        <Flame key={i} className={`w-3 h-3 ${i < level ? "text-red-500" : "text-gray-300"}`} />
      ))}
    </div>
  )

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-5xl mb-4 gradient-text">
            Our Delicious Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our authentic Pakistani and Indian cuisine, prepared with traditional recipes and the finest halal
            ingredients.
          </p>
        </div>

        {/* only first 6 items visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.slice(0, 6).map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    {item.popular && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        <Star className="w-3 h-3 mr-1" /> Popular
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3">{renderSpiceLevel(item.spiceLevel)}</div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-space-grotesk text-xl group-hover:text-primary transition-colors">
                          {item.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4 text-pretty">{item.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>15-20 min</span>
                        </div>
                        {item.category === "Catering" && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>20+ people</span>
                          </div>
                        )}
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Full menu button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-dm-sans" onClick={() => setIsOpen(true)}>
            View Full Menu
          </Button>
        </div>

        {/* Modal for full menu */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center">🍽 Full Menu</DialogTitle>
            </DialogHeader>

            {/* Category Tabs */}
            <Tabs defaultValue="All" className="w-full mt-6">
           <TabsList className="flex flex-wrap justify-center gap-2 ">
  {categories.map((cat) => (
    <TabsTrigger
      key={cat}
      value={cat}
      className="px-4 py-2 rounded-lg border cursor-pointer pb-0.5 
                 data-[state=active]:bg-primary data-[state=active]:text-white 
                 hover:bg-amber-500"
    >
      {cat}
    </TabsTrigger>
  ))}
</TabsList>


              {categories.map((cat) => (
                <TabsContent key={cat} value={cat}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                    {menuItems
                      .filter((item) => cat === "All" || item.category === cat)
                      .map((item) => (
                        <Card key={item.id} className="overflow-hidden shadow-lg border hover:shadow-xl transition">
                          <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                          <CardHeader>
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <Badge variant="secondary">{item.category}</Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                            <div className="flex justify-between items-center mt-3">
                              <span className="font-bold text-primary">{item.price}</span>
                              <Button size="sm" className="bg-primary hover:bg-primary/90">Add</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
