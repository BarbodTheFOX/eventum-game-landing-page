import { GlassCard } from "./GlassCard";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <GlassCard
      variant="interactive"
      gradientBorder
      className="group min-h-[132px] p-5 md:p-7"
    >
      <div className="relative flex items-start gap-4 md:gap-5">
        <div className="shrink-0">
          <span className="font-latin grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7C2DFF] to-[#A855F7] text-sm font-black text-white shadow-[0_16px_36px_rgba(124,45,255,0.28)] md:h-14 md:w-14">
            {icon}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-latin text-xs font-black tracking-[0.22em] text-[#67E8F9]">
            STEP {number}
          </p>
          <h3 className="mt-2 text-xl font-black leading-8 text-[#F8F5FF]">
            {title}
          </h3>
          <p className="mt-2 max-w-[560px] text-sm leading-7 text-[#BFAFE6]">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
