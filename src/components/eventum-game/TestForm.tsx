"use client";

import { FormEvent, useMemo, useState } from "react";
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
import { QuestionCard } from "./QuestionCard";
import { ResultCard } from "./ResultCard";

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
    };

    setIsSubmitting(true);
    setSubmissionWarning(undefined);

    try {
      const response = await submitEventumGameResult(payload);
      if (response.warning) {
        setSubmissionWarning(response.warning);
      }
    } catch {
      setSubmissionWarning("Could not save to Google Sheets");
    } finally {
      setResultPayload(payload);
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <GlassCard className="p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              نام
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="min-h-14 w-full rounded-2xl border border-white/80 bg-white/80 px-4 text-right text-slate-950 outline-none transition focus:border-violet-400"
              placeholder="نام تو"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              ایمیل
            </span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              dir="ltr"
              className="min-h-14 w-full rounded-2xl border border-white/80 bg-white/80 px-4 text-left text-slate-950 outline-none transition focus:border-violet-400"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              آیدی تلگرام
            </span>
            <input
              value={telegramId}
              onChange={(event) => setTelegramId(event.target.value)}
              required
              dir="ltr"
              className="min-h-14 w-full rounded-2xl border border-white/80 bg-white/80 px-4 text-left text-slate-950 outline-none transition focus:border-violet-400"
              placeholder="@eventum"
            />
          </label>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          اطلاعات شما فقط برای ثبت نتیجه تست و ادامه بازی ایونتوم استفاده
          می‌شود.
        </p>
        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm leading-7 text-slate-700">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-5 w-5 rounded border-violet-300 accent-violet-700"
            required
          />
          <span>
            می‌پذیرم که اطلاعاتم برای ثبت نتیجه تست و ادامه بازی ایونتوم ذخیره
            شود.
          </span>
        </label>
      </GlassCard>

      <div className="rounded-full border border-white/80 bg-white/60 p-2 backdrop-blur">
        <div className="flex items-center justify-between px-2 pb-2 text-sm font-bold text-slate-600">
          <span>
            سؤال {currentIndex + 1} از {eventumGameQuestions.length}
          </span>
          <span>{answeredCount} پاسخ ثبت شده</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-l from-cyan-400 to-violet-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        value={answers[currentQuestion.id]}
        onChange={updateAnswer}
      />

      {error ? (
        <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={currentIndex === 0 || isSubmitting}
          className="min-h-14 rounded-full border border-violet-200 bg-white/75 px-6 font-bold text-slate-800 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
        >
          قبلی
        </button>
        {isLastQuestion ? (
          <button
            type="submit"
            disabled={
              isSubmitting ||
              Boolean(infoError) ||
              answeredCount !== eventumGameQuestions.length
            }
            className="min-h-14 rounded-full bg-slate-950 px-8 font-bold text-white transition hover:bg-violet-950 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {isSubmitting ? "در حال ثبت..." : "نمایش نتیجه"}
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            disabled={isSubmitting}
            className="min-h-14 rounded-full bg-slate-950 px-8 font-bold text-white transition hover:bg-violet-950 disabled:cursor-not-allowed disabled:opacity-45"
          >
            بعدی
          </button>
        )}
      </div>
    </form>
  );
}
