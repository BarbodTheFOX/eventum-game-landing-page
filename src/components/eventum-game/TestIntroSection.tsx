import { AnimatedReveal } from "./AnimatedReveal";
import { FloatingVisual } from "./FloatingVisual";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";
import { SectionShell } from "./SectionShell";

export function TestIntroSection() {
  return (
    <SectionShell className="pb-20 md:pb-28">
      <AnimatedReveal>
        <GlassCard
          variant="elevated"
          gradientBorder
          className="overflow-hidden p-5 md:p-8 lg:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="rounded-[2rem] border border-[#D8B4FE]/20 bg-[#080012]/40 p-3 md:rounded-[2.4rem]">
              <FloatingVisual
                fileName="test-visual.png"
                alt="تصویر شروع تست ایونتوم گیم"
                width={860}
                height={620}
                imageClassName="aspect-[16/11]"
                objectPosition="object-center"
                chips={["۱۸ سؤال", "نتیجه فوری"]}
              />
            </div>
            <div className="max-w-[520px] p-1 text-right md:p-3 lg:justify-self-end">
              <p className="font-latin mb-3 text-sm font-black tracking-[0.24em] text-[#C084FC]">
                TEST GATE
              </p>
              <h2 className="text-balance text-3xl font-black leading-tight text-[#F8F5FF] md:text-5xl">
                حالا مسیرت را پیدا کن
              </h2>
              <GlassCard variant="subtle" className="mt-6 p-5 md:p-6">
                <p className="text-base leading-8 text-[#E9DFFF] md:text-lg md:leading-9">
                  این تست برای برچسب زدن به تو نیست؛ فقط کمک می‌کند مسیر شروع
                  تو در بازی مشخص شود.
                </p>
              </GlassCard>
              <div className="mt-8 flex">
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
