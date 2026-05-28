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
        <span className="font-latin grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#D8B4FE]/28 bg-white/[0.07] text-sm font-black text-[#67E8F9] shadow-[0_0_26px_rgba(34,211,238,0.12)]">
          {icon}
        </span>
        <div>
          <h3 className="font-latin text-lg font-black text-[#F8F5FF]">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#BFAFE6]">{text}</p>
        </div>
      </div>
    </GlassCard>
  );
}
