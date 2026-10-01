import React from "react";
import type { Metadata } from "next";
import { PageHero, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found | Servicechai",
  description: "The page you were looking for has moved or no longer exists.",
};

export default function NotFound() {
  return (
    <PageHero
      title="We couldn’t find that page"
      intro="It may have moved when we rebuilt our website. Try one of these instead."
      buttons={
        <>
          <Button href="/" variant="mint" arrow>
            Go to the homepage
          </Button>
          <Button href="/contact/" variant="ghost">
            Contact us
          </Button>
        </>
      }
    />
  );
}
