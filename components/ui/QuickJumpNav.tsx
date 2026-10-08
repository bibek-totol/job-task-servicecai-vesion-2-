"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

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
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const navRef = useRef<HTMLElement>(null);
  const isManualScrollRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const updateActiveSection = useCallback(() => {
    if (isManualScrollRef.current || items.length === 0) return;

    // 1. If user is at or very near the bottom of the page, select the last item
    const scrollBottom = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= documentHeight - 60) {
      setActiveId(items[items.length - 1].id);
      return;
    }

    // 2. Calculate the target offset just beneath the sticky header & jump nav
    const nav = navRef.current;
    const navHeight = nav ? nav.offsetHeight : 54;
    const headerHeight = 80; // --header-h
    // Every section has scroll-mt-[135px], landing at ~135px from viewport top.
    // Give a small threshold window so it activates as soon as it reaches the reading area.
    const targetOffset = headerHeight + navHeight + 25;

    // 3. Find the last section whose top is at or above targetOffset
    let currentId = items[0]?.id || "";
    for (let i = 0; i < items.length; i++) {
      const el = document.getElementById(items[i].id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= targetOffset) {
        currentId = items[i].id;
      } else {
        // Sections are ordered top-to-bottom; once an element is below targetOffset, stop
        break;
      }
    }

    setActiveId((prev) => (prev !== currentId ? currentId : prev));
  }, [items]);

  useEffect(() => {
    // Sync initial active state asynchronously on mount
    rafIdRef.current = requestAnimationFrame(() => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      } else {
        updateActiveSection();
      }
    });

    const onScroll = () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        updateActiveSection();
      });
    };

    const handleHash = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === currentHash)) {
        setActiveId(currentHash);
      }
    };

    const handleUserInterrupt = () => {
      if (isManualScrollRef.current) {
        isManualScrollRef.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
        updateActiveSection();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("wheel", handleUserInterrupt, { passive: true });
    window.addEventListener("touchstart", handleUserInterrupt, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("wheel", handleUserInterrupt);
      window.removeEventListener("touchstart", handleUserInterrupt);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [items, updateActiveSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Temporarily lock scroll spy updates while smooth scrolling to target
    isManualScrollRef.current = true;
    setActiveId(id);

    const nav = navRef.current;
    const navHeight = nav ? nav.offsetHeight : 54;
    const headerHeight = 80;
    const targetOffset = headerHeight + navHeight;
    const targetY = el.getBoundingClientRect().top + window.scrollY - targetOffset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });

    try {
      window.history.pushState(null, "", `#${id}`);
    } catch {
      // ignore in restricted environments
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
      updateActiveSection();
    }, 850);
  };

  return (
    <nav
      ref={navRef}
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
                aria-current={isActive ? "true" : undefined}
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
