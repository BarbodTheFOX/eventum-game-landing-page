import { GlassCard } from "./GlassCard";

type MechanicCardProps = {
  title: string;
  text: string;
  icon: string;
};

export function MechanicCard({ title, text, icon }: MechanicCardProps) {
  return (
    <GlassCard variant="interactive" className="h-full p-5">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/70 text-lg shadow-sm">
          {icon}
        </span>
        <div>
          <h3 className="font-latin text-lg font-black text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
        </div>
      </div>
    </GlassCard>
  );
}
