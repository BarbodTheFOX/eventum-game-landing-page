"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EventumVisual } from "./EventumVisual";
import { GradientButton } from "./GradientButton";

const featureBadges = ["تست مسیر", "XP / Stars", "چالش روزانه"];

const stats = [
  ["۱۸", "سؤال کوتاه"],
  ["۳", "مسیر شروع"],
  ["۲۱", "روز چالش"],
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="eventum-hero-title"
      className="relative overflow-hidden px-5 pb-14 pt-5 md:px-8 md:pb-24 md:pt-8"
    >
      <div className="absolute right-[8%] top-20 h-80 w-80 rounded-full bg-[#7C2DFF]/24 blur-3xl" />
      <div className="absolute left-[10%] top-28 h-72 w-72 rounded-full bg-[#22D3EE]/12 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D8B4FE]/30 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-[#D8B4FE]/20 bg-[#12001F]/54 p-3 shadow-[0_34px_140px_rgba(0,0,0,0.38),0_0_100px_rgba(124,45,255,0.13)] backdrop-blur-2xl md:rounded-[2.75rem] md:p-4">
        <div className="pointer-events-none absolute inset-y-10 right-8 w-1/2 rounded-full bg-[#7C2DFF]/10 blur-3xl" />
        <HeroHeader />

        <div className="relative grid items-center gap-10 px-2 py-7 md:px-8 md:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:py-14">
          <HeroContent shouldReduceMotion={shouldReduceMotion} />
          <HeroVisual shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>
    </section>
  );
}

function HeroHeader() {
  return (
    <header className="relative flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur-xl md:px-6">
      <div className="text-right">
        <p className="font-latin text-xs font-black tracking-[0.32em] text-[#D8B4FE] md:text-sm">
          EVENTUM GAME V2
        </p>
      </div>
      <span className="hidden rounded-full border border-[#D8B4FE]/16 bg-white/[0.045] px-3 py-1.5 font-latin text-[10px] font-black tracking-[0.22em] text-[#BFAFE6] sm:inline-flex">
        GAME PORTAL
      </span>
    </header>
  );
}

function HeroContent({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[610px] text-right lg:mx-0"
    >
      <div className="pointer-events-none absolute -right-10 top-12 h-56 w-56 rounded-full bg-[#7C2DFF]/16 blur-3xl" />

      <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8B4FE]/18 bg-white/[0.055] px-3.5 py-2 text-xs font-black text-[#E9DFFF] backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
        مسیر شناخت تا حرکت
      </div>

      <h1
        id="eventum-hero-title"
        className="relative max-w-[600px] text-balance text-[clamp(2.65rem,7vw,5.35rem)] font-black leading-[1.03] tracking-[-0.01em] text-[#F8F5FF] md:leading-[0.98]"
      >
        مسیر ۲۱ روزه
        <br />
        شناخت، حرکت
        <br />
        و رشد
      </h1>

      <p className="relative mt-6 max-w-[640px] text-base leading-8 text-[#BFAFE6] md:text-lg md:leading-9">
        با یک تست کوتاه شروع کن، مسیر ذهنی خودت رو ببین، چالش‌های روزانه بگیر و
        رشدت رو مرحله‌به‌مرحله دنبال کن.
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2.5">
        {featureBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-[#D8B4FE]/16 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-[#E9DFFF]/90 backdrop-blur"
          >
            {badge}
          </span>
        ))}
      </div>

      <HeroActions />
      <HeroStats />
    </motion.div>
  );
}

function HeroActions() {
  return (
    <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
      <GradientButton
        href="/eventum-game/test"
        className="w-full px-8 shadow-[0_24px_74px_rgba(124,45,255,0.46)] hover:scale-[1.015] sm:w-auto"
      >
        شروع تست
      </GradientButton>
      <GradientButton
        href="#how-it-works"
        variant="glass"
        className="w-full border-white/10 bg-white/[0.04] px-7 text-[#E9DFFF] hover:scale-[1.01] hover:border-[#D8B4FE]/30 hover:bg-white/[0.07] sm:w-auto"
      >
        بازی چطور کار می‌کند؟
      </GradientButton>
    </div>
  );
}

function HeroStats() {
  return (
    <div
      aria-label="خلاصه مسیر ایونتوم گیم"
      className="relative mt-7 grid max-w-[560px] grid-cols-3 overflow-hidden rounded-[1.5rem] border border-[#D8B4FE]/16 bg-white/[0.045] backdrop-blur-xl"
    >
      {stats.map(([value, label], index) => (
        <div
          key={label}
          className={`min-h-[74px] px-3 py-3.5 text-center ${
            index === 0 ? "" : "border-r border-white/10"
          }`}
        >
          <p className="font-latin text-xl font-black leading-none text-[#F8F5FF] md:text-2xl">
            {value}
          </p>
          <p className="mt-2 text-[11px] font-bold leading-5 text-[#BFAFE6] md:text-xs">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function HeroVisual({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="relative mx-auto w-full max-w-[650px] lg:max-w-none"
    >
      <div className="absolute inset-5 rounded-[3rem] bg-gradient-to-br from-[#7C2DFF]/38 via-[#A855F7]/10 to-[#22D3EE]/18 blur-3xl" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.01 }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative rounded-[2.2rem] border border-[#D8B4FE]/18 bg-[#080012]/44 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_110px_rgba(0,0,0,0.32)] backdrop-blur-xl md:p-4"
      >
        <div className="relative overflow-hidden rounded-[1.8rem]">
          <EventumVisual
            fileName="hero-main.png"
            alt="تصویر مفهومی ایونتوم گیم"
            width={1672}
            height={941}
            priority
            objectPosition="object-center"
            className="aspect-[16/10] h-auto w-full rounded-[1.8rem] border border-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080012]/70 via-[#080012]/18 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_80%_64%,rgba(168,85,247,0.16),transparent_34%)]" />
        </div>

        <FloatingBadge
          className="right-4 top-5"
          delay={0}
          label="01 مسیر شخصی"
          shouldReduceMotion={shouldReduceMotion}
        />
        <FloatingBadge
          className="left-4 bottom-5"
          delay={0.75}
          label="02 چالش روزانه"
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.div>
    </motion.div>
  );
}

function FloatingBadge({
  label,
  className = "",
  delay = 0,
  shouldReduceMotion,
}: {
  label: string;
  className?: string;
  delay?: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }
      }
      className={`absolute hidden rounded-full border border-[#D8B4FE]/18 bg-[#080012]/58 px-3.5 py-2 text-xs font-black text-[#F8F5FF] shadow-[0_16px_46px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:block ${className}`}
    >
      {label}
    </motion.div>
  );
}
