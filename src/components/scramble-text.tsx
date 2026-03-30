"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnView?: boolean;
  duration?: number;
}

export default function ScrambleText({
  text,
  className = "",
  scrambleOnHover = true,
  scrambleOnView = false,
  duration = 600,
}: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalSteps = Math.ceil(duration / 30);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < (iteration / totalSteps) * text.length) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalSteps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayed(text);
      }
    }, 30);
  }, [text, duration]);

  useEffect(() => {
    if (!scrambleOnView || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [scrambleOnView, scramble]);

  useEffect(() => {
    setDisplayed(text);
  }, [text]);

  return (
    <span
      ref={ref}
      className={`${className} font-mono`}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
    >
      {displayed}
    </span>
  );
}
