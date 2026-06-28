"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, setScope] = useState<HTMLDivElement | null>(null);
  const wordsArray = words.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("font-[family-name:var(--font-playfair)]", className)}>
      <motion.div ref={setScope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={isVisible ? { opacity: 0, filter: filter ? "blur(10px)" : "none" } : { opacity: 0 }}
              animate={isVisible ? { opacity: 1, filter: filter ? "blur(0px)" : "none" } : { opacity: 0 }}
              transition={{
                duration: duration,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};