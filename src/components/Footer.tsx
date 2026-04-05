import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-tech text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ronak Rajput. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-primary" /> and a lot of web fluid
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/Ronakkk07?tab=repositories" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ronak-rajput-a748681b3/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ronakrajput.ire@email.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
