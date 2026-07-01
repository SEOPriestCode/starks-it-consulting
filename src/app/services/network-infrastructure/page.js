import Link from 'next/link';

export const metadata = {
  title: 'Network Infrastructure Nigeria | Network Setup Company',
  description: 'Professional network infrastructure services in Nigeria. Network design, setup, and maintenance for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'network infrastructure company Nigeria, network setup Nigeria, cabling Nigeria, network design Nigeria, IT infrastructure Nigeria, network installation Abuja, structured cabling Nigeria',
};

export default function NetworkInfrastructure() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-generic.jpg" alt="Black network engineer configuring network infrastructure" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Network Infrastructure</h2>
          <p className="subtitle" data-reveal data-delay="2">Robust, scalable network design and implementation</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Network Infrastructure services design and implement robust network solutions that form the backbone of your IT operations. From structured cabling to wireless networks, we ensure reliable connectivity throughout your organization.</p>
              
              <h3>Infrastructure Services</h3>
              <ul>
                <li><strong>Network Design:</strong> Scalable architecture planning</li>
                <li><strong>Structured Cabling:</strong> Fiber and copper cabling solutions</li>
                <li><strong>Wireless Networks:</strong> Wi-Fi design and implementation</li>
                <li><strong>Network Security:</strong> Firewalls, VPNs, and access control</li>
                <li><strong>Network Monitoring:</strong> Performance and availability tracking</li>
                <li><strong>Maintenance:</strong> Ongoing support and optimization</li>
              </ul>
              
              <h3>Why Professional Infrastructure?</h3>
              <p>A well-designed network is critical for business operations. Our certified engineers ensure your infrastructure is reliable, secure, and ready for future growth.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Cabling</span>
            <span className="stag">Wireless</span>
            <span className="stag">Security</span>
            <span className="stag">Switching</span>
            <span className="stag">Routing</span>
            <span className="stag">Monitoring</span>
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
              Contact us to discuss how Network Infrastructure can help your business.
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
