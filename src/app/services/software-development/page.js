import Link from 'next/link';

export const metadata = {
  title: 'Software Development Nigeria | Custom Software Solutions',
  description: 'Custom software development services in Nigeria. Bespoke applications and software solutions for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'software development Nigeria, custom software Nigeria, app development Nigeria, software company Lagos, software development Abuja, mobile app development Nigeria, custom software development Nigeria',
};

export default function SoftwareDevelopment() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop" alt="Black software developer coding custom applications" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Software Development</h2>
          <p className="subtitle" data-reveal data-delay="2">Bespoke software solutions for your business</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Software Development services deliver custom applications engineered to your exact requirements. From internal tools to customer-facing platforms, we build software that scales with your business.</p>
              
              <h3>Development Services</h3>
              <ul>
                <li><strong>Custom Applications:</strong> Tailored software solutions</li>
                <li><strong>Web Applications:</strong> Modern, scalable web apps</li>
                <li><strong>Mobile Apps:</strong> iOS and Android development</li>
                <li><strong>API Development:</strong> RESTful APIs and integrations</li>
                <li><strong>ERP/CRM Systems:</strong> Business management platforms</li>
                <li><strong>SaaS Products:</strong> Software-as-a-Service solutions</li>
              </ul>
              
              <h3>Our Approach</h3>
              <p>We follow agile development methodologies with regular communication and iterative delivery. This ensures you get exactly what you need, with the flexibility to adapt as requirements evolve.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Web Apps</span>
            <span className="stag">Mobile</span>
            <span className="stag">REST APIs</span>
            <span className="stag">ERP/CRM</span>
            <span className="stag">SaaS</span>
            <span className="stag">Agile</span>
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
              Contact us to discuss how Software Development can help your business.
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
