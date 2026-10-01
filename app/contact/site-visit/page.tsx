import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Book a Site Visit | Servicechai",
  description:
    "Visit Servicechai’s delivery centres in Dhaka and Chattogram — see the floor, meet the team and audit the controls.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, autocomplete: "organization" },
  {
    label: "Preferred dates",
    name: "dates",
    type: "text",
    required: true,
    placeholder: "e.g. 12–14 November",
  },
  {
    label: "Centre",
    name: "centre",
    type: "radio-group",
    options: ["Dhaka", "Chattogram", "Both"],
    required: true,
  },
  {
    label: "Format",
    name: "format",
    type: "radio-group",
    options: ["In person", "Video walkthrough"],
  },
  {
    label: "Number of visitors",
    name: "visitors",
    type: "text",
    placeholder: "1–20",
  },
  {
    label: "Anything you want to see or audit",
    name: "audit_notes",
    type: "textarea",
    fullWidth: true,
  },
];

const ON_THE_DAY = [
  "A walk through the live floor",
  "Meetings with operations, quality and IT leads",
  "Your audit of our security and data controls",
  <span key="visa">
    <Todo>If you help international visitors with visa invitation letters, say so here</Todo>
  </span>,
];

export default function SiteVisitPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact/" },
          { label: "Site visit" },
        ]}
        eyebrow="Site visit"
        title="Visit our delivery centres"
        intro="See the floor, meet the team and audit the controls in Dhaka, Chattogram or both. Can’t travel? We’ll run a live video walkthrough."
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="site-visit"
              fields={FIELDS}
              submitLabel="Request a visit"
              successTitle="Thanks — we’ll confirm your visit"
              successText="We’ll confirm your date and send an agenda within one working day."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                On the day
              </h2>
              <CheckList items={ON_THE_DAY} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
