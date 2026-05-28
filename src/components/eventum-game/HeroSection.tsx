"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloatingVisual } from "./FloatingVisual";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";

const badges = ["تست مسیر", "چالش ۲۱ روزه", "XP / Stars / Archive"];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <div className="absolute right-[4%] top-8 h-80 w-80 rounded-full bg-[#7C2DFF]/32 blur-3xl" />
      <div className="absolute left-[8%] top-32 h-72 w-72 rounded-full bg-[#22D3EE]/16 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8B4FE]/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl rounded-[2.2rem] border border-[#D8B4FE]/25 bg-[#12001F]/52 p-3 shadow-[0_34px_140px_rgba(0,0,0,0.42),0_0_110px_rgba(124,45,255,0.16)] backdrop-blur-2xl md:rounded-[3rem] md:p-5">
        <GlassCard
          variant="subtle"
          className="mb-5 flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6"
        >
          <div className="font-latin text-sm font-black tracking-[0.28em] text-[#D8B4FE]">
            EVENTUM GAME V2
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#D8B4FE]/20 bg-white/[0.06] px-3 py-1.5 text-xs font-black text-[#E9DFFF] backdrop-blur"
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
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D8B4FE]/25 bg-white/[0.07] px-4 py-2 text-sm font-black text-[#E9DFFF] shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              مسیر شناخت تا حرکت
            </div>
            <h1 className="text-balance max-w-4xl text-4xl font-black leading-[1.2] text-[#F8F5FF] md:text-6xl lg:text-7xl">
              ایونتوم گیم؛ مسیر ۲۱ روزه شناخت، حرکت و رشد
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#BFAFE6] md:text-xl">
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
                <GlassCard
                  key={label}
                  variant="subtle"
                  className="p-4 text-center"
                >
                  <p className="font-latin text-2xl font-black text-[#F8F5FF]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#BFAFE6]">
                    {label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <div className="rounded-[2.8rem] border border-[#D8B4FE]/20 bg-[#080012]/38 p-3 shadow-inner md:p-4">
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
      </div>
    </section>
  );
}
