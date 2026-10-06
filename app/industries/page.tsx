import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  CheckList,
  Button,
  Todo,
  CtaBand,
  QuickJumpNav,
} from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Industries We Serve | Servicechai",
  description:
    "CX, AI and back-office operations for telecom, banking, insurance, microfinance, agri-tech, ed-tech and e-commerce brands.",
};

interface IndustryOverviewItem {
  id: string;
  name: string;
  desc: string;
  icon: IconName;
}

const INDUSTRY_ITEMS: IndustryOverviewItem[] = [
  {
    id: "telecom",
    name: "Telecom",
    desc: "Care, provisioning, retention and win-back.",
    icon: "signal",
  },
  {
    id: "banking-financial-services",
    name: "Banking & Financial Services",
    desc: "Account servicing, KYC and collections support.",
    icon: "bank",
  },
  {
    id: "insurance",
    name: "Insurance",
    desc: "Policy servicing, claims intake and renewals.",
    icon: "shield",
  },
  {
    id: "microfinance",
    name: "Microfinance",
    desc: "Borrower helplines, KYC and repayment reminders.",
    icon: "people",
  },
  {
    id: "agri-tech",
    name: "Agri-tech",
    desc: "Farmer helplines, orders and advisory calling.",
    icon: "sprout",
  },
  {
    id: "ed-tech",
    name: "Ed-tech",
    desc: "Learner onboarding, support and enrolment.",
    icon: "cap",
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    desc: "Order support, returns and seller operations.",
    icon: "cart",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for regulated, high-volume industries"
        intro="We already run complex, policy-heavy queues for telecom operators, microfinance institutions and technology platforms. Any combination can be piloted first and expanded on performance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
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
        label="Jump to industry:"
        ariaLabel="Industries navigation"
        items={INDUSTRY_ITEMS.map((item) => ({ id: item.id, name: item.name }))}
      />

      {/* Overview Grid */}
      <section className="section section-ground" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <SectionHead
            eyebrow="Industry expertise"
            title="Seven specialised sectors"
            lede="Every industry vertical is staffed with degree-educated agents trained on specific domain workflows, terminology, and compliance frameworks."
          />

          <div className="grid grid-4 mt-12">
            {INDUSTRY_ITEMS.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="card hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <div className="icon-tile">
                  <Icon name={ind.icon} size={28} />
                </div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
                <span className="link-arrow mt-auto text-sm text-[var(--mint)]">
                  <span>View section</span>
                  <Icon name="arrow" size={14} strokeWidth={2} />
                </span>
              </a>
            ))}

            <a
              href="/contact"
              className="card card-soft flex flex-col justify-between"
            >
              <h3>Don’t see your industry?</h3>
              <p>Tell us your volumes and requirements. We can design a custom queue.</p>
              <span className="link-arrow mt-auto">
                <span>Talk to us</span>
                <Icon name="arrow" size={16} strokeWidth={2} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. Telecom Section */}
      <section id="telecom" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Telecom"
            title="Customer care that keeps subscribers"
            lede="Telecom customers call about bills, activations and outages — at volume, and often all at once. We run care, provisioning and retention for operators, and scale the floor when your campaigns do."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for telecom operators
              </h3>
              <CheckList
                items={[
                  "Inbound care and complaint close-looping",
                  "Provisioning, activation and billing support",
                  "Retention, upsell and win-back",
                  "Predictive-dialler outbound campaigns",
                  "Social media care and reputation monitoring",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow sky">Scale &amp; proof</p>
              <h3>Rapid Surge Ramps</h3>
              <p>
                Fitted-out seats across Dhaka and Chattogram allow rapid ramp-up
                for national SIM registration drives and seasonal promos.
              </p>
              <p>
                <Todo>
                  Suggested: “Ramped a 600+ seat telecom programme in X weeks.”
                  Confirm figure.
                </Todo>
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/telecom" variant="mint" size="sm" arrow>
                  Explore telecom vertical
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banking & Financial Services Section */}
      <section id="banking-financial-services" className="section section-ground scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Banking &amp; Financial Services"
            title="Careful service for money matters"
            lede="Banking customers expect accuracy, security and patience. We run account servicing and verification under strict access controls, with 100% feedback on audited transactions."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for banks and financial institutions
              </h3>
              <CheckList
                items={[
                  "Account and card servicing",
                  "KYC and document verification",
                  "Collections and payment reminders",
                  "Onboarding and digital banking support",
                  "Back-office reconciliations and ledger verification",
                ]}
              />
            </div>

            <div className="card card-petrol" style={{ gap: "18px" }}>
              <p className="eyebrow sky">Governance &amp; security</p>
              <h3>Banking-Grade Controls</h3>
              <CheckList
                items={[
                  "Role-based access with named-user audit trails",
                  "Data retention to your specification",
                  "Your right to audit, announced or unannounced",
                ]}
              />
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/banking-financial-services" variant="mint" size="sm" arrow>
                  Explore banking vertical
                </Button>
                <Button href="/contact/request-a-proposal" variant="ghost" size="sm">
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Insurance Section */}
      <section id="insurance" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Insurance"
            title="Service that holds up when it matters"
            lede="Policyholders call when something has gone wrong or a renewal is due. We handle policy enquiries, claims intake and renewal outreach, with AI-assisted advisory for routine questions."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for insurers
              </h3>
              <CheckList
                items={[
                  "Policy enquiries and servicing",
                  "Claims intake and status updates",
                  "Renewal and lapse-prevention outreach",
                  "AI-assisted advisory and outbound calling",
                  "Document collection and policy verification",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow amber">Operating standard</p>
              <h3>Audited Empathy &amp; Accuracy</h3>
              <p>
                Our insurance teams receive rigorous training on regulatory
                disclosure rules, claim documentation, and high-empathy customer
                interaction.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/insurance" variant="mint" size="sm" arrow>
                  Explore insurance vertical
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Microfinance Section */}
      <section id="microfinance" className="section section-ground scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Microfinance"
            title="Support for borrowers and the field teams who serve them"
            lede="Microfinance runs on trust and on-time repayments. We support borrowers and members by phone, chase documents and reminders, and back up your field officers."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for microfinance institutions
              </h3>
              <CheckList
                items={[
                  "Borrower and member helplines",
                  "KYC and document verification",
                  "Repayment reminders and collections support",
                  "Branch and field-officer support",
                  "AI voice reminders at scale in regional languages",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow sky">Scale &amp; trust</p>
              <h3>High-Reach Outreach</h3>
              <p>
                Combining natural AI voice calling for routine reminders with
                empathic human specialists for complex repayment plans.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/microfinance" variant="mint" size="sm" arrow>
                  Explore microfinance vertical
                </Button>
                <Button href="/contact/request-a-proposal" variant="ghost" size="sm">
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Agri-tech Section */}
      <section id="agri-tech" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Agri-tech"
            title="Reaching farmers where they are"
            lede="Farmers call from basic phones, often on weak signal, and need clear answers fast. We run helplines, order support and advisory calling built for that reality."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for agri-tech platforms
              </h3>
              <CheckList
                items={[
                  "Farmer helplines with dialect recognition",
                  "Onboarding and input order support",
                  "Advisory and government scheme-awareness calling",
                  "Surveys, voice of customer and impact data capture",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow amber">Built for weak signal</p>
              <h3>Real-World Resilience</h3>
              <p>
                Our speech recognition engines and trained agents are tuned for
                low-bitrate cellular lines and regional accents across South Asia.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/agri-tech" variant="mint" size="sm" arrow>
                  Explore agri-tech vertical
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ed-tech Section */}
      <section id="ed-tech" className="section section-ground scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="Ed-tech"
            title="Keeping learners on track"
            lede="Learners who get stuck drop off. We onboard new students, answer course and app questions, and run enrolment and renewal campaigns."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for ed-tech platforms
              </h3>
              <CheckList
                items={[
                  "Learner onboarding and learning app support",
                  "Course schedules, tests and payment enquiries",
                  "Enrolment, trial conversions and renewal campaigns",
                  "Parent and guardian communication helplines",
                  "Multilingual in-app chat and messaging care",
                ]}
              />
            </div>

            <div className="card card-petrol" style={{ gap: "18px" }}>
              <p className="eyebrow sky">Engagement &amp; retention</p>
              <h3>Proactive Student Success</h3>
              <p>
                Reduce churn by proactively reaching out to learners who have
                missed deadlines or have low platform activity.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/ed-tech" variant="mint" size="sm" arrow>
                  Explore ed-tech vertical
                </Button>
                <Button href="/contact/request-a-proposal" variant="ghost" size="sm">
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. E-commerce Section */}
      <section id="e-commerce" className="section section-white scroll-mt-[135px]">
        <div className="container">
          <SectionHead
            eyebrow="E-commerce"
            title="Support that scales with your sales"
            lede="When orders spike, so do questions about delivery, returns and refunds. We run customer and seller support across chat, email and voice, and scale up for peak season."
          />

          <div className="split mt-32" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <h3 className="h3" style={{ fontSize: "22px" }}>
                What we run for e-commerce platforms
              </h3>
              <CheckList
                items={[
                  "Order status, delivery tracking and return requests",
                  "Instant refund verification and payment queries",
                  "Seller onboarding, store setup and tier support",
                  "Product listing, catalogue review and trust moderation",
                  "Peak-season 24/7 surge teams across chat, email and voice",
                ]}
              />
            </div>

            <div className="card card-ground" style={{ gap: "18px" }}>
              <p className="eyebrow amber">Ready for peak season</p>
              <h3>Surge Capacity On Demand</h3>
              <p>
                Fitted-out seats are held ready across Dhaka and Chattogram, so
                holiday and flash-sale surge teams activate without build-outs.
              </p>
              <div className="btn-row" style={{ marginTop: "auto" }}>
                <Button href="/industries/e-commerce" variant="mint" size="sm" arrow>
                  Explore e-commerce vertical
                </Button>
                <Button href="/contact/book-a-call" variant="ghost" size="sm">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Don’t see your industry?"
        text="Tell us what you need and we’ll show you how we’d run it."
        buttons={[
          <Button key="talk" href="/contact" variant="mint" arrow>
            Talk to us
          </Button>,
          <Button key="call" href="/contact/book-a-call" variant="ghost">
            Book a discovery call
          </Button>,
        ]}
      />
    </>
  );
}
