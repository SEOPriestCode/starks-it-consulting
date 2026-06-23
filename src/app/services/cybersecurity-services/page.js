import Link from 'next/link';

export const metadata = {
  title: 'Cybersecurity Services Nigeria | IT Security Company',
  description: 'Professional cybersecurity services in Nigeria. Penetration testing, compliance, and security monitoring for Lagos, Abuja, and Nigerian businesses.',
  keywords: 'cybersecurity services Nigeria, IT security Nigeria, penetration testing Nigeria, network security Nigeria, data protection Nigeria, cyber security Abuja, information security Nigeria',
};

export default function CybersecurityServices() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=70&auto=format&fit=crop" alt="Black cybersecurity professional working on security systems" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Cybersecurity Services</h2>
          <p className="subtitle" data-reveal data-delay="2">Comprehensive security and compliance solutions</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Cybersecurity Services protect your business from evolving threats. As a leading IT security company in Nigeria, we provide comprehensive security solutions tailored to your specific risk profile and compliance requirements.</p>
              
              <h3>Security Services</h3>
              <ul>
                <li><strong>Penetration Testing:</strong> Identify vulnerabilities before attackers do</li>
                <li><strong>Security Audits:</strong> Comprehensive security assessments</li>
                <li><strong>Compliance:</strong> NDPR, GDPR, PCI-DSS compliance support</li>
                <li><strong>24/7 SOC Monitoring:</strong> Continuous threat detection and response</li>
                <li><strong>Zero Trust Architecture:</strong> Modern security framework implementation</li>
                <li><strong>Incident Response:</strong> Rapid response to security breaches</li>
              </ul>
              
              <h3>Protect Your Business</h3>
              <p>Cyber threats are constantly evolving. Our certified security professionals use the latest tools and methodologies to protect your data, systems, and reputation.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Pen Testing</span>
            <span className="stag">NDPR</span>
            <span className="stag">SOC 24/7</span>
            <span className="stag">Zero Trust</span>
            <span className="stag">ISO 27001</span>
            <span className="stag">Compliance</span>
          </div>

          <div style={{ 
            background: 'var(--ink)', 
            padding: '2.5rem', 
            borderLeft: '3px solid var(--gold)',
            marginBottom: '3rem'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem' 
            }}>
              Ready to Get Started?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text)', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Contact us to discuss how Cybersecurity Services can help your business.
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

          <Link 
            href="/services" 
            style={{ 
              color: 'var(--gold)', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
