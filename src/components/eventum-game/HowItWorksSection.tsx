import { AnimatedReveal } from "./AnimatedReveal";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";
import { StepCard } from "./StepCard";

const steps = [
  {
    title: "تست بده",
    description: "با چند سؤال کوتاه نقطه شروع مشخص می‌شود.",
    icon: "؟",
  },
  {
    title: "مسیرت را بشناس",
    description: "یکی از سه الگوی اصلی بازی پررنگ‌تر می‌شود.",
    icon: "S",
  },
  {
    title: "هر روز تسک انجام بده",
    description: "روایت کوتاه می‌گیری و یک حرکت عملی انجام می‌دهی.",
    icon: "T",
  },
  {
    title: "XP جمع کن",
    description: "پیشروی روزانه با امتیاز قابل دیدن می‌شود.",
    icon: "XP",
  },
  {
    title: "Stars بگیر",
    description: "بخشی از پیشروی هفتگی به پاداش تبدیل می‌شود.",
    icon: "★",
  },
  {
    title: "آرشیو هفته را باز کن",
    description: "با Stars به محتوای مرحله بعد دسترسی پیدا می‌کنی.",
    icon: "A",
  },
  {
    title: "وارد مرحله بعد شو",
    description: "مسیر ۲۱ روزه آرام و پیوسته جلو می‌رود.",
    icon: "→",
  },
];

export function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" className="py-20 md:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <AnimatedReveal>
            <GlassCard variant="elevated" gradientBorder className="p-6 md:p-8">
              <SectionTitle
                align="right"
                eyebrow="SCROLL STORY"
                title="از تست تا مرحله بعد"
                text="جریان بازی تکه‌تکه جلو می‌رود؛ هر قدم کوتاه است، اما حس پیشروی را زنده نگه می‌دارد."
              />
              <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/48 p-4">
                <div className="h-2 rounded-full bg-gradient-to-l from-cyan-300 via-violet-400 to-fuchsia-400" />
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  این بخش مثل نقشه مسیر عمل می‌کند: اول شناخت، بعد حرکت، بعد
                  باز شدن لایه‌های بعدی بازی.
                </p>
              </div>
            </GlassCard>
          </AnimatedReveal>
        </div>

        <div className="relative space-y-4">
          <div className="absolute right-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-violet-300 via-cyan-300 to-transparent md:block" />
          {steps.map((step, index) => (
            <AnimatedReveal key={step.title} delay={index * 0.04}>
              <div className="relative md:pr-14">
                <span className="absolute right-4 top-8 hidden h-4 w-4 rounded-full border border-white bg-violet-500 shadow-[0_0_0_8px_rgba(124,58,237,0.1)] md:block" />
                <StepCard
                  number={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
