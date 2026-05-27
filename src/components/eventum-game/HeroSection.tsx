"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloatingVisual } from "./FloatingVisual";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";

const badges = ["تست مسیر", "چالش ۲۱ روزه", "XP / Stars / Archive"];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-6 md:px-8 md:pb-28 md:pt-10">
      <div className="absolute right-[8%] top-10 h-72 w-72 rounded-full bg-violet-300/24 blur-3xl" />
      <div className="absolute left-[10%] top-28 h-80 w-80 rounded-full bg-cyan-200/34 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-[2.2rem] border border-white/70 bg-white/26 p-3 shadow-[0_30px_120px_rgba(76,29,149,0.08)] backdrop-blur-xl md:rounded-[3rem] md:p-5">
        <GlassCard
          variant="subtle"
          className="mb-5 flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6"
        >
          <div className="font-latin text-sm font-black tracking-[0.22em] text-violet-700">
            EVENTUM GAME V2
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/70 bg-white/56 px-3 py-1.5 text-xs font-black text-slate-700 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </GlassCard>

        <div className="grid items-center gap-10 px-2 pb-4 pt-3 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 md:px-5 md:pb-7">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-right"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-200/80 bg-white/56 px-4 py-2 text-sm font-black text-violet-700 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              مسیر شناخت تا حرکت
            </div>
            <h1 className="text-balance max-w-4xl text-4xl font-black leading-[1.22] text-slate-950 md:text-6xl lg:text-7xl">
              ایونتوم گیم؛ مسیر ۲۱ روزه شناخت، حرکت و رشد
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
              یک بازی برای شناخت الگوی ذهنی‌ات، پیدا کردن مسیرت و ورود به یک
              چالش واقعی.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GradientButton href="/eventum-game/test" className="w-full sm:w-auto">
                شروع تست
              </GradientButton>
              <GradientButton
                href="#how-it-works"
                variant="glass"
                className="w-full sm:w-auto"
              >
                بازی چطور کار می‌کند؟
              </GradientButton>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["۱۸", "سؤال کوتاه"],
                ["۳", "مسیر شروع"],
                ["۲۱", "روز بازی"],
              ].map(([value, label]) => (
                <GlassCard key={label} variant="subtle" className="p-4 text-center">
                  <p className="font-latin text-2xl font-black text-slate-950">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-500">{label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <FloatingVisual
            fileName="hero-main.png"
            alt="تصویر مفهومی ایونتوم گیم"
            width={980}
            height={980}
            priority
            chips={["مسیر شخصی", "تسک روزانه"]}
          />
        </div>
      </div>
    </section>
  );
}
