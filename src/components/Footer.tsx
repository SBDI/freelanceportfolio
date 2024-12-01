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
    const linkedinProfileUrl = "https://www.linkedin.com/in/mohamed-bouabidi/";
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);
    const messageUrl = `${linkedinProfileUrl}/message?subject=${encodedSubject}&body=${encodedMessage}`;
    
    window.open(messageUrl, '_blank');
    toast.success("Redirecting to LinkedIn messaging");
    setMessage("");
    setSubject("");
  };

  return (
    <footer className="bg-dark-100 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-dark-200 border-white/10"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-dark-200 border-white/10 min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send via LinkedIn
              </Button>
            </form>
          </div>

          {/* Coordinates Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">My Coordinates</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5" />
                <a href="mailto:mohamed.bouabidi@example.com" className="hover:text-white transition-colors">
                  mohamed.bouabidi@example.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Linkedin className="h-5 w-5" />
                <a href="https://www.linkedin.com/in/mohamed-bouabidi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/mohamed-bouabidi
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Github className="h-5 w-5" />
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Mohamed Bouabidi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;