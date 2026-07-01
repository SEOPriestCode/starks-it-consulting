import Link from 'next/link';

export const metadata = {
  title: 'CCTV & Access Control Systems Nigeria | Security Systems',
  description: 'Professional CCTV and access control systems in Nigeria. Security camera installation and access control for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'CCTV Nigeria, access control Nigeria, security systems Nigeria, surveillance Nigeria, security cameras Nigeria, CCTV installation Abuja, security solutions Nigeria, biometric access control Nigeria',
};

export default function CCTVAccessControl() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-generic.jpg" alt="Black security professional monitoring CCTV systems" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">CCTV & Access Control Systems</h2>
          <p className="subtitle" data-reveal data-delay="2">Comprehensive physical security solutions</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our CCTV & Access Control Systems provide comprehensive physical security for your premises. From surveillance cameras to biometric access control, we protect your people, assets, and information.</p>
              
              <h3>Security Solutions</h3>
              <ul>
                <li><strong>CCTV Installation:</strong> High-definition camera systems</li>
                <li><strong>Remote Monitoring:</strong> View footage from anywhere</li>
                <li><strong>Access Control:</strong> Biometric and card-based systems</li>
                <li><strong>Integration:</strong> Connected with your IT infrastructure</li>
                <li><strong>Maintenance:</strong> Regular servicing and support</li>
                <li><strong>Analytics:</strong> Advanced video analytics and reporting</li>
              </ul>
              
              <h3>Why Physical Security?</h3>
              <p>Physical security is a critical component of overall business security. Our solutions provide deterrence, detection, and documentation to protect your organization.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">CCTV</span>
            <span className="stag">Access Control</span>
            <span className="stag">Biometrics</span>
            <span className="stag">Surveillance</span>
            <span className="stag">Analytics</span>
            <span className="stag">Integration</span>
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
              Contact us to discuss how CCTV & Access Control can help your business.
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
