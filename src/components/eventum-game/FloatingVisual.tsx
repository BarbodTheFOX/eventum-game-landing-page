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
  imageClassName?: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  chips?: string[];
};

export function FloatingVisual({
  fileName,
  alt,
  width,
  height,
  priority = false,
  className = "",
  imageClassName = "",
  fit = "cover",
  objectPosition = "object-center",
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
      <div className="absolute inset-6 rounded-[3.5rem] bg-gradient-to-br from-[#7C2DFF]/42 via-[#C084FC]/12 to-[#22D3EE]/20 blur-3xl" />
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
          fit={fit}
          objectPosition={objectPosition}
          className={`w-full rounded-[2.7rem] border border-[#D8B4FE]/25 shadow-[0_34px_120px_rgba(0,0,0,0.38),0_0_90px_rgba(124,45,255,0.18)] ${imageClassName}`}
        />
      </motion.div>
      {chips.map((chip, index) => (
        <GlassCard
          key={chip}
          variant="subtle"
          className={`absolute hidden px-4 py-3 text-sm font-black text-[#F8F5FF] md:block ${
            index % 2 === 0 ? "-right-3 top-14" : "-left-4 bottom-16"
          }`}
        >
          <span className="font-latin text-xs tracking-[0.18em] text-[#67E8F9]">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          {chip}
        </GlassCard>
      ))}
    </motion.div>
  );
}
