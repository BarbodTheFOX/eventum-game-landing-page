type TelegramCTAProps = {
  adminUrl?: string;
};

export function TelegramCTA({ adminUrl }: TelegramCTAProps) {
  if (!adminUrl) {
    return (
      <div>
        <button
          type="button"
          disabled
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-slate-200/90 px-6 font-black text-slate-500 sm:w-auto"
        >
          پیام به ادمین ایونتوم
        </button>
        <p className="mt-2 text-xs font-bold text-slate-500">
          لینک ادمین هنوز تنظیم نشده است.
        </p>
      </div>
    );
  }

  return (
    <a
      href={adminUrl}
      target="_blank"
      rel="noreferrer"
      className="eventum-focus inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gradient-to-l from-slate-950 via-violet-950 to-violet-700 px-6 font-black text-white shadow-[0_20px_54px_rgba(76,29,149,0.24)] transition hover:-translate-y-0.5 sm:w-auto"
    >
      پیام به ادمین ایونتوم
    </a>
  );
}
