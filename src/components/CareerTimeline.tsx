import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const milestones = [
  {
    type: "education" as const,
    icon: GraduationCap,
    label: "B.Tech IT",
    org: "DJSCE Mumbai",
    date: "2021 – 2025",
  },
  {
    type: "work" as const,
    icon: Briefcase,
    label: "SDE Intern",
    org: "Anunta",
    date: "Aug – Oct 2023",
  },
  {
    type: "work" as const,
    icon: Briefcase,
    label: "CoE Intern",
    org: "Anunta",
    date: "Jun – Aug 2024",
  },
  {
    type: "work" as const,
    icon: Briefcase,
    label: "AWS Cloud Intern",
    org: "F13 Technologies",
    date: "Jun – Aug 2025",
  },
  {
    type: "education" as const,
    icon: GraduationCap,
    label: "M.Sc Cloud Computing",
    org: "NCI Dublin",
    date: "2025 – 2026",
  },
];

const CareerTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="py-10 relative overflow-hidden bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-tech text-xs tracking-[0.3em] text-muted-foreground mb-8 text-center uppercase"
        >
          Career Progression
        </motion.p>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Animated connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary via-primary/60 to-primary origin-left"
            />

            <div className="flex justify-between items-start relative">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex flex-col items-center text-center w-[18%]"
                >
                  {/* Icon dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.55 + i * 0.15, type: "spring", stiffness: 350 }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3 z-10 bg-card ${
                      m.type === "education"
                        ? "border-primary text-primary"
                        : "border-blue-500 text-blue-400"
                    }`}
                    style={
                      m.type === "education"
                        ? { boxShadow: "0 0 12px rgba(220,38,38,0.35)" }
                        : { boxShadow: "0 0 12px rgba(59,130,246,0.35)" }
                    }
                  >
                    <m.icon size={16} />
                  </motion.div>

                  <p className="text-xs font-tech text-foreground font-semibold leading-tight">{m.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.org}</p>
                  <p
                    className={`text-[10px] font-tech mt-1 ${
                      m.type === "education" ? "text-primary/70" : "text-blue-400/70"
                    }`}
                  >
                    {m.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-tech">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Education
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-tech">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Work Experience
            </span>
          </motion.div>
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden space-y-3">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 bg-card ${
                  m.type === "education"
                    ? "border-primary text-primary"
                    : "border-blue-500 text-blue-400"
                }`}
              >
                <m.icon size={13} />
              </div>
              <div>
                <p className="text-xs font-tech text-foreground">
                  {m.label}{" "}
                  <span className="text-muted-foreground">· {m.org}</span>
                </p>
                <p
                  className={`text-[10px] font-tech ${
                    m.type === "education" ? "text-primary/70" : "text-blue-400/70"
                  }`}
                >
                  {m.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;
