import type { Metadata } from 'next';
import { PageHero, SectionHead, Card, Steps, CtaBand, Button, Todo } from '@/components/ui';

export const metadata: Metadata = {
  title: 'CX Consulting & Analytics | Servicechai',
  description:
    'Voice-of-customer analytics, contact reduction, training and process re-engineering that lower cost per contact and lift customer experience.',
};

export default function CxConsultingAnalyticsPage() {
  const stepsData = [
    { title: 'Diagnose', text: 'Analyse contact data and listen on the floor.' },
    { title: 'Prioritise', text: 'Rank fixes by volume, cost and effort.' },
    { title: 'Fix', text: 'Change processes, content and self-service with your teams.' },
    { title: 'Measure', text: 'Track contact rate, handling time and satisfaction.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="CX consulting & analytics"
        title="Fewer contacts. Better ones."
        intro="The cheapest contact is the one your customer never needs to make. We find out why customers get in touch, fix the causes upstream and train your teams to handle the rest well."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'CX consulting & analytics' },
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

      {/* Six ways we lower cost per contact */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="What we do"
            title="Six ways we lower cost per contact"
            single
          />
          <div className="grid grid-3">
            <Card
              title="Voice of customer and analytics"
              text="Turn calls, chats and surveys into the reasons customers contact you, ranked by volume and cost."
              iconName="search"
            />
            <Card
              title="Contact reduction"
              text="Remove the causes of avoidable contacts: unclear bills, broken journeys, missing self-service."
              iconName="target"
            />
            <Card
              title="Process re-engineering"
              text="Redesign workflows with Six Sigma methods to cut handling time and rework."
              iconName="cog"
            />
            <Card
              title="Training and skill development"
              text="Onboarding academies, coaching programmes and train-the-trainer for your in-house teams."
              iconName="book"
            />
            <Card
              title="Rebadging"
              text="Move your existing team to us while keeping their knowledge in the operation."
              iconName="users-arrow"
            />
            <Card
              title="Translation"
              text={<Todo>Confirm scope: which content and which languages</Todo>}
              iconName="languages"
            />
          </div>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="How an engagement runs"
            title="Diagnose, prioritise, fix, measure"
            single
          />
          <div>
            <Steps items={stepsData} columns={4} />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Find out why your customers call"
        text="Start with a diagnostic on one queue."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
        ]}
      />
    </>
  );
}
