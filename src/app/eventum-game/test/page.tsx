import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/eventum-game/GlassCard";
import { TestForm } from "@/components/eventum-game/TestForm";

export const metadata: Metadata = {
  title: "تست مسیر ایونتوم گیم",
  description:
    "۱۸ سؤال کوتاه برای مشخص شدن مسیر شروع شما در ایونتوم گیم.",
};

export default function EventumGameTestPage() {
  return (
    <main
      dir="rtl"
      className="eventum-page min-h-screen overflow-hidden px-5 py-8 md:px-8 md:py-12"
    >
      <div className="pointer-events-none fixed left-10 top-10 h-72 w-72 rounded-full bg-[#22D3EE]/14 blur-3xl" />
      <div className="pointer-events-none fixed right-10 top-20 h-80 w-80 rounded-full bg-[#7C2DFF]/26 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <Link
          href="/eventum-game"
          className="eventum-focus mb-8 inline-flex rounded-full border border-[#D8B4FE]/24 bg-white/[0.07] px-4 py-2 text-sm font-black text-[#E9DFFF] shadow-sm backdrop-blur-xl transition hover:bg-white/[0.1]"
        >
          بازگشت به صفحه بازی
        </Link>
        <GlassCard
          variant="subtle"
          className="mb-7 overflow-hidden p-5 md:p-8"
        >
          <header className="grid gap-4 text-right md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-latin mb-3 text-sm font-black tracking-[0.24em] text-[#C084FC]">
                EVENTUM GAME TEST
              </p>
              <h1 className="text-balance text-3xl font-black leading-tight text-[#F8F5FF] md:text-5xl">
                تست مسیر ایونتوم گیم
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#BFAFE6] md:text-lg">
                ۱۸ سؤال کوتاه. پاسخ‌ها را براساس وضعیت واقعی خودت انتخاب کن،
                نه جواب ایده‌آل.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {["۱۸ سؤال", "۳ مسیر", "نتیجه فوری"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8B4FE]/22 bg-white/[0.07] px-3 py-2 text-xs font-black text-[#E9DFFF] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>
        </GlassCard>
        <TestForm />
      </div>
    </main>
  );
}
