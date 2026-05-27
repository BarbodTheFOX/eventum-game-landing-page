"use client";

import { motion } from "framer-motion";
import type { EventumGameQuestion } from "@/data/eventumGameQuestions";
import type { LikertScore } from "@/lib/eventumGameScoring";
import { GlassCard } from "./GlassCard";

const scale: { value: LikertScore; label: string; hint: string }[] = [
  { value: 1, label: "کاملاً مخالفم", hint: "اصلاً شبیه من نیست" },
  { value: 2, label: "مخالفم", hint: "کمتر درباره من صدق می‌کند" },
  { value: 3, label: "نه موافقم نه مخالفم", hint: "میانه و وابسته به شرایط" },
  { value: 4, label: "موافقم", hint: "تا حد زیادی شبیه من است" },
  { value: 5, label: "کاملاً موافقم", hint: "کاملاً با وضعیت من جور است" },
];

type QuestionCardProps = {
  question: EventumGameQuestion;
  value?: LikertScore;
  onChange: (value: LikertScore) => void;
};

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  return (
    <GlassCard variant="elevated" gradientBorder className="p-5 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="font-latin rounded-full border border-white/70 bg-white/52 px-3 py-1 text-xs font-black tracking-[0.18em] text-violet-600">
          Q{String(question.id).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-violet-300/80 to-transparent" />
      </div>
      <h2 className="text-balance text-xl font-black leading-9 text-slate-950 md:text-3xl md:leading-[1.55]">
        {question.text}
      </h2>
      <div className="mt-8 grid gap-3">
        {scale.map((item, index) => {
          const isSelected = value === item.value;

          return (
            <motion.button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.035 }}
              className={`eventum-focus group flex min-h-16 items-center justify-between gap-4 rounded-[1.35rem] border px-4 text-right transition duration-300 ${
                isSelected
                  ? "liquid-border bg-white/78 text-slate-950 shadow-[0_18px_55px_rgba(124,58,237,0.18)]"
                  : "border-white/70 bg-white/46 text-slate-700 backdrop-blur-xl hover:border-violet-200 hover:bg-white/68"
              }`}
              aria-pressed={isSelected}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`font-latin grid h-10 w-10 place-items-center rounded-2xl text-sm font-black transition ${
                    isSelected
                      ? "bg-gradient-to-br from-violet-600 to-cyan-500 text-white"
                      : "bg-white/70 text-slate-500 group-hover:text-violet-700"
                  }`}
                >
                  {item.value}
                </span>
                <span>
                  <span className="block font-black">{item.label}</span>
                  <span className="mt-0.5 block text-xs font-medium text-slate-500">
                    {item.hint}
                  </span>
                </span>
              </span>
              {isSelected ? (
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
                  انتخاب شد
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </GlassCard>
  );
}
