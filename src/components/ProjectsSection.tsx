import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Lock, Zap, Shield } from "lucide-react"
import ecommerceProject from "@/assets/project-ecommerce.jpg"
import dashboardProject from "@/assets/project-dashboard.jpg"

const projects = [
  {
    id: 1,
    title: "Gaffari Store",
    description: "Full-stack e-commerce platform with secure payment processing and real-time inventory management.",
    longDescription: "A production-ready e-commerce solution built with React, TypeScript, and Supabase. Features include secure authentication, PayFast payment integration, real-time inventory tracking, and comprehensive admin dashboard.",
    image: ecommerceProject,
    technologies: ["React", "TypeScript", "Supabase", "PayFast", "Tailwind CSS", "Zod"],
    highlights: ["Secure Payment Processing", "Real-time Inventory", "Admin Dashboard"],
    liveUrl: "https://gaffari-store.vercel.app",
    githubUrl: "https://github.com/jimmysehlane/gaffari-store",
    featured: true,
    icon: <Lock className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "SaaS dashboard with advanced data visualization and real-time analytics for business intelligence.",
    longDescription: "A comprehensive analytics platform featuring interactive charts, real-time data processing, and customizable dashboards. Built with performance and scalability in mind.",
    image: dashboardProject,
    technologies: ["React", "TypeScript", "Recharts", "Supabase", "React Query"],
    highlights: ["Real-time Analytics", "Interactive Charts", "Custom Dashboards"],
    liveUrl: "https://analytics-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/jimmysehlane/analytics-dashboard",
    featured: true,
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Security Toolkit",
    description: "Collection of security utilities and components for web applications.",
    longDescription: "A comprehensive toolkit featuring rate limiting, input validation, authentication helpers, and security best practices for modern web applications.",
    image: "/api/placeholder/400/300",
    technologies: ["TypeScript", "Zod", "Rate Limiting", "Auth"],
    highlights: ["Input Validation", "Rate Limiting", "Security Best Practices"],
    liveUrl: "https://security-toolkit.vercel.app",
    githubUrl: "https://github.com/jimmysehlane/security-toolkit",
    featured: false,
    icon: <Shield className="h-5 w-5" />
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in full-stack development, 
            security implementation, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 hover:text-primary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 hover:text-primary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.longDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.id} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card/30 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 hover:text-primary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 hover:text-primary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="premium" 
            size="lg" 
            className="group"
            onClick={() => window.open('https://github.com/jimmysehlane', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
