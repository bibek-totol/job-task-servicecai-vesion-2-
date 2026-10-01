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

          <BtnRow>
            <Button href="/contact/book-a-call" variant="mint" arrow>
              Book a discovery call
            </Button>
            <Button href="/contact/request-a-proposal" variant="ghost">
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
