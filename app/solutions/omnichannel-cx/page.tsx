import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  CheckList,
  Button,
  Todo,
  CtaBand,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Omnichannel Customer Experience Management | Servicechai",
  description:
    "Voice, chat, email, social and messaging from Bangladesh — one team, one knowledge base, 24×7×365 and COPC-compliant quality.",
};

const CHANNELS = [
  { title: "Voice", text: "Inbound and outbound, predictive dialler, IVR-integrated.", icon: "headset" as const },
  { title: "Chat", text: "In-app, web and messaging, with managed concurrency.", icon: "chat" as const },
  { title: "Email", text: "Templated and free-form, tracked against SLA.", icon: "mail" as const },
  { title: "Social", text: "Facebook, Instagram, X and review platforms.", icon: "share" as const },
  { title: "Back office", text: "Verification, moderation, data and finance tasks.", icon: "layers" as const },
  {
    title: "Bot + human",
    text: "Agentic AI takes first contact and hands off warm.",
    icon: "sparkle" as const,
    link: { label: "See agentic AI", href: "/solutions/agentic-ai" },
  },
];

const WHAT_WE_RUN = [
  "Inbound customer care and complaint close-looping",
  "Outbound telemarketing, retention and win-back campaigns",
  "Lifecycle management — onboarding, activation and renewal",
  "Voice-of-customer surveys and feedback capture",
  "Social media customer care",
];

const AUDIT_QUALITY = [
  "COPC-compliant operations and Six Sigma-certified quality leads",
  "100% feedback on audited transactions",
  "Weekly one-to-one coaching against defined standards",
  "Regular calibration sessions with your quality team",
];

export default function OmnichannelCxPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Omnichannel CX management" },
        ]}
        eyebrow="Omnichannel CX management"
        title="Every channel. One team. One standard."
        intro="Your customers reach you on voice, chat, email, social and messaging. We run them all from one team and one knowledge base, so the answer is the same wherever they ask."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="rfp" href="/contact/request-a-proposal" variant="ghost">
            Request a proposal
          </Button>,
        ]}
      />

      {/* Channels Grid */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Channels"
            title="Wherever your customers reach you"
            single
          />
          <div className="grid grid-3">
            {CHANNELS.map((ch) => (
              <Card
                key={ch.title}
                title={ch.title}
                text={ch.text}
                iconName={ch.icon}
                link={ch.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We Run */}
      <section className="section section-ground">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead
              eyebrow="What we run"
              title="From first contact to closed loop"
              single
            />
            <div className="stack">
              <CheckList items={WHAT_WE_RUN} />
              <p className="mt-4">
                <Todo>Add any proprietary queue management frameworks or tools</Todo>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Quality"
            title="Built to be audited"
            lede="You don't take quality on trust. We run the same standard you audit anywhere else."
            single
          />
          <div className="grid grid-2">
            <Card
              title="Audit and coaching"
              extra={<CheckList items={AUDIT_QUALITY} />}
            />
            <div className="card card-petrol">
              <p className="kicker">Pilot a queue</p>
              <h3>Start with one queue</h3>
              <p>
                Give us one queue for ninety days. We’ll show you performance on
                live volume before you commit to a full ramp.
              </p>
              <div style={{ marginTop: "auto" }}>
                <Button href="/contact/request-a-proposal" variant="mint" size="sm" arrow>
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Ready to talk about your channels?"
        text="Book a 30-minute discovery call with our operations team."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="rfp" href="/contact/request-a-proposal" variant="ghost">
            Request a proposal
          </Button>,
        ]}
      />
    </>
  );
}
