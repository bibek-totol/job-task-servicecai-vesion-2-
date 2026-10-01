import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Todo } from "@/components/ui";
import { FormBlock, type FormFieldDef } from "@/components/forms/FormBlock";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Servicechai | Book a Call or Request a Proposal",
  description:
    "Talk to Servicechai about CX, AI and back-office delivery from Bangladesh. Book a call, send an RFP or visit our Dhaka and Chattogram centres.",
};

const FIELDS: FormFieldDef[] = [
  { label: "Name", name: "name", type: "text", required: true, autocomplete: "name" },
  { label: "Work email", name: "email", type: "email", required: true, autocomplete: "email" },
  { label: "Company", name: "company", type: "text", autocomplete: "organization" },
  { label: "Country", name: "country", type: "text", autocomplete: "country-name" },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    required: true,
    fullWidth: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Let’s talk"
        intro="Tell us what you need and we’ll put you in touch with the right person within one working day."
      />

      <section className="section section-white">
        <div className="container">
          <div className="grid grid-3">
            <Link className="card" href="/contact/book-a-call/">
              <span className="icon-inline">
                <Icon name="headset" size={22} />
              </span>
              <h3>Book a discovery call</h3>
              <p>30 minutes on your volumes, channels and pain points.</p>
            </Link>
            <Link className="card" href="/contact/request-a-proposal/">
              <span className="icon-inline">
                <Icon name="doc" size={22} />
              </span>
              <h3>Request a proposal</h3>
              <p>Send your RFP or requirements for a scoped, SLA-backed proposal.</p>
            </Link>
            <Link className="card" href="/contact/site-visit/">
              <span className="icon-inline">
                <Icon name="building" size={22} />
              </span>
              <h3>Book a site visit</h3>
              <p>See the floor, meet the team and audit the controls.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-ground">
        <div className="container">
          <div className="form-layout">
            <div className="stack" style={{ gap: 20 }}>
              <h2 className="h3">Send us a message</h2>
              <FormBlock
                formName="general-enquiry"
                fields={FIELDS}
                submitLabel="Send message"
                successTitle="Thanks — we’ve got your message"
                successText="We’ll reply within one working day."
              />
            </div>

            <div className="stack" style={{ gap: 16 }}>
              <div className="card">
                <h3>Offices</h3>
                <p>
                  <strong style={{ color: "var(--ink-strong)" }}>Registered office</strong>
                </p>
                <address className="address">
                  <Icon name="pin" size={16} />
                  <span>TA-131, Wakil Tower, Gulshan-Badda Link Road, Gulshan, Dhaka</span>
                </address>

                <p>
                  <strong style={{ color: "var(--ink-strong)" }}>Dhaka Service Delivery Centre</strong>
                </p>
                <address className="address">
                  <Icon name="pin" size={16} />
                  <span>Level 3, 277 Tejgaon Industrial Area, Dhaka</span>
                </address>

                <p>
                  <strong style={{ color: "var(--ink-strong)" }}>Chattogram Service Delivery Centre</strong>
                </p>
                <address className="address">
                  <Icon name="pin" size={16} />
                  <span>Levels 15 &amp; 16, SF Tower, 2 Agrabad C/A, Chattogram</span>
                </address>

                <p>
                  Office hours:{" "}
                  <Todo>Sunday–Thursday, 9:00–18:00 Bangladesh time — confirm</Todo>.
                  Delivery centres run 24×7.
                </p>
              </div>

              <div className="card">
                <h3>Direct lines</h3>
                <p>
                  <a href="mailto:info@servicechai.com">info@servicechai.com</a>
                  <br />
                  <a href="tel:+8809606557799">+880 9606 557799</a>
                </p>
                <p>
                  <Link className="link-arrow" href="/careers/">
                    Careers
                    <Icon name="arrow" size={16} />
                  </Link>
                </p>
                <p>
                  <Link className="link-arrow" href="/investors/enquiry/">
                    Investor enquiries
                    <Icon name="arrow" size={16} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
