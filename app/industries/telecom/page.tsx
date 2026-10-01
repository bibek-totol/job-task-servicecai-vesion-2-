import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';
import { Todo } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Telecom Customer Experience Outsourcing | Servicechai',
  description:
    'Inbound care, provisioning, billing support, retention and outbound campaigns for telecom operators, delivered 24×7 from Bangladesh.',
};

const telecomConfig: IndustryConfig = {
  slug: 'telecom',
  name: 'Telecom',
  h1: 'Customer care that keeps subscribers',
  intro:
    'Telecom customers call about bills, activations and outages — at volume, and often all at once. We run care, provisioning and retention for operators, and scale the floor when your campaigns do.',
  audience: 'telecom operators',
  run: [
    'Inbound care and complaint close-looping',
    'Provisioning, activation and billing support',
    'Retention, upsell and win-back',
    'Predictive-dialler outbound campaigns',
    'Social media care',
  ],
  side: {
    label: 'Proof',
    content: (
      <Todo>
        Suggested: “Ramped a 600+ seat telecom programme in X weeks.” Confirm the figure and that it can be published without naming the client
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

export default function TelecomIndustryPage() {
  return <IndustryVerticalTemplate config={telecomConfig} />;
}
