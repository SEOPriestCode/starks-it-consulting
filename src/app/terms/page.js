import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Starks IT Consulting',
  description: 'Terms and Conditions for Starks IT Consulting Ltd. Read our service terms, payment terms, and legal agreements.',
  keywords: 'terms and conditions Nigeria, service terms Nigeria, IT consulting terms Lagos, legal terms Nigeria',
};

export default function TermsAndConditions() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-inner">
          <div className="ph-num">LEGAL</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Terms & Conditions</span></div>
          <h2 className="title" data-reveal data-delay="1">Terms & <em>Conditions</em></h2>
          <p className="subtitle" data-reveal data-delay="2">Please read these terms carefully before engaging our IT consulting services.</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8',
            color: 'var(--text)'
          }}>
            <p style={{ marginBottom: '2rem' }}>
              Last Updated: January 2025
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              1. Acceptance of Terms
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              By engaging Starks IT Consulting Ltd (&quot;Starks,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for IT consulting services, you (&quot;Client&quot; or &quot;you&quot;) agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              2. Services
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Starks provides IT consulting services including but not limited to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Managed IT Services and Support</li>
              <li style={{ marginBottom: '0.5rem' }}>Cloud Solutions and Migration</li>
              <li style={{ marginBottom: '0.5rem' }}>Cybersecurity Services</li>
              <li style={{ marginBottom: '0.5rem' }}>Software and Website Development</li>
              <li style={{ marginBottom: '0.5rem' }}>Network Infrastructure</li>
              <li style={{ marginBottom: '0.5rem' }}>Microsoft 365 Solutions</li>
              <li style={{ marginBottom: '0.5rem' }}>Server Deployment and Management</li>
              <li style={{ marginBottom: '0.5rem' }}>CCTV and Access Control Systems</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              3. Service Agreements
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Specific services will be governed by separate Service Level Agreements (SLAs) or Statements of Work (SOW) that detail scope, deliverables, timelines, and pricing. These documents form part of these Terms and Conditions.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              4. Client Responsibilities
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              The Client agrees to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Provide accurate and complete information required for service delivery</li>
              <li style={{ marginBottom: '0.5rem' }}>Grant necessary access to systems, networks, and facilities</li>
              <li style={{ marginBottom: '0.5rem' }}>Designate authorized points of contact for project coordination</li>
              <li style={{ marginBottom: '0.5rem' }}>Obtain necessary approvals and decisions in a timely manner</li>
              <li style={{ marginBottom: '0.5rem' }}>Maintain backup of critical data before service implementation</li>
              <li style={{ marginBottom: '0.5rem' }}>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              5. Fees and Payment Terms
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Payment terms are as follows:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Project-Based Services:</strong> 50% deposit upon agreement, 50% upon completion</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Monthly Services:</strong> Payment due within 7 days of invoice date</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Hourly Services:</strong> Payment due within 14 days of invoice date</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Late Payment:</strong> 2% monthly interest on overdue amounts</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Currency:</strong> All payments in Nigerian Naira (NGN) unless otherwise agreed</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              6. Service Level Agreements
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              For managed services, specific SLAs will define:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Response times (e.g., 4 hours for critical issues)</li>
              <li style={{ marginBottom: '0.5rem' }}>Resolution times based on priority levels</li>
              <li style={{ marginBottom: '0.5rem' }}>Uptime guarantees (e.g., 99.9% for critical systems)</li>
              <li style={{ marginBottom: '0.5rem' }}>Maintenance windows and scheduled downtime</li>
              <li style={{ marginBottom: '0.5rem' }}>Reporting and communication protocols</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              7. Intellectual Property
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Client IP:</strong> The Client retains ownership of all pre-existing intellectual property, data, and materials provided to Starks.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Starks IP:</strong> Starks retains ownership of its proprietary methodologies, tools, frameworks, and pre-existing code.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Deliverables:</strong> Custom software, code, and deliverables created specifically for the Client become Client property upon full payment, unless otherwise agreed in writing.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              8. Confidentiality
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Both parties agree to maintain confidentiality of all proprietary information, trade secrets, and business information disclosed during the engagement. This obligation survives termination of the agreement for a period of 5 years.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              9. Warranty and Liability
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Starks warrants that services will be performed in a professional manner consistent with industry standards. However:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Services are provided &quot;as is&quot; without warranties of any kind</li>
              <li style={{ marginBottom: '0.5rem' }}>Starks is not liable for indirect, incidental, or consequential damages</li>
              <li style={{ marginBottom: '0.5rem' }}>Total liability is limited to the fees paid for the specific service</li>
              <li style={{ marginBottom: '0.5rem' }}>Starks is not responsible for data loss due to Client actions or third-party failures</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              10. Termination
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Either party may terminate the agreement with written notice:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>By Client:</strong> 30 days notice for ongoing services</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>By Starks:</strong> 30 days notice or immediately for material breach</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Effect:</strong> Client pays for services rendered and materials purchased</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Transition:</strong> Starks will assist with orderly transition of services</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              11. Data Protection and Security
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Starks implements appropriate security measures in accordance with NDPR and industry best practices. The Client remains responsible for their data classification and compliance with data protection laws.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              12. Force Majeure
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Neither party is liable for delays or failures caused by events beyond reasonable control, including but not limited to natural disasters, war, strikes, government actions, or internet infrastructure failures.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              13. Dispute Resolution
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Disputes will be resolved through good faith negotiation. If unresolved, matters will be referred to arbitration in Lagos, Nigeria, in accordance with Nigerian arbitration laws.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              14. Governing Law
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any legal proceedings will be conducted in the courts of Lagos, Nigeria.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              15. Amendments
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Starks reserves the right to amend these Terms and Conditions with 30 days notice. Material changes will be communicated via email. Continued use of services constitutes acceptance of amended terms.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              16. Contact Information
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              For questions about these Terms and Conditions, please contact:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> legal@starks.com.ng</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> +234 (0)816 561 8476</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Address:</strong> 16 Shagamu Avenue, Ikeja, Lagos, Nigeria</li>
            </ul>
          </div>

          <div style={{ 
            background: 'var(--ink)', 
            padding: '2.5rem', 
            borderLeft: '3px solid var(--gold)',
            marginBottom: '3rem',
            marginTop: '3rem'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem' 
            }}>
              Need Clarification?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text)', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              If you have questions about our terms or need clarification on any aspect of our service agreements, please contact our legal team.
            </p>
            <Link 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: 'var(--gold)',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '4px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
