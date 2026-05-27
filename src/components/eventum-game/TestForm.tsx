"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { eventumGameQuestions } from "@/data/eventumGameQuestions";
import {
  calculateEventumGameResult,
  type EventumGameAnswers,
  type LikertScore,
} from "@/lib/eventumGameScoring";
import {
  submitEventumGameResult,
  type EventumGameSubmissionPayload,
} from "@/lib/submitEventumGameResult";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { ResultCard } from "./ResultCard";
import { TestShell } from "./TestShell";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function TestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState<Partial<EventumGameAnswers>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultPayload, setResultPayload] =
    useState<EventumGameSubmissionPayload | null>(null);
  const [submissionWarning, setSubmissionWarning] = useState<string>();

  const currentQuestion = eventumGameQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = ((currentIndex + 1) / eventumGameQuestions.length) * 100;
  const isLastQuestion = currentIndex === eventumGameQuestions.length - 1;

  const infoError = useMemo(() => {
    if (!name.trim()) return "نام را وارد کن.";
    if (!emailPattern.test(email.trim())) return "ایمیل معتبر وارد کن.";
    if (!telegramId.trim()) return "آیدی تلگرام را وارد کن.";
    if (!consent) return "برای ادامه باید ذخیره اطلاعات را بپذیری.";
    return "";
  }, [consent, email, name, telegramId]);

  if (resultPayload) {
    return <ResultCard payload={resultPayload} warning={submissionWarning} />;
  }

  function updateAnswer(value: LikertScore) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));
    setError("");
  }

  function goBack() {
    setError("");
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function goNext() {
    if (!answers[currentQuestion.id]) {
      setError("برای رفتن به سؤال بعدی، یک گزینه را انتخاب کن.");
      return;
    }
    setError("");
    setCurrentIndex((index) =>
      Math.min(index + 1, eventumGameQuestions.length - 1),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (infoError) {
      setError(infoError);
      return;
    }

    if (!answers[currentQuestion.id]) {
      setError("برای ثبت تست، به سؤال فعلی پاسخ بده.");
      return;
    }

    if (answeredCount !== eventumGameQuestions.length) {
      setError("هنوز به همه ۱۸ سؤال پاسخ نداده‌ای.");
      return;
    }

    const completeAnswers = answers as EventumGameAnswers;
    const result = calculateEventumGameResult(completeAnswers);
    const payload: EventumGameSubmissionPayload = {
      name: name.trim(),
      email: email.trim(),
      telegramId: telegramId.trim(),
      answers: completeAnswers,
      ...result,
      submittedAt: new Date().toISOString(),
      status: "submitted",
      userAgent:
        typeof navigator === "undefined" ? "unknown" : navigator.userAgent,
      source: "eventum-game-landing",
    };

    setIsSubmitting(true);
    setSubmissionWarning(undefined);

    try {
      const response = await submitEventumGameResult(payload);
      if (!response.saved && response.warning) {
        console.warn("Eventum Game submission warning:", response.warning);
        setSubmissionWarning(
          "نتیجه تست نمایش داده شد. اگر ثبت نهایی انجام نشد، نتیجه را کپی کن و برای ادمین بفرست.",
        );
      }
    } catch (error) {
      console.warn("Eventum Game submission failed:", error);
      setSubmissionWarning(
        "نتیجه تست نمایش داده شد. اگر ثبت نهایی انجام نشد، نتیجه را کپی کن و برای ادمین بفرست.",
      );
    } finally {
      setResultPayload(payload);
      setIsSubmitting(false);
    }
  }

  return (
    <TestShell>
      <form onSubmit={handleSubmit} className="space-y-6">
        <GlassCard variant="subtle" className="p-5 md:p-7">
          <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <p className="font-latin text-xs font-black tracking-[0.24em] text-violet-600">
                PLAYER INFO
              </p>
              <h2 className="mt-1 text-xl font-black text-slate-950">
                اطلاعات شروع بازی
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-500">
              اطلاعات شما فقط برای ثبت نتیجه تست و ادامه بازی ایونتوم استفاده
              می‌شود.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Field label="نام">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="eventum-focus min-h-14 w-full rounded-[1.25rem] border border-white/75 bg-white/62 px-4 text-right text-slate-950 shadow-inner backdrop-blur-xl transition"
                placeholder="نام تو"
              />
            </Field>
            <Field label="ایمیل">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                dir="ltr"
                className="eventum-focus min-h-14 w-full rounded-[1.25rem] border border-white/75 bg-white/62 px-4 text-left text-slate-950 shadow-inner backdrop-blur-xl transition"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="آیدی تلگرام">
              <input
                value={telegramId}
                onChange={(event) => setTelegramId(event.target.value)}
                required
                dir="ltr"
                className="eventum-focus min-h-14 w-full rounded-[1.25rem] border border-white/75 bg-white/62 px-4 text-left text-slate-950 shadow-inner backdrop-blur-xl transition"
                placeholder="@eventum"
              />
            </Field>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-[1.25rem] border border-white/70 bg-white/42 p-4 text-sm leading-7 text-slate-700 backdrop-blur-xl">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-1 h-5 w-5 rounded border-violet-300 accent-violet-700"
              required
            />
            <span>
              می‌پذیرم که اطلاعاتم برای ثبت نتیجه تست و ادامه بازی ایونتوم
              ذخیره شود.
            </span>
          </label>
        </GlassCard>

        <div className="sticky top-3 z-20">
          <ProgressBar
            value={progress}
            label={`سؤال ${currentIndex + 1} از ${eventumGameQuestions.length}`}
            meta={`${answeredCount} پاسخ ثبت شده`}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <QuestionCard
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              onChange={updateAnswer}
            />
          </motion.div>
        </AnimatePresence>

        {error ? (
          <p className="rounded-[1.25rem] border border-rose-200 bg-rose-50/88 px-4 py-3 text-sm font-black text-rose-700">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={currentIndex === 0 || isSubmitting}
            className="eventum-focus min-h-14 rounded-full border border-violet-200 bg-white/68 px-6 font-black text-slate-800 shadow-[0_16px_44px_rgba(76,29,149,0.08)] backdrop-blur-xl transition hover:bg-white/88 disabled:cursor-not-allowed disabled:opacity-45"
          >
            قبلی
          </button>
          {isLastQuestion ? (
            <GradientButton
              type="submit"
              disabled={
                isSubmitting ||
                Boolean(infoError) ||
                answeredCount !== eventumGameQuestions.length
              }
              className="sm:min-w-44"
            >
              {isSubmitting ? "در حال ثبت..." : "نمایش نتیجه"}
            </GradientButton>
          ) : (
            <GradientButton onClick={goNext} disabled={isSubmitting} className="sm:min-w-36">
              بعدی
            </GradientButton>
          )}
        </div>
      </form>
    </TestShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}
