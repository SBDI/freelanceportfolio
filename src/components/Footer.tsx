import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-dark-100 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">DS.Portfolio</h3>
            <p className="text-white/70 max-w-xs">
              Transforming data into actionable insights through innovative solutions and analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a>
              <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-white/90">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white/90">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white/90">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white/90">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} DS.Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;