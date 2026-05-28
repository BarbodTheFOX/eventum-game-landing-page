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
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-6 font-black text-[#BFAFE6]/70 backdrop-blur-xl sm:w-auto"
        >
          پیام به ادمین ایونتوم
        </button>
        <p className="mt-2 text-xs font-bold text-[#BFAFE6]/75">
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
      className="eventum-focus gradient-button inline-flex min-h-14 w-full items-center justify-center rounded-full px-6 font-black text-white transition hover:-translate-y-0.5 sm:w-auto"
    >
      پیام به ادمین ایونتوم
    </a>
  );
}
