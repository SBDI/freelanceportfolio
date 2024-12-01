import { useState, useEffect } from "react";
import { Linkedin, Mail, Phone, Database } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/mohamed-bouabidi/",
      tooltip: "LinkedIn",
    },
    {
      icon: <img src="https://www.kaggle.com/static/images/favicon.ico" alt="Kaggle Icon" className="h-5 w-5" />,
      href: "https://www.kaggle.com/mohamedbouabidi",
      tooltip: "Kaggle",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:m.bouabidi@enim.ac.ma",
      tooltip: "Email",
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="h-5 w-5" />,      
      href: "tel:+21612345678",
      tooltip: "+216 12 345 678",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-200/95 backdrop-blur-sm py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-l font-semibold flex items-center gap-2">
          <img src="/favicon.png" alt="Logo" className="w-12 h-12 object-contain" />
          Mohamed Bouabidi
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              {socialLinks.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-white/90"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
