import React from "react";
import { Button, BtnRow } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="hero-copy">

          <h1>
            Where brands lead, <span className="grad-text">we power.</span>
          </h1>
          <p className="hero-lede">
            Omnichannel customer experience, agentic AI and back-office
            operations that run while your markets sleep. COPC-compliant,
            attrition around 10%, and up to 30% lower cost than India or the
            Philippines.
          </p>
          <BtnRow>
            <Button href="/contact/book-a-call" variant="mint" arrow>
              Book a discovery call
            </Button>
            <Button href="/contact/request-a-proposal" variant="ghost">
              Request a proposal
            </Button>
          </BtnRow>
        </div>
      </div>
    </section>
  );
}
