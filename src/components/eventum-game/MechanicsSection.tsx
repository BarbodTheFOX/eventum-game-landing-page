import { AnimatedReveal } from "./AnimatedReveal";
import { MechanicCard } from "./MechanicCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";

const mechanics = [
  {
    title: "XP",
    icon: "XP",
    text: "امتیاز روزانه‌ای که با انجام تسک‌ها می‌گیری.",
  },
  {
    title: "Stars",
    icon: "★",
    text: "بخشی از XP هفتگی که به پاداش داخل بازی تبدیل می‌شود.",
  },
  {
    title: "Reset Day",
    icon: "R",
    text: "روز جمع‌بندی، مرور و آماده شدن برای مرحله بعد.",
  },
  {
    title: "Archive",
    icon: "A",
    text: "آرشیو هفتگی که با Stars باز می‌شود.",
  },
  {
    title: "Code of the Week",
    icon: "C",
    text: "کدی که داخل آرشیو قرار دارد و برای ادامه مسیر استفاده می‌شود.",
  },
];

export function MechanicsSection() {
  return (
    <SectionShell>
      <AnimatedReveal>
        <SectionTitle
          eyebrow="GAME MECHANICS"
          title="مکانیک‌هایی که مسیر را قابل لمس می‌کنند"
        />
      </AnimatedReveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {mechanics.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.05}>
            <MechanicCard title={item.title} text={item.text} icon={item.icon} />
          </AnimatedReveal>
        ))}
      </div>
    </SectionShell>
  );
}
