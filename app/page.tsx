import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { Stats } from "@/components/sections/Stats";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AgenticAISection } from "@/components/sections/AgenticAISection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FollowTheSunSection } from "@/components/sections/FollowTheSunSection";
import { BangladeshAdvantage } from "@/components/sections/BangladeshAdvantage";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Stats />
      <SolutionsSection />
      <AgenticAISection />
      <IndustriesSection />
      <FollowTheSunSection />
      <BangladeshAdvantage />
      <GovernanceSection />
      <FinalCta />
    </>
  );
}
