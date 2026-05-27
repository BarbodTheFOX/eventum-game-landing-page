type ProgressBarProps = {
  value: number;
  label?: string;
  meta?: string;
};

export function ProgressBar({ value, label, meta }: ProgressBarProps) {
  return (
    <div className="rounded-full border border-white/70 bg-white/48 p-2 shadow-[0_16px_44px_rgba(76,29,149,0.08)] backdrop-blur-xl">
      {(label || meta) ? (
        <div className="flex items-center justify-between px-2 pb-2 text-xs font-black text-slate-600 md:text-sm">
          <span>{label}</span>
          <span>{meta}</span>
        </div>
      ) : null}
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/70">
        <div
          className="h-full rounded-full bg-gradient-to-l from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_22px_rgba(124,58,237,0.36)] transition-all duration-500"
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}
