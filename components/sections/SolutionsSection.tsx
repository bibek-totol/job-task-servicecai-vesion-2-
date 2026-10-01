import React from "react";
import { LinkArrow, Card } from "@/components/ui";
import { IconName } from "@/components/icons";

interface SolutionItem {
  title: string;
  desc: string;
  icon: IconName;
  linkText: string;
  href: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    title: "Omnichannel CX management",
    desc: "Inbound and outbound voice, chat, email, social and messaging: one team, one knowledge base and one quality standard behind every channel.",
    icon: "headset",
    linkText: "Explore CX management",
    href: "/solutions/omnichannel-cx",
  },
  {
    title: "Agentic AI voice & chat",
    desc: "Humanised AI agents take first contact on high-volume intents in 75 languages, then hand off warm to a trained human on the same session.",
    icon: "sparkle",
    linkText: "Explore agentic AI",
    href: "/solutions/agentic-ai",
  },
  {
    title: "Back office & BPM",
    desc: "KYC and document verification, provisioning, content moderation, finance, payroll and RPA, run to SLA and audited to your standard.",
    icon: "layers",
    linkText: "Explore back office",
    href: "/solutions/back-office-bpm",
  },
  {
    title: "Global capability centres",
    desc: "Your own strategic hub in Bangladesh for customer service, IT, finance or analytics, built on local talent and designed to grow from cost centre to innovation engine.",
    icon: "globe",
    linkText: "Explore GCC services",
    href: "/solutions/global-capability-centres",
  },
  {
    title: "CX consulting & analytics",
    desc: "Voice-of-customer analytics, contact-reduction programmes, training and process re-engineering that bring cost per contact down over time.",
    icon: "chart",
    linkText: "Explore consulting",
    href: "/solutions/cx-consulting-analytics",
  },
];

export function SolutionsSection() {
  return (
    <section className="section section-ground" id="solutions">
      <div className="container">
        <div className="section-head row">
          <div className="title">
            <p className="eyebrow sky">What we run for you</p>
            <h2>Five ways to scale CX</h2>
          </div>
          <LinkArrow href="/solutions">All solutions</LinkArrow>
        </div>

        <div className="services-grid tint">
          {SOLUTIONS.map((s, idx) => (
            <Card
              key={idx}
              title={s.title}
              text={s.desc}
              iconName={s.icon}
              link={{ label: s.linkText, href: s.href }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
