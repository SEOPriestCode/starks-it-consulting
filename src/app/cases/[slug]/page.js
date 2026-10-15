import Link from 'next/link';
import { notFound } from 'next/navigation';

const cases = {
  'core-banking-api-modernisation': {
    category: 'Financial Services',
    year: '2023',
    title: 'Core Banking API Platform Modernisation',
    client: 'Tier-1 Nigerian Bank',
    duration: '18 months',
    team: '14 engineers',
    img: '/cases-banking.jpg',
    summary: 'Rebuilt a legacy monolithic core banking integration layer into a modern, event-driven microservices architecture — enabling real-time transaction processing across 4.2 million accounts and dramatically reducing system downtime.',
    challenge: `Our client — one of Nigeria's top-five commercial banks by total assets — had built its digital banking capabilities over 15 years of iterative development on top of a T24 core banking system. The result was a tightly coupled, monolithic integration layer connecting 23 internal systems and 14 third-party providers. Every product launch required changes to this central layer, making releases slow and risky. System downtime averaged 4.2 hours per month — unacceptable for a bank processing over 2 million transactions daily.

The specific trigger for the transformation programme was a major downtime incident during a public holiday that took the bank's mobile app offline for 6 hours. The cost was estimated at ₦4.2 billion in lost transaction revenue and an incalculable reputational impact.`,
    approach: `We proposed a strangler fig approach — building a new microservices layer alongside the existing monolith, gradually routing traffic to the new services while maintaining the legacy system as a fallback. This avoided a "big bang" cutover that would have been prohibitively risky for a live banking system.

The architectural foundation was an Apache Kafka event streaming platform serving as the central nervous system — all services communicated via events rather than synchronous API calls. This eliminated the cascading failure problem that had caused the holiday outage: in a synchronous system, one slow service can block all others; in an event-driven system, services are decoupled.

We organised the microservices around banking domains: Account Management, Payments, Lending, Notifications, and Compliance. Each domain team owned their services end-to-end — from architecture to deployment to on-call. This was a significant organisational change as much as a technical one.

The engineering stack: Java 17 for core services, Kubernetes on AWS EKS for orchestration, Apache Kafka for event streaming, PostgreSQL for transactional data, Redis for caching, and a custom API gateway built on Kong.`,
    results: [
      { value: '87%', label: 'Reduction in API response latency (P99: 340ms → 44ms)' },
      { value: '4.2M', label: 'Customer accounts served on the new platform' },
      { value: '99.97%', label: 'System uptime in the 12 months post-launch' },
      { value: '65%', label: 'Reduction in time-to-market for new banking features' },
      { value: '₦1.8B', label: 'Estimated annual revenue protected from downtime prevention' },
    ],
    technologies: ['Apache Kafka', 'Kubernetes', 'AWS EKS', 'Java 17', 'Kong API Gateway', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana'],
  },
  'field-operations-erp': {
    category: 'Energy',
    year: '2022',
    title: 'Field Operations ERP System',
    client: 'Major Oil & Gas Operator',
    duration: '14 months',
    team: '11 engineers',
    img: '/blog-erp.png',
    summary: 'Custom ERP system covering logistics, inventory, and field workforce management across 120 depots nationwide — delivering ₦210 million in annual operational savings.',
    challenge: `A leading downstream oil and gas company operating 120 fuel depots across Nigeria was running its field operations on a combination of SAP modules (partially implemented, poorly configured) and a parallel shadow system of Excel files maintained by depot managers. Inventory reconciliation was done monthly, creating blind spots that enabled significant shrinkage losses. Field workforce scheduling was managed entirely through WhatsApp groups.

The business case for a custom ERP was straightforward: inventory shrinkage was estimated at 2.3% of total throughput — at the volumes this company moved, that was ₦380 million annually. Even a 50% reduction in shrinkage would fund the entire project.`,
    approach: `Rather than implement a standard ERP package and force the business to adapt, we conducted a 6-week process discovery phase — visiting 12 depots, shadowing operations managers, and documenting the actual (not assumed) workflows. This revealed several critical requirements that no standard ERP would have met without significant customisation:

The system needed to function offline for up to 72 hours — some depots have extremely limited connectivity. All transactions had to queue locally and sync when connectivity was restored, with conflict resolution logic for inventory discrepancies. We built the field application as a Progressive Web App with IndexedDB-based local storage.

Biometric attendance integration was a firm requirement — the client had experienced significant time theft through buddy punching. We integrated fingerprint readers at each depot with a central identity management system.

The real-time inventory system used IoT-connected flow meters at each depot, with readings fed directly into the ERP via a custom MQTT bridge. Discrepancies above a configurable threshold triggered automatic alerts to depot managers and the regional operations director.`,
    results: [
      { value: '₦210M', label: 'Annual cost savings from shrinkage reduction and efficiency gains' },
      { value: '120', label: 'Depots successfully deployed across all 36 states' },
      { value: '68%', label: 'Reduction in monthly inventory reconciliation time' },
      { value: '1.1%', label: 'Shrinkage rate achieved (from 2.3% baseline)' },
      { value: '99.1%', label: 'Field attendance accuracy with biometric integration' },
    ],
    technologies: ['React PWA', 'Node.js', 'PostgreSQL', 'MQTT', 'IoT Integration', 'Redis', 'AWS', 'Biometric API', 'Power BI'],
  },
  'lagos-state-revenue-portal': {
    category: 'Public Sector',
    year: '2021',
    title: 'Revenue Management & Citizen Portal',
    client: 'Lagos State Government',
    duration: '11 months',
    team: '9 engineers',
    img: '/blog-government.jpg',
    summary: 'End-to-end digital transformation of state revenue collection with integrated payment gateway and taxpayer self-service — tripling monthly internally generated revenue (IGR).',
    challenge: `Lagos State's revenue collection infrastructure was fragmented across more than 20 legacy systems operated by different government agencies, each with its own database, its own receipting process, and its own reporting structure. Citizens making tax payments frequently had to visit multiple offices for a single obligation. Revenue leakage — through manual receipting that bypassed central recording — was estimated at 30–40% of collectible amounts.

The Lagos State Government had attempted digitisation twice before with different vendors. Both projects had been delivered technically but had failed to achieve adoption — the systems existed but most transactions still happened through manual processes.`,
    approach: `The primary design principle was: a Lagos resident must be able to complete any tax payment in under 3 minutes on a basic Android phone with a 3G connection, with no prior registration, no document scanning, and no need to visit a government office.

This constraint drove every technical decision. We built USSD as a first-class channel — not a fallback — because it is the most universally accessible interface in Nigeria. A taxpayer could check their assessment, generate a payment reference, and pay via mobile money through a 10-key phone. The web application was a progressive enhancement of the same data model, not a separate system.

Backend integration was the most complex element. We had to connect to 14 different legacy agency systems, four of which had no API and required custom database adapters reading directly from the underlying Oracle and MSSQL databases. A master reference data service normalised taxpayer identities across systems using a probabilistic matching algorithm (name, phone number, and address components) — resolving the fact that the same individual might appear under slightly different names in six different agency databases.

All payment channels — card, bank transfer, USSD, POS — were consolidated through a single payment orchestration layer, with real-time confirmation feeding directly into the central revenue management system. Revenue leakage through manual bypasses was structurally eliminated.`,
    results: [
      { value: '3.1×', label: 'Increase in monthly internally generated revenue (IGR)' },
      { value: '2.4M', label: 'Citizens registered on the platform in year one' },
      { value: '14', label: 'Government agencies integrated into the unified platform' },
      { value: '94%', label: 'Of transactions now completed digitally (from <20%)' },
      { value: '3 min', label: 'Average transaction completion time for standard payments' },
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'USSD Gateway', 'Paystack', 'Remita', 'Oracle CDC', 'AWS'],
  },
  'unified-patient-records': {
    category: 'Healthcare',
    year: '2022',
    title: 'Unified Patient Records Platform',
    client: 'National Hospital Group (14 Sites)',
    duration: '8 months',
    team: '8 engineers',
    img: '/cases-healthcare.jpg',
    summary: 'HIPAA-aligned electronic medical records platform connecting 14 hospital sites with biometric patient identification — deployed across all sites within 8 months.',
    challenge: `A large private hospital group with 14 facilities across Lagos, Abuja, Port Harcourt, and Kano was managing patient records through a combination of paper files, two incompatible EMR systems acquired through different historical technology decisions, and a shared PACS system for radiology that was only accessible at three sites.

The immediate trigger for the platform initiative was a clinical near-miss: a patient treated at the Abuja facility for a drug allergy was prescribed the same drug at the Lagos facility 18 months later. The allergy was not captured in the Lagos system because there was no patient record linkage. The incident focused executive attention on the patient safety implications of fragmented records.`,
    approach: `The central design challenge was patient identity resolution. In Nigeria, patients frequently register at hospitals under slightly different names (using maiden names, nicknames, or transliterations of Yoruba, Igbo, or Hausa names that render differently). A purely name-based matching system would create duplicate records or, worse, conflate records for different patients.

We implemented a biometric-first identity system using fingerprint and facial recognition at registration. Every patient receives a unique Hospital ID at first visit — across any of the 14 sites — linked to their biometrics. Subsequent visits at any site immediately resolve to the same record. The system handles the common scenario where a patient's fingerprint quality is poor (manual labourers, elderly patients) by falling back to facial recognition with human review for low-confidence matches.

The EMR itself was built on an OpenMRS-derived platform, customised for Nigerian clinical workflows and terminology. We maintained SNOMED CT coding throughout — a significant investment in data quality that enables future interoperability with NHIS and pan-African health data initiatives.

Data migration from the two legacy systems was the most painstaking element — 340,000 historical patient records required deduplication, reconciliation, and manual review of 12,000 ambiguous cases. We built a dedicated data review tool for clinical records staff to resolve conflicts under physician supervision.`,
    results: [
      { value: '14', label: 'Hospital sites live within the 8-month delivery window' },
      { value: '340K', label: 'Historical patient records migrated and deduplicated' },
      { value: '99.3%', label: 'Biometric identification accuracy across all sites' },
      { value: '0', label: 'Medication conflict incidents in 18 months post-launch' },
      { value: '41%', label: 'Reduction in patient registration time at point of care' },
    ],
    technologies: ['OpenMRS', 'React', 'Node.js', 'PostgreSQL', 'FHIR HL7', 'Fingerprint SDK', 'Face Recognition API', 'PACS Integration', 'AWS'],
  },
  'network-outage-prediction': {
    category: 'Telecoms',
    year: '2023',
    title: 'Network Outage Prediction Engine',
    client: 'Tier-2 Telecom Operator',
    duration: '9 months',
    team: '7 engineers + 3 data scientists',
    img: '/cases-telecoms.jpg',
    summary: 'Real-time ML pipeline analysing 2.4TB daily telemetry to predict and pre-empt network degradation 40 minutes in advance — reducing unplanned downtime by 62%.',
    challenge: `A Nigerian mobile network operator with 8.4 million subscribers was experiencing significant network quality issues driven by unplanned outages and degradation events. Each major outage generated thousands of customer care calls, NCC regulatory complaints, and subscriber churn. The existing network operations centre (NOC) was reactive — engineers would discover a problem when it manifested, not before.

The operator's network generated approximately 2.4TB of telemetry data daily from base stations, core network elements, and transport links — but this data was largely unprocessed beyond threshold alerts. The hypothesis was that precursor patterns existed in the telemetry that could predict degradation events before they became customer-impacting.`,
    approach: `The project had two phases: first, building the data infrastructure to make the telemetry actually usable; second, training and deploying the prediction models.

Phase one revealed that the telemetry data, while voluminous, was deeply unreliable — timestamps were inconsistent across network elements, some base stations sent metrics every 15 seconds while others batched every 5 minutes, and a significant minority of elements were configured with incorrect GPS coordinates (making geographic anomaly detection unreliable). Six weeks were spent on data quality remediation before any modelling work began.

The prediction architecture uses a multi-stage ensemble: a time-series anomaly detection layer (LSTM-based) running on 15-minute sliding windows identifies emerging deviation patterns in key KPIs (throughput, packet loss, RSRP, connection success rate). A second layer, a gradient boosting classifier trained on 18 months of historical incident data, maps these anomaly patterns to specific incident types and assigns a probability score. Events above a threshold trigger an automated alert to the NOC with a recommended pre-emptive action.

The 40-minute prediction horizon was determined empirically — it is the minimum time needed for a field engineer to reach most sites in Lagos and take corrective action. Predictions further out proved less reliable; predictions closer in did not provide actionable time.`,
    results: [
      { value: '62%', label: 'Reduction in unplanned network downtime events' },
      { value: '40 min', label: 'Average prediction lead time before degradation onset' },
      { value: '84%', label: 'Prediction accuracy for major incident types' },
      { value: '2.4TB', label: 'Telemetry processed daily through the ML pipeline' },
      { value: '₦890M', label: 'Estimated annual value of prevented downtime events' },
    ],
    technologies: ['Python', 'TensorFlow', 'XGBoost', 'Apache Kafka', 'Apache Spark', 'InfluxDB', 'Grafana', 'Kubernetes', 'AWS SageMaker'],
  },
  'omnichannel-commerce-platform': {
    category: 'Retail',
    year: '2024',
    title: 'Omnichannel Commerce Platform',
    client: 'Leading West African Retailer',
    duration: '16 months',
    team: '16 engineers',
    img: '/cases-retail.png',
    summary: 'Unified digital commerce platform integrating POS, inventory, loyalty, and e-commerce across 80 retail locations in 6 countries — driving 220% increase in online revenue.',
    challenge: `One of West Africa's largest retail chains — with 80 stores across Nigeria, Ghana, Côte d'Ivoire, Senegal, Kenya, and South Africa — was operating with completely siloed online and physical retail operations. The e-commerce platform, built on WooCommerce in 2019, was disconnected from in-store inventory. Customers could not check in-store availability online, could not reserve items for collection, and loyalty points earned in-store were not visible digitally.

The commercial consequence was that digital sales represented only 4% of total revenue despite the client's significant investment in an e-commerce presence. Customer research revealed that 67% of online visitors were dropping off at the point of checking product availability — the website could not reliably show whether an item was actually in stock at any given store.`,
    approach: `The foundational problem was a single source of truth for inventory. Every store had an independent POS system (an older version of Lightspeed) with its own local database. There was no central inventory system — store managers tracked stock in their own Excel files. This had to be solved before anything digital could be built on top of it.

We implemented a central inventory management system (IMS) — built on a custom PostgreSQL schema with a GraphQL API — that every store POS writes to in real-time via a cloud sync layer. The POS integration used Lightspeed's webhook system where available and a custom polling adapter where webhooks were not supported on older versions. Central inventory accuracy reached 96.8% within 60 days of rollout.

With inventory solved, we rebuilt the e-commerce frontend on Next.js — a significant performance improvement over WooCommerce — with real-time inventory checks per store, click-and-collect booking with 2-hour collection windows, and a unified loyalty account visible across digital and physical touchpoints.

The multi-currency, multi-country deployment required careful architecture around pricing rules — promotional pricing in Nigeria cannot be exposed to Ghanaian customers, and local tax treatment differs across all six markets. We built a pricing and tax rules engine configurable by market without code changes.`,
    results: [
      { value: '220%', label: 'Increase in online revenue in the 12 months post-launch' },
      { value: '80', label: 'Retail locations integrated across 6 countries' },
      { value: '96.8%', label: 'Real-time inventory accuracy across all stores' },
      { value: '4× ', label: 'Increase in click-and-collect transactions vs. prior year' },
      { value: '2.1M', label: 'Loyalty programme members unified across digital and physical' },
    ],
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Lightspeed POS API', 'Paystack', 'Flutterwave', 'Redis', 'Cloudflare', 'Vercel', 'Segment'],
  },
};

export async function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return { title: 'Case Study Not Found' };
  return {
    title: `${c.title} — ${c.client} | Starks IT Case Studies`,
    description: c.summary,
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) notFound();

  return (
    <div className="page active">
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={c.img} alt={c.title} />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">CASE STUDY / {c.category.toUpperCase()}</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">{c.category} · {c.year}</span>
          </div>
          <h1 className="title" data-reveal data-delay="1" style={{ maxWidth: '700px' }}>
            {c.title}
          </h1>
          <p className="subtitle" data-reveal data-delay="2" style={{ maxWidth: '540px' }}>
            {c.client}
          </p>
          <div data-reveal data-delay="3" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {[
              { label: 'Duration', value: c.duration },
              { label: 'Team Size', value: c.team },
              { label: 'Industry', value: c.category },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', color: '#ffffff' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS BAND */}
      <div style={{ background: 'var(--gold)', padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(4%, 5%, 5%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {c.results.map(r => (
            <div key={r.label} style={{ flex: '1 1 160px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--ink)', fontWeight: 700, lineHeight: 1.1 }}>{r.value}</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'rgba(8,14,26,0.75)', letterSpacing: '0.5px', marginTop: '0.4rem', lineHeight: 1.4 }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5%, 2.5rem)' }}>

        {/* SUMMARY */}
        <div style={{ background: 'var(--ink2)', border: '1px solid rgba(200,168,75,0.15)', borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Executive Summary</div>
          <p style={{ fontSize: '1.05rem', color: 'var(--ash2)', lineHeight: '1.8', fontWeight: 300 }}>{c.summary}</p>
        </div>

        {/* CHALLENGE */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'var(--white)', marginBottom: '1.2rem' }}>The Challenge</h2>
          {c.challenge.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '1rem', color: 'var(--ash2)', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.2rem' }}>{para.trim()}</p>
          ))}
        </div>

        {/* APPROACH */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'var(--white)', marginBottom: '1.2rem' }}>Our Approach</h2>
          {c.approach.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '1rem', color: 'var(--ash2)', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.2rem' }}>{para.trim()}</p>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'var(--white)', marginBottom: '1.2rem' }}>Technology Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {c.technologies.map(t => (
              <span key={t} style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', background: 'rgba(200,168,75,0.08)', color: 'var(--gold)', padding: '6px 14px', letterSpacing: '0.5px', borderRadius: '6px', border: '1px solid rgba(200,168,75,0.15)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'var(--ink2)', borderRadius: '12px', border: '1px solid rgba(200,168,75,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', color: 'var(--white)', marginBottom: '0.4rem' }}>Have a similar challenge?</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--ash2)', fontWeight: 300 }}>Let's talk about how we can deliver results for your organisation.</p>
          </div>
          <Link href="/contact" className="btn btn-gold" style={{ textDecoration: 'none', flexShrink: 0 }}><span>Start a Conversation</span></Link>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/cases" className="arrow-btn" style={{ textDecoration: 'none' }}>← Back to Case Studies</Link>
        </div>
      </div>
    </div>
  );
}
