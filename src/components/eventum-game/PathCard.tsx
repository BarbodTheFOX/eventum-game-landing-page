import type { EventumGamePathConfig } from "@/data/eventumGamePaths";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";

type PathCardProps = {
  path: EventumGamePathConfig;
};

export function PathCard({ path }: PathCardProps) {
  return (
    <GlassCard
      variant="interactive"
      gradientBorder
      className="group mx-auto flex h-full min-h-[528px] w-full max-w-[390px] flex-col overflow-hidden rounded-[2.25rem] p-2.5 transition duration-300 md:min-h-[558px] md:p-3"
    >
      <div className="relative h-[274px] overflow-hidden rounded-[1.65rem] border border-[#D8B4FE]/18 bg-[#080012]/72 md:h-[300px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${path.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(216,180,254,0.24),transparent_36%),radial-gradient(circle_at_18%_72%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(180deg,rgba(8,0,18,0),rgba(8,0,18,0.72))]" />
        <div className="absolute left-5 top-8 h-36 w-36 rounded-full bg-[#22D3EE]/16 blur-3xl" />
        <div className="absolute right-4 bottom-8 h-44 w-44 rounded-full bg-[#7C2DFF]/34 blur-3xl" />
        <EventumVisual
          fileName={path.image}
          alt={`تصویر مسیر ${path.persianLabel}`}
          width={720}
          height={820}
          fit={path.imageFit ?? "cover"}
          objectPosition={path.imagePosition ?? "object-[center_38%]"}
          className="relative h-full w-full rounded-[1.65rem] transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080012]/92 via-[#080012]/42 to-transparent" />
      </div>

      <div className="relative -mt-7 mx-2 flex-1 rounded-[1.65rem] border border-[#D8B4FE]/24 bg-[#080012]/72 p-5 shadow-[0_22px_58px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-latin text-xs font-black tracking-[0.2em] text-[#67E8F9] md:text-sm">
              {path.name}
            </p>
            <h3 className="mt-2 text-[1.6rem] font-black leading-9 text-[#F8F5FF] md:text-[1.82rem]">
              {path.persianLabel}
            </h3>
          </div>
          <span className="font-latin grid h-12 w-12 shrink-0 place-items-center rounded-[1.15rem] bg-gradient-to-br from-[#7C2DFF] via-[#A855F7] to-[#22D3EE] text-sm font-black text-white shadow-[0_16px_42px_rgba(124,45,255,0.36)] md:h-[52px] md:w-[52px]">
            {path.icon}
          </span>
        </div>

        <div className="mt-5 space-y-3 text-[0.9rem] leading-7 text-[#BFAFE6]">
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
