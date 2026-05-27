import Link from "next/link";
import type { ReactNode } from "react";

type GradientButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "glass";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const styles = {
  primary:
    "bg-gradient-to-l from-slate-950 via-violet-950 to-violet-700 text-white shadow-[0_22px_54px_rgba(76,29,149,0.28)] hover:shadow-[0_28px_70px_rgba(76,29,149,0.34)]",
  glass:
    "liquid-border bg-white/55 text-slate-900 shadow-[0_18px_48px_rgba(76,29,149,0.1)] hover:bg-white/72",
};

export function GradientButton({
  children,
  href,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}: GradientButtonProps) {
  const base = `eventum-focus inline-flex min-h-14 items-center justify-center rounded-full px-7 text-base font-black transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
