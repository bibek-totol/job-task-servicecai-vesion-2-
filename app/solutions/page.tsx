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
  CheckList,
  QuickJumpNav,
} from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "CX, AI & BPM Solutions | Servicechai",
  description:
    "Omnichannel customer care, agentic AI, back office, global capability centres and CX consulting — one partner, delivered from Bangladesh.",
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
    link: { label: "See agentic AI", href: "#agentic-ai" },
  },
];

const OMNI_CHECKLIST = [
  "Inbound customer care and complaint close-looping",
  "Outbound telemarketing, retention and win-back campaigns",
  "Lifecycle management — onboarding, activation and renewal",
  "Voice-of-customer surveys and feedback capture",
  "COPC-compliant operations with 100% feedback on audited transactions",
];

const AI_FEATURES = [
  {
    icon: "mic" as const,
    title: "Built for real accents",
    desc: "Reliable speech recognition across accents, dialects and poor mobile lines.",
  },
  {
    icon: "target" as const,
    title: "Understands intent",
    desc: "Reads intent across the whole journey: a natural conversation, not a menu tree.",
  },
  {
    icon: "languages" as const,
    title: "75 languages",
    desc: "One voice and chat platform for every market you serve. Add a language without re-staffing.",
  },
  {
    icon: "swap" as const,
    title: "Acts, not just answers",
    desc: "Looks up accounts, books appointments, chases documents and captures customer feedback.",
  },
];

const BPM_CAPABILITIES = [
  {
    icon: "shield" as const,
    title: "KYC & Document Verification",
    desc: "ID validation, address verification, credit checks and anti-fraud document auditing run to tight SLAs.",
  },
  {
    icon: "search" as const,
    title: "Content & Trust Moderation",
    desc: "User-generated content, e-commerce listings, profile reviews and community guidelines enforcement.",
  },
  {
    icon: "bank" as const,
    title: "Finance & Payroll Operations",
    desc: "Accounts payable, invoicing reconciliations, chargeback investigations and vendor disbursements.",
  },
  {
    icon: "layers" as const,
    title: "Data Annotation & RPA",
    desc: "Structured tagging for ML pipelines and robotic process automation for repetitive manual data entry.",
  },
];

const GCC_MODELS = [
  {
    title: "Incubator / BOT Model",
    desc: "Build-Operate-Transfer: We build and operate your centre, transferring equity when your scale is proven.",
  },
  {
    title: "Managed Captive Centre",
    desc: "Your dedicated, physically segregated facility and team, with Servicechai managing day-to-day HR, IT and facilities.",
  },
  {
    title: "Shared GCC Pods",
    desc: "Fitted-out seats held ready in Dhaka or Chattogram for rapid ramps with zero upfront infrastructure capital.",
  },
];

const CONSULTING_PILLARS = [
  {
    title: "Voice-of-Customer Analytics",
    desc: "Root-cause diagnostics that isolate friction points and contact drivers across customer journeys.",
  },
  {
    title: "Contact Reduction Programmes",
    desc: "Deflect avoidable calls and chats through upstream fixes, improved self-service and product feedback.",
  },
  {
    title: "Six Sigma Quality Calibration",
    desc: "Audits, coaching frameworks and joint calibration that raise First Contact Resolution (FCR).",
  },
  {
    title: "Knowledge Base Engineering",
    desc: "Single source of truth architecture that powers both human agent scripting and AI agent prompts.",
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

      {/* Quick Jump Bar */}
      <QuickJumpNav
        label="Jump to section:"
        ariaLabel="Solutions navigation"
        items={[
          { id: "omnichannel-cx", name: "Omnichannel CX" },
          { id: "agentic-ai", name: "Agentic AI" },
          { id: "back-office-bpm", name: "Back Office & BPM" },
          { id: "global-capability-centres", name: "Global Capability Centres" },
          { id: "cx-consulting-analytics", name: "CX Consulting" },
        ]}
      />

      {/* Section 1: Omnichannel CX */}
      <section id="omnichannel-cx" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Omnichannel CX management"
            title="Every channel. One team. One standard."
            lede="Inbound and outbound voice, chat, email, social and messaging: one team, one knowledge base and one quality standard behind every channel."
          />

          <div className="grid grid-3 mt-12">
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

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "16px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run across every queue
              </h3>
              <CheckList items={OMNI_CHECKLIST} />
            </div>

            <div className="card card-petrol" style={{ gap: "20px" }}>
              <p className="eyebrow sky">Explore deep-dive vertical</p>
              <h3>Explore Omnichannel CX</h3>
              <p>
                Learn how our Dhaka and Chattogram delivery centres run 24×7×365
                with ~10% attrition and COPC-compliant standards.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/solutions/omnichannel-cx" variant="mint" size="sm" arrow>
                  Explore CX management
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Agentic AI */}
      <section id="agentic-ai" className="section section-ground scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Agentic AI voice &amp; chat"
            title="AI-augmented, not AI-only"
            lede="Our humanised AI agents answer first on high-volume, repetitive intents in 75 languages, and hand over to a trained human the moment a conversation needs judgement. Full context travels with the customer."
          />

          <div className="grid grid-4 mt-12">
            {AI_FEATURES.map((f) => (
              <div key={f.title} className="card">
                <div className="icon-tile">
                  <Icon name={f.icon} size={28} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
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
              <h3>Want to hear an AI voice agent handling live calls?</h3>
              <p>
                We can demonstrate speech recognition across accents and smooth
                hand-offs into live human queues.
              </p>
            </div>
            <div className="btn-row">
              <Button href="/solutions/agentic-ai/demo" variant="mint" arrow>
                Book an AI demo
              </Button>
              <Button href="/solutions/agentic-ai" variant="ghost">
                Explore agentic AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Back Office & BPM */}
      <section id="back-office-bpm" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Back office &amp; BPM"
            title="SLA-governed operational processing &amp; verification"
            lede="KYC and document verification, provisioning, content moderation, finance, payroll and RPA — run to SLA and audited to your standard."
          />

          <div className="grid grid-4 mt-12">
            {BPM_CAPABILITIES.map((bpm) => (
              <div key={bpm.title} className="card">
                <div className="icon-tile">
                  <Icon name={bpm.icon} size={28} />
                </div>
                <h3>{bpm.title}</h3>
                <p>{bpm.desc}</p>
              </div>
            ))}
          </div>

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "16px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                Audited controls &amp; compliance
              </h3>
              <CheckList
                items={[
                  "Client-approved background checks for all analysts",
                  "Named-user audit trails and segregated floor environments",
                  "ISO 9001:2015-certified quality management system",
                  "Data retention and purge schedules to your exact specification",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow amber">Dedicated or shared</p>
              <h3>Flexible BPM Operating Models</h3>
              <p>
                Whether you need a 10-person KYC verification pod or a 100-seat
                back-office operation, ramp in weeks with fitted-out capacity.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/solutions/back-office-bpm" variant="mint" size="sm" arrow>
                  Explore back office
                </Button>
                <Button href="/contact/request-a-proposal" variant="ghost" size="sm">
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Global Capability Centres */}
      <section id="global-capability-centres" className="section section-ground scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Global capability centres"
            title="Your own strategic hub in Bangladesh"
            lede="Build your strategic hub in Dhaka or Chattogram for customer service, IT, finance or analytics, backed by local talent, infrastructure and experienced operational leadership."
          />

          <div className="grid grid-3 mt-12">
            {GCC_MODELS.map((model) => (
              <article key={model.title} className="card">
                <div className="icon-tile">
                  <Icon name="globe" size={28} />
                </div>
                <h3>{model.title}</h3>
                <p>{model.desc}</p>
              </article>
            ))}
          </div>

          <div
            className="card card-petrol mt-24"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <h3>Tour our geo-redundant delivery centres</h3>
              <p>
                30,000 sq ft across Dhaka (Tejgaon) and Chattogram (Agrabad) with
                fitted-out seats ready for your team.
              </p>
            </div>
            <div className="btn-row">
              <Button href="/contact/site-visit" variant="mint" arrow>
                Book a site visit
              </Button>
              <Button href="/solutions/global-capability-centres" variant="ghost">
                Explore GCC services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CX Consulting & Analytics */}
      <section id="cx-consulting-analytics" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="CX consulting &amp; analytics"
            title="Bring cost per contact down over time"
            lede="Voice-of-customer analytics, contact-reduction programmes, training and process re-engineering that bring cost per contact down over time."
          />

          <div className="grid grid-4 mt-12">
            {CONSULTING_PILLARS.map((pillar) => (
              <div key={pillar.title} className="card">
                <div className="icon-tile">
                  <Icon name="chart" size={28} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="split mt-32" style={{ alignItems: "center" }}>
            <div className="stack" style={{ gap: "16px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                Continuous efficiency improvements
              </h3>
              <p className="lede">
                We believe the best contact is the one that never had to happen.
                Our analytics leads work with your product and digital teams to
                eliminate repeat drivers and reduce cost per customer.
              </p>
            </div>

            <div className="card card-ground" style={{ gap: "16px" }}>
              <p className="eyebrow sky">Start with discovery</p>
              <h3>Review your contact drivers</h3>
              <p>
                Share your volume trends and top 5 inquiry reasons. We will
                return an analysis showing potential automation and deflection.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/solutions/cx-consulting-analytics" variant="mint" size="sm" arrow>
                  Explore consulting
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Layer */}
      <section id="operating-layer" className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Wrapped around every queue"
            title="The operating layer behind every service"
            single
          />
          <div className="grid grid-4 mt-12">
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
      <section id="ways-to-work" className="section section-white">
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
