import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { Stats } from "@/components/sections/Stats";
import { BangladeshAdvantage } from "@/components/sections/BangladeshAdvantage";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AgenticAISection } from "@/components/sections/AgenticAISection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Stats />
      <BangladeshAdvantage />
      <SolutionsSection />
      <AgenticAISection />
      <IndustriesSection />
      <GovernanceSection />
      <FinalCta />
    </>
  );
}
