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
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-slate-200 px-6 font-bold text-slate-500 sm:w-auto"
        >
          پیام به ادمین ایونتوم
        </button>
        <p className="mt-2 text-xs text-slate-500">
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
      className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-slate-950 px-6 font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-950 sm:w-auto"
    >
      پیام به ادمین ایونتوم
    </a>
  );
}
