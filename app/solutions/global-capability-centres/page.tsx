import type { Metadata } from 'next';
import { PageHero, SectionHead, Card, Steps, CtaBand, Button, Todo, ChipList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Global Capability Centres in Bangladesh | Servicechai',
  description:
    'Set up your own global capability centre in Bangladesh for customer service, IT, finance or analytics — local talent at scale, run to your standards.',
};

export default function GlobalCapabilityCentresPage() {
  const gccFunctions = [
    'Customer service and CX operations',
    'IT support, service desk, SOC and NOC',
    'Finance and accounting operations',
    'Data, analytics and reporting',
    'HR shared services and recruitment',
  ];

  const stepsData = [
    { title: 'Design', text: 'Scope, roles, location and the business case, agreed with you.' },
    { title: 'Build', text: 'Seats ready in Dhaka or Chattogram, plus hiring, training, systems and security.' },
    { title: 'Operate', text: 'We run it to your KPIs, under your brand and your governance.' },
    {
      title: 'Transfer',
      text: (
        <Todo>
          Move the centre and team to your own entity when you’re ready — keep this step only if you offer it
        </Todo>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Global capability centres"
        title="Your own strategic hub in Bangladesh"
        intro="A global capability centre (GCC) supports a company’s global operations through technology, talent and innovation. We help you build one in Bangladesh — with your processes, your culture and our operating experience."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Global capability centres' },
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

      {/* What a GCC is */}
      <section className="section section-white">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <SectionHead
              eyebrow="What a GCC is"
              title="From cost centre to growth engine"
              single
            />
            <div className="stack">
              <p className="lede">
                GCCs began as a way to lower costs. The best ones now do much more: they help the business adopt new technology faster, create value across functions and support growth.
              </p>
              <p className="lede">
                They typically run customer service, IT, finance, analytics and R&amp;D.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="What your GCC can run"
            title="Functions we set up and run"
            single
          />
          <ChipList items={gccFunctions} />
        </div>
      </section>

      {/* Why build it in Bangladesh */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Why build it in Bangladesh"
            title="Talent, quality, innovation — and cost"
            single
          />
          <div className="grid grid-4">
            <Card
              title="Access to talent"
              text="Nearly 900,000 university graduates were looking for work in 2024. We hire, train and keep them, at around 10% attrition."
              iconName="people"
            />
            <Card
              title="Quality and productivity"
              text="Standardised processes, COPC-compliant operations and an ISO 9001:2015 quality system from day one."
              iconName="award"
            />
            <Card
              title="Innovation built in"
              text="Agentic AI and automation are part of the design, not an afterthought."
              iconName="sparkle"
            />
            <Card
              title="Lower cost"
              text="Up to 30% below comparable delivery in India and the Philippines."
              iconName="chart"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="How we help"
            title="Design, build, operate"
            single
          />
          <Steps items={stepsData} />
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Explore a GCC in Bangladesh"
        text="Talk to us about scope, timeline and the business case."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
        ]}
      />
    </>
  );
}
