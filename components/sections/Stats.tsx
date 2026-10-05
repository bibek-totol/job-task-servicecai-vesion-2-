import React from "react";
import { Counter } from "@/components/ui";
import { Icon } from "@/components/icons";

const STAT_ITEMS = [
  { color: "c-mint", value: "500+", label: "CX professionals on our floors today" },
  { color: "c-sky", value: "30,000", label: "sq ft across two geo-redundant centres in Dhaka and Chattogram" },
  { color: "c-amber", value: "140+", label: "years of combined leadership experience" },
  { color: "c-violet", value: "75", label: "languages on our agentic AI voice and chat platform" },
];

const CERTS = ["ISO 9001:2015", "COPC compliant", "Six Sigma certified", "SBTi approved"];

export function Stats() {
  return (
    <section className="section section-ground" style={{ paddingTop: 0, paddingBottom: 0 }} id="stats">
      <div className="container">
        <ul className="stat-cards" aria-label="Servicechai at a glance">
          {STAT_ITEMS.map((item, idx) => (
            <li key={idx}>
              <span className={`bar-accent ${item.color}`} aria-hidden="true" />
              <Counter value={item.value} />
              <span className="label">{item.label}</span>
            </li>
          ))}
          <li className="certs">
            {CERTS.map((c, idx) => (
              <span key={idx}>
                <Icon name="check" size={16} strokeWidth={2.4} />
                {c}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
}
