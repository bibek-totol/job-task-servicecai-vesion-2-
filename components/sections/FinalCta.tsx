import React from "react";
import Link from "next/link";
import { Button, BtnRow } from "@/components/ui/Button";

const PATH_STEPS = [
  { when: "Week 1", label: "Discovery" },
  { when: "Weeks 2–3", label: "Proposal" },
  { when: "Week 4", label: "Site visit" },
  { when: "Week 5+", label: "Live pilot" },
];

export function FinalCta() {
  return (
    <section className="section section-ground" id="get-started">
      <div className="container">
        <div className="cta-panel">
          <p className="eyebrow">A low-risk way to start</p>
          <h2>Give us one queue and ninety days.</h2>
          <p>
            We don’t ask for your whole book of work. From signature to steady
            state in 90 days, with a go / no-go gate, so you see performance on
            live volume before you commit to the full ramp.
          </p>

          <ol className="path-strip" aria-label="How we start">
            {PATH_STEPS.map((s, idx) => (
              <li key={idx}>
                <span>{s.when}</span>
                <strong>{s.label}</strong>
              </li>
            ))}
          </ol>

          <BtnRow className="cta-btn-row">
            <Button
              href="/contact/book-a-call"
              variant="mint"
              arrow
              className="transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(2,38,44,0.45),0_0_24px_rgba(62,224,188,0.55)] active:translate-y-0 active:scale-100"
            >
              Book a discovery call
            </Button>
            <Button
              href="/contact/request-a-proposal"
              variant="ghost"
              className="transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_34px_rgba(2,38,44,0.22),0_0_22px_rgba(255,255,255,0.9)] active:translate-y-0 active:scale-100"
            >
              Request a proposal
            </Button>
          </BtnRow>

          <p className="cta-more">
            <span>
              Looking for a career in CX?{" "}
              <Link href="/careers">See open roles →</Link>
            </span>
            <span>
              Investor?{" "}
              <Link href="/investors">Investor enquiries →</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
