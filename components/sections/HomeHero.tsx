import React from "react";
import { Button, BtnRow } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="home-hero mb-20">
      <div className="container">
        <div className="hero-copy">
          <div className="self-center inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#374556] text-[13px] font-display font-medium text-[#9FE8D6]">
            <span className="w-2 h-2 rounded-full bg-mint shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]" />
            <span className="hero-lede">CX management · BPM · GCC — from Bangladesh to the World</span>
          </div>
          <h1>
            Where brands lead, <span className="grad-text">we power.</span>
          </h1>
          <p className="hero-lede">
            Local depth, global standards: CX, Agentic AI, Automation and Back-Office capability centres that run even while your markets sleep.
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
