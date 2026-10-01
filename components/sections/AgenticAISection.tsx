import React from "react";
import { Button, Feature, Convo } from "@/components/ui";
import { IconName } from "@/components/icons";

const AI_FEATURES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "mic",
    title: "Built for real accents",
    desc: "Reliable speech recognition across accents, dialects and poor mobile lines.",
  },
  {
    icon: "target",
    title: "Understands intent",
    desc: "Reads intent across the whole journey: a conversation, not a menu tree.",
  },
  {
    icon: "languages",
    title: "75 languages",
    desc: "One voice and chat platform for every market you serve. Add a language without re-staffing a queue.",
  },
  {
    icon: "swap",
    title: "Acts, not just answers",
    desc: "Looks up accounts, books appointments, chases documents and captures feedback.",
  },
];

export function AgenticAISection() {
  return (
    <section className="section section-white" id="agentic-ai">
      <div className="container split">
        <div className="stack" style={{ gap: "22px" }}>
          <p className="eyebrow violet">Agentic AI</p>
          <h2 style={{ fontSize: "clamp(34px,4vw,56px)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>
            AI-augmented, <span className="grad-text">not AI-only</span>
          </h2>
          <p className="lede">
            Our humanised AI agents answer first on high-volume, repetitive
            intents such as billing, order status, document chasers and surveys,
            and hand over to a trained human the moment a conversation needs
            judgement. Full context travels with the customer, so nobody
            repeats themselves.
          </p>
          <div className="grid grid-2 tint" style={{ gap: "24px 32px", paddingTop: "8px" }}>
            {AI_FEATURES.map((f, idx) => (
              <Feature key={idx} iconName={f.icon} title={f.title} text={f.desc} />
            ))}
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Button href="/solutions/agentic-ai/demo" variant="mint" arrow>
              Book an AI demo
            </Button>
          </div>
        </div>

        <Convo />
      </div>
    </section>
  );
}
