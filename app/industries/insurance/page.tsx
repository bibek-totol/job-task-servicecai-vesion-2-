import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';
import { Todo } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Insurance Customer Service Outsourcing | Servicechai',
  description:
    'Policy servicing, claims intake support, renewals and AI-assisted advisory for insurers, delivered from Bangladesh.',
};

const insuranceConfig: IndustryConfig = {
  slug: 'insurance',
  name: 'Insurance',
  h1: 'Service that holds up when it matters',
  intro:
    'Policyholders call when something has gone wrong or a renewal is due. We handle policy enquiries, claims intake and renewal outreach, with AI-assisted advisory for routine questions.',
  audience: 'insurers',
  run: [
    'Policy enquiries and servicing',
    'Claims intake and status updates',
    'Renewal and lapse-prevention outreach',
    'AI-assisted advisory and outbound calling',
    'Document collection',
  ],
  side: {
    label: 'Proof',
    content: (
      <Todo>
        Add one insurance result once the programme has live numbers
      </Todo>
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

export default function InsuranceIndustryPage() {
  return <IndustryVerticalTemplate config={insuranceConfig} />;
}
