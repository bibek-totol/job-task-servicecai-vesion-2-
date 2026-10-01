import React from "react";
import { SectionHead, CertBadges, DeliveryCentres, CheckList, LinkArrow } from "@/components/ui";

const COMMITMENTS = [
  "Dedicated, physically segregated facility",
  "Client-approved background checks",
  "Role-based access with audit trails",
  "Data retention to your specification",
  "Your right to audit, announced or not",
];

export function GovernanceSection() {
  return (
    <section className="section section-white" id="governance">
      <div className="container">
        <SectionHead
          eyebrow="Governance &amp; delivery"
          title="Built to be audited"
          lede="Certified standards, measured quality and two geo-redundant delivery centres, with fitted-out seats held ready so a new programme ramps without a build-out."
        />

        <CertBadges />

        <div className="grid grid-3 mt-24">
          <DeliveryCentres />

          <div className="card card-petrol">
            <h3 style={{ fontSize: "20px" }}>
              Commitments we write into your contract
            </h3>
            <CheckList items={COMMITMENTS} />
            <div style={{ marginTop: "auto" }}>
              <LinkArrow href="/contact/site-visit">Book a site visit</LinkArrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
