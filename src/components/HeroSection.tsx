import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import heroBackground from "@/assets/hero-bg.jpg"
const profileImage = "/lovable-uploads/bfe137c1-2005-4415-bd8b-2421b90d9542.png"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 font-medium">
                Jimmy Sehlane - Software Developer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Secure
                </span>
                ,{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Scalable
                </span>
                , and{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Elegant
                </span>{" "}
                Web Applications
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Rosebank College graduate specializing in full-stack software development. 
              I architect and build complete enterprise-grade applications with React/TypeScript frontends, Node.js backends, PostgreSQL databases, secure authentication, comprehensive testing, and cloud deployment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="premium"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={profileImage}
                  alt="Jimmy Sehlane - Professional Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full opacity-30 animate-pulse delay-300" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}