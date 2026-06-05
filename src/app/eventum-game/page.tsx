import type { Metadata } from "next";
import { HeroSection } from "@/components/eventum-game/HeroSection";
import { HowItWorksSection } from "@/components/eventum-game/HowItWorksSection";
import { MechanicsSection } from "@/components/eventum-game/MechanicsSection";
import { PathsSection } from "@/components/eventum-game/PathsSection";
import { TestIntroSection } from "@/components/eventum-game/TestIntroSection";
import { WhatIsGameSection } from "@/components/eventum-game/WhatIsGameSection";

export const metadata: Metadata = {
  title: "EVENTUM GAME - مسیر ۲۱ روزه",
  description: "ایونتوم گیم؛ مسیر ۲۱ روزه شناخت، حرکت و رشد",
};

export default function EventumGamePage() {
  return (
    <main dir="rtl" className="eventum-page min-h-screen overflow-hidden">
      <HeroSection />
      <WhatIsGameSection />
      <HowItWorksSection />
      <PathsSection />
      <MechanicsSection />
      <TestIntroSection />
    </main>
  );
}
