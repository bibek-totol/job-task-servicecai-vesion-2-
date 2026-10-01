import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';
import { Todo } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Microfinance Contact Centre Services | Servicechai',
  description:
    'Borrower helplines, KYC, repayment reminders and field-officer support for microfinance institutions, by people and AI.',
};

const microfinanceConfig: IndustryConfig = {
  slug: 'microfinance',
  name: 'Microfinance',
  h1: 'Support for borrowers and the field teams who serve them',
  intro:
    'Microfinance runs on trust and on-time repayments. We support borrowers and members by phone, chase documents and reminders, and back up your field officers.',
  audience: 'microfinance institutions',
  run: [
    'Borrower and member helplines',
    'KYC and document verification',
    'Repayment reminders and collections support',
    'Branch and field-officer support',
    'AI voice reminders at scale',
  ],
  side: {
    label: 'Proof',
    content: (
      <Todo>
        Add one microfinance result: e.g. reminder reach, on-time repayment change or helpline service level
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

export default function MicrofinanceIndustryPage() {
  return <IndustryVerticalTemplate config={microfinanceConfig} />;
}
