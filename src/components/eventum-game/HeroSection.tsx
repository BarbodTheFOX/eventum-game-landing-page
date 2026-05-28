"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloatingVisual } from "./FloatingVisual";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";

const badges = ["تست مسیر", "چالش ۲۱ روزه", "XP / Stars"];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-8">
      <div className="absolute right-[4%] top-8 h-80 w-80 rounded-full bg-[#7C2DFF]/30 blur-3xl" />
      <div className="absolute left-[10%] top-28 h-72 w-72 rounded-full bg-[#22D3EE]/14 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8B4FE]/35 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] rounded-[2rem] border border-[#D8B4FE]/25 bg-[#12001F]/56 p-3 shadow-[0_34px_140px_rgba(0,0,0,0.42),0_0_110px_rgba(124,45,255,0.16)] backdrop-blur-2xl md:rounded-[2.5rem] md:p-5">
        <GlassCard
          variant="subtle"
          className="mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4"
        >
          <div className="font-latin text-xs font-black tracking-[0.3em] text-[#D8B4FE] md:text-sm">
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

        <div className="grid items-center gap-10 px-1 pb-3 pt-1 md:px-5 md:pb-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[600px] text-right lg:mx-0"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D8B4FE]/25 bg-white/[0.07] px-4 py-2 text-sm font-black text-[#E9DFFF] shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              مسیر شناخت تا حرکت
            </div>
            <h1 className="max-w-[600px] text-balance text-[2.55rem] font-black leading-[1.12] text-[#F8F5FF] md:text-[4.2rem] lg:text-[4.75rem]">
              ایونتوم گیم؛
              <br />
              مسیر ۲۱ روزه
              <br />
              شناخت، حرکت و رشد
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-[#BFAFE6] md:text-lg md:leading-9">
              یک بازی برای شناخت الگوی ذهنی، پیدا کردن مسیر، و ورود به یک چالش
              واقعی.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-8 grid max-w-[520px] grid-cols-3 gap-3">
              {[
                ["۱۸", "سؤال کوتاه"],
                ["۳", "مسیر شروع"],
                ["۲۱", "روز بازی"],
              ].map(([value, label]) => (
                <GlassCard
                  key={label}
                  variant="subtle"
                  className="px-3 py-4 text-center md:px-4"
                >
                  <p className="font-latin text-2xl font-black text-[#F8F5FF] md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-[#BFAFE6] md:text-xs">
                    {label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <div className="mx-auto w-full max-w-[620px] rounded-[2.25rem] border border-[#D8B4FE]/20 bg-[#080012]/40 p-3 shadow-inner md:p-4 lg:max-w-none">
            <FloatingVisual
              fileName="hero-main.png"
              alt="تصویر مفهومی ایونتوم گیم"
              width={1672}
              height={941}
              priority
              imageClassName="aspect-[16/10] h-auto"
              objectPosition="object-center"
              chips={["مسیر شخصی", "تسک روزانه"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
