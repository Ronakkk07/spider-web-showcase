import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Who Am I</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">ABOUT ME</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer who thrives on building innovative solutions.
              With great power comes great responsibility — and I take that seriously
              when it comes to crafting clean, scalable, and impactful software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in tech has been driven by curiosity and a relentless desire
              to learn. I specialize in full-stack development and love tackling complex
              problems that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { icon: User, label: "Name", value: "Your Name" },
              { icon: MapPin, label: "Location", value: "Your City, Country" },
              { icon: GraduationCap, label: "Education", value: "Your Degree & University" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
