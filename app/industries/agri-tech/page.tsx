import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';

export const metadata: Metadata = {
  title: 'Agri-tech Customer Support Services | Servicechai',
  description:
    'Farmer helplines, onboarding, input orders, advisory calling and impact surveys for agri-tech platforms.',
};

const agritechConfig: IndustryConfig = {
  slug: 'agri-tech',
  name: 'Agri-tech',
  h1: 'Reaching farmers where they are',
  intro:
    'Farmers call from basic phones, often on weak signal, and need clear answers fast. We run helplines, order support and advisory calling built for that reality.',
  audience: 'agri-tech platforms',
  run: [
    'Farmer helplines',
    'Onboarding and input order support',
    'Advisory and scheme-awareness calling',
    'Surveys, voice of customer and impact data capture',
  ],
  side: {
    label: 'Built for weak signal',
    content: (
      <p>
        Our AI voice agents are built to understand speech on poor mobile lines, so outreach scales without losing clarity.
      </p>
    ),
  },
  primaryAction: {
    label: 'Book a discovery call',
    href: '/contact/book-a-call',
  },
  secondaryAction: {
    label: 'Request a proposal',
    href: '/contact/request-a-proposal',
  },
};

export default function AgriTechIndustryPage() {
  return <IndustryVerticalTemplate config={agritechConfig} />;
}
