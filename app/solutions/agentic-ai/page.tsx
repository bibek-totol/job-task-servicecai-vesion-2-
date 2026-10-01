import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  CheckList,
  Steps,
  Button,
  CtaBand,
  Feature,
  Convo,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Agentic AI Voice & Chat Agents | Servicechai",
  description:
    "Humanised AI voice and chat agents in 75 languages that resolve high-volume intents and hand off warm to trained human agents — no repeats.",
};

const HOW_IT_WORKS = [
  { when: "Step 1", title: "Answers first", text: "By voice or chat, day or night, in the customer’s language." },
  { when: "Step 2", title: "Understands intent", text: "Across the whole conversation, not a menu tree." },
  { when: "Step 3", title: "Resolves or acts", text: "Looks up accounts, books appointments, chases documents." },
  { when: "Step 4", title: "Hands off warm", text: "To a trained agent, with the transcript and intent attached." },
];

const USE_CASES = [
  {
    title: "Billing and account queries",
    desc: "Confirms charges, usage and fee breakdowns; explains surcharges and adjustments; routes genuine adjustments to a human.",
    icon: "doc" as const,
  },
  {
    title: "Document and KYC chasing",
    desc: "Calls before documents expire, walks customers through re-upload, and books and confirms appointments.",
    icon: "shield" as const,
  },
  {
    title: "Reactivation and surveys",
    desc: "Re-engages dormant customers, captures why they left in their own words, and runs surveys that go beyond yes or no.",
    icon: "users-arrow" as const,
  },
];

const WHY_AI_HUMAN = [
  "Lower cost per contact on repetitive intents",
  "Instant answers at any hour, in 75 languages",
  "Your agents spend their time on conversations that need judgement",
  "One partner accountable for both the AI and the people",
];

export default function AgenticAiPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Agentic AI voice & chat" },
        ]}
        eyebrow="Agentic AI voice & chat"
        title="AI-augmented, not AI-only"
        intro="Our humanised AI agents take first contact on high-volume, repetitive intents. The moment a conversation needs judgement, they hand over to a trained human on the same session, with full context."
        buttons={[
          <Button key="demo" href="/solutions/agentic-ai/demo" variant="mint" arrow>
            Book an AI demo
          </Button>,
          <Button key="talk" href="/contact" variant="ghost">
            Talk to our team
          </Button>,
        ]}
      />

      {/* How It Works */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title="Four steps, one conversation"
            single
          />
          <Steps items={HOW_IT_WORKS} />
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-ground">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead
              eyebrow="Capabilities"
              title="Built for real customers on real lines"
              single
            />
            <div className="stack" style={{ gap: "20px" }}>
              <Feature
                iconName="mic"
                title="Built for real accents"
                text="Reliable speech recognition across accents, dialects and poor mobile lines."
              />
              <Feature
                iconName="target"
                title="Understands intent"
                text="Reads intent across the whole journey: a conversation, not a menu tree."
              />
              <Feature
                iconName="languages"
                title="75 languages"
                text="One voice and chat platform for every market you serve."
              />
              <Feature
                iconName="swap"
                title="Acts, not just answers"
                text="Looks up accounts, books appointments, chases documents and captures feedback."
              />
            </div>
          </div>

          <div className="mt-40">
            <Convo />
          </div>
        </div>
      </section>

      {/* Where AI works best */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Where AI works best"
            title="High-volume, repetitive, time-critical"
            single
          />
          <div className="grid grid-3">
            {USE_CASES.map((uc, idx) => (
              <Card
                key={idx}
                title={uc.title}
                text={uc.desc}
                iconName={uc.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Combine */}
      <section className="section section-ground">
        <div className="container">
          <div className="split">
            <div className="stack">
              <h2 className="h3">Why combine AI and people</h2>
              <CheckList items={WHY_AI_HUMAN} />
            </div>

            <div className="card card-petrol">
              <p className="kicker">Pilot an AI agent</p>
              <h3>Start with one queue</h3>
              <p>
                Test an AI voice or chat agent on one intent for sixty days.
                Measure deflection, resolution and CSAT before you scale.
              </p>
              <div style={{ marginTop: "auto" }}>
                <Button href="/solutions/agentic-ai/demo" variant="mint" size="sm" arrow>
                  Book an AI demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Book an AI demo"
        text="Hear an agent handle a real conversation, or try it on your own queue."
        buttons={
          <Button href="/solutions/agentic-ai/demo" variant="mint" arrow>
            Book an AI demo
          </Button>
        }
      />
    </>
  );
}
