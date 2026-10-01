import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Servicechai",
  description: "Servicechai privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy policy" },
        ]}
        title="Privacy policy"
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
