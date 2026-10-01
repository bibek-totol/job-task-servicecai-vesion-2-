import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  CheckList,
  Todo,
  Button,
  CtaBand,
  CertBadges,
} from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Servicechai | CX Management from Bangladesh",
  description:
    "Servicechai BD Limited runs customer experience, BPM and GCC operations from Dhaka and Chattogram, led by a team with 140+ years of experience.",
};

const STATS = [
  { value: "500+", label: "professionals" },
  { value: "30,000", label: "sq ft" },
  { value: "~10%", label: "attrition" },
  { value: "140+", label: "years of leadership experience" },
];

const LEADERS_EXEC = [
  {
    initials: "DG",
    name: "Dipto Ghosal",
    role: "Chief Executive Officer",
    bio: "20+ years in global BPM with iSON Xperiences, Reliance Jio, Startek and Genex Infosys.",
  },
  {
    initials: "RH",
    name: "Rafel Hossain",
    role: "VP, Business Support",
    bio: "25+ years in CX, building and running large regional and international contact centres. Formerly Genex, Banglalink, Airtel and Grameenphone.",
  },
  {
    initials: "SI",
    name: "Sydul Islam",
    role: "VP, Chief of Staff & Strategy",
    bio: "25+ years in CX strategy, workforce management, data analytics and business support. Formerly Genex, Robi and Kallol Group of Industries.",
  },
  {
    initials: "SP",
    name: "Shah Paran",
    role: "Head of Service Delivery",
    bio: "15+ years in CX, building and running large regional and international contact centres. Formerly Genex, Digicon and Airtel.",
  },
];

const LEADERS_DELIVERY = [
  {
    initials: "DC",
    name: "Darshan R Chowdhury",
    role: "Senior Manager, Service Delivery",
    bio: "11+ years in CX, service delivery and business transitions, with workforce planning and QA. Formerly Genex Infosys.",
  },
  {
    initials: "TH",
    name: "Tapas Howlader",
    role: "Senior Manager, Learning & Development",
    bio: "20+ years across customer experience, operations and capability development. Formerly DHL Express, Banglalink, Citycell and Grameen Health-Tech.",
  },
  {
    initials: "IS",
    name: "Md. Imran Shahriar",
    role: "General Manager, IT",
    bio: "14+ years in IT infrastructure, network security, data centre operations and digital transformation. Formerly Samsung, Qubee, ABG Group and Genex.",
  },
  {
    initials: "RR",
    name: "Raihana Rafiq",
    role: "Senior Manager, People & Culture",
    bio: "12+ years in workplace culture, engagement and talent development — the work behind our low attrition. Formerly Genex and SSL.",
  },
];

const OP_GOV = [
  "Structured onboarding and talent management",
  "Integrated learning with toll-gate certification",
  "Employee life-cycle and career growth plans",
  "Capacity, floor, handling-time and adherence management",
];

const QA_ITEMS = [
  "Weekly one-to-one coaching against defined standards",
  "100% feedback on audited transactions",
  "Cross-functional and client calibration",
  "Coaching logs and improvement trackers",
];

const SEC_ITEMS = [
  "Global-standard security policy and enterprise controls",
  "Biometric access and 24/7 surveillance",
  "Physical and logical server and network separation",
  "No external devices or plug-ins on the floor",
];

const CONTRACT_COMMITMENTS = [
  "A dedicated, physically segregated facility",
  "Client-approved background verification",
  "Role-based access with named-user audit trails",
  "Data handling and retention to your specification",
  "Your right to audit, announced or unannounced",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Servicechai"
        title="Experience, reimagined"
        intro="Servicechai BD Limited is a customer experience management company. We run customer care, agentic AI and back-office operations for brands in Bangladesh and abroad, from two delivery centres in Dhaka and Chattogram."
        stats={STATS}
      />

      {/* Story Section */}
      <section id="story" className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead eyebrow="Our story" title="Built by operators" single />
            <div className="stack">
              <p className="lede">
                <Todo>Founded in 2018 — confirm</Todo>{" "}
                <Todo>One or two sentences on how the company began</Todo>
              </p>
              <p className="lede">
                Today 500+ people run programmes for telecom operators, financial
                institutions and technology platforms, led by a team that has built
                and run large contact centres in Bangladesh and abroad.
              </p>
              <p className="lede">
                <strong style={{ color: "var(--ink-strong)" }}>Where brands lead, we power.</strong>{" "}
                We work behind the brands our clients built and protect the
                experience their customers expect.
              </p>
              <p>
                <Todo>Add three or four company values if you want them on the page</Todo>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Leadership"
            title="140+ years of combined operating experience"
            lede="Named functional owners on your account from day one."
          />

          <h3 className="h3" style={{ fontSize: "20px", marginBottom: "20px" }}>
            Executive committee
          </h3>
          <div className="grid grid-4 mb-12">
            {LEADERS_EXEC.map((l) => (
              <article key={l.name} className="card person">
                <div className="avatar" aria-hidden="true">
                  {l.initials}
                </div>
                <h3>{l.name}</h3>
                <p className="role">{l.role}</p>
                <p>{l.bio}</p>
              </article>
            ))}
          </div>

          <h3 className="h3 mt-40" style={{ fontSize: "20px", marginBottom: "20px" }}>
            Delivery leadership
          </h3>
          <div className="grid grid-4">
            {LEADERS_DELIVERY.map((l) => (
              <article key={l.name} className="card person">
                <div className="avatar" aria-hidden="true">
                  {l.initials}
                </div>
                <h3>{l.name}</h3>
                <p className="role">{l.role}</p>
                <p>{l.bio}</p>
              </article>
            ))}
          </div>

          <p className="mt-24">
            <Todo>
              Add headshots and confirm titles. Add board members if you want to show
              board-level governance
            </Todo>
          </p>
        </div>
      </section>

      {/* Governance & Quality Section */}
      <section id="governance" className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Governance, quality and security"
            title="Built to be audited"
            lede="The standing operating system behind every account we run."
          />

          <CertBadges />

          <div className="grid grid-3 mt-24">
            <div className="card">
              <div className="icon-tile">
                <Icon name="cog" size={28} />
              </div>
              <h3>Operational governance</h3>
              <CheckList items={OP_GOV} />
            </div>

            <div className="card">
              <div className="icon-tile">
                <Icon name="award" size={28} />
              </div>
              <h3>Quality assurance</h3>
              <CheckList items={QA_ITEMS} />
            </div>

            <div className="card">
              <div className="icon-tile">
                <Icon name="lock" size={28} />
              </div>
              <h3>Information security</h3>
              <CheckList items={SEC_ITEMS} />
            </div>
          </div>

          <div className="card card-petrol mt-24">
            <h3 style={{ fontSize: "20px" }}>
              Commitments we write into your contract
            </h3>
            <CheckList items={CONTRACT_COMMITMENTS} />
          </div>
        </div>
      </section>

      {/* Delivery Centres Section */}
      <section id="delivery-centres" className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Delivery centres"
            title="Two cities. One standard."
            lede="30,000 sq ft of delivery space across two geo-redundant centres. Either site can carry the other’s volume, and fitted-out seats are held ready so new programmes launch without a build-out."
          />

          <div className="grid grid-3">
            <article className="centre-card">
              <div className="photo-ph">
                Photo: Dhaka delivery floor
                <br />
                (replace with a real image)
              </div>
              <div className="centre-body">
                <h3>Dhaka Service Delivery Centre</h3>
                <address className="address">
                  <Icon name="pin" size={18} strokeWidth={2} />
                  <span>Level 3, 277 Tejgaon Industrial Area, Dhaka</span>
                </address>
              </div>
            </article>

            <article className="centre-card">
              <div className="photo-ph">
                Photo: Chattogram delivery floor
                <br />
                (replace with a real image)
              </div>
              <div className="centre-body">
                <h3>Chattogram Service Delivery Centre</h3>
                <address className="address">
                  <Icon name="pin" size={18} strokeWidth={2} />
                  <span>Levels 15 &amp; 16, SF Tower, 2 Agrabad C/A, Chattogram</span>
                </address>
              </div>
            </article>

            <div className="card" style={{ justifyContent: "space-between" }}>
              <div className="stack" style={{ gap: "12px" }}>
                <h3>Registered office</h3>
                <address className="address">
                  <Icon name="pin" size={18} strokeWidth={2} />
                  <span>TA-131, Wakil Tower, Gulshan-Badda Link Road, Gulshan, Dhaka</span>
                </address>
                <p>
                  <Todo>Seat count for each centre</Todo>
                </p>
              </div>
              <div>
                <Button href="/contact/site-visit" variant="mint" size="sm" arrow>
                  Book a site visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead eyebrow="Sustainability" title="Growing responsibly" single />
            <div className="stack">
              <p className="lede">
                Servicechai is SBTi approved.{" "}
                <Todo>
                  Confirm the exact status to quote: a commitment to set targets, or
                  targets validated by the Science Based Targets initiative, and the
                  target year
                </Todo>
              </p>
              <p className="lede">
                <Todo>
                  Add any people commitments you want to state, such as first jobs for
                  graduates or women in the workforce, with numbers
                </Todo>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand
        title="See how we work"
        text="Visit the floor, meet the team and audit the controls — or start with a call."
        buttons={[
          <Button key="visit" href="/contact/site-visit" variant="mint" arrow>
            Book a site visit
          </Button>,
          <Button key="call" href="/contact/book-a-call" variant="ghost">
            Book a discovery call
          </Button>,
        ]}
      />
    </>
  );
}
