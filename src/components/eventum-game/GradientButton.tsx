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
    "gradient-button text-white hover:shadow-[0_28px_78px_rgba(124,45,255,0.42)]",
  glass:
    "liquid-border bg-white/[0.055] text-[#F8F5FF] shadow-[0_18px_48px_rgba(0,0,0,0.22)] hover:bg-white/[0.095]",
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
  const base = `eventum-focus inline-flex min-h-14 items-center justify-center rounded-full px-7 text-base font-black transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 ${styles[variant]} ${className}`;

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
