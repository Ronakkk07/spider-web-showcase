import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Paste your unlisted YouTube video ID here (the code after /watch?v= or /embed/)
  const YOUTUBE_VIDEO_ID = "MgSlY9aVMPE"; 

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">
            Get To Know Me
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            ABOUT ME
          </h2>
        </motion.div>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl relative group hover:border-primary/30 transition-all duration-5xl glow-red"
        >
          <div className="w-full aspect-video h-full flex items-center justify-center text-muted-foreground">
            {/* <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${"MgSlY9aVMPE"}?rel=0&modestbranding=1&showinfo=0`}
              title="Ronak Rajput - About Me Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            /> */} Video Coming Soon!
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;