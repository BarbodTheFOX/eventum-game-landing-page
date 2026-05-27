export type PathType = "strategist" | "executor" | "visionary";

export type EventumGameQuestion = {
  id: number;
  text: string;
  path: PathType;
};

export const eventumGameQuestions: EventumGameQuestion[] = [
  // TODO: Replace placeholder question text with the final Eventum Game strategist copy.
  {
    id: 1,
    text: "قبل از شروع یک کار مهم، معمولاً زمان زیادی را صرف تحلیل مسیر می‌کنم.",
    path: "strategist",
  },
  {
    id: 2,
    text: "برای تصمیم گرفتن، دوست دارم تصویر کامل‌تری از مسئله داشته باشم.",
    path: "strategist",
  },
  {
    id: 3,
    text: "گاهی تصمیم‌هایم را باز نگه می‌دارم تا گزینه‌های بیشتری بررسی کنم.",
    path: "strategist",
  },
  {
    id: 4,
    text: "وقتی مسیر روشن باشد، کیفیت حرکت من چند برابر می‌شود.",
    path: "strategist",
  },
  {
    id: 5,
    text: "در کارها بیشتر به ساختار، نقشه و اولویت‌بندی توجه می‌کنم.",
    path: "strategist",
  },
  {
    id: 6,
    text: "چالش من این است که فکر کردن را زودتر به اقدام واقعی تبدیل کنم.",
    path: "strategist",
  },
  // TODO: Replace placeholder question text with the final Eventum Game executor copy.
  {
    id: 7,
    text: "وقتی شروع می‌کنم، معمولاً می‌توانم کار را با انرژی جلو ببرم.",
    path: "executor",
  },
  {
    id: 8,
    text: "برای من اقدام عملی از برنامه‌ریزی طولانی جذاب‌تر است.",
    path: "executor",
  },
  {
    id: 9,
    text: "گاهی درست قبل از شروع، در ورود به کار تعلل می‌کنم.",
    path: "executor",
  },
  {
    id: 10,
    text: "خروجی واقعی گرفتن از کارها برایم اهمیت زیادی دارد.",
    path: "executor",
  },
  {
    id: 11,
    text: "اگر ریتم روزانه داشته باشم، بهتر و پایدارتر پیش می‌روم.",
    path: "executor",
  },
  {
    id: 12,
    text: "چالش من حفظ ادامه مسیر بعد از موج اولیه شروع است.",
    path: "executor",
  },
  // TODO: Replace placeholder question text with the final Eventum Game visionary copy.
  {
    id: 13,
    text: "ایده‌های تازه و مسیرهای متفاوت سریع ذهنم را درگیر می‌کنند.",
    path: "visionary",
  },
  {
    id: 14,
    text: "معمولاً می‌توانم فرصت‌هایی را ببینم که بقیه هنوز متوجه نشده‌اند.",
    path: "visionary",
  },
  {
    id: 15,
    text: "گاهی بین چند ایده یا مسیر مختلف پخش می‌شوم.",
    path: "visionary",
  },
  {
    id: 16,
    text: "وقتی به آینده فکر می‌کنم، انگیزه بیشتری برای حرکت پیدا می‌کنم.",
    path: "visionary",
  },
  {
    id: 17,
    text: "برای من معنا، تصویر بزرگ و جهت کلی کار بسیار مهم است.",
    path: "visionary",
  },
  {
    id: 18,
    text: "چالش من تبدیل ایده‌های زیاد به یک خروجی مشخص و تمام‌شده است.",
    path: "visionary",
  },
];
