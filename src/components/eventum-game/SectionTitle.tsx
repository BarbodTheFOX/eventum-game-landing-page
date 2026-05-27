type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "right";
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`mx-auto mb-10 max-w-3xl ${
        align === "center" ? "text-center" : "text-right"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-violet-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
