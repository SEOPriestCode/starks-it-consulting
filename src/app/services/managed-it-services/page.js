import Link from 'next/link';

export const metadata = {
  title: 'Managed IT Services Nigeria | 24/7 IT Support & Monitoring',
  description: 'Professional managed IT services in Nigeria. 24/7 monitoring, helpdesk support, and proactive maintenance for Lagos businesses.',
  keywords: 'managed IT services Nigeria, IT support company Lagos, business IT support Lagos, IT outsourcing Nigeria, IT services Abuja, managed services provider Nigeria',
};

export default function ManagedITServices() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop" alt="Black IT professional managing network infrastructure" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Managed IT Services</h2>
          <p className="subtitle" data-reveal data-delay="2">24/7 proactive IT support and infrastructure monitoring</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Managed IT Services provide comprehensive 24/7 support for your entire IT infrastructure. We operate as your extended IT department, ensuring your systems are always available, secure, and performing at optimal levels.</p>
              
              <h3>What We Offer</h3>
              <ul>
                <li><strong>24/7 Helpdesk Support:</strong> Round-the-clock technical assistance for your team</li>
                <li><strong>Proactive Monitoring:</strong> Real-time infrastructure monitoring and issue resolution</li>
                <li><strong>SLA-Backed Services:</strong> Guaranteed response times and uptime commitments</li>
                <li><strong>Patch Management:</strong> Automated updates and security patches</li>
                <li><strong>Backup & Disaster Recovery:</strong> Comprehensive data protection strategies</li>
                <li><strong>Vendor Management:</strong> Single point of contact for all IT vendors</li>
              </ul>
              
              <h3>Why Choose Us</h3>
              <p>As a leading IT consulting company in Lagos, we understand the unique challenges faced by Nigerian businesses. Our team of certified professionals delivers enterprise-grade support tailored to your specific needs, ensuring minimal downtime and maximum productivity.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Helpdesk</span>
            <span className="stag">SLA-backed</span>
            <span className="stag">Monitoring</span>
            <span className="stag">ITSM</span>
            <span className="stag">ITIL</span>
            <span className="stag">24/7 Support</span>
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
              Contact us to discuss how Managed IT Services can help your business.
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
