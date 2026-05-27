"use client";

import Image from "next/image";
import { useState } from "react";

type EventumVisualProps = {
  fileName: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  objectPosition?: string;
};

export function EventumVisual({
  fileName,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fit = "cover",
  objectPosition = "object-center",
}: EventumVisualProps) {
  const [isMissing, setIsMissing] = useState(false);

  if (isMissing) {
    return (
      <div
        className={`soft-noise relative grid place-items-center overflow-hidden rounded-[2rem] border border-dashed border-violet-300/80 bg-gradient-to-br from-white/80 via-violet-50/80 to-cyan-50/80 ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label={alt}
      >
        {/* TODO(dev): Add /public/images/eventum-game/{fileName} to replace this placeholder. */}
        <div className="absolute inset-5 rounded-[1.6rem] border border-white/85 bg-white/18 shadow-inner" />
        <div className="absolute -left-12 top-12 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute -right-12 bottom-12 h-44 w-44 rounded-full bg-violet-300/36 blur-3xl" />
        <span className="font-latin relative rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-black tracking-[0.12em] text-violet-500 backdrop-blur">
          {fileName}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={`/images/eventum-game/${fileName}`}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      onError={() => setIsMissing(true)}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${objectPosition} ${className}`}
    />
  );
}
