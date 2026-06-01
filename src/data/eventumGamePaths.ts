import type { PathType } from "./eventumGameQuestions";

export type EventumGamePathConfig = {
  type: PathType;
  name: string;
  persianLabel: string;
  resultLabel: string;
  enemy: string;
  mission: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  accent: string;
  icon: string;
  description: string;
};

export const eventumGamePaths: Record<PathType, EventumGamePathConfig> = {
  strategist: {
    type: "strategist",
    name: "Strategist",
    persianLabel: "استراتژیست",
    resultLabel: "🧭 Strategist",
    enemy: "فکر بیش از حد / باز نگه داشتن تصمیم‌ها",
    mission: "تصمیم‌گیری با وضوح کافی و تبدیل فکر به حرکت",
    image: "strategist.png",
    imageFit: "cover",
    imagePosition: "object-[center_35%]",
    accent: "from-violet-500/20 to-cyan-400/20",
    icon: "S",
    description:
      "تو بیشتر به مسیر Strategist نزدیک هستی. یعنی قبل از حرکت، مسئله را دقیق بررسی می‌کنی و دوست داری تصویر واضح‌تری از مسیر داشته باشی. چالش اصلی تو این است که تصمیم‌ها بیش از حد باز نمانند و فکر زودتر به حرکت واقعی تبدیل شود.",
  },
  executor: {
    type: "executor",
    name: "Executor",
    persianLabel: "اجراگر",
    resultLabel: "⚡ Executor",
    enemy: "تعویق شروع / گیر کردن قبل از ورود به کار",
    mission: "شروع کردن، ادامه دادن و ساختن خروجی واقعی",
    image: "executor.png",
    imageFit: "cover",
    imagePosition: "object-[center_40%]",
    accent: "from-cyan-400/20 to-fuchsia-400/20",
    icon: "E",
    description:
      "تو بیشتر به مسیر Executor نزدیک هستی. یعنی توان حرکت، شروع کردن و جلو بردن کارها در تو فعال است. چالش اصلی تو این است که ریتمت را حفظ کنی، در شروع گیر نکنی و کاری را که آغاز می‌کنی به خروجی واقعی برسانی.",
  },
  visionary: {
    type: "visionary",
    name: "Visionary",
    persianLabel: "چشم‌اندازساز",
    resultLabel: "✨ Visionary",
    enemy: "پخش شدن بین چند مسیر / ایده بدون خروجی",
    mission: "نگه داشتن تمرکز و تبدیل ایده به نتیجه واقعی",
    image: "visionary.png",
    imageFit: "cover",
    imagePosition: "object-[center_40%]",
    accent: "from-fuchsia-400/20 to-violet-500/20",
    icon: "V",
    description:
      "تو بیشتر به مسیر Visionary نزدیک هستی. یعنی ایده‌ها، مسیرهای تازه و نگاه خلاقانه در تو پررنگ است. چالش اصلی تو این است که بین مسیرهای مختلف پخش نشوی و ایده‌ها را به خروجی واقعی تبدیل کنی.",
  },
};

export const orderedEventumGamePaths = [
  eventumGamePaths.strategist,
  eventumGamePaths.executor,
  eventumGamePaths.visionary,
];
