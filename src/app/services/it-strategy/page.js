import Link from 'next/link';

export const metadata = {
  title: 'IT Strategy & Digital Transformation Nigeria | IT Consulting',
  description: 'Expert IT strategy and digital transformation consulting in Nigeria. Technology roadmaps and IT advisory services for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'IT consulting company Nigeria, digital transformation Nigeria, IT strategy Nigeria, technology consulting Nigeria, CIO services Nigeria, IT consulting Abuja, digital transformation services Nigeria, IT advisory Nigeria',
};

export default function ITStrategy() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop" alt="Black IT consultant leading digital transformation strategy" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">IT Strategy & Digital Transformation</h2>
          <p className="subtitle" data-reveal data-delay="2">Executive-level technology advisory</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our IT Strategy & Digital Transformation services provide executive-level advisory for organisations navigating technology change. We produce IT roadmaps, vendor selection frameworks, operating model redesign, and business cases that align technology investment to commercial outcomes.</p>
              
              <h3>Strategic Services</h3>
              <ul>
                <li><strong>IT Roadmapping:</strong> Long-term technology planning</li>
                <li><strong>Digital Transformation:</strong> End-to-end change management</li>
                <li><strong>Vendor Selection:</strong> Objective technology partner evaluation</li>
                <li><strong>Operating Model Design:</strong> IT organization optimization</li>
                <li><strong>Business Case Development:</strong> ROI analysis and justification</li>
                <li><strong>Enterprise Architecture:</strong> TOGAF and framework implementation</li>
              </ul>
              
              <h3>Strategic Advantage</h3>
              <p>Technology is only as valuable as the business outcomes it enables. We measure our success entirely in those terms, ensuring your IT investments deliver real commercial value.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Roadmapping</span>
            <span className="stag">Change Mgmt</span>
            <span className="stag">Architecture</span>
            <span className="stag">TOGAF</span>
            <span className="stag">Strategy</span>
            <span className="stag">Advisory</span>
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
              Contact us to discuss how IT Strategy can help your business.
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
