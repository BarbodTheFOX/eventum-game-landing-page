type ProgressBarProps = {
  value: number;
  label?: string;
  meta?: string;
};

export function ProgressBar({ value, label, meta }: ProgressBarProps) {
  return (
    <div className="rounded-full border border-[#D8B4FE]/22 bg-[#080012]/58 p-2 shadow-[0_16px_44px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      {(label || meta) ? (
        <div className="flex items-center justify-between px-2 pb-2 text-xs font-black text-[#E9DFFF] md:text-sm">
          <span>{label}</span>
          <span>{meta}</span>
        </div>
      ) : null}
      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-gradient-to-l from-[#22D3EE] via-[#8B5CF6] to-[#A855F7] shadow-[0_0_22px_rgba(124,45,255,0.46)] transition-all duration-500"
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}
