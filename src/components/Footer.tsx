import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-tech text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-primary" /> and a lot of web fluid
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
