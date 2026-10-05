import React from "react";
import { FollowTheSun } from "@/components/ui/FollowTheSun";

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
