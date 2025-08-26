import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">Sehlane_Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                {item.label}
              </button>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="default" onClick={() => scrollToSection("#contact")} className="bg-gradient-accent hover:opacity-90 text-primary-foreground font-semibold shadow-glow">
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 shadow-strong">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 rounded-md">
                  {item.label}
                </button>)}
              <div className="px-3 py-2">
                <Button variant="default" onClick={() => scrollToSection("#contact")} className="w-full bg-gradient-accent hover:opacity-90 text-primary-foreground font-semibold">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
}