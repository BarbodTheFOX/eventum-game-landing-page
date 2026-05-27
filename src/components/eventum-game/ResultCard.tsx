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
        className="overflow-hidden p-4 md:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="p-1 md:p-2">
            <p className="font-latin text-sm font-black tracking-[0.24em] text-violet-600">
              RESULT REVEAL
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              {payload.name}، نتیجه تستت مشخص شد.
            </h2>

            {warning ? (
              <p className="mt-5 rounded-[1.25rem] border border-amber-200 bg-amber-50/82 px-4 py-3 text-sm leading-7 text-amber-800">
                {warning}
              </p>
            ) : null}

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
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

            <p className="mt-7 text-base leading-9 text-slate-700">
              {mainPath.description}
            </p>

            {payload.isBlended ? (
              <p className="mt-5 rounded-[1.35rem] border border-cyan-200 bg-cyan-50/82 px-4 py-3 text-sm leading-7 text-cyan-900">
                امتیازهای تو به هم نزدیک هستند؛ یعنی ترکیبی از دو مسیر در تو
                فعال است. با این حال، مسیر اصلی تو براساس بالاترین امتیاز مشخص
                شده است.
              </p>
            ) : null}

            <p className="mt-7 font-black leading-8 text-slate-900">
              برای ثبت کامل نتیجه و شروع بازی، به ادمین ایونتوم اسپیس پیام بده.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TelegramCTA adminUrl={adminUrl} />
              <button
                type="button"
                onClick={handleCopy}
                className="eventum-focus inline-flex min-h-14 w-full items-center justify-center rounded-full border border-violet-200 bg-white/68 px-6 font-black text-slate-900 shadow-[0_16px_44px_rgba(76,29,149,0.09)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/86 sm:w-auto"
              >
                {copyState === "copied"
                  ? "نتیجه کپی شد"
                  : copyState === "failed"
                    ? "کپی انجام نشد"
                    : "کپی نتیجه تست"}
              </button>
            </div>
          </div>

          <div className="space-y-4 lg:max-w-sm lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/70 via-violet-50/55 to-cyan-50/70 p-4 shadow-[0_24px_80px_rgba(76,29,149,0.1)] backdrop-blur-xl">
              <EventumVisual
                fileName="result-visual.png"
                alt="تصویر نتیجه تست ایونتوم گیم"
                width={720}
                height={880}
                fit="contain"
                className="aspect-[4/5] max-h-[520px] w-full rounded-[1.5rem]"
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
      className={`rounded-[1.35rem] border p-4 backdrop-blur-xl ${
        active
          ? "liquid-border bg-white/78 shadow-[0_18px_52px_rgba(124,58,237,0.14)]"
          : "border-white/70 bg-white/50"
      }`}
    >
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const percent = (value / 30) * 100;

  return (
    <div className="rounded-[1.2rem] border border-white/70 bg-white/58 p-4 backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-latin text-sm font-black text-slate-700">{label}</p>
        <p className="font-latin text-lg font-black text-slate-950">{value}</p>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/70">
        <div
          className="h-full rounded-full bg-gradient-to-l from-cyan-400 to-violet-600"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
