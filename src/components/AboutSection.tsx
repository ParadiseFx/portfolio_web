import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Code, Zap } from "lucide-react"

const highlights = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "End-to-End Software Development",
    description: "Full-stack expertise spanning React/TypeScript frontends, Node.js backends, PostgreSQL databases, and RESTful API design with production-grade security implementation."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Enterprise Software Architecture",
    description: "Designing scalable, maintainable software solutions with comprehensive testing, monitoring, deployment pipelines, and performance optimization for business-critical applications."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Security & DevOps Excellence",
    description: "Implementing robust authentication systems, Zod validation, rate limiting, automated testing, CI/CD pipelines, and cloud deployment strategies for production-ready software."
  }
]

const education = [
  {
    degree: "Diploma in IT (Software Development)",
    institution: "Rosebank College",
    year: "2024",
    status: "In Progress"
  }
]

const certifications = [
  "Full-Stack Software Development",
  "Database Architecture & Optimization",
  "API Development & Security",
  "Cloud Architecture & DevOps",
  "Software Testing & Quality Assurance",
  "Authentication & Authorization Systems"
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building complete software solutions from conception to deployment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Jimmy Sehlane, a passionate software developer specializing in architecting and building 
                enterprise-grade software solutions. As a Rosebank College graduate with my 
                Diploma in IT (Software Development), I bring both theoretical knowledge and hands-on 
                production experience to every project.
              </p>
              <p>
                My technical expertise encompasses the complete software development stack: React/TypeScript for 
                dynamic user interfaces, Node.js for robust backend services, PostgreSQL for data architecture, 
                RESTful API design, secure authentication systems with JWT and OAuth, Zod validation, rate limiting, 
                comprehensive testing strategies, and automated CI/CD deployment pipelines to cloud platforms.
              </p>
              <p>
                I excel at building production-ready software solutions including e-commerce platforms with integrated 
                payment processing, SaaS dashboards with real-time analytics, multi-tenant applications, and secure 
                enterprise systems. My focus on clean architecture, security best practices, performance optimization, 
                and maintainable code ensures software that scales with business needs and stands the test of time.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Education</h4>
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 border-0 shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold">{edu.degree}</h5>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">Completed</Badge>
                        <p className="text-sm text-muted-foreground mt-1">2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/jimmy-sehlane-resume.pdf';
                  link.download = 'Jimmy-Sehlane-Software-Developer-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Highlights & Skills */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Me</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-card/50 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Certifications & Learning</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-primary">Fun Fact</h4>
                <p className="text-muted-foreground text-sm">
                  I'm passionate about solving complex business challenges through innovative software architecture. 
                  Whether it's designing scalable microservices, optimizing database performance, implementing security protocols, 
                  or automating deployment pipelines, I thrive on building software that makes a meaningful impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}