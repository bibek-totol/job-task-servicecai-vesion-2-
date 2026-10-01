import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';

export const metadata: Metadata = {
  title: 'E-commerce Customer Support Outsourcing | Servicechai',
  description:
    'Order, delivery and returns support, seller onboarding and listing moderation for e-commerce platforms — scaled for peak season.',
};

const ecommerceConfig: IndustryConfig = {
  slug: 'e-commerce',
  name: 'E-commerce',
  h1: 'Support that scales with your sales',
  intro:
    'When orders spike, so do questions about delivery, returns and refunds. We run customer and seller support across chat, email and voice, and scale up for peak season.',
  audience: 'e-commerce platforms',
  run: [
    'Order, delivery and returns support',
    'Refund and payment queries',
    'Seller onboarding and support',
    'Listing, content and trust-and-safety moderation',
    'Peak-season surge teams',
  ],
  side: {
    label: 'Ready for peak season',
    content: (
      <p>
        Fitted-out seats are held ready, so surge teams start without a build-out.
      </p>
    ),
  },
  primaryAction: {
    label: 'Request a proposal',
    href: '/contact/request-a-proposal',
  },
  secondaryAction: {
    label: 'Book a discovery call',
    href: '/contact/book-a-call',
  },
};

export default function EcommerceIndustryPage() {
  return <IndustryVerticalTemplate config={ecommerceConfig} />;
}
