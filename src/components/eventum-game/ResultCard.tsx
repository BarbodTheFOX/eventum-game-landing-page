"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { eventumGamePaths } from "@/data/eventumGamePaths";
import type { EventumGameSubmissionPayload } from "@/lib/submitEventumGameResult";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";
import { TelegramCTA } from "./TelegramCTA";

type ResultCardProps = {
  payload: EventumGameSubmissionPayload;
  warning?: string;
};

export function ResultCard({ payload, warning }: ResultCardProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const mainPath = eventumGamePaths[payload.mainPath];
  const secondaryPath = eventumGamePaths[payload.secondaryPath];
  const adminUrl = process.env.NEXT_PUBLIC_EVENTUM_ADMIN_TELEGRAM_URL;

  const copyText = useMemo(
    () =>
      [
        "سلام، نتیجه تست ایونتوم گیم من:",
        `نام: ${payload.name}`,
        `تلگرام: ${payload.telegramId}`,
        `مسیر اصلی: ${mainPath.resultLabel}`,
        `گرایش دوم: ${secondaryPath.resultLabel}`,
        `Strategist: ${payload.strategistScore}`,
        `Executor: ${payload.executorScore}`,
        `Visionary: ${payload.visionaryScore}`,
      ].join("\n"),
    [mainPath.resultLabel, payload, secondaryPath.resultLabel],
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <GlassCard
        variant="elevated"
        gradientBorder
        className="overflow-hidden border-[#D8B4FE]/30 bg-white/[0.075] p-5 shadow-[0_36px_120px_rgba(0,0,0,0.34)] md:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7C2DFF]/24 blur-[92px]" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-[#22D3EE]/14 blur-[86px]" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="p-0 md:p-2">
            <p className="font-latin text-sm font-black tracking-[0.24em] text-[#67E8F9]">
              RESULT REVEAL
            </p>
            <h2 className="mt-3 max-w-[640px] text-balance text-3xl font-black leading-tight text-[#F8F5FF] md:text-5xl">
              {payload.name}، نتیجه تستت مشخص شد.
            </h2>

            {warning ? (
              <p className="mt-4 max-w-[620px] rounded-2xl border border-amber-200/18 bg-amber-300/8 px-4 py-2.5 text-xs leading-6 text-amber-100/90">
                {warning}
              </p>
            ) : null}

            <div className="mt-7 grid max-w-[640px] gap-4 sm:grid-cols-2">
              <PathResultCard
                label="مسیر اصلی تو:"
                value={mainPath.resultLabel}
                active
              />
              <PathResultCard
                label="گرایش دوم تو:"
                value={secondaryPath.resultLabel}
              />
            </div>

            <p className="mt-7 max-w-[660px] text-base leading-9 text-[#E9DFFF]">
              {mainPath.description}
            </p>

            {payload.isBlended ? (
              <p className="mt-5 max-w-[660px] rounded-[1.35rem] border border-[#67E8F9]/24 bg-[#22D3EE]/10 px-4 py-3 text-sm leading-7 text-cyan-100">
                امتیازهای تو به هم نزدیک هستند؛ یعنی ترکیبی از دو مسیر در تو
                فعال است. با این حال، مسیر اصلی تو براساس بالاترین امتیاز مشخص
                شده است.
              </p>
            ) : null}

            <p className="mt-7 max-w-[620px] font-black leading-8 text-[#F8F5FF]">
              برای ثبت کامل نتیجه و شروع بازی، به ادمین ایونتوم اسپیس پیام بده.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TelegramCTA adminUrl={adminUrl} />
              <button
                type="button"
                onClick={handleCopy}
                className="eventum-focus inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#D8B4FE]/28 bg-white/[0.065] px-6 font-black text-[#F8F5FF] shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#D8B4FE]/45 hover:bg-white/[0.095] sm:w-auto"
              >
                {copyState === "copied"
                  ? "نتیجه کپی شد"
                  : copyState === "failed"
                    ? "کپی انجام نشد"
                    : "کپی نتیجه تست"}
              </button>
            </div>
          </div>

          <div className="space-y-4 lg:max-w-[360px] lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D8B4FE]/24 bg-gradient-to-br from-white/[0.09] via-[#7C2DFF]/12 to-[#22D3EE]/10 p-4 shadow-[0_28px_84px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-8 top-8 h-28 rounded-full bg-[#C084FC]/20 blur-3xl" />
              <EventumVisual
                fileName="result-visual.png"
                alt="تصویر نتیجه تست ایونتوم گیم"
                width={720}
                height={880}
                fit="contain"
                className="relative aspect-[4/5] max-h-[440px] w-full rounded-[1.5rem]"
              />
            </div>
            <div className="grid gap-3">
              <ScoreBar label="Strategist" value={payload.strategistScore} />
              <ScoreBar label="Executor" value={payload.executorScore} />
              <ScoreBar label="Visionary" value={payload.visionaryScore} />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function PathResultCard({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[1.35rem] border p-4 backdrop-blur-xl transition ${
        active
          ? "border-[#C084FC]/46 bg-[#7C2DFF]/18 shadow-[0_18px_58px_rgba(124,45,255,0.2)]"
          : "border-white/12 bg-white/[0.055]"
      }`}
    >
      <p className="text-sm font-bold text-[#BFAFE6]">{label}</p>
      <p className="mt-2 text-2xl font-black text-[#F8F5FF]">{value}</p>
    </div>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const percent = (value / 30) * 100;

  return (
    <div className="rounded-[1.2rem] border border-[#D8B4FE]/18 bg-white/[0.06] p-4 backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-latin text-sm font-black text-[#E9DFFF]">{label}</p>
        <p className="font-latin text-lg font-black text-[#F8F5FF]">{value}</p>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.09]">
        <div
          className="h-full rounded-full bg-gradient-to-l from-[#22D3EE] via-[#8B5CF6] to-[#A855F7] shadow-[0_0_18px_rgba(192,132,252,0.36)]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
