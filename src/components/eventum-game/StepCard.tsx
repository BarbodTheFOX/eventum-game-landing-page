import { GlassCard } from "./GlassCard";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <GlassCard variant="interactive" gradientBorder className="group p-5 md:p-6">
      <div className="relative flex gap-4">
        <div className="shrink-0">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg text-white shadow-[0_16px_36px_rgba(15,23,42,0.2)]">
            {icon}
          </span>
        </div>
        <div>
          <p className="font-latin text-xs font-black tracking-[0.22em] text-violet-500">
            STEP {number}
          </p>
          <h3 className="mt-2 text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
