import { GlassCard } from "./GlassCard";
import { MotionReveal } from "./MotionReveal";
import { SectionTitle } from "./SectionTitle";

const mechanics = [
  {
    title: "XP",
    text: "امتیاز روزانه‌ای که با انجام تسک‌ها می‌گیری.",
  },
  {
    title: "Stars",
    text: "بخشی از XP هفتگی که به پاداش داخل بازی تبدیل می‌شود.",
  },
  {
    title: "Reset Day",
    text: "روز جمع‌بندی، مرور و آماده شدن برای مرحله بعد.",
  },
  {
    title: "Archive",
    text: "آرشیو هفتگی که با Stars باز می‌شود.",
  },
  {
    title: "Code of the Week",
    text: "کدی که داخل آرشیو قرار دارد و برای ادامه مسیر استفاده می‌شود.",
  },
];

export function MechanicsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="مکانیک‌ها" title="چیزهایی که بازی را زنده می‌کند" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {mechanics.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.05}>
              <GlassCard className="h-full p-6">
                <div className="mb-6 h-px w-full bg-gradient-to-l from-cyan-300 via-violet-300 to-transparent" />
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </GlassCard>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
