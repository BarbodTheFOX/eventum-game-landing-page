"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";

const orbitParticles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  delay: `${index * -0.9}s`,
  duration: `${16 + (index % 5) * 2}s`,
  size: `${3 + (index % 3)}px`,
  x: `${8 + ((index * 17) % 84)}%`,
  y: `${10 + ((index * 23) % 78)}%`,
}));

export function InteractiveCosmicBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    function writeCursor() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      root.style.setProperty("--mouse-x", `${currentX.toFixed(1)}px`);
      root.style.setProperty("--mouse-y", `${currentY.toFixed(1)}px`);

      if (
        Math.abs(targetX - currentX) > 0.2 ||
        Math.abs(targetY - currentY) > 0.2
      ) {
        frame = window.requestAnimationFrame(writeCursor);
      } else {
        frame = 0;
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (reducedMotion.matches || coarsePointer.matches) return;

      targetX = event.clientX;
      targetY = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(writeCursor);
      }
    }

    root.style.setProperty("--mouse-x", `${targetX}px`);
    root.style.setProperty("--mouse-y", `${targetY}px`);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="eventum-cosmic-bg" aria-hidden="true">
      <div className="eventum-ambient-blob eventum-ambient-blob-a" />
      <div className="eventum-ambient-blob eventum-ambient-blob-b" />
      <div className="eventum-dot-grid" />
      <div className="eventum-cursor-glow" />
      <div className="eventum-orbital-particles">
        {orbitParticles.map((particle) => (
          <span
            key={particle.id}
            style={
              {
                "--particle-delay": particle.delay,
                "--particle-duration": particle.duration,
                "--particle-size": particle.size,
                "--particle-x": particle.x,
                "--particle-y": particle.y,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
