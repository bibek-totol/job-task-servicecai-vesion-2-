import React from "react";
import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Insights: Offshore CX, AI and Bangladesh | Servicechai",
  description:
    "Case studies and practical articles on offshore customer experience, agentic AI and building delivery teams in Bangladesh.",
};

const ARTICLES = [
  {
    title: "Bangladesh vs the Philippines vs India for customer support",
    desc: "Cost and quality compared, with sources.",
  },
  {
    title: "Attrition is the hidden cost of offshore CX",
    desc: "How turnover drives cost and quality, and what ~10% changes.",
  },
  {
    title: "What is a global capability centre — and should you build one in Bangladesh?",
    desc: "GCC basics, models and the Bangladesh case.",
  },
  {
    title: "Where AI agents stop and humans start",
    desc: "Designing warm hand-off in voice and chat.",
  },
  {
    title: "How to run a 90-day CX pilot with a new offshore partner",
    desc: "The pilot plan, step by step.",
  },
];

const PROFILE_FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, fullWidth: true, autocomplete: "organization" },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        eyebrow="Insights"
        title="Insights"
        intro="Practical thinking on offshore CX, AI and the case for Bangladesh, plus results from the programmes we run."
      />

      {/* Case Studies */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Case studies"
            title="Results from live programmes"
            single
          />
          <p className="todo">
            Add one case study per service, named by sector (not client): title with the result ·
            at a glance (sector, services, channels, team size, go-live) · the challenge · what we did
            · three results with numbers · a client quote only with written permission.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead eyebrow="Articles" title="Coming soon" single />
          <div className="grid grid-3">
            {ARTICLES.map((art) => (
              <article key={art.title} className="card">
                <span className="tag">Coming soon</span>
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Form */}
      <section className="section section-white" id="company-profile">
        <div className="container">
          <div className="form-layout">
            <div className="stack" style={{ gap: 16 }}>
              <p className="eyebrow">Company profile</p>
              <h2 className="h3" style={{ fontSize: "clamp(28px,3vw,40px)" }}>
                Download our company profile
              </h2>
              <p className="lede">
                Services, credentials, leadership and delivery centres in 10 pages.
              </p>
            </div>

            <FormBlock
              formName="company-profile"
              fields={PROFILE_FIELDS}
              submitLabel="Send me the profile"
              successTitle="It’s on its way"
              successText="We’ll email the company profile to you shortly."
            />
          </div>
        </div>
      </section>
    </>
  );
}
