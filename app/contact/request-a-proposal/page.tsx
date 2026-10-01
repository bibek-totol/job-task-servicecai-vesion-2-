import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Request a Proposal | Servicechai",
  description:
    "Share your requirements or RFP and receive a scoped, SLA-backed proposal from Servicechai.",
};

const SERVICES = [
  "Omnichannel CX management",
  "Agentic AI voice & chat",
  "Back office & BPM",
  "Global capability centre",
  "CX consulting & analytics",
];

const CHANNELS = [
  "Voice inbound",
  "Voice outbound",
  "Chat",
  "Email",
  "Social",
  "Messaging",
  "Back office",
];

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, autocomplete: "organization" },
  { label: "Country", name: "country", type: "text", required: true, autocomplete: "country-name" },
  {
    label: "Services needed",
    name: "services",
    type: "checkbox-group",
    required: true,
    options: SERVICES,
  },
  {
    label: "Channels",
    name: "channels",
    type: "checkbox-group",
    options: CHANNELS,
  },
  {
    label: "Languages",
    name: "languages",
    type: "text",
    placeholder: "e.g. English, Bangla",
  },
  {
    label: "Monthly volume or FTE estimate",
    name: "volume",
    type: "text",
  },
  {
    label: "Hours of cover",
    name: "hours",
    type: "radio-group",
    options: ["Business hours", "Extended hours", "24×7"],
  },
  {
    label: "Target start date",
    name: "start_date",
    type: "text",
    placeholder: "YYYY-MM-DD or Month Year",
  },
  {
    label: "Upload your RFP or requirements",
    name: "rfp_file",
    type: "file",
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    hint: "PDF, Word or Excel file",
    fullWidth: true,
  },
  {
    label: "Anything else we should know",
    name: "notes",
    type: "textarea",
    fullWidth: true,
  },
  {
    label: "We’d like an NDA before sharing details",
    name: "nda",
    type: "checkbox",
    fullWidth: true,
  },
];

const WHAT_HAPPENS_NEXT = [
  "Week 1: a working session on volumes, intents and systems",
  "Weeks 2–3: a scoped, SLA-backed proposal with commercials",
  "Week 4: a site visit to see the floor and audit the controls",
  "Week 5+: contract and a live pilot",
];

export default function RequestProposalPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact/" },
          { label: "Request a proposal" },
        ]}
        eyebrow="Request a proposal"
        title="Request a proposal"
        intro={
          <>
            Share your requirements or RFP. We’ll come back with questions within{" "}
            <Todo>two working days</Todo> and a scoped, SLA-backed proposal within{" "}
            <Todo>two to three weeks</Todo>.
          </>
        }
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="request-a-proposal"
              fields={FIELDS}
              submitLabel="Send request"
              successTitle="Thank you — your request is with our solutions team"
              successText="We’ll confirm receipt by email and come back with any questions within two working days."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                What happens next
              </h2>
              <CheckList items={WHAT_HAPPENS_NEXT} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
