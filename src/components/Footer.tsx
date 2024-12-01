import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "mohamed.bouabidi@example.com";
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);
    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`;
    
    window.location.href = mailtoUrl;
    toast.success("Opening email client");
    setMessage("");
    setSubject("");
  };

  return (
    <footer className="bg-dark-100 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="space-y-6 bg-dark-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-dark-200 border-white/10 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-dark-200 border-white/10 focus:border-blue-500 transition-colors min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send via Email
              </Button>
            </form>
          </div>

          {/* Coordinates Section */}
          <div className="space-y-6 bg-dark-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white">My Coordinates</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="bg-dark-100 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <a href="mailto:mohamed.bouabidi@example.com" className="text-lg">
                    mohamed.bouabidi@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="bg-dark-100 p-3 rounded-lg group-hover:bg-[#0077B5] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/mohamed-bouabidi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    mohamed.bouabidi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="bg-dark-100 p-3 rounded-lg group-hover:bg-[#333] transition-colors">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/50">GitHub</p>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Mohamed Bouabidi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;