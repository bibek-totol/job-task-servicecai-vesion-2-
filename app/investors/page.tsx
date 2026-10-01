import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  Table,
  Button,
  Todo,
  CtaBand,
  LinkArrow,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Investors | Servicechai",
  description:
    "Servicechai is building a global customer experience company from Bangladesh. See the investment case and contact our leadership.",
};

const MILESTONES_ROWS = [
  ["2026", "500+ professionals across Dhaka and Chattogram"],
  [<Todo key="m1">2026</Todo>, <Todo key="m2">Largest programme ramp, e.g. 600+ seats in X weeks — confirm</Todo>],
  [<Todo key="m3">Year</Todo>, "ISO 9001:2015 certification"],
  [<Todo key="m4">Year</Todo>, "Chattogram delivery centre opened"],
  [<Todo key="m5">2018</Todo>, <>Servicechai founded <Todo>confirm</Todo></>],
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
        eyebrow="Investors"
        title="Building a global CX company from Bangladesh"
        intro="Global brands are looking beyond India and the Philippines for customer experience delivery. We are building the company they choose in Bangladesh: AI-augmented, certified and already running at scale."
        buttons={[
          <Button key="enquiry" href="/investors/enquiry" variant="mint" arrow>
            Investor enquiry
          </Button>,
        ]}
      />

      {/* The Investment Case */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="The investment case"
            title="Four reasons to look closely"
            single
          />

          <div className="grid grid-4">
            <Card
              title="A market looking for its next hub"
              text={
                <>
                  Offshore CX is a proven model, and buyers want lower cost and lower
                  attrition than the established hubs now offer.{" "}
                  <Todo>Add a market-size figure with its source, if wanted</Todo>
                </>
              }
              iconName="globe"
            />
            <Card
              title="A structural cost advantage"
              text="Up to 30% below comparable delivery in India and the Philippines."
              iconName="chart"
            />
            <Card
              title="Proven delivery at scale"
              text="500+ professionals, 30,000 sq ft across two geo-redundant centres, ISO 9001:2015 and COPC-compliant operations."
              iconName="building"
            />
            <Card
              title="Built for where CX is heading"
              text="Agentic voice and chat in 75 languages, delivered alongside trained human teams."
              iconName="sparkle"
            />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Milestones"
            title="Where we are today"
            single
          />
          <Table
            headers={["Year", "Milestone"]}
            rows={MILESTONES_ROWS}
            caption="Servicechai milestones, newest first"
          />
        </div>
      </section>

      {/* Governance */}
      <section className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead
              eyebrow="Governance"
              title="Institution-grade governance"
              single
            />
            <div className="stack">
              <p className="lede" style={{ color: "var(--text)" }}>
                An established board, COPC and Six Sigma-certified leadership, and a
                clean financial track record.
              </p>
              <p className="lede">
                <Todo>Add your auditor and board members if you want them public</Todo>
              </p>
              <div style={{ paddingTop: "8px" }}>
                <LinkArrow href="/about#leadership">
                  Meet the leadership team
                </LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Talk to our leadership"
        text="Tell us about your fund or organisation and what you would like to know."
        buttons={[
          <Button key="enquiry" href="/investors/enquiry" variant="mint" arrow>
            Investor enquiry
          </Button>,
        ]}
      />
    </>
  );
}
