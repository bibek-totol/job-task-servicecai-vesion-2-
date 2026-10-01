import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Servicechai",
  description:
    "Book a 30-minute discovery call with Servicechai on your volumes, channels, systems and pain points.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, autocomplete: "organization" },
  { label: "Country", name: "country", type: "text", required: true, autocomplete: "country-name" },
  { label: "Phone", name: "phone", type: "tel", autocomplete: "tel" },
  {
    label: "Topic",
    name: "topic",
    type: "select",
    required: true,
    options: [
      "Customer care",
      "Agentic AI",
      "Back office",
      "Global capability centre",
      "Consulting",
      "Something else",
    ],
  },
  {
    label: "Monthly contact volume",
    name: "volume",
    type: "select",
    fullWidth: true,
    options: [
      "Under 10,000",
      "10,000–50,000",
      "50,000–250,000",
      "Over 250,000",
      "Not sure",
    ],
  },
];

const WHAT_TO_EXPECT = [
  "30 minutes, by video or phone",
  "A conversation about your queues, not a sales pitch",
  "A suggested first queue to pilot",
  "No obligation",
];

export default function BookCallPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact/" },
          { label: "Book a call" },
        ]}
        eyebrow="Book a call"
        title="Book a 30-minute discovery call"
        intro={
          <>
            We’ll cover your volumes, channels, systems and pain points, and suggest where a pilot could start. You’ll speak with{" "}
            <Todo>a member of our leadership team — confirm</Todo>.
          </>
        }
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="book-a-call"
              fields={FIELDS}
              submitLabel="Choose a time"
              successTitle="Thanks — we’ll confirm your call"
              successText="Expect an email within one working day with a calendar invite. To make the call count, have your rough volumes, channels and current service levels to hand."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                What to expect
              </h2>
              <CheckList items={WHAT_TO_EXPECT} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
