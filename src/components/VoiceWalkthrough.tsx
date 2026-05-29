import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, Square, X } from "lucide-react";

const sections = [
  {
    id: "home",
    label: "Hero",
    script:
      "Ronak Rajput. Three words that represent a software engineer who doesn't wait to be handed problems — he finds them, breaks them down, and builds something that lasts. The headline you see isn't a wish list. It's a track record. Software engineer, cloud engineer, and problem solver — backed by internships, publications, and systems that run in production. If you're looking for a graduate who can own backend work, navigate AWS, and ship reliable software from day one, you're in exactly the right place.",
  },
  {
    id: "about",
    label: "About",
    script:
      "Before the code, there's context. Ronak grew up in Mumbai, built his technical foundation at D.J. Sanghvi, and made the deliberate move to Dublin to sharpen his edge at the postgraduate level. The video on this page gives you something a resume can't — the way he thinks, communicates, and explains himself when the stakes are real. Watch it. The person you'll see is the same one who will show up on day one of your team.",
  },
  {
    id: "experience",
    label: "Experience",
    script:
      "Three internships, each one harder than the last. At F13 Technologies, Ronak stepped into AWS cloud work not because it was assigned — but because he wanted to understand what production-grade serverless infrastructure actually feels like from the inside. At Anunta, twice, he sat in on client calls, debugged things that weren't his responsibility, and earned his Azure certification on the side because he refused to be the person in the room who didn't know the answer. The pattern across all three isn't the tech stack. It's the same thing every time — show up, find the gap, close it.",
  },
  {
    id: "skills",
    label: "Skills",
    script:
      "The honest version of a skills section isn't a list of every technology someone has touched. It's an answer to one question — when something breaks in your stack, is this person going to figure it out or wait to be told? Ronak spent three internships debugging things across cloud infrastructure, networking layers, backend services, and deployment pipelines. The technologies he knows — Python, AWS, Django, Docker, Linux, CI/CD, databases, Redis — aren't on this page because he passed a course. They're here because he's broken them, fixed them, and understood why. The value isn't the list. It's the judgment that comes from actually using these things under pressure",
  },
  {
    id: "projects",
    label: "Projects",
    script:
      "Every project on this page started with the same question: what would this look like if it actually had to work in production? Luna isn't a tutorial clone. RunFog Dublin isn't a toy. SmartTrack was built with real error handling because real errors happen. Ronak doesn't build to impress interviewers. He builds to understand systems deeply enough that when something breaks at two in the morning, he already knows where to look. That instinct — that refusal to leave things half-finished — is what these projects are actually demonstrating.",
  },
  {
    id: "education",
    label: "Education",
    script:
      "Education gives the technical foundation behind the work. Ronak is pursuing an MSc in Cloud Computing at National College of Ireland, focused on AWS, DevOps, distributed systems, and software engineering. His BTech in Information Technology with a Data Science minor built the core base in data structures, algorithms, operating systems, databases, and computer networks.",
  },
  {
    id: "certificates",
    label: "Certificates",
    script:
      "Every certificate here was earned in response to a gap Ronak noticed in himself. Azure before he fully understood cloud breadth. Multiple AWS credentials because one wasn't enough to feel confident. The IEEE publication because a final year project felt like it deserved to be scrutinized by a real technical audience. The pattern isn't certification hunting. It's someone who is genuinely uncomfortable not knowing things — and does something about it.",
  },
  {
    id: "achievements",
    label: "Achievements",
    script:
      "The IEEE publication wasn't assigned. The hundred and fifty LeetCode problems weren't required. The hackathon placements weren't strategic networking. These are the things Ronak does when nobody is watching — because the standard he holds himself to doesn't change based on whether it's being evaluated. Consistency isn't something he performs. It's just how he operates.",
  },
  {
    id: "contact",
    label: "Contact",
    script:
      "This is where intent becomes action. Ronak is actively targeting graduate software engineering roles, cloud support associate positions, and internships — in Dublin and beyond. He's not waiting for the perfect opportunity. He's building toward it, every day, and looking for an environment where he can contribute from the first sprint. The form, the email, LinkedIn, GitHub, and LeetCode are all here. The next move is yours. If you've watched this walkthrough to the end, you already know what you're getting. Reach out.",
  },
];

const VoiceWalkthrough = () => {
  const timeoutsRef = useRef<number[]>([]);
  const runTokenRef = useRef(0);
  const activeSpeechResolveRef = useRef<(() => void) | null>(null);
  const activeDelayResolveRef = useRef<(() => void) | null>(null);
  const isRunningRef = useRef(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState("Start the portfolio walkthrough whenever you're ready.");
  const [webShots, setWebShots] = useState<number[]>([]);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    return () => {
      runTokenRef.current += 1;
      activeSpeechResolveRef.current?.();
      activeSpeechResolveRef.current = null;
      activeDelayResolveRef.current?.();
      activeDelayResolveRef.current = null;
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [speechSupported]);

  const triggerWebShot = () => {
    const shotId = Date.now() + Math.random();
    setWebShots((current) => [...current, shotId]);

    const timeout = window.setTimeout(() => {
      setWebShots((current) => current.filter((id) => id !== shotId));
    }, 1800);

    timeoutsRef.current.push(timeout);
  };

  const speak = (text: string, runToken: number) =>
    new Promise<void>((resolve) => {
      if (!speechSupported) {
        resolve();
        return;
      }

      const finish = () => {
        if (activeSpeechResolveRef.current === finish) {
          activeSpeechResolveRef.current = null;
        }
        resolve();
      };

      activeSpeechResolveRef.current = finish;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 0.95;
      utterance.onend = finish;
      utterance.onerror = finish;
      window.speechSynthesis.speak(utterance);

      if (runTokenRef.current !== runToken) {
        window.speechSynthesis.cancel();
        finish();
      }
    });

  const waitBetweenSections = (runToken: number) =>
    new Promise<void>((resolve) => {
      const timeout = window.setTimeout(() => {
        if (activeDelayResolveRef.current === finish) {
          activeDelayResolveRef.current = null;
        }
        resolve();
      }, 500);

      const finish = () => {
        window.clearTimeout(timeout);
        if (activeDelayResolveRef.current === finish) {
          activeDelayResolveRef.current = null;
        }
        resolve();
      };

      activeDelayResolveRef.current = finish;
      timeoutsRef.current.push(timeout);

      if (runTokenRef.current !== runToken) {
        finish();
      }
    });

  const startWalkthrough = async () => {
    if (isRunningRef.current) {
      return;
    }

    const runToken = runTokenRef.current + 1;
    runTokenRef.current = runToken;
    setIsRunning(true);
    setStatus("Walkthrough started. Ronak is guiding the page section by section.");

    for (const section of sections) {
      if (runTokenRef.current !== runToken) {
        return;
      }

      const element = document.getElementById(section.id);
      triggerWebShot();
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      setStatus(`Highlighting ${section.label}.`);
      await speak(section.script, runToken);
      await waitBetweenSections(runToken);
    }

    if (runTokenRef.current !== runToken) {
      return;
    }

    setIsRunning(false);
    setStatus("Walkthrough complete. Start it again whenever you want another pass.");
  };

  const stopWalkthrough = () => {
    if (!isRunningRef.current) {
      return;
    }

    runTokenRef.current += 1;
    activeSpeechResolveRef.current?.();
    activeSpeechResolveRef.current = null;
    activeDelayResolveRef.current?.();
    activeDelayResolveRef.current = null;
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }
    setWebShots([]);
    setIsRunning(false);
    setStatus("Walkthrough stopped. Start it again whenever you're ready.");
  };

  return (
    <>
      <div className="fixed bottom-6 left-4 z-50 sm:bottom-8 sm:left-6">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="voice-guide-panel"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-primary/30 bg-background/90 px-4 py-4 shadow-[0_0_30px_rgba(239,68,68,0.2)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-primary" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Minimize voice guide"
              >
                <X size={15} />
              </button>

              <div className="mb-3 flex items-center gap-3 pr-10">
                <div className="web-shooter-body">
                  <div className="web-shooter-core" />
                </div>
                <div>
                  <p className="font-tech text-[10px] uppercase tracking-[0.3em] text-primary">Voice Guide</p>
                  <p className="text-sm font-semibold text-foreground">Portfolio Walkthrough</p>
                </div>
              </div>

              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{status}</p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {isRunning ? (
                  <button
                    type="button"
                    onClick={stopWalkthrough}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-primary/20"
                  >
                    <Square size={13} />
                    Stop Walkthrough
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => void startWalkthrough()}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <Sparkles size={14} />
                    Start Walkthrough
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="voice-guide-launcher"
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary shadow-[0_0_24px_rgba(239,68,68,0.28)] backdrop-blur-md transition-colors hover:bg-primary/10"
              aria-label="Open voice guide"
            >
              <MessageCircle size={22} />
              {isRunning ? <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(239,68,68,0.9)]" /> : null}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-full overflow-hidden sm:block">
        <AnimatePresence>
          {webShots.map((shotId, index) => (
            <motion.div
              key={shotId}
              initial={{ x: -220, opacity: 0 }}
              animate={{ x: "105vw", opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="web-shot"
              style={{ top: `${18 + (index % 5) * 14}%` }}
            >
              <div className="web-shot-line" />
              <div className="web-shot-burst" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default VoiceWalkthrough;
