"use client";

import React, { useEffect, useState } from "react";

export interface QuickJumpItem {
  id: string;
  name: string;
}

export interface QuickJumpNavProps {
  label?: string;
  items: QuickJumpItem[];
  ariaLabel?: string;
  className?: string;
}

export function QuickJumpNav({
  label = "Jump to section:",
  items,
  ariaLabel = "Section navigation",
  className = "",
}: QuickJumpNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      }
    };

    window.addEventListener("hashchange", handleHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const best = visibleEntries.reduce((prev, curr) => {
            return Math.abs(curr.boundingClientRect.top - 120) <
              Math.abs(prev.boundingClientRect.top - 120)
              ? curr
              : prev;
          });
          setActiveId(best.target.id);
        }
      },
      {
        rootMargin: "-100px 0px -50% 0px",
        threshold: [0, 0.1, 0.25],
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={`border-b border-[var(--line)] py-3 sticky top-[var(--header-h)] z-20 backdrop-blur-md bg-[rgba(17,33,54,0.92)] shadow-sm ${className}`.trim()}
    >
      <div className="container flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] shrink-0">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all inline-flex items-center shrink-0 ${
                  isActive
                    ? "bg-[var(--surface-2)] text-white ring-1 ring-[var(--mint)]/60 shadow-sm"
                    : "bg-[var(--surface)] text-[var(--mint)] hover:bg-[var(--surface-2)] hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
