import type { Metadata } from 'next';
import { PageHero, SectionHead, CheckList, ChipList, Steps, CtaBand, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Back Office & BPM Outsourcing | Servicechai',
  description:
    'KYC, document verification, content moderation, finance, payroll and RPA from Bangladesh — high accuracy, lower cost, audited to your standard.',
};

export default function BackOfficeBpmPage() {
  const processesCol1 = [
    'KYC and document verification',
    'Provisioning, activation and account set-up',
    'Complaint close-looping and case management',
    'Trust, safety, content and listing moderation',
  ];

  const processesCol2 = [
    'Finance and accounting — payouts, reconciliations and invoicing support',
    'HR and payroll processing',
    'Recruitment process outsourcing (RPO)',
    'Data entry, enrichment and back-office data tasks',
  ];

  const automationChips = [
    'RPA and workflow automation',
    'System integration and ERP support',
    'Learning management systems',
    'SOC and NOC as a service',
  ];

  const stepsData = [
    { title: 'Map', text: 'Document the process, volumes and SLAs with your process owners.' },
    { title: 'Stabilise', text: 'Run it as it is today, with quality checks at every step.' },
    { title: 'Improve', text: 'Remove rework and automate repetitive steps.' },
    { title: 'Report', text: 'Weekly SLA, accuracy and backlog reporting.' },
  ];

  const controls = [
    'Role-based access with named-user audit trails',
    'Data handling and retention written to your specification',
    'Biometric access and 24/7 surveillance on the floor',
    'Option of a physically segregated, client-only facility',
  ];

  return (
    <>
      <PageHero
        eyebrow="Back office & BPM"
        title="The engine behind the customer experience"
        intro="Customer care is only as fast as the back-office process behind it. We run the operational and administrative tasks that keep customer journeys moving, to SLA and audited to your standard."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Back office & BPM' },
        ]}
        buttons={[
          <Button key="rfp" href="/contact/request-a-proposal" variant="mint" arrow>
            Request a proposal
          </Button>,
          <Button key="call" href="/contact/book-a-call" variant="ghost">
            Book a discovery call
          </Button>,
        ]}
      />

      {/* Processes Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="What we run"
            title="Processes we run today"
            single
          />
          <div className="grid grid-2">
            <CheckList items={processesCol1} />
            <CheckList items={processesCol2} />
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="section section-ground">
        <div className="container">
          <SectionHead
            eyebrow="Automation and technology services"
            title="Automate what repeats"
            single
          />
          <ChipList items={automationChips} />
        </div>
      </section>

      {/* Steps Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="How we run a process"
            title="Map, stabilise, improve, report"
            single
          />
          <Steps items={stepsData} />
        </div>
      </section>

      {/* Security & Controls Section */}
      <section className="section section-ground">
        <div className="container">
          <div className="split">
            <div className="stack">
              <h2 className="h3">Security and compliance controls</h2>
              <CheckList items={controls} />
            </div>

            <div className="card card-petrol">
              <p className="kicker">Pilot a process</p>
              <h3>Start with one queue</h3>
              <p>
                Send us a sample batch or start with a single task queue. Measure
                speed and accuracy on live work.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <Button href="/contact/request-a-proposal" variant="mint" size="sm" arrow>
                  Request a proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Scale your operations without scaling overhead"
        text="Talk to our BPM team about volume, turnaround times and SLA."
        buttons={[
          <Button key="call" href="/contact/book-a-call" variant="mint" arrow>
            Book a discovery call
          </Button>,
        ]}
      />
    </>
  );
}
