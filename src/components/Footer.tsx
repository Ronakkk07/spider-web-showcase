import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="font-tech text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ronak Rajput. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={13} className="text-primary mx-0.5" /> and a lot of web fluid
          </p>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Ronakkk07?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/ronak-rajput-a748681b3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={17} />
            </a>
            <a href="mailto:ronakrajput.ire@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all ml-1"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
