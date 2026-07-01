import Link from 'next/link';

export const metadata = {
  title: 'IT Support Services Nigeria | Professional Technical Support',
  description: 'Reliable IT support services in Nigeria. On-site and remote technical support for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'IT support company Lagos, IT support services Nigeria, technical support Nigeria, business IT support Lagos, IT support Abuja, computer support Nigeria',
};

export default function ITSupportServices() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-tech.jpg" alt="Black IT professional providing technical support" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">IT Support Services</h2>
          <p className="subtitle" data-reveal data-delay="2">On-site and remote technical support when you need it</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our IT Support Services deliver fast, reliable technical assistance to keep your business running smoothly. Whether you need on-site support or remote troubleshooting, our expert team is ready to help.</p>
              
              <h3>Our Support Services</h3>
              <ul>
                <li><strong>Remote Support:</strong> Instant assistance via secure remote access</li>
                <li><strong>On-Site Support:</strong> Technicians dispatched to your location</li>
                <li><strong>Hardware Support:</strong> Installation, maintenance, and repair</li>
                <li><strong>Software Support:</strong> Application troubleshooting and optimization</li>
                <li><strong>Network Support:</strong> Connectivity and infrastructure assistance</li>
                <li><strong>User Training:</strong> Staff training and documentation</li>
              </ul>
              
              <h3>Response Times</h3>
              <p>We guarantee rapid response times based on your service level agreement, ensuring critical issues are resolved quickly to minimize business impact.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Remote Support</span>
            <span className="stag">On-Site</span>
            <span className="stag">Hardware</span>
            <span className="stag">Software</span>
            <span className="stag">Network</span>
            <span className="stag">Training</span>
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
              Contact us to discuss how IT Support Services can help your business.
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
