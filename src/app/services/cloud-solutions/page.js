import Link from 'next/link';

export const metadata = {
  title: 'Cloud Solutions Nigeria | Cloud Migration Services',
  description: 'Expert cloud solutions and migration services in Nigeria. AWS, Azure, and GCP cloud infrastructure for Nigerian businesses in Lagos and Abuja.',
  keywords: 'cloud migration services Nigeria, cloud solutions Nigeria, cloud computing Nigeria, AWS Nigeria, Azure Nigeria, cloud services Abuja, cloud hosting Nigeria',
};

export default function CloudSolutions() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-cloud.jpg" alt="Black cloud architect working on cloud infrastructure" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Cloud Solutions</h2>
          <p className="subtitle" data-reveal data-delay="2">Scalable, secure cloud infrastructure and migration</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Cloud Solutions help Nigerian businesses leverage the power of cloud computing. From initial migration to ongoing management, we ensure your cloud environment is optimized for performance, security, and cost-efficiency.</p>
              
              <h3>Cloud Services</h3>
              <ul>
                <li><strong>Cloud Migration:</strong> Seamless transition from on-premise to cloud</li>
                <li><strong>Multi-Cloud Strategy:</strong> AWS, Azure, and GCP expertise</li>
                <li><strong>Cloud Architecture:</strong> Scalable and resilient infrastructure design</li>
                <li><strong>Cost Optimization:</strong> Right-sizing and resource management</li>
                <li><strong>Security & Compliance:</strong> Cloud-native security implementations</li>
                <li><strong>Disaster Recovery:</strong> Cloud-based backup and recovery solutions</li>
              </ul>
              
              <h3>Why Cloud?</h3>
              <p>Cloud computing offers Nigerian businesses scalability, flexibility, and cost savings. Our team ensures your cloud journey is smooth, secure, and aligned with your business objectives.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">AWS</span>
            <span className="stag">Azure</span>
            <span className="stag">GCP</span>
            <span className="stag">Migration</span>
            <span className="stag">Architecture</span>
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
              Contact us to discuss how Cloud Solutions can help your business.
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
