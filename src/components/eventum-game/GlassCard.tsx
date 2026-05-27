import type { ComponentPropsWithoutRef } from "react";

type GlassCardProps = ComponentPropsWithoutRef<"div">;

export function GlassCard({ className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/55 shadow-[0_24px_80px_rgba(91,33,182,0.08)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
