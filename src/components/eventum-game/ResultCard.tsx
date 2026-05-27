"use client";

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
    <GlassCard className="overflow-hidden p-5 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-violet-600">
            نتیجه تست
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
            {payload.name}، نتیجه تستت مشخص شد.
          </h2>

          {warning ? (
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-800">
              نتیجه نمایش داده شد، اما ذخیره‌سازی کامل نبود: {warning}
            </p>
          ) : null}

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-violet-100 bg-white/70 p-4">
              <p className="text-sm text-slate-500">مسیر اصلی تو:</p>
              <p className="mt-2 text-2xl font-black text-slate-950">
                {mainPath.resultLabel}
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-white/70 p-4">
              <p className="text-sm text-slate-500">گرایش دوم تو:</p>
              <p className="mt-2 text-2xl font-black text-slate-950">
                {secondaryPath.resultLabel}
              </p>
            </div>
          </div>

          <p className="mt-7 text-base leading-9 text-slate-700">
            {mainPath.description}
          </p>

          {payload.isBlended ? (
            <p className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50/80 px-4 py-3 text-sm leading-7 text-cyan-900">
              امتیازهای تو به هم نزدیک هستند؛ یعنی ترکیبی از دو مسیر در تو فعال
              است. با این حال، مسیر اصلی تو براساس بالاترین امتیاز مشخص شده است.
            </p>
          ) : null}

          <p className="mt-7 font-bold leading-8 text-slate-900">
            برای ثبت کامل نتیجه و شروع بازی، به ادمین ایونتوم اسپیس پیام بده.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TelegramCTA adminUrl={adminUrl} />
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-violet-200 bg-white/75 px-6 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              {copyState === "copied"
                ? "نتیجه کپی شد"
                : copyState === "failed"
                  ? "کپی انجام نشد"
                  : "کپی نتیجه تست"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <EventumVisual
            fileName="result-visual.png"
            alt="تصویر نتیجه تست ایونتوم گیم"
            width={720}
            height={880}
            className="aspect-[4/5] w-full rounded-[2rem]"
          />
          <div className="grid grid-cols-3 gap-2 text-center">
            <Score label="Strategist" value={payload.strategistScore} />
            <Score label="Executor" value={payload.executorScore} />
            <Score label="Visionary" value={payload.visionaryScore} />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/65 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-slate-950">{value}</p>
    </div>
  );
}
