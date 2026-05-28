import { GlassCard } from "./GlassCard";
import type { ComponentPropsWithoutRef } from "react";

type LiquidGlassCardProps = ComponentPropsWithoutRef<"div"> & {
  glow?: "violet" | "cyan" | "mixed";
};

const glows = {
  violet: "bg-[#7C2DFF]/30",
  cyan: "bg-[#22D3EE]/20",
  mixed: "bg-gradient-to-br from-[#7C2DFF]/28 to-[#22D3EE]/16",
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
