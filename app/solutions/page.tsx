import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  Steps,
  Button,
  Todo,
  CtaBand,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "CX, AI & BPM Solutions | Servicechai",
  description:
    "Omnichannel customer care, agentic AI, back office, global capability centres and CX consulting — one partner, delivered from Bangladesh.",
};

const SERVICES = [
  {
    title: "Omnichannel CX management",
    desc: "Inbound and outbound voice, chat, email, social and messaging — one team, one knowledge base and one quality standard behind every channel.",
    iconName: "headset" as const,
    link: { label: "Explore CX management", href: "/solutions/omnichannel-cx" },
  },
  {
    title: "Agentic AI voice & chat",
    desc: "Humanised AI agents take first contact on high-volume intents in 75 languages, then hand off warm to a trained human on the same session.",
    iconName: "sparkle" as const,
    link: { label: "Explore agentic AI", href: "/solutions/agentic-ai" },
  },
  {
    title: "Back office & BPM",
    desc: "KYC and document verification, provisioning, content moderation, finance, payroll and RPA — run to SLA and audited to your standard.",
    iconName: "layers" as const,
    link: { label: "Explore back office", href: "/solutions/back-office-bpm" },
  },
  {
    title: "Global capability centres",
    desc: "Your own strategic hub in Bangladesh for customer service, IT, finance or analytics — built on local talent and designed to grow from cost centre to innovation engine.",
    iconName: "globe" as const,
    link: { label: "Explore GCC services", href: "/solutions/global-capability-centres" },
  },
  {
    title: "CX consulting & analytics",
    desc: "Voice-of-customer analytics, contact-reduction programmes, training and process re-engineering that bring cost per contact down over time.",
    iconName: "chart" as const,
    link: { label: "Explore consulting", href: "/solutions/cx-consulting-analytics" },
  },
];

const OPERATING_LAYER = [
  {
    title: "Workforce management",
    desc: "Interval forecasting and scheduling so the right people are on the floor at the right time.",
    icon: "clock" as const,
  },
  {
    title: "Quality assurance",
    desc: "Audits, coaching and regular calibration with your quality team.",
    icon: "award" as const,
  },
  {
    title: "Analytics & voice of customer",
    desc: "Why customers get in touch, and how to reduce avoidable contacts.",
    icon: "chart" as const,
  },
  {
    title: "Back-office support",
    desc: "Finance, payouts and RPA behind the front-line queues.",
    icon: "layers" as const,
  },
];

const WAYS_TO_WORK = [
  {
    title: "Pilot one queue",
    text: "Ninety days on ring-fenced volume, with a go / no-go gate before you commit.",
  },
  {
    title: "Managed service",
    text: "We run agreed queues end to end against SLAs you set.",
  },
  {
    title: "Dedicated centre",
    text: "A physically segregated, client-only facility, or your own global capability centre.",
  },
];

export default function SolutionsHubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        eyebrow="Solutions"
        title="One partner for the entire customer journey"
        intro="From the first contact to the back-office task that closes it, we run the whole loop. Workforce management, quality assurance and analytics are wrapped around every queue."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="rfp" href="/contact/request-a-proposal" variant="ghost">
            Request a proposal
          </Button>,
        ]}
      />

      {/* Services Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="Five services, one operating standard"
          />

          <div className="services-grid tint">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                title={s.title}
                text={s.desc}
                iconName={s.iconName}
                link={s.link}
              />
            ))}
          </div>

          <div
            className="card card-soft mt-24"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <h3>Not sure where to start?</h3>
              <p>Tell us your volumes and channels. We’ll recommend the first queue to pilot.</p>
            </div>
            <Button href="/contact" variant="mint" arrow>
              Talk to our team
            </Button>
          </div>
        </div>
      </section>

      {/* Operating Layer */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Wrapped around every queue"
            title="The operating layer behind every service"
            single
          />
          <div className="grid grid-4">
            {OPERATING_LAYER.map((op) => (
              <Card
                key={op.title}
                title={op.title}
                text={op.desc}
                iconName={op.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Work with Us */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Ways to work with us"
            title="Start small. Scale on performance."
            single
          />
          <Steps items={WAYS_TO_WORK} variant="three" />
          <p className="mt-40">
            <Todo>
              Confirm the pricing models you offer — per FTE, per productive hour, per
              transaction or outcome-based
            </Todo>
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Not sure where to start?"
        text="Tell us your volumes and channels. We’ll recommend the first queue to pilot."
        buttons={
          <Button href="/contact" variant="mint" arrow>
            Talk to our team
          </Button>
        }
      />
    </>
  );
}
