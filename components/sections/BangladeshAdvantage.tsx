import React from "react";
import { Button, BtnRow } from "@/components/ui/Button";
import { Leaderboard } from "@/components/ui";

const PILLARS = [
  {
    title: "English-fluent graduates",
    desc: "Degree-educated agents, screened for English and certified on your process before they take a live contact.",
  },
  {
    title: "Global quality standards",
    desc: "COPC-compliant operations, Six Sigma-certified leadership and an ISO 9001:2015 quality system: the standards you audit anywhere else.",
  },
  {
    title: "Round-the-clock cover",
    desc: "Rostered 24×7×365, with overlapping cover for US, European and Asia-Pacific service windows.",
  },
  {
    title: "Built-in resilience",
    desc: "Two geo-redundant centres in Dhaka and Chattogram. Either site can carry the other’s volume.",
  },
];

export function BangladeshAdvantage() {
  return (
    <section className="section section-white perf-defer-render" id="bangladesh" aria-labelledby="bd-title">
      <div className="container">
        <div className="bd">
          <div className="stack" style={{ gap: "24px" }}>
            <p className="eyebrow amber">The Bangladesh advantage</p>
            <h2 id="bd-title">
              Same service standard. <span className="soft">Lower cost. Teams that stay.</span>
            </h2>
            <p className="lede">
              India and the Philippines built the offshore CX industry. Today,
              rising wages and attrition of around 30% a year eat into the savings
              they were chosen for. Bangladesh is the next move: 885,000
              university graduates were looking for work in 2024, and our people
              stay long enough to master your product.
            </p>
            <div className="cost-duo">
              <div>
                <strong>~25%</strong>
                <span>lower cost than India</span>
              </div>
              <div>
                <strong>28–30%</strong>
                <span>lower cost than the Philippines</span>
              </div>
            </div>
            <BtnRow>
              <Button href="/why-bangladesh" variant="mint" size="sm" arrow>
                Read the Bangladesh case
              </Button>
              <Button href="/why-bangladesh/cost-comparison" variant="ghost" size="sm">
                Compare the costs
              </Button>
            </BtnRow>
          </div>

          <Leaderboard />
        </div>

        <div className="mt-56 stack" style={{ gap: "24px" }}>
          <h3 className="h3">What you don’t trade off</h3>
          <ul className="pillars">
            {PILLARS.map((p, idx) => (
              <li key={idx}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
