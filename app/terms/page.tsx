import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use | Servicechai",
  description: "Servicechai terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of use" },
        ]}
        title="Terms of use"
        intro="Servicechai BD Limited"
      />

      <section className="section section-white">
        <div className="container">
          <div className="prose">
            <p className="todo">
              Legal text to be provided and reviewed by your lawyer. The new forms
              collect names, contact details and CVs, so this page must explain what
              is collected, why, where it is stored, how long it is kept and how
              people can ask for it to be deleted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
