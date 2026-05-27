"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EventumVisual } from "./EventumVisual";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
      <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-right"
        >
          <div className="mb-6 inline-flex rounded-full border border-violet-200 bg-white/60 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur">
            Eventum Game V2
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.35] text-slate-950 md:text-6xl">
            ایونتوم گیم؛ مسیر ۲۱ روزه شناخت، حرکت و رشد
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
            یک بازی ساده برای شناخت الگوی ذهنی‌ات، پیدا کردن مسیرت و شروع یک
            چالش واقعی.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-start">
            <Link
              href="/eventum-game/test"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-slate-950 px-8 text-base font-bold text-white shadow-[0_20px_45px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-violet-950"
            >
              شروع تست
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-violet-200 bg-white/70 px-8 text-base font-bold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white"
            >
              بازی چطور کار می‌کند؟
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: 1, y: [0, -10, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: { duration: 0.7 },
                  scale: { duration: 0.7 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }
          }
          className="relative"
        >
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-violet-300/30 to-cyan-200/30 blur-2xl" />
          <EventumVisual
            fileName="hero-main.png"
            alt="تصویر مفهومی ایونتوم گیم"
            width={980}
            height={980}
            priority
            className="relative w-full rounded-[2.5rem] shadow-[0_35px_120px_rgba(91,33,182,0.16)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
