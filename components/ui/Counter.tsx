"use client";

import React, { useEffect, useRef } from "react";

interface CounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseValue(val: string) {
  const match = val.match(/^([^\d]*)([\d,]+)([^\d]*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: val, hasComma: false };
  }
  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const hasComma = numStr.includes(",");
  const target = parseInt(numStr.replace(/,/g, ""), 10) || 0;
  return { prefix, target, suffix, hasComma };
}

export function Counter({
  value,
  duration = 1800,
  className = "value",
}: CounterProps) {
  const { prefix, target, suffix, hasComma } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const displayNum = hasComma ? target.toLocaleString() : target.toString();
      el.textContent = `${prefix}${displayNum}${suffix}`;
      return;
    }

    let frameId: number;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * target);
            const displayNum = hasComma ? currentCount.toLocaleString() : currentCount.toString();

            if (el) {
              el.textContent = `${prefix}${displayNum}${suffix}`;
            }

            if (progress < 1) {
              frameId = requestAnimationFrame(animate);
            } else if (el) {
              const finalNum = hasComma ? target.toLocaleString() : target.toString();
              el.textContent = `${prefix}${finalNum}${suffix}`;
            }
          };

          frameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [prefix, target, suffix, hasComma, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
