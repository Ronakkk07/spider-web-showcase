import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AWS Cloud Intern",
    company: "F13 Technologies",
    period: "Jun - Aug 2025",
    bullets: [
      "Built and deployed serverless backend services across 5 projects using Python and AWS Lambda, reducing manual processing overhead by eliminating server provisioning steps for 3 recurring workflows.",
      "Configured AWS CloudWatch dashboards and alarms for 3 production services, cutting average issue detection time from 2 hours to under 15 minutes through proactive alerting.",
      "Automated a deployment workflow using Python and AWS services, reducing a previously manual 6-step release process to a single-command execution.",
    ],
    tech: ["Python", "AWS Lambda", "CloudWatch", "Serverless", "Agile"],
  },
  {
    role: "Centre of Excellence Intern",
    company: "Anunta – Cloud Based VDI Services",
    period: "Jun – Aug 2024",
    bullets: [
      "Documented 8+ enterprise VDI architecture discussions into structured internal learning resources, adopted as onboarding references for new team members.",
      "Built hands-on lab exercises covering DHCP, DNS, TCP/IP, and subnetting that were used across 2 internal training sessions.",
      "Completed Microsoft Azure AZ-900 certification within 3 weeks of joining through self-directed study alongside daily responsibilities.",
    ],
    tech: ["Azure", "VDI", "TCP/IP", "DNS", "Cloud Migration", "AZ-900"],
  },
  {
    role: "Software Developer Intern",
    company: "Anunta – Cloud Based VDI Services",
    period: "Aug – Oct 2023",
    bullets: [
      "Built an end-to-end news extraction pipeline using Python, Angular, and MS SQL, processing articles from 5+ sources into a structured database for downstream consumption.",
      "Reduced average bug resolution time by 30% by introducing a systematic log-and-config-first debugging approach adopted by the team.",
      "Participated in weekly code reviews, incorporating feedback across 3 sprint cycles to improve code quality and consistency.",
    ],
    tech: ["Django", "REST APIs", "Debugging", "Agile", "Code Review"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">My Journey</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">EXPERIENCE</h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent origin-top hidden sm:block"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.25 }}
              className="relative flex items-start mb-10 last:mb-0 sm:pl-16"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.25, type: "spring", stiffness: 300 }}
                className="absolute left-5 hidden sm:block w-4 h-4 rounded-full bg-blue-500 border-2 border-background -translate-x-2 mt-8 z-10"
                style={{ boxShadow: "0 0 14px rgba(59,130,246,0.5)" }}
              />

              {/* Card with left accent bar */}
              <div className="w-full rounded-2xl bg-card border border-border hover:border-blue-500/35 transition-all duration-300 group shadow-lg overflow-hidden">
                <div className="flex">
                  <div className="w-1 flex-shrink-0 bg-gradient-to-b from-blue-500 to-blue-500/10" />
                  <div className="flex-1 p-6 md:p-8">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-tech text-sm text-blue-400 leading-tight">{exp.company}</p>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                            <Calendar size={10} />
                            <span className="font-tech">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <span className="self-start sm:self-auto px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 font-tech whitespace-nowrap">
                        Internship
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-blue-400 transition-colors mb-4">
                      {exp.role}
                    </h3>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-[7px] flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md bg-blue-500/5 text-blue-400/80 border border-blue-500/15 font-tech hover:border-blue-500/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
