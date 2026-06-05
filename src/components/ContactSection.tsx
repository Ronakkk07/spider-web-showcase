import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Linkedin, Github, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:ronakrajput.ire@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Let's Connect</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">CONTACT ME</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Availability callout */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-8">
              <span className="relative flex h-2.5 w-2.5 mt-0.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm text-emerald-400 font-tech font-semibold">Open to Work · 2026 Graduate</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Actively seeking graduate roles in Software Engineering & Cloud.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              I'm actively seeking graduate roles in Software Engineering and Cloud Support. If you have an opportunity or just want to chat tech, I'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:ronakrajput.ire@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail size={15} className="text-primary" />
                </div>
                <span className="text-sm">ronakrajput.ire@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-primary" />
                </div>
                <span className="text-sm">Dublin, Ireland</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-primary" />
                </div>
                <span className="text-sm font-tech text-xs">Usually responds within 24 hours</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Ronakkk07?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/ronak-rajput-a748681b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://leetcode.com/u/ronakrajput1106/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all text-xs font-tech"
              >
                LeetCode
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
            />
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all glow-red ${
                sent
                  ? "bg-emerald-600 text-white"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              <Send size={15} />
              {sent ? "Message Opened in Mail Client!" : "Send Message"}
            </button>

            <p className="text-xs text-muted-foreground text-center font-tech">
              This will open your default mail client
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
