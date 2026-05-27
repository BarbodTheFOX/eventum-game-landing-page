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
};

export function EventumVisual({
  fileName,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: EventumVisualProps) {
  const [isMissing, setIsMissing] = useState(false);

  if (isMissing) {
    return (
      <div
        className={`relative grid place-items-center overflow-hidden rounded-[2rem] border border-dashed border-violet-300/80 bg-gradient-to-br from-white/70 via-violet-50/80 to-cyan-50/80 ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label={alt}
      >
        {/* TODO(dev): Add /public/images/eventum-game/{fileName} to replace this placeholder. */}
        <div className="absolute inset-6 rounded-[1.5rem] border border-white/80" />
        <span className="relative text-xs font-semibold text-violet-500">
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
      className={`object-cover ${className}`}
    />
  );
}
