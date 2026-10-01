import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';
import { CheckList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Banking & Financial Services CX Outsourcing | Servicechai',
  description:
    'Account servicing, KYC, collections and digital banking support with strict access controls and audited quality, delivered from Bangladesh.',
};

const bfsiConfig: IndustryConfig = {
  slug: 'banking-financial-services',
  name: 'Banking & financial services',
  h1: 'Careful service for money matters',
  intro:
    'Banking customers expect accuracy, security and patience. We run account servicing and verification under strict access controls, with 100% feedback on audited transactions.',
  audience: 'banks and financial institutions',
  run: [
    'Account and card servicing',
    'KYC and document verification',
    'Collections and payment reminders',
    'Onboarding and digital banking support',
    'Back-office reconciliations',
  ],
  side: {
    label: 'Controls',
    content: (
      <CheckList
        items={[
          'Role-based access with named-user audit trails',
          'Data retention to your specification',
          'Your right to audit, announced or unannounced',
        ]}
      />
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

export default function BankingFinancialServicesPage() {
  return <IndustryVerticalTemplate config={bfsiConfig} />;
}
