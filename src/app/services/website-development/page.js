import Link from 'next/link';

export const metadata = {
  title: 'Website Development Nigeria | Professional Web Design',
  description: 'Expert website development services in Nigeria. Custom web design and development for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'website development Nigeria, web design Nigeria, web development company Lagos, website design Nigeria, web design Abuja, website developer Nigeria, web design services Nigeria',
};

export default function WebsiteDevelopment() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-generic.jpg" alt="Black web developer working on website design" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Website Development</h2>
          <p className="subtitle" data-reveal data-delay="2">Modern, responsive websites that convert</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Website Development services create stunning, high-performance websites that drive results. From corporate sites to e-commerce platforms, we build web experiences that engage visitors and convert them into customers.</p>
              
              <h3>Web Development Services</h3>
              <ul>
                <li><strong>Custom Design:</strong> Unique, brand-aligned website designs</li>
                <li><strong>Responsive Development:</strong> Mobile-first, cross-browser compatible</li>
                <li><strong>E-commerce:</strong> Online stores with payment integration</li>
                <li><strong>CMS Integration:</strong> WordPress, Contentful, and custom CMS</li>
                <li><strong>Performance Optimization:</strong> Fast-loading, SEO-friendly sites</li>
                <li><strong>Maintenance & Support:</strong> Ongoing updates and security</li>
              </ul>
              
              <h3>Why Professional Web Development?</h3>
              <p>Your website is often the first impression customers have of your business. We ensure it's a positive one with modern design, seamless functionality, and optimal performance.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">React</span>
            <span className="stag">Next.js</span>
            <span className="stag">WordPress</span>
            <span className="stag">E-commerce</span>
            <span className="stag">Responsive</span>
            <span className="stag">SEO</span>
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
              Contact us to discuss how Website Development can help your business.
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
