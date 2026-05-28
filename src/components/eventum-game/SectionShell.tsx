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
  innerClassName = "max-w-[1240px]",
}: SectionShellProps) {
  return (
    <section id={id} className={`section-shell relative px-5 md:px-8 ${className}`}>
      <div className={`relative mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}
