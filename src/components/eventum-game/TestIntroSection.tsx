import { AnimatedReveal } from "./AnimatedReveal";
import { FloatingVisual } from "./FloatingVisual";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

export function TestIntroSection() {
  return (
    <SectionShell className="pb-24 md:pb-36">
      <AnimatedReveal>
        <GlassCard
          variant="elevated"
          gradientBorder
          className="overflow-hidden p-4 md:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <FloatingVisual
              fileName="test-visual.png"
              alt="تصویر شروع تست ایونتوم گیم"
              width={860}
              height={620}
              chips={["۱۸ سؤال", "نتیجه فوری"]}
            />
            <div className="p-2 text-right md:p-6">
              <p className="font-latin mb-3 text-sm font-black tracking-[0.24em] text-violet-600">
                TEST GATE
              </p>
              <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                حالا مسیرت را پیدا کن
              </h2>
              <GlassCard variant="subtle" className="mt-6 p-5">
                <p className="text-lg leading-9 text-slate-700">
                  این تست برای برچسب زدن به تو نیست. فقط کمک می‌کند مسیر شروع
                  تو در بازی مشخص شود.
                </p>
              </GlassCard>
              <div className="mt-7">
                <GradientButton href="/eventum-game/test" className="w-full sm:w-auto">
                  شروع تست
                </GradientButton>
              </div>
            </div>
          </div>
        </GlassCard>
      </AnimatedReveal>
    </SectionShell>
  );
}
