import { orderedEventumGamePaths } from "@/data/eventumGamePaths";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";
import { MotionReveal } from "./MotionReveal";
import { SectionTitle } from "./SectionTitle";

export function PathsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="سه مسیر"
          title="کدام الگو در تو فعال‌تر است؟"
          text="هر مسیر یک دشمن اصلی و یک مأموریت عملی دارد."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {orderedEventumGamePaths.map((path, index) => (
            <MotionReveal key={path.type} delay={index * 0.08}>
              <GlassCard className="group h-full overflow-hidden p-4">
                <div
                  className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${path.accent}`}
                >
                  <EventumVisual
                    fileName={path.image}
                    alt={`تصویر مسیر ${path.persianLabel}`}
                    width={720}
                    height={820}
                    className="aspect-[6/5] w-full rounded-[1.5rem] transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-3 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-violet-600">
                        {path.name}
                      </p>
                      <h3 className="mt-1 text-2xl font-black text-slate-950">
                        {path.persianLabel}
                      </h3>
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-l from-violet-300 to-transparent" />
                  </div>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      <span className="font-black text-slate-900">دشمن: </span>
                      {path.enemy}
                    </p>
                    <p>
                      <span className="font-black text-slate-900">
                        مأموریت:{" "}
                      </span>
                      {path.mission}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
