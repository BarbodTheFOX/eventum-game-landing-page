import type { EventumGamePathConfig } from "@/data/eventumGamePaths";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";

type PathCardProps = {
  path: EventumGamePathConfig;
  index: number;
};

export function PathCard({ path, index }: PathCardProps) {
  return (
    <GlassCard
      variant="interactive"
      gradientBorder
      className="group flex h-full flex-col overflow-hidden p-3"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${path.accent}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(216,180,254,0.22),transparent_34%),linear-gradient(180deg,rgba(8,0,18,0.1),rgba(8,0,18,0.64))]" />
        <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-[#22D3EE]/14 blur-3xl" />
        <div className="absolute right-6 bottom-4 h-40 w-40 rounded-full bg-[#7C2DFF]/28 blur-3xl" />
        <div className="absolute right-4 top-4 z-10 rounded-full border border-[#D8B4FE]/25 bg-[#080012]/46 px-3 py-1 text-xs font-black text-[#E9DFFF] backdrop-blur-xl">
          مسیر {String(index + 1).padStart(2, "0")}
        </div>
        <EventumVisual
          fileName={path.image}
          alt={`تصویر مسیر ${path.persianLabel}`}
          width={720}
          height={820}
          fit="contain"
          className="relative h-full w-full rounded-[1.7rem] p-4 transition duration-700 group-hover:scale-[1.025] md:p-5"
        />
      </div>
      <div className="relative -mt-8 mx-3 flex-1 rounded-[1.35rem] border border-[#D8B4FE]/24 bg-[#080012]/58 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-latin text-sm font-black tracking-[0.14em] text-[#67E8F9]">
              {path.name}
            </p>
            <h3 className="mt-1 text-2xl font-black text-[#F8F5FF]">
              {path.persianLabel}
            </h3>
          </div>
          <span className="font-latin grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#7C2DFF] to-[#A855F7] text-sm font-black text-white shadow-[0_14px_36px_rgba(124,45,255,0.32)]">
            {path.icon}
          </span>
        </div>
        <div className="mt-5 space-y-3 text-sm leading-7 text-[#BFAFE6]">
          <p>
            <span className="font-black text-[#F8F5FF]">دشمن: </span>
            {path.enemy}
          </p>
          <p>
            <span className="font-black text-[#F8F5FF]">مأموریت: </span>
            {path.mission}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
