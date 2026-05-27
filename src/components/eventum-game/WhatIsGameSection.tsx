import { AnimatedReveal } from "./AnimatedReveal";
import { GlassCard } from "./GlassCard";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { SectionShell } from "./SectionShell";
import { SectionTitle } from "./SectionTitle";

const highlights = [
  "مسیرت مشخص می‌شود",
  "هر روز تسک داری",
  "با XP و Stars جلو می‌روی",
];

export function WhatIsGameSection() {
  return (
    <SectionShell innerClassName="max-w-6xl">
      <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedReveal>
          <SectionTitle
            align="right"
            eyebrow="GAME SYSTEM"
            title="یک بازی کوتاه، اما با مسیر مشخص"
            text="ایونتوم گیم به جای توضیح زیاد، تو را وارد یک ریتم روزانه می‌کند: شناخت، تسک، امتیاز و مرحله بعد."
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.08}>
          <LiquidGlassCard className="p-6 md:p-8">
            <p className="text-lg leading-10 text-slate-700">
              ایونتوم گیم یک چالش روزانه است. اول مسیرت مشخص می‌شود، بعد هر
              روز با یک روایت کوتاه و یک تسک عملی جلو می‌روی. در طول مسیر XP
              می‌گیری، Stars جمع می‌کنی، آرشیوهای هفتگی را باز می‌کنی و وارد
              مرحله‌های بعدی بازی می‌شوی.
            </p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {highlights.map((item, index) => (
                <GlassCard
                  key={item}
                  variant="subtle"
                  className="p-4 text-center"
                >
                  <span className="font-latin text-xs font-black tracking-[0.2em] text-cyan-600">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-black text-slate-800">{item}</p>
                </GlassCard>
              ))}
            </div>
          </LiquidGlassCard>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}
