import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Starks IT Consulting',
  description: 'Terms and Conditions for Starks IT Consulting Ltd. Review our Master Services Agreement standards, payment schedules, SLAs, IP ownership, and dispute resolution terms in Lagos, Nigeria.',
  keywords: [
    'terms and conditions Nigeria',
    'IT consulting contract Lagos',
    'software development agreement Nigeria',
    'managed IT service level agreement Lagos',
    'enterprise IT legal terms Nigeria'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Starks IT Consulting',
    description: 'Review the commercial terms, service level commitments, and legal agreements governing engagements with Starks IT Consulting Ltd.',
    url: 'https://starks.com.ng/terms',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/terms-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting Terms and Conditions Agreement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Starks IT Consulting',
    description: 'Enterprise consulting standards, SLAs, IP ownership, and contractual guidelines.',
    images: ['/terms-hero.jpg'],
  },
};

export default function TermsAndConditions() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://starks.com.ng/terms',
        url: 'https://starks.com.ng/terms',
        name: 'Terms & Conditions',
        description: 'Terms and Conditions governing consulting and software engagements with Starks IT Consulting Ltd.',
        publisher: {
          '@type': 'Organization',
          name: 'Starks IT Consulting',
          url: 'https://starks.com.ng',
          logo: 'https://starks.com.ng/logo.png',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://starks.com.ng',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Terms & Conditions',
            item: 'https://starks.com.ng/terms',
          },
        ],
      },
    ],
  };

  return (
    <main className="page active" itemScope itemType="https://schema.org/WebPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PAGE HERO */}
      <header className="page-hero">
        <div className="page-hero-bg">
          <img src="/terms-hero.jpg" alt="Starks IT Consulting Terms & Conditions Agreement" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">LEGAL // COMMERCIAL AGREEMENT</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">Service Terms</span>
          </div>
          <h1 className="title" data-reveal data-delay="1">
            Terms &amp; <em>Conditions</em>
          </h1>
          <p className="subtitle" data-reveal data-delay="2">
            These terms define our mutual commitments, service level agreements, intellectual property rights, and commercial standards for all enterprise consulting engagements.
          </p>
        </div>
      </header>

      {/* HIGHLIGHT METRICS BAND */}
      <section style={{
        padding: '2rem 5%',
        background: 'var(--ink2)',
        borderBottom: '1px solid rgba(200, 168, 75, 0.15)',
        transition: 'background 0.3s, border-color 0.3s'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>📋</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Structure</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Master Services Agreement (MSA)</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>⏱️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Guarantees</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Strict SLA Commitments</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>💡</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Intellectual Property</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>100% Client Ownership on Paid IP</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>⚖️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Jurisdiction</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Arbitration in Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED TERMS CONTENT */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 5%', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          fontSize: '1.02rem',
          lineHeight: '1.85',
          color: 'var(--ash2)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--ff-mono)',
            fontSize: '0.75rem',
            color: 'var(--gold)',
            background: 'rgba(200, 168, 75, 0.1)',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid rgba(200, 168, 75, 0.25)',
            marginBottom: '2rem'
          }}>
            <span>VERSION 2.4 · APPLICABLE TO ALL STATEMENTS OF WORK</span>
          </div>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2rem' }}>
            1. Acceptance of Terms &amp; Scope of Application
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            By executing a Statement of Work (SOW), issuing a formal Purchase Order, or accessing our managed enterprise IT systems, you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) agree to be legally bound by these Terms and Conditions established by Starks IT Consulting Ltd (&quot;Starks&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These terms govern all service categories, including enterprise software engineering, managed infrastructure, cybersecurity operations, TransIT fleet management systems, and corporate training programs.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            2. Statements of Work &amp; Order of Precedence
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Individual engagements are detailed in Statements of Work (SOW) specifying deliverables, milestone schedules, acceptance criteria, and billing schedules. In the event of an irreconcilable conflict between these general Terms and an executed SOW signed by authorized signatories of both parties, the provisions of the executed SOW shall prevail solely with respect to that specific engagement.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            3. Client Responsibilities &amp; Prerequisites
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Timely delivery of IT solutions relies on coordinated collaboration. The Client agrees to:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Designate an authorized Project Sponsor and Technical Point of Contact with decision-making authority.</li>
            <li>Grant necessary administrative, VPN, or physical access to networks, repositories, and staging servers within agreed timelines.</li>
            <li>Review and formally accept or provide written rejection of milestone deliverables within 10 business days of presentation.</li>
            <li>Maintain independent, verified backups of all production data prior to migration or architectural transformation exercises.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            4. Fees, Payment Terms &amp; Invoicing
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Commercial arrangements are structured as follows:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Milestone Projects</strong>
              <span>50% commitment mobilization deposit upon SOW execution; balance invoiced upon validated milestone completion.</span>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Managed IT &amp; Retainers</strong>
              <span>Invoiced on the 1st of each calendar month, payable within 14 business days of invoice presentation.</span>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Currency &amp; Taxes</strong>
              <span>Fees are quoted in Nigerian Naira (NGN) or USD (as agreed) exclusive of applicable Value Added Tax (VAT) and statutory withholdings.</span>
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            5. Service Level Agreements (SLAs) &amp; Incident Priorities
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            For managed infrastructure, cybersecurity monitoring, and cloud support, Starks guarantees strict incident response windows:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Priority 1 (Critical Outage):</strong> Complete system downtime or severe security breach. Response within <strong>30 minutes</strong>; continuous mitigation until restored.</li>
            <li><strong>Priority 2 (High Degradation):</strong> Major core functionality degraded with no workaround. Response within <strong>2 hours</strong>.</li>
            <li><strong>Priority 3 (Medium Issue):</strong> Non-critical functional glitch or configuration request. Response within <strong>8 business hours</strong>.</li>
            <li><strong>Priority 4 (Low / Informational):</strong> General advisory or routine change requests. Response within <strong>24 business hours</strong>.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            6. Intellectual Property Rights
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Our intellectual property framework establishes clean, unambiguous ownership:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Client Deliverables:</strong> All bespoke source code, database architectures, and custom workflows created specifically for the Client become 100% Client property upon settlement of all milestone invoices.</li>
            <li><strong>Client Pre-Existing IP:</strong> The Client retains sole and unencumbered ownership of all data, proprietary trade secrets, and existing systems furnished to Starks.</li>
            <li><strong>Starks Pre-Existing Tooling:</strong> Starks retains title to proprietary deployment scripts, internal frameworks, and libraries. To the extent embedded in deliverables, Client receives a perpetual, worldwide, royalty-free license to use and modify them.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            7. Confidentiality &amp; Non-Disclosure
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Both parties agree that all confidential information—including system architecture, codebases, financial details, customer data, and security assessments—shall be held in strict confidence, accessed solely on a need-to-know basis, and protected with reasonable care for a period of five (5) years following termination of the engagement.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            8. Limitation of Liability
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            To the maximum extent permitted by Nigerian law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, revenue, or business interruption). Starks&apos;s aggregate liability arising out of or related to any engagement shall not exceed the total fees paid by the Client to Starks under the applicable SOW in the six (6) months preceding the incident.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            9. Termination &amp; Transition Assistance
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Either party may terminate an ongoing managed service agreement upon thirty (30) days prior written notice. In the event of material breach, termination may occur within fourteen (14) days if uncured. Upon termination, Starks will deliver all completed deliverables and provide orderly handover transition assistance to the Client&apos;s designated incoming provider.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            10. Dispute Resolution &amp; Governing Law
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or in connection with this agreement shall first be subjected to good-faith executive negotiation. If unresolved within thirty (30) days, the matter shall be referred to and finally resolved by arbitration in Lagos under the Arbitration and Mediation Act 2023, conducted in English by a single arbitrator appointed by the Lagos Court of Arbitration (LCA).
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            11. Contact the Legal Office
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For contract queries, SLA reviews, or custom enterprise MSA negotiations:
          </p>
          <div style={{
            background: 'var(--ink2)',
            padding: '2rem',
            borderRadius: '10px',
            border: '1px solid rgba(200, 168, 75, 0.25)',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>LEGAL DESK</strong>
                <a href="mailto:legal@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>legal@starks.com.ng</a>
              </div>
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>ENTERPRISE CONTRACTS</strong>
                <a href="mailto:info@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>info@starks.com.ng</a>
              </div>
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>TELEPHONE</strong>
                <a href="tel:+2348165618476" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>+234 (0)816 561 8476</a>
              </div>
            </div>
          </div>

          {/* RELATED LEGAL POLICIES */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <Link href="/privacy" className="btn btn-gold" style={{ textDecoration: 'none' }}>
              <span>Privacy Policy ↗</span>
            </Link>
            <Link href="/ndpr" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
              NDPR Statement
            </Link>
            <Link href="/cookies" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
              Cookies Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
