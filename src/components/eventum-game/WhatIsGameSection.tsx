import { GlassCard } from "./GlassCard";
import { MotionReveal } from "./MotionReveal";
import { SectionTitle } from "./SectionTitle";

export function WhatIsGameSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="شناخت بازی" title="ایونتوم گیم چیست؟" />
        <MotionReveal>
          <GlassCard className="relative overflow-hidden p-7 md:p-12">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
            <p className="relative text-lg leading-10 text-slate-700 md:text-2xl md:leading-[2.4]">
              ایونتوم گیم یک چالش روزانه است. اول مسیرت مشخص می‌شود، بعد هر روز
              با یک روایت کوتاه و یک تسک عملی جلو می‌روی. در طول مسیر XP
              می‌گیری، Stars جمع می‌کنی، آرشیوهای هفتگی را باز می‌کنی و وارد
              مرحله‌های بعدی بازی می‌شوی.
            </p>
          </GlassCard>
        </MotionReveal>
      </div>
    </section>
  );
}
