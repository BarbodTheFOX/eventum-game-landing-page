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
        <span className="font-latin rounded-full border border-[#D8B4FE]/22 bg-white/[0.07] px-3 py-1 text-xs font-black tracking-[0.18em] text-[#67E8F9]">
          Q{String(question.id).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-[#D8B4FE]/45 to-transparent" />
      </div>
      <h2 className="text-balance text-xl font-black leading-9 text-[#F8F5FF] md:text-3xl md:leading-[1.55]">
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
                  ? "border-[#D8B4FE]/48 bg-gradient-to-l from-[#7C2DFF]/86 to-[#A855F7]/70 text-white shadow-[0_18px_62px_rgba(124,45,255,0.32)]"
                  : "border-[#D8B4FE]/18 bg-white/[0.055] text-[#E9DFFF] backdrop-blur-xl hover:border-[#D8B4FE]/42 hover:bg-white/[0.09]"
              }`}
              aria-pressed={isSelected}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`font-latin grid h-10 w-10 place-items-center rounded-2xl text-sm font-black transition ${
                    isSelected
                      ? "bg-white/18 text-white"
                      : "bg-white/[0.07] text-[#BFAFE6] group-hover:text-[#67E8F9]"
                  }`}
                >
                  {item.value}
                </span>
                <span>
                  <span className="block font-black">{item.label}</span>
                  <span
                    className={`mt-0.5 block text-xs font-medium ${
                      isSelected ? "text-white/78" : "text-[#BFAFE6]"
                    }`}
                  >
                    {item.hint}
                  </span>
                </span>
              </span>
              {isSelected ? (
                <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-black text-white">
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
