import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Rocket, Star, ArrowRight } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    stat: "IEEE",
    title: "Published Research",
    description: "Published research on multilingual AI at ICFT 2025 (IEEE Xplore), focusing on automated speech processing and structured information extraction.",
    link: "https://ieeexplore.ieee.org/document/11336609",
  },
  {
    icon: Target,
    stat: "180+",
    title: "LeetCode Problems",
    description: "Consistently solved algorithmic challenges to sharpen problem-solving skills and DSA fundamentals.",
    link: null as string | null,
  },
  {
    icon: Rocket,
    stat: "Top 10",
    title: "Hackathon Placements",
    description: "Top 10 placements across UI/UX, Web Development, and AI/ML hackathons.",
    link: null as string | null,
  },
  {
    icon: Star,
    stat: "50+",
    title: "Team Members Led",
    description: "Led 50+ members across content, outreach, and know-how initiatives, improving digital engagement by 40%.",
    link: null as string | null,
  },
];

const upcoming = [
  "Solving DSA problems actively on LeetCode",
  "Brushing up Linux and Networking skills",
  "Building and extending the Luna Web Browser Agent",
  "Working on a new research paper targeting a reputed journal",
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Milestones</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">ACHIEVEMENTS</h2>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => item.link && window.open(item.link, "_blank")}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group shadow-lg flex flex-col ${
                item.link ? "cursor-pointer" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <p className="font-display text-4xl text-primary mb-1 leading-none">{item.stat}</p>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.description}</p>

              {item.link && (
                <div className="flex items-center gap-1 text-xs text-primary/50 group-hover:text-primary transition-colors mt-3 font-tech">
                  View Paper <ArrowRight size={10} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 rounded-2xl bg-card border border-primary/20 shadow-lg"
        >
          <h3 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
            What's Next
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {upcoming.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/20 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
