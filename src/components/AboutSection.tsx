import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, MapPin, Code2, Cloud, FlaskConical } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Backend & Cloud Development", detail: "Django, AWS, Serverless, Microservices" },
  { icon: Cloud, label: "Cloud Infrastructure", detail: "AWS, Azure, Kubernetes, DevOps" },
  { icon: FlaskConical, label: "Research & AI", detail: "LLMs, Speech Processing, IEEE Published" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Get To Know Me</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">ABOUT ME</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl relative group hover:border-primary/30 transition-all duration-300 glow-red aspect-video flex items-center justify-center"
          >
            <div className="text-center px-8">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <Play className="w-6 h-6 text-primary ml-0.5" />
              </motion.div>
              <p className="font-display text-2xl text-foreground mb-1">Introduction Video</p>
              <p className="text-xs text-muted-foreground font-tech tracking-widest uppercase">Coming Soon</p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <span>Dublin, Ireland</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Software engineer currently pursuing an M.Sc in Cloud Computing at National College of Ireland. With hands-on experience across 3 internships, I specialise in building scalable backend systems, serverless architectures, and DevOps pipelines.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              My work spans cloud infrastructure on AWS & Azure, AI-powered applications, and published research in multilingual speech processing. I thrive in fast-paced engineering environments and am passionate about solving real-world problems through software.
            </p>

            <div className="space-y-2.5 pt-1">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/25 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <h.icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-tech text-foreground leading-tight">{h.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{h.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
