import React from "react";
import Link from "next/link";
import { SectionHead, LinkCard } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

interface IndustryItem {
  title: string;
  desc: string;
  icon: IconName;
  href: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    title: "Telecom",
    desc: "Inbound care, provisioning and billing, retention and win-back campaigns.",
    icon: "signal",
    href: "/industries/telecom",
  },
  {
    title: "Banking & financial services",
    desc: "Account servicing, KYC and document verification, collections support.",
    icon: "bank",
    href: "/industries/banking-financial-services",
  },
  {
    title: "Insurance",
    desc: "Policy enquiries, claims intake support, renewals and AI-assisted advisory.",
    icon: "shield",
    href: "/industries/insurance",
  },
  {
    title: "Microfinance",
    desc: "Borrower helplines, KYC, repayment reminders and field-officer support.",
    icon: "people",
    href: "/industries/microfinance",
  },
  {
    title: "Agri-tech",
    desc: "Farmer helplines, input orders, advisory and scheme-awareness calling.",
    icon: "sprout",
    href: "/industries/agri-tech",
  },
  {
    title: "Ed-tech",
    desc: "Learner onboarding, course and app support, enrolment campaigns.",
    icon: "cap",
    href: "/industries/ed-tech",
  },
  {
    title: "E-commerce",
    desc: "Order and delivery support, returns, seller onboarding and listing moderation.",
    icon: "cart",
    href: "/industries/e-commerce",
  },
];

export function IndustriesSection() {
  return (
    <section className="section section-ground" id="industries">
      <div className="container">
        <SectionHead
          eyebrow="Industries"
          title="Built for regulated, high-volume industries"
          lede="We already run complex, policy-heavy queues for telecom operators, microfinance institutions and technology platforms. Any combination can be piloted first and expanded on performance."
        />

        <div className="grid grid-4" style={{ gap: "16px" }}>
          {INDUSTRIES.map((ind, idx) => (
            <LinkCard
              key={idx}
              title={ind.title}
              text={ind.desc}
              href={ind.href}
              iconName={ind.icon}
            />
          ))}

          <Link className="card card-soft" href="/contact">
            <h3>Don’t see your industry?</h3>
            <span className="link-arrow" style={{ marginTop: "auto" }}>
              <span>Talk to us</span>
              <Icon name="arrow" size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
