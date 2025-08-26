import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Database, 
  Shield, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  TestTube
} from "lucide-react"

const skillCategories = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Programming Languages",
    description: "Core programming and markup languages",
    skills: [
      { name: "JavaScript/TypeScript", level: 95, years: "2+" },
      { name: "Java", level: 85, years: "2+" },
      { name: "C#", level: 80, years: "1+" },
      { name: "HTML5/CSS3", level: 95, years: "2+" }
    ]
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces",
    skills: [
      { name: "React/TypeScript", level: 95, years: "2+" },
      { name: "Tailwind CSS", level: 90, years: "2+" },
      { name: "Next.js", level: 85, years: "1+" },
      { name: "Responsive Design", level: 95, years: "2+" }
    ]
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    description: "Scalable server-side architecture",
    skills: [
      { name: "Node.js", level: 90, years: "2+" },
      { name: "RESTful APIs", level: 95, years: "2+" },
      { name: "GraphQL", level: 80, years: "1+" },
      { name: "Microservices", level: 85, years: "1+" }
    ]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database & Storage",
    description: "Data architecture and management",
    skills: [
      { name: "PostgreSQL", level: 90, years: "2+" },
      { name: "SQL Databases", level: 95, years: "2+" },
      { name: "Supabase", level: 95, years: "1+" },
      { name: "Database Design", level: 90, years: "2+" }
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Auth",
    description: "Application security and authentication",
    skills: [
      { name: "JWT/OAuth", level: 90, years: "2+" },
      { name: "Rate Limiting", level: 85, years: "1+" },
      { name: "Input Validation", level: 95, years: "2+" },
      { name: "RBAC Systems", level: 85, years: "1+" }
    ]
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "DevOps & Deployment",
    description: "CI/CD and cloud infrastructure",
    skills: [
      { name: "Vercel/Netlify", level: 90, years: "2+" },
      { name: "Docker", level: 80, years: "1+" },
      { name: "CI/CD Pipelines", level: 85, years: "1+" },
      { name: "Monitoring", level: 80, years: "1+" }
    ]
  },
  {
    icon: <TestTube className="h-6 w-6" />,
    title: "Testing & Quality",
    description: "Ensuring code reliability and performance",
    skills: [
      { name: "Jest/Vitest", level: 85, years: "1+" },
      { name: "E2E Testing", level: 80, years: "1+" },
      { name: "Code Review", level: 90, years: "2+" },
      { name: "Performance", level: 85, years: "1+" }
    ]
  }
]

const tools = [
  "VS Code", "Git", "GitHub", "Figma", "Postman", 
  "Chrome DevTools", "ESLint", "Prettier", "npm/yarn", "Vite"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full software development stack with proven production experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.years}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="bg-gradient-card border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Development Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}