import React from "react";
import type { Metadata } from "next";
import {
  PageHero,
  SectionHead,
  Card,
  CheckList,
  Table,
  Steps,
  Accordion,
  Button,
  Todo,
  CtaBand,
  FollowTheSun,
  CertBadges,
  LinkArrow,
  Leaderboard,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Why Bangladesh for Offshore CX | Servicechai",
  description:
    "Up to 30% lower cost than India and the Philippines, ~10% attrition and COPC-compliant quality. See the full case for Bangladesh.",
};

const ATTRITION_ROWS = [
  ["Servicechai, Bangladesh", <span key="0" className="num">~10%</span>, "Servicechai operating data"],
  ["Philippines contact centres", "31%", "CCAP, 2022"],
  ["India BPM industry", "25–30%", "Nasscom–Deloitte BPM Survey 2024"],
  ["Contact centres worldwide", "30–45%", "Insignia Resources, 2025"],
];

const TRANSITION_STEPS = [
  {
    when: "Days 0–15",
    title: "Mobilise",
    text: "Governance and RACI agreed; infrastructure, connectivity and security set up; first recruitment wave.",
  },
  {
    when: "Days 16–40",
    title: "Build",
    text: "Knowledge base and SOPs built with your team; train-the-trainer; first certified agent batch; UAT and dry runs.",
  },
  {
    when: "Days 41–60",
    title: "Pilot",
    text: "Live on a ring-fenced slice of volume; daily calibration with your quality team; go / no-go gate.",
  },
  {
    when: "Days 61–90",
    title: "Scale",
    text: "Ramp to the agreed FTE; steady-state governance; automation and contact-reduction backlog opened.",
  },
];

const WHY_FAQ = [
  {
    question: "Is English quality comparable?",
    answer: (
      <>
        <p>
          Our standard comes from our hiring bar, not national averages. We hire
          graduates, screen every candidate for English, certify them on your
          process and calibrate quality with you.
        </p>
        <p>During the pilot you listen to live calls before you commit.</p>
      </>
    ),
  },
  {
    question: "Which languages do you support?",
    answer: (
      <>
        <p>
          Our agents serve customers in English and Bangla. Our agentic AI platform
          covers 75 languages.
        </p>
        <p>
          <Todo>Add any other languages your human agents cover</Todo>
        </p>
      </>
    ),
  },
  {
    question: "How is our data protected?",
    answer: (
      <>
        <p>
          A global-standard security policy, biometric access, 24/7
          surveillance, network separation and no personal devices on the floor.
        </p>
        <p>
          In your contract: role-based access with audit trails, retention to your
          specification and your right to audit.
        </p>
      </>
    ),
  },
  {
    question: "What happens if a site goes down?",
    answer: (
      <p>
        Either centre can carry the other’s volume, and our teams can switch to
        tested work-from-home arrangements.
      </p>
    ),
  },
  {
    question: "How do contracts and payments work?",
    answer: (
      <p>
        <Todo>
          Confirm the contracting entity, billing currency and payment terms
        </Todo>
      </p>
    ),
  },
  {
    question: "Can we visit before we sign?",
    answer: (
      <>
        <p>
          Yes. Week 4 is a site visit: see the floor, meet the team, audit the
          controls.
        </p>
        <p>
          <LinkArrow href="/contact/site-visit">Book a site visit</LinkArrow>
        </p>
      </>
    ),
  },
  {
    question: "How fast can you scale?",
    answer: (
      <>
        <p>
          Fitted-out seats are held ready in both centres, and ramps run in
          hiring waves.
        </p>
        <p>
          <Todo>Add your best ramp example</Todo>
        </p>
      </>
    ),
  },
];

export default function WhyBangladeshPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Bangladesh" }]}
        eyebrow="The Bangladesh advantage"
        title={
          <>
            Same quality. Lower cost.
            <br />
            <span className="accent">Teams that stay.</span>
          </>
        }
        intro="India and the Philippines built the offshore CX industry. Today, rising wages and attrition of around 30% a year eat into the savings they were chosen for. Bangladesh is the next step — without trading away quality."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="comp" href="/why-bangladesh/cost-comparison" variant="ghost">
            Compare the costs
          </Button>,
        ]}
      />

      {/* 1. Cost Case */}
      <section className="section section-white">
        <div className="container">
          <div className="split">
            <div className="stack" style={{ gap: "20px" }}>
              <p className="eyebrow">1 · The cost case</p>
              <h2 className="h3" style={{ fontSize: "clamp(30px,3.2vw,44px)" }}>
                Up to 30% lower cost to serve
              </h2>
              <p className="lede">
                For comparable delivery, a Servicechai team costs about 25% less
                than India and 28–30% less than the Philippines, on a fully loaded
                cost per FTE.{" "}
                <Todo>
                  Confirm what “fully loaded” includes: salaries, facility,
                  technology, management
                </Todo>
              </p>
              <p style={{ fontWeight: 600, color: "var(--ink-strong)" }}>
                Where the saving comes from
              </p>
              <CheckList
                items={[
                  "A lower wage and facility base than the two established hubs",
                  "Lower attrition: at around 10%, you pay to hire and train far fewer replacements",
                  "Seats already fitted out in two centres, so there is no build-out cost to start",
                ]}
              />
              <div>
                <Button href="/why-bangladesh/cost-comparison" variant="mint" arrow>
                  Download the cost comparison
                </Button>
              </div>
            </div>

            <div className="cost-card">
              <p className="kicker">Cost to serve</p>
              <h3>Up to 30% lower cost, same service standard</h3>
              <div className="cost-tiles">
                <div className="cost-tile">
                  <strong>~25%</strong>
                  <span>below India</span>
                </div>
                <div className="cost-tile">
                  <strong>28–30%</strong>
                  <span>below the Philippines</span>
                </div>
              </div>
              <p className="fineprint">Indicative fully loaded cost per FTE for comparable delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Teams That Stay (Attrition Table) */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="2 · Teams that stay"
            title={
              <>
                Around 10% attrition, against <span className="nowrap">30–45%</span> worldwide
              </>
            }
            lede="Every agent who leaves takes product knowledge with them and costs weeks of hiring and training to replace. Low attrition is what protects quality on complex, policy-heavy queues."
          />

          <div style={{ maxWidth: "880px", margin: "0 auto 36px" }}>
            <Leaderboard />
          </div>

          <Table
            headers={["Market", "Annual agent attrition", "Source"]}
            rows={ATTRITION_ROWS}
            highlightIndex={0}
            caption="Annual agent attrition by market"
          />
        </div>
      </section>

      {/* 3. Talent Pool */}
      <section className="section section-white">
        <div className="container">
          <div className="split">
            <div className="card card-petrol" style={{ padding: "40px" }}>
              <p className="big-stat" style={{ fontSize: "clamp(44px,5vw,64px)" }}>
                885,000
              </p>
              <p style={{ fontSize: "18px" }}>
                unemployed university graduates in Bangladesh in 2024 — a deep pool to hire from.
              </p>
              <p className="source-note">
                Source: Bangladesh Bureau of Statistics, Labour Force Survey 2024
              </p>
            </div>

            <div className="stack" style={{ gap: "20px" }}>
              <p className="eyebrow">3 · A deep graduate talent pool</p>
              <h2 className="h3" style={{ fontSize: "clamp(30px,3.2vw,44px)" }}>
                Nearly 900,000 graduates looking for work
              </h2>
              <p className="lede">
                We hire from the top of that pool: degree-educated, screened for
                English and certified on your process before they take a live contact.
              </p>
              <p style={{ fontWeight: 600, color: "var(--ink-strong)" }}>How we hire</p>
              <CheckList
                items={[
                  "English and aptitude assessment",
                  "Interview",
                  "Classroom training",
                  "Toll-gate certification",
                  "Supervised live calls",
                ]}
              />
              <p>
                <Todo>Confirm the hiring steps</Todo>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quality without trade-off */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="4 · Quality without trade-off"
            title="The standards you audit anywhere else"
            single
          />
          <CertBadges />
          <div className="mt-24">
            <CheckList
              items={[
                "100% feedback on audited transactions",
                "Calibration with your quality team",
                "140+ years of combined leadership experience",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 5. Coverage and Resilience */}
      <section className="section section-white">
        <div className="container">
          <FollowTheSun
            heading="Open when your customers are"
            eyebrow="5 · Coverage and resilience"
            hId="fts-why"
          />

          <div className="grid grid-2 mt-24">
            <Card
              title="Every time zone covered"
              text="Rostered 24×7×365. Bangladesh (UTC+6) overlaps Asia-Pacific in the morning and Europe in the afternoon, with night shifts for US hours."
              iconName="clock"
            />
            <Card
              title="No single point of failure"
              iconName="shield"
              extra={
                <CheckList
                  items={[
                    "Two geo-redundant centres in Dhaka and Chattogram; either can carry the other’s volume",
                    "Work-from-home capable and tested against our business continuity plan",
                    <Todo key="power">
                      Confirm backup power (UPS and generator) and redundant internet links at each site
                    </Todo>,
                  ]}
                />
              }
            />
          </div>
        </div>
      </section>

      {/* 6. 90-day Transition */}
      <section className="section section-ground" id="transition">
        <div className="container">
          <SectionHead
            eyebrow="6 · From signature to steady state in 90 days"
            title="A low-risk way to start"
            lede="We don’t ask for your whole book of work. Give us one queue and ninety days."
            h2Id="transition-title"
          />

          <Steps items={TRANSITION_STEPS} />

          <div
            className="card card-white mt-40"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "12px 28px",
              alignItems: "center",
            }}
          >
            <strong style={{ fontFamily: "var(--font-display)", color: "var(--ink-strong)" }}>
              Before signature:
            </strong>
            <span>Week 1 discovery</span>
            <span>→</span>
            <span>Weeks 2–3 proposal</span>
            <span>→</span>
            <span>Week 4 site visit</span>
            <span>→</span>
            <span>Week 5+ live pilot</span>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: "start" }}>
            <SectionHead
              eyebrow="7 · Questions offshore buyers ask"
              title="Straight answers"
              lede="Still unsure? Ask us directly on a discovery call."
              single
            />
            <Accordion items={WHY_FAQ} />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Give us one queue and ninety days"
        text="See performance on live volume before you commit to the full ramp."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="comp" href="/why-bangladesh/cost-comparison" variant="ghost">
            Download the cost comparison
          </Button>,
        ]}
      />
    </>
  );
}
