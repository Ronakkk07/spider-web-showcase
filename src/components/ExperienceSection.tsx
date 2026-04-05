import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AWS Cloud Intern (Internship)",
    company: " F13 Technologies",
    period: "06/25 - 08/25",
    description: `• Designed and deployed serverless backend microservices using Python and AWS Lambda to supporting scalable application workflows. 
    • Implemented monitoring, telemetry, and log analysis using AWS CloudWatch to diagnose runtime errors and improve system reliability. 
    • Collaborated with engineering teams in an Agile development environment, contributing to scalable service improvement `,
  },
  {
    role: " Centre of Excellence Intern (Internship)",
    company: "Anunta - Cloud Based VDI Services",
    period: "06/24 - 08/24",
    description: `• Participated in client calls and technical discussions, gathering requirements and 
assisting in cloud architecture design for migration projects 
• Supported team in cloud and VDI migrations by troubleshooting networking (DNS, 
TCP/IP) and operating system-level issues, helping minimize downtime and service 
disruption 
• Proactively obtained Azure AZ-900 certification, motivated me to fill knowledge gaps as fast as 
possible.`,
  },
  {
    role: "Software Developer Intern (Internship)",
    company: "Anunta - Cloud Based VDI Services",
    period: "08/23 - 10/23",
    description: `• Collaborated with cross-functional teams to debug and resolve application issues, tracing 
problems across frontend, backend, and infrastructure layers 
• Strengthened problem-solving and debugging capabilities through collaborative agile tasks.`},
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">My Journey</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">EXPERIENCE</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 z-10 animate-pulse-glow" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-tech text-xs text-primary">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-1">{exp.role}</h3>
                  <p className="text-sm text-primary/80 mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
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
