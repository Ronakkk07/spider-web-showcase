import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, Square, X } from "lucide-react";

const sections = [
  {
    id: "home",
    label: "Hero",
    script:
      "Ronak Rajput. M.Sc Cloud Computing candidate at National College of Ireland — 2026 graduate. Three paid internships at companies running real cloud infrastructure. One IEEE-published research paper. Six-plus certifications across AWS and Azure. Over 180 LeetCode problems solved. This is a profile built on consistent, verifiable delivery — across backend systems, cloud engineering, and software development. Everything you need to make a hiring decision is on this page.",
  },
  {
    id: "about",
    label: "About",
    script:
      "B.Tech in Information Technology from D.J. Sanghvi, Mumbai — then a deliberate move to Dublin for an M.Sc focused specifically on cloud computing, distributed systems, and DevOps. The relocation wasn't accidental. It was a calculated investment in the skills that matter most for modern software engineering. Ronak didn't arrive looking for a credential. He came to close the gap between what he knew and what production-grade cloud work actually demands.",
  },
  {
    id: "education",
    label: "Education",
    script:
      "National College of Ireland — M.Sc Cloud Computing, 2025 to 2026. Core modules: AWS architecture, serverless systems, DevOps pipelines, and distributed computing. Prior: B.Tech Information Technology at DJSCE Mumbai with a Data Science minor and a strong academic record. The undergraduate thesis resulted in an IEEE publication at ICFT 2025 — a multilingual meeting summariser, peer-reviewed and accepted. Two degrees. One clear technical direction.",
  },
  {
    id: "experience",
    label: "Experience",
    script:
      "Three internships. All in production environments. At F13 Technologies — AWS Lambda, S3, SQS, and EventBridge for event-driven data pipelines. At Anunta Technology, twice — first building Django REST APIs with Celery for async processing, then in their Centre of Excellence working on Azure cloud migration and client-facing infrastructure. No toy environments. No sandbox projects. The kind of hands-on exposure that most graduates spend two years chasing.",
  },
  {
    id: "skills",
    label: "Skills",
    script:
      "Python and Django for backend. AWS — Lambda, S3, DynamoDB, SQS, EventBridge, and CloudWatch — for cloud infrastructure. Docker, Kubernetes, and Terraform for containerisation and infrastructure as code. PostgreSQL, MySQL, and Redis for data. GitHub Actions and CI/CD for delivery. Linux, networking, and distributed systems for depth. Every item on this list was earned through internship work or production debugging — not self-assessed from a tutorial.",
  },
  {
    id: "projects",
    label: "Projects",
    script:
      "Four projects, each solving a real architectural problem. Luna — a Django and Celery backend with modular LLM pipelines for an AI assistant. RunFog Dublin — a distributed fog computing simulation using AWS SQS, Lambda, and EventBridge. SmartTrack — a RESTful backend integrating four-plus external APIs with structured error handling and CloudWatch logging. DevOps E-learning — full CI/CD with GitHub Actions, pytest, and SonarQube resolving 50 percent of flagged vulnerabilities. Production thinking applied to every build.",
  },
  {
    id: "certificates",
    label: "Certificates",
    script:
      "Six-plus credentials. Multiple AWS certifications. Azure Fundamentals. The IEEE publication — Multilingual Minutes of Meeting Generator for Offline Meetings — accepted at ICFT 2025 and indexed on IEEE Xplore. Each certification was pursued to validate a specific gap. The publication was chosen because peer review is a higher bar than a course certificate. The credentials reflect someone who tests their knowledge externally rather than just assuming it.",
  },
  {
    id: "achievements",
    label: "Achievements",
    script:
      "One IEEE-published paper. Over 180 LeetCode problems solved — consistently, not in one pre-interview burst. Top-ten hackathon finishes. Fifty-plus self-directed cloud study hours logged outside of coursework. None of this was required. It's what happens when someone sets a personal standard and doesn't lower it when no one is watching. The pattern across all of it — competitive, academic, and technical — is the signal worth paying attention to.",
  },
  {
    id: "contact",
    label: "Contact",
    script:
      "Open to work. 2026 graduate. Targeting software engineering, backend, and cloud roles in Dublin and internationally. Ready to contribute from sprint one — not after a three-month ramp-up. The contact form, email, LinkedIn, and GitHub are all here. If this walkthrough answered your questions about fit, the next move is yours.",
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
