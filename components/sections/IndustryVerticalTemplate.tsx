import React from 'react';
import Link from 'next/link';
import { PageHero, CheckList, CtaBand, Button } from '@/components/ui';

export interface IndustryConfig {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  audience: string;
  run: string[];
  side?: {
    label: string;
    content: React.ReactNode;
  };
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export const ALL_INDUSTRIES = [
  { name: 'Telecom', href: '/industries/telecom' },
  { name: 'Banking & financial services', href: '/industries/banking-financial-services' },
  { name: 'Insurance', href: '/industries/insurance' },
  { name: 'Microfinance', href: '/industries/microfinance' },
  { name: 'Agri-tech', href: '/industries/agri-tech' },
  { name: 'Ed-tech', href: '/industries/ed-tech' },
  { name: 'E-commerce', href: '/industries/e-commerce' },
];

export function IndustryVerticalTemplate({ config }: { config: IndustryConfig }) {
  const currentPath = `/industries/${config.slug}`;
  const otherIndustries = ALL_INDUSTRIES.filter((ind) => ind.href !== currentPath);

  return (
    <>
      <PageHero
        eyebrow={config.name}
        title={config.h1}
        intro={config.intro}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: config.name },
        ]}
        buttons={[
          <Button key="primary" href={config.primaryAction.href} variant="mint" arrow>
            {config.primaryAction.label}
          </Button>,
          <Button key="secondary" href={config.secondaryAction.href} variant="ghost">
            {config.secondaryAction.label}
          </Button>,
        ]}
      />

      <section className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="stack" style={{ gap: '18px' }}>
              <p className="eyebrow">What we run</p>
              <h2 className="h3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                What we run for {config.audience}
              </h2>
              <CheckList items={config.run} />
            </div>

            {config.side ? (
              <div className="card card-ground">
                <p className="eyebrow">{config.side.label}</p>
                {config.side.content}
              </div>
            ) : (
              <div className="card card-ground">
                <p className="eyebrow">Also included</p>
                <CheckList
                  items={[
                    '24×7×365 cover',
                    '~10% agent attrition',
                    'COPC-compliant quality',
                  ]}
                />
              </div>
            )}
          </div>

          <nav className="other-links" aria-label="Other industries">
            <span>Other industries:</span>
            {otherIndustries.map((ind) => (
              <Link key={ind.href} href={ind.href}>
                {ind.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CtaBand
        title="Start with one queue"
        text="Pilot a single queue for ninety days and judge us on live results."
        buttons={[
          <Button key="cta" href={config.primaryAction.href} variant="mint" arrow>
            {config.primaryAction.label}
          </Button>,
        ]}
      />
    </>
  );
}
