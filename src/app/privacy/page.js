import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Starks IT Consulting',
  description: 'Privacy Policy for Starks IT Consulting Ltd. Learn how we collect, use, and protect your personal and enterprise information under NDPA 2023 and ISO 27001 standards.',
  keywords: [
    'privacy policy Nigeria',
    'data protection Nigeria',
    'NDPR compliance Nigeria',
    'NDPA 2023 Starks IT',
    'enterprise privacy policy Lagos',
    'ISO 27001 privacy practices'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Starks IT Consulting',
    description: 'Learn how Starks IT Consulting safeguards your personal information and enterprise data with ISO 27001 controls and NDPA 2023 compliance.',
    url: 'https://starks.com.ng/privacy',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/privacy-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting Privacy Policy and Data Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Starks IT Consulting',
    description: 'Our transparent commitment to data protection, NDPR rights, and enterprise information security.',
    images: ['/privacy-hero.jpg'],
  },
};

export default function PrivacyPolicy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://starks.com.ng/privacy',
        url: 'https://starks.com.ng/privacy',
        name: 'Privacy Policy',
        description: 'Privacy Policy and data protection framework for Starks IT Consulting Ltd.',
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
            name: 'Privacy Policy',
            item: 'https://starks.com.ng/privacy',
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
          <img src="/privacy-hero.jpg" alt="Starks IT Consulting Privacy Policy and Data Protection" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">LEGAL // DATA PRIVACY</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">Information Governance</span>
          </div>
          <h1 className="title" data-reveal data-delay="1">
            Privacy <em>Policy</em>
          </h1>
          <p className="subtitle" data-reveal data-delay="2">
            Your privacy and enterprise data integrity are core to everything we build. This policy details how Starks IT Consulting collects, processes, and protects your information across all engagements.
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
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🔒</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Security</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>ISO 27001:2022 Certified</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>📜</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Framework</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>NDPA 2023 &amp; NDPR</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🚫</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Commercial Terms</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Zero Selling of Data</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🛡️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Cryptographic</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>TLS 1.3 &amp; AES-256</div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT BODY */}
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
            <span>EFFECTIVE DATE: JANUARY 2025 · REVIEW CYCLE: ANNUAL</span>
          </div>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2rem' }}>
            1. Introduction &amp; Corporate Identity
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Starks IT Consulting Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an enterprise technology consulting organization incorporated in the Federal Republic of Nigeria (RC 8349226). We design, architect, and deliver enterprise software, managed IT services, and cloud solutions. This Privacy Policy outlines how we collect, process, safeguard, and disclose personal and organizational information when you visit <strong>starks.com.ng</strong>, register for our learning waitlist at <strong>learn.starks.com.ng</strong>, or enter into enterprise consulting contracts with us.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            2. Scope of Information Collected
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            We collect information strictly necessary to execute our commercial, training, and technical advisory responsibilities:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Personal Contact Data:</strong> Name, professional email address, mobile contact number, company name, and job designation when you request a consultation, download whitepapers, or submit inquiries.</li>
            <li><strong>Training Workspace Data:</strong> Learner name, email address, skill track selections, and onboarding details when joining the Starks Learning Workspace priority waitlist.</li>
            <li><strong>Technical Infrastructure Data:</strong> Architecture specifications, network topology outlines, and system logs shared under strict non-disclosure agreements (NDAs) during client engagements.</li>
            <li><strong>Web Telemetry:</strong> Device identifiers, browser type, geographic region (city level), and anonymized session durations used solely to optimize site responsiveness.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            3. Legal Grounds for Processing
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Under Section 25 of the Nigeria Data Protection Act 2023 (NDPA), Starks processes personal data on the following lawful bases:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Contractual Performance:</strong> To fulfill Statements of Work (SOW), execute Master Services Agreements (MSAs), and deliver agreed IT solutions.</li>
            <li><strong>Consent:</strong> Explicit opt-in consent for receiving technical advisories, newsletters, or early-bird waitlist announcements.</li>
            <li><strong>Legal &amp; Regulatory Obligations:</strong> Compliance with Nigerian tax requirements, NITDA guidelines, and NDPC statutory audit filings.</li>
            <li><strong>Legitimate Interests:</strong> Protecting our digital infrastructure from cyber threats and optimizing network latency.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            4. Enterprise Data Security &amp; ISO 27001
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Starks maintains an Information Security Management System (ISMS) certified to <strong>ISO/IEC 27001:2022</strong>. Our security architecture includes:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Cryptographic Protocols</strong>
              <span>TLS 1.3 encryption across all web traffic and AES-256 block ciphers for client database repositories.</span>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Zero-Trust Access</strong>
              <span>Hardware-enforced Multi-Factor Authentication (MFA), least-privilege role boundaries, and continuous audit trails.</span>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.2)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Continuous Assessment</strong>
              <span>Routine vulnerability scans, annual external NDPR audits, and certified third-party penetration exercises.</span>
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            5. Data Subject Rights
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            As a Nigerian or international data subject engaging with Starks, you are entitled to exercise your full statutory rights under the NDPA 2023:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Right of Access:</strong> Request verification and a complete copy of all personal records we hold concerning you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate, misleading, or incomplete details.</li>
            <li><strong>Right to Erasure:</strong> Request permanent removal of your data where no overriding legal or contractual requirement exists.</li>
            <li><strong>Right to Restrict or Object:</strong> Restrict processing or object to direct communications at any time with immediate effect.</li>
            <li><strong>Right to Data Portability:</strong> Obtain your digital records in an open, structured format (e.g. JSON or CSV).</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            6. Third-Party Disclosures &amp; Sub-Processors
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not sell, rent, or trade your personal information. Disclosures occur solely to verified enterprise sub-processors required to maintain our infrastructure (e.g., enterprise cloud hyperscalers like AWS/Microsoft Azure, or transactional email carriers) bound by written Data Processing Agreements (DPAs) that mandate strict NDPR compliance.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            7. Cross-Border Data Transfers
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Where international technical infrastructure is leveraged (such as globally distributed CDNs for ultra-low latency), Starks verifies that the recipient jurisdiction meets the adequacy requirements of the NDPC, or enforces Standard Contractual Clauses (SCCs) to guarantee equivalent protection.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            8. Data Retention &amp; Disposal
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Client records and project materials are retained for the duration of the engagement plus statutory limitation periods (typically 6 years under Nigerian corporate law). Marketing and waitlist contact details are retained until consent is withdrawn. Data scheduled for disposal is securely sanitized using NIST SP 800-88 cryptographic wipe standards.
          </p>

          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem', marginTop: '2.5rem' }}>
            9. Contact the Privacy Office &amp; DPO
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For privacy inquiries, rights requests, or to contact our designated Data Protection Officer:
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
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>DATA PROTECTION OFFICER</strong>
                <a href="mailto:dpo@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>dpo@starks.com.ng</a>
              </div>
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>COMPLIANCE DESK</strong>
                <a href="mailto:privacy@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>privacy@starks.com.ng</a>
              </div>
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>HEADQUARTERS</strong>
                <span style={{ color: 'var(--white)' }}>16 Shagamu Avenue, Ikeja, Lagos</span>
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
            <Link href="/ndpr" className="btn btn-gold" style={{ textDecoration: 'none' }}>
              <span>Read NDPR Statement ↗</span>
            </Link>
            <Link href="/cookies" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
              Cookies &amp; Tracking Policy
            </Link>
            <Link href="/terms" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
