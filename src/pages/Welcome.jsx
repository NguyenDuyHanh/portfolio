import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

const Welcome = ({ onFinish, visible }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // Display welcome sequence for 2.1s then exit smoothly
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2100);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && !isDone && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%", opacity: 0.95 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background text-foreground flex flex-col items-center justify-center p-6 overflow-hidden selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300"
        >
          {/* Subtle Ambient Glow Background */}
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -top-20 -left-20" />
          <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -bottom-20 -right-20" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center space-y-8">
            {/* Top 3 Circular Icon Badges with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-4"
            >
              {[
                { icon: Code2, label: "Code" },
                { icon: User, label: "Profile" },
                { icon: Globe, label: "Web" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-md backdrop-blur-md"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Main Welcome Heading */}
            <div className="flex flex-col items-center gap-1 overflow-hidden w-full py-1">
              {/* Line 1: WELCOME (from Right) + TO MY (from Left) */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase font-sans whitespace-nowrap"
                >
                  Welcome
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase font-sans whitespace-nowrap"
                >
                  to my
                </motion.span>
              </div>

              {/* Line 2: PORTFOLIO WEBSITE (from Below -> Up) */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.75, ease: [0.25, 1, 0.5, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground/80 uppercase font-sans whitespace-nowrap"
              >
                Portfolio Website
              </motion.h2>
            </div>

            {/* Bottom Domain URL Pill Tag (from Above -> Down) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.05, ease: [0.25, 1, 0.5, 1] }}
              className="px-6 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs sm:text-sm font-mono tracking-widest shadow-sm backdrop-blur-md"
            >
              <span>portfolio.duyhanh.site</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
