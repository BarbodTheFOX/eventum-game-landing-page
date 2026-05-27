import { GlassCard } from "./GlassCard";
import type { ComponentPropsWithoutRef } from "react";

type LiquidGlassCardProps = ComponentPropsWithoutRef<"div"> & {
  glow?: "violet" | "cyan" | "mixed";
};

const glows = {
  violet: "bg-violet-300/30",
  cyan: "bg-cyan-200/35",
  mixed: "bg-gradient-to-br from-violet-300/25 to-cyan-200/30",
};

export function LiquidGlassCard({
  className = "",
  glow = "mixed",
  children,
  ...props
}: LiquidGlassCardProps) {
  return (
    <GlassCard
      variant="elevated"
      gradientBorder
      className={`overflow-hidden ${className}`}
      {...props}
    >
      <div className={`pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full blur-3xl ${glows[glow]}`} />
      <div className="relative">{children}</div>
    </GlassCard>
  );
}
