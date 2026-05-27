"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";

type FloatingVisualProps = {
  fileName: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  chips?: string[];
};

export function FloatingVisual({
  fileName,
  alt,
  width,
  height,
  priority = false,
  className = "",
  chips = [],
}: FloatingVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-8 rounded-[3.5rem] bg-gradient-to-br from-violet-300/34 via-white/10 to-cyan-200/34 blur-3xl" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <EventumVisual
          fileName={fileName}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full rounded-[2.7rem] shadow-[0_34px_120px_rgba(76,29,149,0.18)]"
        />
      </motion.div>
      {chips.map((chip, index) => (
        <GlassCard
          key={chip}
          variant="subtle"
          className={`absolute hidden px-4 py-3 text-sm font-black text-slate-800 md:block ${
            index % 2 === 0 ? "-right-3 top-14" : "-left-4 bottom-16"
          }`}
        >
          <span className="font-latin text-xs tracking-[0.18em] text-violet-500">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          {chip}
        </GlassCard>
      ))}
    </motion.div>
  );
}
