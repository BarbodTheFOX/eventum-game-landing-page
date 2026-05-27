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
      className="group h-full overflow-hidden p-3"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${path.accent}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.82),transparent_34%),radial-gradient(circle_at_50%_78%,rgba(34,211,238,0.18),transparent_42%)]" />
        <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-4 top-4 z-10 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-black text-slate-700 backdrop-blur-xl">
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
      <div className="relative -mt-8 mx-3 rounded-[1.35rem] border border-white/70 bg-white/72 p-5 shadow-[0_18px_48px_rgba(76,29,149,0.1)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-latin text-sm font-black tracking-[0.12em] text-violet-600">
              {path.name}
            </p>
            <h3 className="mt-1 text-2xl font-black text-slate-950">
              {path.persianLabel}
            </h3>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
            {path.icon}
          </span>
        </div>
        <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
          <p>
            <span className="font-black text-slate-900">دشمن: </span>
            {path.enemy}
          </p>
          <p>
            <span className="font-black text-slate-900">مأموریت: </span>
            {path.mission}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
