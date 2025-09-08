import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile = flex-col, md+ = grid */}
        <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-space-grotesk font-bold text-lg gradient-text">Tasty Bites</span>
                <span className="text-xs text-muted-foreground">by Halal Kababish</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Authentic Pakistani and Indian cuisine prepared with traditional recipes and the finest halal ingredients.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-space-grotesk font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-space-grotesk font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">123 Main Street, City, State 12345</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@tastybites.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="font-space-grotesk font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Tasty Bites by Halal Kababish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
