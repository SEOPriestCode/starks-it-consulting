import Link from 'next/link';

export const metadata = {
  title: 'Server Setup Company Nigeria | Server Deployment Services',
  description: 'Professional server deployment and management services in Nigeria. Server setup, configuration, and maintenance for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'server setup company Nigeria, server deployment Nigeria, server management Nigeria, IT infrastructure Nigeria, server installation Abuja, data center services Nigeria, server maintenance Nigeria',
};

export default function ServerDeployment() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop" alt="Black server administrator managing server infrastructure" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Server Deployment & Management</h2>
          <p className="subtitle" data-reveal data-delay="2">Expert server setup and ongoing management</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Server Deployment & Management services ensure your critical infrastructure is properly configured, optimized, and maintained. From physical servers to virtual machines, we handle all aspects of server management.</p>
              
              <h3>Server Services</h3>
              <ul>
                <li><strong>Server Deployment:</strong> Hardware and software installation</li>
                <li><strong>Configuration:</strong> Optimized settings for your workload</li>
                <li><strong>Virtualization:</strong> VMware and Hyper-V implementations</li>
                <li><strong>Backup Solutions:</strong> Reliable data protection strategies</li>
                <li><strong>Monitoring:</strong> Performance and health tracking</li>
                <li><strong>Maintenance:</strong> Updates, patches, and optimization</li>
              </ul>
              
              <h3>Why Professional Server Management?</h3>
              <p>Servers are the heart of your IT infrastructure. Proper deployment and management ensure reliability, security, and performance for all your business applications.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Deployment</span>
            <span className="stag">Virtualization</span>
            <span className="stag">Backup</span>
            <span className="stag">Monitoring</span>
            <span className="stag">VMware</span>
            <span className="stag">Hyper-V</span>
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
              Contact us to discuss how Server Deployment can help your business.
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
