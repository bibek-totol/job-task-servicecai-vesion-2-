"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@/components/icons";

export function Convo({ className = "" }: { className?: string }) {
  const convoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = convoRef.current;
    if (!el) return;

    el.classList.add("js-enabled");

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
    <div
      ref={convoRef}
      className={`convo ${className}`.trim()}
      role="img"
      aria-label="Illustrative conversation: an AI agent handles a billing question, then hands off to a human billing specialist with full context"
    >
      <div className="convo-head" aria-hidden="true">
        <span>
          <Icon name="headset-sm" size={18} strokeWidth={2} />
          Voice · Billing enquiry
        </span>
        <span className="time">02:14</span>
      </div>

      <div
        className="msg customer"
        style={{ "--timeline": "0.2s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="bubble">
          I’ve been charged twice for my plan this month.
        </div>
      </div>

      <div
        className="msg ai"
        style={{ "--timeline": "0.9s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <span className="who">
          <Icon name="sparkle-sm" size={13} strokeWidth={2.2} />
          AI agent
        </span>
        <div className="bubble">
          I can see two charges dated 3 September. One is a pending
          authorisation that will drop off within 48 hours. Shall I confirm that
          by SMS?
        </div>
      </div>

      <div
        className="msg customer"
        style={{ "--timeline": "1.7s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="bubble">No, I want the duplicate refunded today.</div>
      </div>

      <div
        className="handoff"
        style={{ "--timeline": "2.5s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <Icon name="swap" size={16} strokeWidth={2} />
        Refund request detected · warm hand-off to Billing Tier 2 · full context
        passed
      </div>

      <div
        className="msg"
        style={{ "--timeline": "3.3s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <span className="who human">Billing specialist</span>
        <div className="bubble">
          Thanks for holding. I have both charges in front of me and I’m raising
          the refund now.
        </div>
      </div>

      <p
        className="convo-note"
        style={{ "--timeline": "4.0s" } as React.CSSProperties}
        aria-hidden="true"
      >
        Illustrative conversation
      </p>
    </div>
  );
}
