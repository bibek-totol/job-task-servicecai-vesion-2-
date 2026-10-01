import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, LinkCard, CtaBand, Button } from '@/components/ui';
import { Icon, type IconName } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Industries We Serve | Servicechai',
  description:
    'CX, AI and back-office operations for telecom, banking, insurance, microfinance, agri-tech, ed-tech and e-commerce brands.',
};

const INDUSTRY_ITEMS = [
  {
    title: 'Telecom',
    desc: 'Inbound care, provisioning and billing, retention and win-back campaigns.',
    icon: 'signal' as IconName,
    href: '/industries/telecom',
  },
  {
    title: 'Banking & financial services',
    desc: 'Account servicing, KYC and document verification, collections support.',
    icon: 'bank' as IconName,
    href: '/industries/banking-financial-services',
  },
  {
    title: 'Insurance',
    desc: 'Policy enquiries, claims intake support, renewals and AI-assisted advisory.',
    icon: 'shield' as IconName,
    href: '/industries/insurance',
  },
  {
    title: 'Microfinance',
    desc: 'Borrower helplines, KYC, repayment reminders and field-officer support.',
    icon: 'people' as IconName,
    href: '/industries/microfinance',
  },
  {
    title: 'Agri-tech',
    desc: 'Farmer helplines, input orders, advisory and scheme-awareness calling.',
    icon: 'sprout' as IconName,
    href: '/industries/agri-tech',
  },
  {
    title: 'Ed-tech',
    desc: 'Learner onboarding, course and app support, enrolment campaigns.',
    icon: 'cap' as IconName,
    href: '/industries/ed-tech',
  },
  {
    title: 'E-commerce',
    desc: 'Order and delivery support, returns, seller onboarding and listing moderation.',
    icon: 'cart' as IconName,
    href: '/industries/e-commerce',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for regulated, high-volume industries"
        intro="We already run complex, policy-heavy queues for telecom operators, microfinance institutions and technology platforms. Any combination can be piloted first and expanded on performance."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
          <Button key="rfp" href="/contact/request-a-proposal" variant="ghost">
            Request a proposal
          </Button>,
        ]}
      />

      {/* Industries Grid */}
      <section className="section section-ground">
        <div className="container">
          <div className="grid grid-4">
            {INDUSTRY_ITEMS.map((ind) => (
              <LinkCard
                key={ind.title}
                title={ind.title}
                text={ind.desc}
                href={ind.href}
                iconName={ind.icon}
              />
            ))}

            <Link
              href="/contact"
              className="card card-soft flex flex-col justify-between"
            >
              <h3>Don’t see your industry?</h3>
              <span className="link-arrow mt-auto">
                <span>Talk to us</span>
                <Icon name="arrow" size={16} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Don’t see your industry?"
        text="Tell us what you need and we’ll show you how we’d run it."
        buttons={[
          <Button key="talk" href="/contact" variant="mint" arrow>
            Talk to us
          </Button>,
        ]}
      />
    </>
  );
}
