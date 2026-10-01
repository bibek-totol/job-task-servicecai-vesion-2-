import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Button } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Cost Comparison: Bangladesh vs India & the Philippines | Servicechai",
  description:
    "See how a Servicechai team compares with India and the Philippines on fully loaded cost per FTE, and where the saving comes from.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", required: true, autocomplete: "organization" },
  { label: "Country", name: "country", type: "text", required: true, autocomplete: "country-name" },
  {
    label: "Approximate team size",
    name: "team_size",
    type: "select",
    fullWidth: true,
    options: ["Under 25", "25–100", "100–500", "Over 500"],
  },
];

const INSIDE_THE_COMPARISON = [
  "About 25% below India, 28–30% below the Philippines",
  "What “fully loaded” includes",
  "Where the saving comes from",
  "Attrition and its hidden cost",
];

export default function CostComparisonPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Why Bangladesh", href: "/why-bangladesh/" },
          { label: "Cost comparison" },
        ]}
        eyebrow="Cost comparison"
        title="Get the cost comparison"
        intro="See how a Servicechai team compares with India and the Philippines on fully loaded cost per FTE, and where the saving comes from."
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="cost-comparison"
              fields={FIELDS}
              submitLabel="Send me the comparison"
              successTitle="It’s on its way to your inbox"
              successText="Want it modelled on your own volumes? Book a discovery call."
              successExtra={
                <Button href="/contact/book-a-call/" variant="teal" size="sm" arrow>
                  Book a discovery call
                </Button>
              }
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                Inside the comparison
              </h2>
              <CheckList items={INSIDE_THE_COMPARISON} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
