import Link from 'next/link';

export const metadata = {
  title: 'Microsoft 365 Consultants Nigeria | Office 365 Solutions',
  description: 'Expert Microsoft 365 consulting services in Nigeria. Deployment, migration, and support for Office 365 in Lagos, Abuja, and across Nigeria.',
  keywords: 'Microsoft 365 consultants Nigeria, Office 365 Nigeria, Microsoft 365 deployment Nigeria, cloud productivity Nigeria, Office 365 Abuja, Microsoft 365 services Nigeria, O365 Nigeria',
};

export default function Microsoft365Solutions() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-generic.jpg" alt="Black IT consultant working on Microsoft 365 solutions" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Microsoft 365 Solutions</h2>
          <p className="subtitle" data-reveal data-delay="2">Maximize productivity with Microsoft 365</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Microsoft 365 Solutions help Nigerian businesses leverage the full power of Microsoft's productivity suite. From deployment to ongoing management, we ensure your team gets the most out of these powerful tools.</p>
              
              <h3>Microsoft 365 Services</h3>
              <ul>
                <li><strong>Deployment & Migration:</strong> Smooth transition to Microsoft 365</li>
                <li><strong>Exchange Online:</strong> Professional email and calendaring</li>
                <li><strong>Teams Implementation:</strong> Collaboration and communication setup</li>
                <li><strong>SharePoint:</strong> Document management and intranets</li>
                <li><strong>Security Configuration:</strong> Data protection and compliance</li>
                <li><strong>Training & Support:</strong> User adoption and ongoing assistance</li>
              </ul>
              
              <h3>Benefits of Microsoft 365</h3>
              <p>Microsoft 365 enables modern work with cloud-based productivity tools, enhanced security, and seamless collaboration. Our experts ensure successful implementation and maximum ROI.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Office 365</span>
            <span className="stag">Teams</span>
            <span className="stag">SharePoint</span>
            <span className="stag">Exchange</span>
            <span className="stag">OneDrive</span>
            <span className="stag">Security</span>
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
              Contact us to discuss how Microsoft 365 Solutions can help your business.
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
