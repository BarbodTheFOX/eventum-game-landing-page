import type { ComponentPropsWithoutRef } from "react";

type GlassCardVariant = "default" | "elevated" | "dark" | "subtle" | "interactive";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: GlassCardVariant;
  gradientBorder?: boolean;
};

const variants: Record<GlassCardVariant, string> = {
  default:
    "liquid-glass rounded-[2rem] text-[#F8F5FF]",
  elevated:
    "liquid-glass purple-glow rounded-[2.25rem] text-[#F8F5FF]",
  dark:
    "rounded-[2rem] border border-[#D8B4FE]/25 bg-[#080012]/82 text-[#F8F5FF] shadow-[0_30px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl",
  subtle:
    "rounded-[1.75rem] border border-white/15 bg-white/[0.055] text-[#F8F5FF] shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl",
  interactive:
    "liquid-glass rounded-[2rem] text-[#F8F5FF] transition duration-300 hover:-translate-y-1 hover:border-[#D8B4FE]/55 hover:shadow-[0_34px_110px_rgba(124,45,255,0.24)]",
};

export function GlassCard({
  className = "",
  variant = "default",
  gradientBorder = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`${variants[variant]} ${gradientBorder ? "liquid-border" : ""} ${className}`}
      {...props}
    />
  );
}
