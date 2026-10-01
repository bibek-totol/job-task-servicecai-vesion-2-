import React from "react";
import type { Metadata } from "next";
import { PageHero, CheckList, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";

export const metadata: Metadata = {
  title: "Apply | Careers at Servicechai",
  description:
    "Apply for a job at Servicechai in Dhaka or Chattogram. It takes about five minutes.",
};

const ROLES = [
  "CX associates",
  "Team leaders and floor supervisors",
  "Quality analysts and coaches",
  "Trainers and learning specialists",
  "Workforce management analysts",
  "IT, network and information security",
  "Business support",
];

const FIELDS: FormFieldDef[] = [
  { label: "Full name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Mobile number", name: "phone", type: "tel", required: true, autocomplete: "tel" },
  { label: "Email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Role", name: "role", type: "select", required: true, options: ROLES },
  {
    label: "Preferred centre",
    name: "centre",
    type: "radio-group",
    options: ["Dhaka", "Chattogram", "Either"],
    required: true,
  },
  {
    label: "Highest education",
    name: "education",
    type: "select",
    required: true,
    options: [
      "HSC or equivalent",
      "Diploma",
      "Bachelor’s (in progress)",
      "Bachelor’s",
      "Master’s or above",
    ],
  },
  {
    label: "Shift availability",
    name: "shifts",
    type: "checkbox-group",
    options: ["Day", "Evening", "Night", "Any"],
  },
  {
    label: "Languages spoken",
    name: "languages",
    type: "text",
    placeholder: "e.g. Bangla, English",
  },
  {
    label: "How did you hear about us?",
    name: "source",
    type: "select",
    options: [
      "Facebook",
      "LinkedIn",
      "Job portal",
      "Friend or colleague",
      "University",
      "Other",
    ],
  },
  {
    label: "Upload your CV",
    name: "cv",
    type: "file",
    accept: ".pdf,.doc,.docx",
    required: true,
    hint: "PDF or Word",
    fullWidth: true,
  },
];

const GOOD_TO_KNOW = [
  "We never charge a fee at any stage of hiring",
  "You’ll take an English and aptitude assessment",
  <span key="training">
    Training is paid and happens before your first live contact <Todo>confirm</Todo>
  </span>,
  "We run 24×7 shifts",
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers/" },
          { label: "Apply" },
        ]}
        eyebrow="Careers"
        title="Apply to Servicechai"
        intro={
          <>
            It takes about five minutes. We review every application and reply within{" "}
            <Todo>X working days</Todo>.
          </>
        }
      />

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <FormBlock
              formName="job-application"
              fields={FIELDS}
              submitLabel="Submit application"
              successTitle="Thank you for applying"
              successText="If your profile matches an opening, our recruitment team will call you to book an assessment. We never charge a fee to apply."
            />

            <aside className="card aside-card">
              <h2 className="h3" style={{ fontSize: 20 }}>
                Good to know
              </h2>
              <CheckList items={GOOD_TO_KNOW} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
