import { orderedEventumGamePaths } from "@/data/eventumGamePaths";
import { AnimatedReveal } from "./AnimatedReveal";
import { PathCard } from "./PathCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";

export function PathsSection() {
  return (
    <SectionShell innerClassName="max-w-[1240px]">
      <AnimatedReveal>
        <SectionTitle
          eyebrow="ARCHETYPES"
          title="سه مسیر، سه الگوی شروع"
          text="هر مسیر یک دشمن اصلی و یک مأموریت عملی دارد؛ کارت‌ها فقط شکل متفاوتی از یک سیستم واحد هستند."
        />
      </AnimatedReveal>
      <div className="mx-auto mt-2 grid max-w-[1180px] items-stretch justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
        {orderedEventumGamePaths.map((path, index) => (
          <AnimatedReveal
            key={path.type}
            delay={index * 0.08}
            className={
              index === 2 ? "md:col-span-2 md:justify-self-center lg:col-span-1" : ""
            }
          >
            <PathCard path={path} />
          </AnimatedReveal>
        ))}
      </div>
    </SectionShell>
  );
}
