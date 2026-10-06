export * from "./Button";
export * from "./Card";
export * from "./SectionHead";
export * from "./Todo";
export * from "./QuickJumpNav";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { BtnRow } from "./Button";

export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`photo-ph ${className}`.trim()}>
      <span>{label}</span>
    </div>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string | null;
}

export function Breadcrumbs({
  items,
  className = "",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} aria-current={isLast ? "page" : undefined}>
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function CheckList({
  items,
  className = "",
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <ul className={`check-list ${className}`.trim()}>
      {items.map((item, idx) => (
        <li key={idx}>
          <Icon name="check" size={18} strokeWidth={2.4} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ChipList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`chip-list ${className}`.trim()}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export interface StepItem {
  when?: string;
  title: string;
  text: React.ReactNode;
}

export function Steps({
  items,
  variant = "default",
  columns,
  className = "",
}: {
  items: StepItem[];
  variant?: "default" | "three" | "five";
  columns?: number;
  className?: string;
}) {
  const colVariant =
    columns === 3
      ? "three"
      : columns === 5
        ? "five"
        : variant !== "default"
          ? variant
          : "";
  return (
    <ol className={`steps ${colVariant} ${className}`.trim()}>
      {items.map((step, idx) => (
        <li key={idx}>
          {step.when && <span className="when">{step.when}</span>}
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Accordion({
  items,
  className = "",
}: {
  items: { question: string; answer: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div className={`faq ${className}`.trim()}>
      {items.map((item, idx) => (
        <details key={idx}>
          <summary>
            <span>{item.question}</span>
            <Icon name="plus" size={20} strokeWidth={2} />
          </summary>
          <div className="answer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}

export * from "./Table";

export function PageHero({
  title,
  intro,
  buttons,
  crumbs,
  breadcrumbs,
  stats,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  buttons?: React.ReactNode;
  crumbs?: BreadcrumbItem[];
  breadcrumbs?: BreadcrumbItem[];
  stats?: { value: string; label: string }[];
  className?: string;
}) {
  const finalCrumbs = crumbs || breadcrumbs;
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="container relative">
        <div className="hero-copy">
          {finalCrumbs && <Breadcrumbs items={finalCrumbs} />}
          {/* {eyebrow && <p className="pill">{eyebrow}</p>} */}
          <h1>{title}</h1>
          {intro && <p className="hero-lede">{intro}</p>}
          {buttons && <BtnRow>{buttons}</BtnRow>}
          {stats && stats.length > 0 && (
            <ul className="hero-stats">
              {stats.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  buttons,
  className = "",
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  buttons: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`cta-band ${className}`.trim()}>
      <div className="container">
        <div className="cta-inner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <BtnRow>{buttons}</BtnRow>
        </div>
      </div>
    </section>
  );
}

/* ---------- Follow The Sun Component ---------- */
export { FollowTheSun } from "./FollowTheSun";

/* ---------- Leaderboard Component (Attrition) ---------- */
export const LEADERBOARD_DATA = [
  { rank: "01", name: "Servicechai", sub: "Bangladesh", value: "~10%", width: 22, ours: true },
  { rank: "02", name: "India", sub: "BPM industry", value: "25–30%", width: 67, ours: false },
  { rank: "03", name: "Philippines", sub: "Contact centre industry", value: "31%", width: 69, ours: false },
  { rank: "04", name: "Global benchmark", sub: "Contact centres worldwide", value: "30–45%", width: 100, ours: false },
];

export function Leaderboard({ showCopy = true }: { showCopy?: boolean }) {
  return (
    <figure className="leaderboard">
      <div className="lb-head">
        <h3>Annual agent attrition</h3>
        <span>Lower is better</span>
      </div>
      <ol className="lb-list">
        {LEADERBOARD_DATA.map((row) => (
          <li
            key={row.rank}
            className={`lb-row ${row.ours ? "ours" : ""}`}
          >
            <span className="lb-rank">{row.rank}</span>
            <span className="lb-name">
              {row.name}
              <small>{row.sub}</small>
            </span>
            <span className="lb-bar" aria-hidden="true">
              <i style={{ width: `${row.width}%` }} />
            </span>
            <span className="lb-value">{row.value}</span>
          </li>
        ))}
      </ol>
      {showCopy && (
        <p className="chart-copy">
          Every point of attrition is re-hiring, re-training and lost quality. At
          around 10%, your agents stay long enough to master complex,
          policy-heavy queues.
        </p>
      )}
      <figcaption>
        Sources: Servicechai operating data; Contact Center Association of the
        Philippines (voluntary attrition, 2022); Nasscom–Deloitte BPM Survey
        2024 (historical range); Insignia Resources (global contact-centre
        turnover, 2025).
      </figcaption>
    </figure>
  );
}

/* ---------- Conversation Mock (Agentic AI) ---------- */
export { Convo } from "./Convo";

/* ---------- Cert Badges ---------- */
export const CERTS_LIST = [
  { mark: "ISO", title: "ISO 9001:2015", sub: "Quality management system" },
  { mark: "COPC", title: "COPC compliant", sub: "CX operations standard" },
  { mark: "σ", title: "Six Sigma certified", sub: "Leadership and QA team", isLg: true },
  { mark: "SBTi", title: "SBTi approved", sub: "Science-based climate targets" },
];

export function CertBadges() {
  return (
    <ul className="cert-badges">
      {CERTS_LIST.map((cert, idx) => (
        <li key={idx}>
          <span
            className={`badge-mark ${cert.isLg ? "lg" : ""}`}
            aria-hidden="true"
          >
            {cert.mark}
          </span>
          <span>
            <strong>{cert.title}</strong>
            <span>{cert.sub}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Delivery Centre Cards ---------- */
export function DeliveryCentres() {
  return (
    <>
      <article className="centre-card">
        <div className="photo-ph">
          Photo: Dhaka delivery floor
          <br />
          (replace with a real image)
        </div>
        <div className="centre-body">
          <h3>Dhaka Service Delivery Centre</h3>
          <address className="address">
            <Icon name="pin" size={18} strokeWidth={2} />
            <span>Level 3, 277 Tejgaon Industrial Area, Dhaka</span>
          </address>
        </div>
      </article>

      <article className="centre-card">
        <div className="photo-ph">
          Photo: Chattogram delivery floor
          <br />
          (replace with a real image)
        </div>
        <div className="centre-body">
          <h3>Chattogram Service Delivery Centre</h3>
          <address className="address">
            <Icon name="pin" size={18} strokeWidth={2} />
            <span>Levels 15 &amp; 16, SF Tower, 2 Agrabad C/A, Chattogram</span>
          </address>
        </div>
      </article>
    </>
  );
}

export { Counter } from "./Counter";
