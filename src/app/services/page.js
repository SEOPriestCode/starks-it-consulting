import Link from 'next/link';

export const metadata = {
  title: 'IT Consulting Services Nigeria | Enterprise IT Solutions | Starks IT Consulting',
  description: 'Professional IT consulting services in Nigeria. Enterprise IT solutions including managed IT services, cloud consulting, cybersecurity, software development, and digital transformation for businesses in Lagos, Abuja, and across Africa.',
  keywords: 'IT consulting services Nigeria, enterprise IT solutions, IT consulting Lagos, IT consulting Abuja, managed IT services Nigeria, cloud consulting, cybersecurity consulting, software development Nigeria, digital transformation Africa, IT strategy consulting',
};

export default function Services() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop" alt="Black IT professionals working on technology solutions" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES / CAPABILITIES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">What We Offer</span></div>
          <h2 className="title" data-reveal data-delay="1">Full-spectrum IT solutions for <em>modern enterprises</em></h2>
          <p className="subtitle" data-reveal data-delay="2">We don&apos;t just build systems — we build competitive advantage. Every service is delivered by certified specialists who understand both the technology and the business context behind it.</p>
        </div>
      </div>

      <section id="svc-page" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Categories</span></div>
          <h2 className="title" data-reveal data-delay="1" style={{ maxWidth: '700px' }}>Our <em>Core Services</em></h2>
          <p data-reveal data-delay="2" style={{ color: 'var(--gray)', maxWidth: '600px', lineHeight: 1.6 }}>Comprehensive IT solutions tailored for Nigerian businesses. From infrastructure to strategy, we deliver end-to-end technology services.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <Link href="/services/managed-it-services" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black IT professional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>CORE SERVICE</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Managed IT Services</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>24/7 IT support, monitoring, and proactive maintenance for your entire infrastructure.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Helpdesk</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Monitoring</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>SLA-backed</span>
              </div>
            </div>
          </Link>

          <Link href="/services/it-support-services" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&auto=format&fit=crop" alt="Black IT support professional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>CORE SERVICE</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>IT Support Services</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>On-site and remote technical support with guaranteed response times.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Remote</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>On-Site</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Hardware</span>
              </div>
            </div>
          </Link>

          <Link href="/services/cloud-solutions" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80&auto=format&fit=crop" alt="Black cloud architect" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>CLOUD & INFRASTRUCTURE</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Cloud Solutions</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>AWS, Azure, and GCP cloud infrastructure with DevOps automation.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>AWS</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Azure</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>DevOps</span>
              </div>
            </div>
          </Link>

          <Link href="/services/cybersecurity-services" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&auto=format&fit=crop" alt="Black cybersecurity professional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>SECURITY</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Cybersecurity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Penetration testing, compliance, and 24/7 SOC monitoring.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Pen Testing</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>SOC 24/7</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>NDPR</span>
              </div>
            </div>
          </Link>

          <Link href="/services/network-infrastructure" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black network engineer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>INFRASTRUCTURE</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Network Infrastructure</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Structured cabling, wireless networks, and network security.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Cabling</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Wireless</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Security</span>
              </div>
            </div>
          </Link>

          <Link href="/services/server-deployment" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black server administrator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>INFRASTRUCTURE</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Server Deployment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Expert server setup, virtualization, and ongoing management.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>VMware</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Backup</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Monitoring</span>
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Development & Strategy</span></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <Link href="/services/software-development" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black software developer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>DEVELOPMENT</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Software Development</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Custom applications, web apps, mobile apps, and SaaS platforms.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Web Apps</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Mobile</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>APIs</span>
              </div>
            </div>
          </Link>

          <Link href="/services/website-development" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black web developer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>DEVELOPMENT</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Website Development</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Modern, responsive websites and e-commerce platforms.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>React</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Next.js</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>E-commerce</span>
              </div>
            </div>
          </Link>

          <Link href="/services/data-analytics" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black data analyst" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>ANALYTICS</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Data Analytics</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Data warehouses, dashboards, and business intelligence.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Power BI</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Tableau</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>BI</span>
              </div>
            </div>
          </Link>

          <Link href="/services/it-strategy" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black IT consultant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>STRATEGY</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>IT Strategy</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Technology roadmaps, digital transformation, and advisory.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Roadmapping</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Transformation</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Advisory</span>
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Productivity & Security</span></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          <Link href="/services/microsoft-365-solutions" className="svc-card" data-reveal style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black IT consultant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>PRODUCTIVITY</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>Microsoft 365</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Office 365 deployment, Teams, SharePoint, and collaboration.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Office 365</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Teams</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>SharePoint</span>
              </div>
            </div>
          </Link>

          <Link href="/services/cctv-access-control" className="svc-card" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block', background: 'var(--ink2)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black security professional" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '0.5rem', letterSpacing: '1px' }}>PHYSICAL SECURITY</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.75rem', fontFamily: 'var(--ff-display)' }}>CCTV & Access Control</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray)', lineHeight: 1.5, marginBottom: '1rem' }}>Surveillance cameras, biometric access, and security systems.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>CCTV</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Biometrics</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--ink)', color: 'var(--gray)', borderRadius: '4px' }}>Surveillance</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section id="svc-process">
        <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Our Process</span></div>
        <h2 className="title" data-reveal data-delay="1" style={{ maxWidth: '500px' }}>How we <em>work</em> with every client</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div className="process-timeline" data-reveal>
            <div className="pt-step"><div className="pt-dot"><div className="pt-dot-inner"></div></div><div className="pt-num">01</div><div className="pt-title">Discovery & Diagnosis</div><p className="pt-text">Structured workshops, stakeholder interviews, and technical audits. We develop a clear picture of your current state, constraints, and strategic objectives before any work begins.</p></div>
            <div className="pt-step"><div className="pt-dot"><div className="pt-dot-inner"></div></div><div className="pt-num">02</div><div className="pt-title">Solution Architecture</div><p className="pt-text">Detailed blueprints, technology selection rationale, and risk assessments — giving you full visibility and sign-off before a single line of code is written.</p></div>
            <div className="pt-step"><div className="pt-dot"><div className="pt-dot-inner"></div></div><div className="pt-num">03</div><div className="pt-title">Agile Delivery</div><p className="pt-text">Two-week sprints with structured demos. You always know exactly where your project stands. Scope changes are managed transparently, without surprises.</p></div>
            <div className="pt-step"><div className="pt-dot"><div className="pt-dot-inner"></div></div><div className="pt-num">04</div><div className="pt-title">Deployment & Stabilisation</div><p className="pt-text">A dedicated stabilisation period post-launch ensures performance benchmarks are met and your team is fully trained and confident.</p></div>
            <div className="pt-step"><div className="pt-dot"><div className="pt-dot-inner"></div></div><div className="pt-num">05</div><div className="pt-title">Continuous Improvement</div><p className="pt-text">Ongoing monitoring, quarterly business reviews, and roadmap planning keep your systems healthy, secure, and aligned with your organisation&apos;s direction.</p></div>
          </div>
          <div data-reveal data-delay="2">
            <div className="img-wrap" style={{ height: '400px', marginBottom: '2rem' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop" alt="Black team working on project planning" />
              <div className="img-overlay"></div>
            </div>
            <div style={{ background: 'var(--ink)', padding: '2rem', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--white)', lineHeight: 1.55, marginBottom: '1rem' }}>&quot;Technology is only as valuable as the business outcomes it enables. We measure our success entirely in those terms.&quot;</p>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '1px' }}>— Michael Omotayo, Founder & CEO</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
