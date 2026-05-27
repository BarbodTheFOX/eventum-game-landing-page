import type { Metadata } from "next";
import Link from "next/link";
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
      className="eventum-page min-h-screen px-5 py-8 md:px-8 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <Link
          href="/eventum-game"
          className="mb-8 inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 backdrop-blur transition hover:bg-white"
        >
          بازگشت به صفحه بازی
        </Link>
        <header className="mb-8 text-right">
          <p className="mb-3 text-sm font-bold tracking-[0.22em] text-violet-600">
            Eventum Game Test
          </p>
          <h1 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            تست مسیر ایونتوم گیم
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            ۱۸ سؤال کوتاه. پاسخ‌ها را براساس وضعیت واقعی خودت انتخاب کن، نه
            جواب ایده‌آل.
          </p>
        </header>
        <TestForm />
      </div>
    </main>
  );
}
