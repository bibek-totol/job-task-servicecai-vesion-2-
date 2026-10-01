import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Investor Enquiry | Servicechai",
  description: "Contact Servicechai’s leadership team about investment.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Organisation", name: "organisation", type: "text", required: true, autocomplete: "organization" },
  {
    label: "Investor type",
    name: "investor_type",
    type: "select",
    options: [
      "Venture capital",
      "Private equity",
      "Strategic",
      "Development finance",
      "Angel",
      "Other",
    ],
  },
  {
    label: "Country",
    name: "country",
    type: "text",
    fullWidth: true,
    autocomplete: "country-name",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    required: true,
    fullWidth: true,
  },
];

const BEFORE_WE_SPEAK = [
  "Your enquiry goes straight to our leadership team",
  "We’re happy to sign an NDA before sharing detail",
  "Site visits can be arranged in Dhaka or Chattogram",
];

export default function InvestorEnquiryPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors/" },
          { label: "Enquiry" },
        ]}
        eyebrow="Investors"
        title="Investor enquiry"
        intro={
          <>
            Tell us about your organisation and what you’d like to discuss. A member of our leadership team will reply within{" "}
            <Todo>two working days</Todo>.
          </>
        }
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="investor-enquiry"
              fields={FIELDS}
              submitLabel="Send enquiry"
              successTitle="Thank you — your enquiry has reached our leadership team"
              successText="We’ll reply within two working days."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                Before we speak
              </h2>
              <CheckList items={BEFORE_WE_SPEAK} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
