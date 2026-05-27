import type { EventumGameQuestion } from "@/data/eventumGameQuestions";
import type { LikertScore } from "@/lib/eventumGameScoring";
import { GlassCard } from "./GlassCard";

const scale: { value: LikertScore; label: string }[] = [
  { value: 1, label: "کاملاً مخالفم" },
  { value: 2, label: "مخالفم" },
  { value: 3, label: "نه موافقم نه مخالفم" },
  { value: 4, label: "موافقم" },
  { value: 5, label: "کاملاً موافقم" },
];

type QuestionCardProps = {
  question: EventumGameQuestion;
  value?: LikertScore;
  onChange: (value: LikertScore) => void;
};

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  return (
    <GlassCard className="p-5 md:p-8">
      <h2 className="text-xl font-black leading-9 text-slate-950 md:text-2xl">
        {question.text}
      </h2>
      <div className="mt-8 grid gap-3">
        {scale.map((item) => {
          const isSelected = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`flex min-h-14 items-center justify-between rounded-2xl border px-4 text-right transition ${
                isSelected
                  ? "border-violet-500 bg-violet-600 text-white shadow-[0_16px_35px_rgba(109,40,217,0.22)]"
                  : "border-white/80 bg-white/70 text-slate-700 hover:border-violet-200 hover:bg-white"
              }`}
            >
              <span className="font-bold">{item.label}</span>
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-sm font-black ${
                  isSelected
                    ? "bg-white text-violet-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {item.value}
              </span>
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}
