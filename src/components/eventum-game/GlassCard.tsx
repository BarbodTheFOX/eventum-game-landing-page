import type { ComponentPropsWithoutRef } from "react";

type GlassCardVariant = "default" | "elevated" | "dark" | "subtle" | "interactive";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: GlassCardVariant;
  gradientBorder?: boolean;
};

const variants: Record<GlassCardVariant, string> = {
  default:
    "liquid-glass rounded-[2rem] text-slate-900",
  elevated:
    "liquid-glass rounded-[2.25rem] text-slate-900 shadow-[0_34px_110px_rgba(76,29,149,0.16)]",
  dark:
    "rounded-[2rem] border border-white/15 bg-slate-950/85 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] backdrop-blur-2xl",
  subtle:
    "rounded-[1.75rem] border border-white/65 bg-white/42 text-slate-900 shadow-[0_18px_55px_rgba(76,29,149,0.07)] backdrop-blur-xl",
  interactive:
    "liquid-glass rounded-[2rem] text-slate-900 transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(76,29,149,0.16)]",
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
