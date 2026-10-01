import type { Metadata } from 'next';
import { IndustryVerticalTemplate, type IndustryConfig } from '@/components/sections/IndustryVerticalTemplate';

export const metadata: Metadata = {
  title: 'Ed-tech Student Support Outsourcing | Servicechai',
  description:
    'Learner onboarding, course and app support, enrolment campaigns and parent helplines for ed-tech platforms.',
};

const edtechConfig: IndustryConfig = {
  slug: 'ed-tech',
  name: 'Ed-tech',
  h1: 'Keeping learners on track',
  intro:
    'Learners who get stuck drop off. We onboard new students, answer course and app questions, and run enrolment and renewal campaigns.',
  audience: 'ed-tech platforms',
  run: [
    'Learner onboarding and app support',
    'Course and payment enquiries',
    'Enrolment and renewal campaigns',
    'Parent and guardian helplines',
    'Chat and social support',
  ],
  // side is omitted so it falls back to "Also included" card
  primaryAction: {
    label: 'Book a discovery call',
    href: '/contact/book-a-call',
  },
  secondaryAction: {
    label: 'Request a proposal',
    href: '/contact/request-a-proposal',
  },
};

export default function EdTechIndustryPage() {
  return <IndustryVerticalTemplate config={edtechConfig} />;
}
