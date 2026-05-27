import { GlassCard } from "./GlassCard";
import { MotionReveal } from "./MotionReveal";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    title: "تست بده",
    description: "با چند سؤال کوتاه نقطه شروع مشخص می‌شود.",
    icon: "01",
  },
  {
    title: "مسیرت را بشناس",
    description: "یکی از سه الگوی اصلی بازی پررنگ‌تر می‌شود.",
    icon: "02",
  },
  {
    title: "هر روز تسک انجام بده",
    description: "روایت کوتاه می‌گیری و یک حرکت عملی انجام می‌دهی.",
    icon: "03",
  },
  {
    title: "XP جمع کن",
    description: "پیشروی روزانه با امتیاز قابل دیدن می‌شود.",
    icon: "04",
  },
  {
    title: "Stars بگیر",
    description: "بخشی از پیشروی هفتگی به پاداش تبدیل می‌شود.",
    icon: "05",
  },
  {
    title: "آرشیو هفته را باز کن",
    description: "با Stars به محتوای مرحله بعد دسترسی پیدا می‌کنی.",
    icon: "06",
  },
  {
    title: "وارد مرحله بعد شو",
    description: "مسیر ۲۱ روزه آرام و پیوسته جلو می‌رود.",
    icon: "07",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="جریان بازی"
          title="از شناخت تا حرکت"
          text="هر بخش کوتاه، واضح و ساخته‌شده برای ادامه دادن است."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {steps.map((step, index) => (
            <MotionReveal key={step.title} delay={index * 0.04}>
              <GlassCard className="h-full p-5">
                <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-xs font-black text-cyan-100">
                  {step.icon}
                </span>
                <h3 className="text-lg font-black text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </GlassCard>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
