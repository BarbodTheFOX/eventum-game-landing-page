import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";

type TestShellProps = {
  children: ReactNode;
};

export function TestShell({ children }: TestShellProps) {
  return (
    <GlassCard
      variant="elevated"
      gradientBorder
      className="relative overflow-hidden p-4 md:p-7"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#22D3EE]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[#7C2DFF]/28 blur-3xl" />
      <div className="relative">{children}</div>
    </GlassCard>
  );
}
