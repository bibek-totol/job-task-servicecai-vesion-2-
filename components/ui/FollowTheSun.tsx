"use client";

import React, { useEffect, useRef } from "react";

const FTS_ROWS = [
  {
    name: "APAC",
    sub: "Singapore to Sydney",
    hours: "05:00–15:00",
    color: "c-mint",
    delay: 150,
    segs: [{ left: 20.83, width: 41.67, text: "05:00 – 15:00" }],
  },
  {
    name: "UK & Europe",
    sub: "London to Frankfurt",
    hours: "14:00–23:00",
    color: "c-sky",
    delay: 400,
    segs: [{ left: 58.33, width: 37.5, text: "14:00 – 23:00" }],
  },
  {
    name: "North America",
    sub: "US East Coast",
    hours: "20:00–04:00",
    color: "c-amber",
    delay: 650,
    segs: [
      { left: 0, width: 16.67, text: "→ 04:00" },
      { left: 83.33, width: 16.67, text: "20:00 →" },
    ],
  },
];

export function FollowTheSun({
  heading = "One team, every time zone",
  eyebrow = "Follow the sun",
  hId = "fts-title",
}: {
  heading?: string;
  eyebrow?: string;
  hId?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            el.classList.add("is-visible");
          } else if (!entry.isIntersecting || entry.intersectionRatio <= 0.02) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: [0, 0.15] }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="fts" aria-labelledby={hId}>
      <div className="fts-head">
        <div className="title">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={hId}>{heading}</h2>
        </div>
        <p>
          Typical business hours for each region, shown in Dhaka time (UTC+6).
          Our floors run 24×7×365.
        </p>
      </div>

      <div className="fts-grid">
        <span className="fts-spacer" aria-hidden="true" />
        <div className="fts-axis" aria-hidden="true">
          <span style={{ left: 0 }}>00:00</span>
          <span style={{ left: "25%" }}>06:00</span>
          <span style={{ left: "50%" }}>12:00</span>
          <span style={{ left: "75%" }}>18:00</span>
          <span style={{ right: 0 }}>24:00</span>
        </div>

        {FTS_ROWS.map((row, idx) => (
          <React.Fragment key={idx}>
            <div className="fts-label">
              <span className={`dot ${row.color}`} aria-hidden="true" />
              <div>
                <strong>{row.name}</strong>
                <small>
                  {row.sub}
                  <span className="fts-time"> · {row.hours}</span>
                </small>
              </div>
            </div>
            <div
              className="fts-track"
              role="img"
              aria-label={`${row.name}: business hours ${row.hours} Dhaka time`}
            >
              {row.segs.map((seg, sIdx) => {
                const segDelay = row.delay + (sIdx > 0 ? 150 : 0);
                return (
                  <span
                    key={sIdx}
                    className={`fts-seg ${row.color}`}
                    style={{
                      left: `${seg.left}%`,
                      width: `${seg.width}%`,
                      animationDelay: `${segDelay}ms`,
                      transitionDelay: `${segDelay}ms`,
                    }}
                  >
                    {seg.text}
                  </span>
                );
              })}
            </div>
          </React.Fragment>
        ))}

        <div className="fts-label">
          <span className="dot c-grad" aria-hidden="true" />
          <div>
            <strong className="fts-us">Servicechai floors</strong>
            <small>Dhaka · Chattogram</small>
          </div>
        </div>
        <div className="fts-all">Always on · 24 × 7 × 365</div>
      </div>
    </section>
  );
}
