import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Book an AI Demo | Servicechai",
  description:
    "Book a 30-minute demo of Servicechai’s agentic AI voice and chat agents on a use case from your business.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, autocomplete: "organization" },
  { label: "Country", name: "country", type: "text", autocomplete: "country-name" },
  {
    label: "Use case",
    name: "use_case",
    type: "select",
    required: true,
    options: [
      "Billing and account queries",
      "Document and KYC chasing",
      "Reactivation and surveys",
      "Other",
    ],
  },
  {
    label: "Demo language",
    name: "language",
    type: "text",
    required: true,
    placeholder: "e.g. English",
  },
  {
    label: "Channel",
    name: "channel",
    type: "radio-group",
    options: ["Voice", "Chat", "Both"],
    fullWidth: true,
  },
];

const IN_THE_DEMO = [
  "A live AI conversation on your use case",
  "The warm hand-off to a human agent",
  "How it connects to your systems",
  "Questions answered by our team",
];

export default function AiDemoPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions/" },
          { label: "Agentic AI", href: "/solutions/agentic-ai/" },
          { label: "Demo" },
        ]}
        eyebrow="Agentic AI demo"
        title="Hear our AI agent in action"
        intro="A 30-minute demo on a use case from your business, in the language your customers speak."
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="ai-demo"
              fields={FIELDS}
              submitLabel="Book my demo"
              successTitle="Your demo request is in"
              successText="We’ll send a time and a short brief so we can tailor the demo to your use case."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                In the demo
              </h2>
              <CheckList items={IN_THE_DEMO} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
