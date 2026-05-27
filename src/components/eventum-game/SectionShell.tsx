import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  children,
  id,
  className = "",
  innerClassName = "max-w-7xl",
}: SectionShellProps) {
  return (
    <section id={id} className={`relative px-5 py-16 md:px-8 md:py-28 ${className}`}>
      <div className={`relative mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}
