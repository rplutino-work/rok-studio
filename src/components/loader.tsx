"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => setDone(true), 300);
        setTimeout(() => onComplete(), 1000);
      }
    }

    requestAnimationFrame(update);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
        >
          {/* Geometric decoration */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border border-sage/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[200px] h-[200px] rounded-full border border-accent-warm/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Counter */}
          <motion.div
            className="text-7xl md:text-8xl font-bold text-accent-warm tabular-nums tracking-tight"
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {progress}
          </motion.div>

          {/* Progress arc */}
          <svg width="120" height="60" viewBox="0 0 120 60" className="mt-6">
            <path
              d="M 10 50 Q 60 0 110 50"
              fill="none"
              stroke="rgba(131,152,142,0.2)"
              strokeWidth="1"
            />
            <motion.path
              d="M 10 50 Q 60 0 110 50"
              fill="none"
              stroke="#a8d48a"
              strokeWidth="1.5"
              strokeDasharray="150"
              strokeDashoffset={150 - (progress / 100) * 150}
            />
          </svg>

          <motion.span
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage mt-4"
            exit={{ opacity: 0 }}
          >
            ROK Studio
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
