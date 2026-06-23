import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Starks IT Consulting',
  description: 'Privacy Policy for Starks IT Consulting Ltd. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy Nigeria, data protection Nigeria, NDPR compliance Nigeria, privacy policy Lagos',
};

export default function PrivacyPolicy() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-inner">
          <div className="ph-num">LEGAL</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Privacy Policy</span></div>
          <h2 className="title" data-reveal data-delay="1">Privacy <em>Policy</em></h2>
          <p className="subtitle" data-reveal data-delay="2">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
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
              1. Introduction
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Starks IT Consulting Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or engage with us for IT consulting services in Nigeria.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              2. Information We Collect
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              We collect several types of information to provide and improve our services to you:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Personal Information:</strong> Name, email address, phone number, company name, job title</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Business Information:</strong> Company size, industry, IT infrastructure details</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Technical Information:</strong> IP address, browser type, device information, usage data</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Communication:</strong> Emails, phone calls, meeting notes, project documentation</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              3. How We Use Your Information
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              We use the information we collect for various purposes, including:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Providing and maintaining our IT consulting and managed services</li>
              <li style={{ marginBottom: '0.5rem' }}>Processing service requests and quotations</li>
              <li style={{ marginBottom: '0.5rem' }}>Sending technical notifications and updates</li>
              <li style={{ marginBottom: '0.5rem' }}>Responding to your inquiries and support requests</li>
              <li style={{ marginBottom: '0.5rem' }}>Improving our services and developing new offerings</li>
              <li style={{ marginBottom: '0.5rem' }}>Complying with legal obligations and NDPR requirements</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              4. Data Sharing and Disclosure
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              We may share your information with:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Service Providers:</strong> Third-party vendors who assist in delivering our services (cloud providers, software vendors)</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Business Partners:</strong> With your consent, for joint service delivery</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              5. Data Security
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Encryption of data in transit and at rest</li>
              <li style={{ marginBottom: '0.5rem' }}>Access controls and authentication systems</li>
              <li style={{ marginBottom: '0.5rem' }}>Regular security assessments and penetration testing</li>
              <li style={{ marginBottom: '0.5rem' }}>Employee training on data protection practices</li>
              <li style={{ marginBottom: '0.5rem' }}>ISO 27001 certified security management</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              6. NDPR Compliance
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              As a Nigerian IT consulting company, we comply with the Nigeria Data Protection Regulation (NDPR). Your rights under NDPR include:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Right to access your personal data</li>
              <li style={{ marginBottom: '0.5rem' }}>Right to correct inaccurate data</li>
              <li style={{ marginBottom: '0.5rem' }}>Right to request deletion of your data</li>
              <li style={{ marginBottom: '0.5rem' }}>Right to object to processing</li>
              <li style={{ marginBottom: '0.5rem' }}>Right to data portability</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              7. Data Retention
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary based on the type of data and applicable legal requirements.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              8. Your Rights
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              You have the right to:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Access, update, or delete your personal information</li>
              <li style={{ marginBottom: '0.5rem' }}>Opt-out of marketing communications</li>
              <li style={{ marginBottom: '0.5rem' }}>Request a copy of your data</li>
              <li style={{ marginBottom: '0.5rem' }}>Lodge a complaint with data protection authorities</li>
            </ul>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              9. International Data Transfers
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Your information may be transferred to and processed in countries other than Nigeria. We ensure appropriate safeguards are in place to protect your data in accordance with NDPR requirements.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              10. Children&apos;s Privacy
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Our services are not intended for children under 18. We do not knowingly collect personal information from children.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              11. Changes to This Policy
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem',
              marginTop: '2rem'
            }}>
              12. Contact Us
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> privacy@starks.com.ng</li>
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
              Have Questions?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text)', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              If you have any questions about our privacy practices or need to exercise your data rights, please contact us.
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
