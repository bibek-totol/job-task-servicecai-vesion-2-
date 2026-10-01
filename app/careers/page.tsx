import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  CheckList,
  Steps,
  Button,
  Todo,
  CtaBand,
} from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers | CX Jobs in Dhaka & Chattogram | Servicechai",
  description:
    "Join 500+ CX professionals in Dhaka and Chattogram. Structured training, weekly coaching and real career paths with a team people stay with.",
};

const ROLES = [
  "CX associates — voice, chat, email and social",
  "Team leaders and floor supervisors",
  "Quality analysts and coaches",
  "Trainers and learning specialists",
  "Workforce management analysts",
  "IT, network and information security",
  "Business support — HR, finance and recruitment",
];

const HIRING_STEPS = [
  { title: "Apply online", text: "A short form and your CV." },
  { title: "Assessment", text: "English and aptitude test." },
  { title: "Interview", text: "With our recruitment team and a team leader." },
  { title: "Offer", text: <Todo>Within X working days</Todo> },
  { title: "Training", text: "Training and certification, then your first live contact." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        eyebrow="Careers"
        title="Build a career in global customer experience"
        intro="Join 500+ people serving customers for leading brands in Bangladesh and abroad. We train you properly, coach you every week and give you a clear path to grow."
        buttons={[
          <Button key="roles" href="/careers#roles" variant="mint" arrow>
            See open roles
          </Button>,
          <Button key="apply" href="/careers/apply" variant="ghost">
            Apply now
          </Button>,
        ]}
      />

      {/* Why People Stay */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Why people stay"
            title="A team people choose to stay with"
            lede="Our attrition is around 10% a year, a fraction of the industry average. That comes from how we hire, train and grow people."
          />

          <div className="grid grid-4">
            <Card
              title="Proper onboarding"
              text="Classroom training and certification before your first live contact."
              iconName="book"
            />
            <Card
              title="Weekly coaching"
              text="One-to-one sessions with your team leader and quality coach."
              iconName="people"
            />
            <Card
              title="Career paths"
              text="Clear routes from agent to team leader, quality, training, workforce management and beyond."
              iconName="rocket"
            />
            <Card
              title="Global work"
              text="Programmes for international brands, with modern tools and AI."
              iconName="globe"
            />
          </div>

          <p className="mt-24">
            <strong style={{ color: "var(--ink-strong)" }}>Benefits:</strong>{" "}
            <Todo>
              List your benefits, e.g. transport, meals, health cover, shift allowance,
              festival bonus
            </Todo>
          </p>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="section section-ground">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <div className="stack" style={{ gap: "18px" }}>
              <p className="eyebrow">Roles we hire for</p>
              <h2 className="h3" style={{ fontSize: "clamp(28px,3vw,40px)" }}>
                Find your place on the team
              </h2>
              <CheckList items={ROLES} />
            </div>

            <div className="card">
              <h3>Live openings</h3>
              <p>
                <Todo>Connect a job board or list current openings here</Todo>
              </p>
              <div style={{ marginTop: "auto" }}>
                <Button href="/careers/apply" variant="mint" arrow>
                  Apply now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hiring Works */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="How hiring works"
            title="From application to your first live contact"
            single
          />
          <Steps items={HIRING_STEPS} variant="five" />
          <p className="mt-24">
            <Todo>Confirm the steps and timings</Todo>
          </p>
        </div>
      </section>

      {/* Locations & Fraud Notice */}
      <section className="section section-ground">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <h3>Dhaka</h3>
              <address className="address">
                <Icon name="pin" size={18} strokeWidth={2} />
                <span>Level 3, 277 Tejgaon Industrial Area, Dhaka</span>
              </address>
            </div>

            <div className="card">
              <h3>Chattogram</h3>
              <address className="address">
                <Icon name="pin" size={18} strokeWidth={2} />
                <span>Levels 15 &amp; 16, SF Tower, 2 Agrabad C/A, Chattogram</span>
              </address>
            </div>

            <div className="card">
              <h3>Shifts</h3>
              <p>
                We run 24×7. <Todo>Confirm the shift options you offer</Todo>
              </p>
            </div>
          </div>

          <div className="card card-soft mt-24">
            <h3>Recruitment fraud notice</h3>
            <p>
              Servicechai never charges a fee at any stage of hiring. We only recruit
              through this website and our official LinkedIn and Facebook pages{" "}
              <Todo>add any job portals you use</Todo>. If anyone asks you for money for
              a job with us, report it to <Todo>careers email</Todo>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Ready to start?"
        text="It takes about five minutes to apply."
        buttons={[
          <Button key="apply" href="/careers/apply" variant="mint" arrow>
            Apply now
          </Button>,
        ]}
      />
    </>
  );
}
