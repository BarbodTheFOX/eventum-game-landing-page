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
        <p className="font-latin mb-3 text-xs font-black tracking-[0.28em] text-[#C084FC] md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-[#F8F5FF] md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-[#BFAFE6] md:text-lg md:leading-9">
          {text}
        </p>
      ) : null}
    </div>
  );
}
