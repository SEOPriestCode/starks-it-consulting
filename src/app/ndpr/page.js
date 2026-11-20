import Link from 'next/link';

export default function NdprStatementPage() {
  return (
    <main className="page active" itemScope itemType="https://schema.org/WebPage">
      {/* PAGE HERO */}
      <header className="page-hero">
        <div className="page-hero-bg">
          <img src="/ndpr-hero.jpg" alt="Starks IT Consulting NDPR Compliance & Data Governance" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">REGULATORY COMPLIANCE // NDPA 2023</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">Official Statement</span>
          </div>
          <h1 className="title" data-reveal data-delay="1">
            Nigeria Data Protection <em>Regulation</em> (NDPR) Statement
          </h1>
          <p className="subtitle" data-reveal data-delay="2">
            Starks IT Consulting Ltd is committed to uncompromising data privacy, sovereign data governance, and full compliance with the Nigeria Data Protection Act (NDPA 2023) and the Nigeria Data Protection Regulation (NDPR).
          </p>
        </div>
      </header>

      {/* CORE HIGHLIGHT STATS BAND */}
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
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🛡️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Framework</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>NDPA 2023 &amp; NDPR</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🏛️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Regulator</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>NDPC / NITDA Registered</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🔐</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Security Standard</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>ISO/IEC 27001:2022</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>⚖️</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Governance</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Designated DPO Oversight</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 5%', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          fontSize: '1.02rem',
          lineHeight: '1.85',
          color: 'var(--ash2)'
        }}>
          {/* Section 1: Introduction */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 01</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Statutory Scope &amp; <em>Commitment</em>
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Starks IT Consulting Ltd (&quot;Starks&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a registered data controller and data processor under the laws of the Federal Republic of Nigeria. This statement details our operational compliance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong>, the <strong>Nigeria Data Protection Regulation 2019 (NDPR)</strong>, and all regulatory circulars issued by the <strong>Nigeria Data Protection Commission (NDPC)</strong>.
            </p>
            <p>
              As an enterprise technology consultancy advising financial institutions, telecom operators, and public sector agencies, we hold data security to the highest international benchmark: our internal processes and managed infrastructure are certified under <strong>ISO/IEC 27001:2022</strong>.
            </p>
          </div>

          {/* Section 2: Principles of Data Processing */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 02</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Core Principles of <em>Data Processing</em>
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              In accordance with Section 24 of the NDPA 2023, every piece of personal data processed by Starks—whether from visitors to our website, candidates joining our learning waitlist, or enterprise clients—is processed strictly under the following principles:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginTop: '1.5rem' }}>
              {[
                { title: 'Lawfulness, Fairness & Transparency', desc: 'Data is collected only with valid legal justification, clear notice, and total clarity.' },
                { title: 'Purpose Limitation', desc: 'Collected exclusively for specified, explicit, and legitimate business or training purposes.' },
                { title: 'Data Minimisation', desc: 'Limited strictly to what is adequate, relevant, and necessary for the intended function.' },
                { title: 'Accuracy & Quality', desc: 'Maintained accurately and updated promptly upon notification of any discrepancies.' },
                { title: 'Storage Limitation', desc: 'Retained only for the duration necessary to satisfy the purpose or statutory retention mandate.' },
                { title: 'Integrity & Confidentiality', desc: 'Protected with cryptographic controls against unauthorized processing, loss, or theft.' }
              ].map((p, i) => (
                <div key={i} style={{
                  background: 'var(--ink2)',
                  border: '1px solid rgba(200, 168, 75, 0.2)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  transition: 'border-color 0.3s'
                }}>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.88rem', margin: 0, fontWeight: 300 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Visitor & Web Interactions Scope */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 03</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Visitor Interactions &amp; <em>Data Collected</em>
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              When you browse <strong>starks.com.ng</strong>, interact with our practice lab IDE, or register on our sub-domains, we collect only data necessary to serve your requests:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div><strong style={{ color: 'var(--white)' }}>Consultation &amp; Contact Inquiries:</strong> Name, professional email address, phone number, company name, and project scope submitted through our contact forms.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div><strong style={{ color: 'var(--white)' }}>Training Waitlist (learn.starks.com.ng):</strong> Name, email address, training track interest, and experience level for early-bird admission notices.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div><strong style={{ color: 'var(--white)' }}>In-Browser Practice Lab IDE:</strong> Code edits, component state, and exercise assertions are executed in your browser session and are not transmitted to or stored on our servers.</div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div><strong style={{ color: 'var(--white)' }}>Technical Telemetry:</strong> Anonymized IP addresses, browser headers, referring URLs, and device types used strictly to optimize site speed and security.</div>
              </li>
            </ul>
          </div>

          {/* Section 4: Data Subject Rights */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 04</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Your Rights as a <em>Data Subject</em>
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              Under Part VI of the Nigeria Data Protection Act 2023, you possess enforceable rights regarding your personal data:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Right to Access', desc: 'Request confirmation of whether we process your data and receive a readable copy within 30 days.' },
                { title: 'Right to Rectification', desc: 'Require us to correct incomplete or inaccurate personal records without undue delay.' },
                { title: 'Right to Erasure', desc: 'Request the deletion of your personal data where there is no statutory obligation for its retention.' },
                { title: 'Right to Object', desc: 'Object to the processing of your data for direct marketing or based on legitimate interests.' },
                { title: 'Right to Portability', desc: 'Obtain your data in a structured, commonly used, and machine-readable format.' },
                { title: 'Right to Lodge a Complaint', desc: 'Lodge a formal petition directly with the NDPC if you believe your rights have been infringed.' }
              ].map((r, i) => (
                <div key={i} style={{
                  padding: '1.2rem',
                  background: 'var(--ink)',
                  border: '1px solid rgba(200, 168, 75, 0.2)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>Right 0{i + 1}</div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.05rem', color: 'var(--white)', marginBottom: '0.3rem' }}>{r.title}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, fontWeight: 300 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Technical Safeguards & ISO 27001 */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 05</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Security Safeguards &amp; <em>Cryptographic Controls</em>
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Starks deploys enterprise-grade technical and organizational security controls to guarantee the confidentiality, integrity, and availability of all data:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                <span><strong>Encryption:</strong> TLS 1.3 encryption for all data in transit; AES-256 encryption for data at rest.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                <span><strong>Access Control:</strong> Zero-Trust architecture, mandatory MFA, and role-based access governance.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                <span><strong>Audits &amp; Pen Testing:</strong> Annual NDPR compliance audits filed with NDPC, paired with semi-annual third-party penetration testing.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                <span><strong>Incident Response:</strong> Standardized 72-hour breach notification procedure to the NDPC and impacted subjects under Section 40 NDPA.</span>
              </li>
            </ul>
          </div>

          {/* Section 6: Cross-Border Transfers */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 06</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Cross-Border Data <em>Transfers</em>
            </h2>
            <p>
              Personal data processed by Starks is hosted primarily within secure enterprise facilities and sovereign cloud availability zones. Where technical necessity requires cloud infrastructure outside Nigeria (e.g. distributed global CDNs or automated test harness providers), such transfers are governed strictly by Section 41–43 of the NDPA 2023, relying on countries with adequate legal protection, Standard Contractual Clauses (SCCs), or binding corporate rules.
            </p>
          </div>

          {/* Section 7: DPO Contact Card */}
          <div style={{
            background: 'var(--ink2)',
            border: '1px solid rgba(200, 168, 75, 0.35)',
            borderRadius: '14px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Data Protection Officer (DPO) Office
            </div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '1rem' }}>
              Exercise Your NDPR Rights
            </h3>
            <p style={{ marginBottom: '1.5rem', fontWeight: 300 }}>
              To exercise your data subject rights, request a copy of your processed data, or report a data privacy concern, please contact our designated Data Protection Officer:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '1.8rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Direct DPO Email</div>
                <a href="mailto:dpo@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>dpo@starks.com.ng</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Compliance Desk</div>
                <a href="mailto:privacy@starks.com.ng" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>privacy@starks.com.ng</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Telephone</div>
                <a href="tel:+2348165618476" style={{ color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>+234 (0)816 561 8476</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Physical Office</div>
                <span style={{ color: 'var(--white)' }}>16 Shagamu Avenue, Ikeja, Lagos</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-gold" style={{ textDecoration: 'none' }}>
                <span>Contact DPO Office ↗</span>
              </Link>
              <Link href="/privacy" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

