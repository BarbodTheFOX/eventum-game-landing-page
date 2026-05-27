import { orderedEventumGamePaths } from "@/data/eventumGamePaths";
import { AnimatedReveal } from "./AnimatedReveal";
import { PathCard } from "./PathCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";

export function PathsSection() {
  return (
    <SectionShell>
      <AnimatedReveal>
        <SectionTitle
          eyebrow="ARCHETYPES"
          title="سه مسیر، سه الگوی شروع"
          text="هر مسیر یک دشمن اصلی و یک مأموریت عملی دارد؛ کارت‌ها فقط شکل متفاوتی از یک سیستم واحد هستند."
        />
      </AnimatedReveal>
      <div className="grid gap-5 lg:grid-cols-3">
        {orderedEventumGamePaths.map((path, index) => (
          <AnimatedReveal key={path.type} delay={index * 0.08}>
            <PathCard path={path} index={index} />
          </AnimatedReveal>
        ))}
      </div>
    </SectionShell>
  );
}
