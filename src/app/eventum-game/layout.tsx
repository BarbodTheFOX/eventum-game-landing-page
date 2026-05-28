import type { ReactNode } from "react";
import { InteractiveCosmicBackground } from "@/components/eventum-game/InteractiveCosmicBackground";

export default function EventumGameLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="eventum-cosmic-shell">
      <InteractiveCosmicBackground />
      {children}
    </div>
  );
}
