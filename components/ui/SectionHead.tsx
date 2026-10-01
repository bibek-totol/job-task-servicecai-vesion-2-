import React from "react";

interface SectionHeadProps {
  eyebrow?: string;
  eyebrowColor?: "mint" | "sky" | "amber" | "violet";
  title: React.ReactNode;
  lede?: React.ReactNode;
  single?: boolean;
  row?: boolean;
  className?: string;
  id?: string;
  h2Id?: string;
  action?: React.ReactNode;
}

export function SectionHead({
  eyebrow,
  eyebrowColor,
  title,
  lede,
  single = false,
  row = false,
  className = "",
  id,
  h2Id,
  action,
}: SectionHeadProps) {
  const eyebrowClass = eyebrowColor ? `eyebrow ${eyebrowColor}` : "eyebrow";
  const layoutClass = row
    ? "section-head row"
    : single
    ? "section-head single"
    : "section-head";

  if (row) {
    return (
      <div id={id} className={`${layoutClass} ${className}`.trim()}>
        <div className="title">
          {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
          <h2 id={h2Id}>{title}</h2>
          {lede && <p className="lede">{lede}</p>}
        </div>
        {action}
      </div>
    );
  }

  if (single) {
    return (
      <div id={id} className={`${layoutClass} ${className}`.trim()}>
        <div className="title">
          {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
          <h2 id={h2Id}>{title}</h2>
          {lede && <p className="lede">{lede}</p>}
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`${layoutClass} ${className}`.trim()}>
      <div className="title">
        {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
        <h2 id={h2Id}>{title}</h2>
      </div>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
