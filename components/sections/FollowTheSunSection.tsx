import React from "react";
import dynamic from "next/dynamic";

const FollowTheSun = dynamic(
  () => import("@/components/ui/FollowTheSun").then((mod) => mod.FollowTheSun),
  { ssr: true }
);

export function FollowTheSunSection() {
  return (
    <section className="section section-ground" id="coverage">
      <div className="container">
        <FollowTheSun />
      </div>
    </section>
  );
}

export { FollowTheSunSection as FollowTheSun };
