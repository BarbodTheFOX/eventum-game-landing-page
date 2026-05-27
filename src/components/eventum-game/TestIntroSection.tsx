import Link from "next/link";
import { EventumVisual } from "./EventumVisual";
import { GlassCard } from "./GlassCard";
import { MotionReveal } from "./MotionReveal";

export function TestIntroSection() {
  return (
    <section className="px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <GlassCard className="grid items-center gap-8 overflow-hidden p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="relative order-2 md:order-1">
              <EventumVisual
                fileName="test-visual.png"
                alt="تصویر شروع تست ایونتوم گیم"
                width={860}
                height={620}
                className="aspect-[4/3] w-full rounded-[2rem]"
              />
            </div>
            <div className="order-1 text-right md:order-2">
              <p className="mb-3 text-sm font-bold tracking-[0.22em] text-violet-600">
                تست مسیر
              </p>
              <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                حالا مسیرت را پیدا کن
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-9 text-slate-600">
                این تست برای برچسب زدن به تو نیست. فقط کمک می‌کند مسیر شروع تو
                در بازی مشخص شود.
              </p>
              <Link
                href="/eventum-game/test"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-violet-700 px-8 text-base font-bold text-white shadow-[0_18px_45px_rgba(109,40,217,0.24)] transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                شروع تست
              </Link>
            </div>
          </GlassCard>
        </MotionReveal>
      </div>
    </section>
  );
}
