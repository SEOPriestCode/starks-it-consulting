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
          <img src="/service-generic.jpg" alt="Black IT professionals working on technology solutions" />
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

        <div className="svc-list" style={{ marginBottom: '4rem' }}>
          <Link href="/services/managed-it-services" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black IT professional" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">CORE SERVICE</div>
              <h3 className="svc-t">Managed IT Services</h3>
              <p className="svc-d">24/7 IT support, monitoring, and proactive maintenance for your entire infrastructure.</p>
              <div className="svc-tags2">
                <span className="stag">Helpdesk</span>
                <span className="stag">Monitoring</span>
                <span className="stag">SLA-backed</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/it-support-services" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-tech.jpg" alt="Black IT support professional" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">CORE SERVICE</div>
              <h3 className="svc-t">IT Support Services</h3>
              <p className="svc-d">On-site and remote technical support with guaranteed response times.</p>
              <div className="svc-tags2">
                <span className="stag">Remote</span>
                <span className="stag">On-Site</span>
                <span className="stag">Hardware</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/cloud-solutions" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-cloud.jpg" alt="Black cloud architect" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">CLOUD & INFRASTRUCTURE</div>
              <h3 className="svc-t">Cloud Solutions</h3>
              <p className="svc-d">AWS, Azure, and GCP cloud infrastructure with DevOps automation.</p>
              <div className="svc-tags2">
                <span className="stag">AWS</span>
                <span className="stag">Azure</span>
                <span className="stag">DevOps</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/cybersecurity-services" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-tech.jpg" alt="Black cybersecurity professional" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">SECURITY</div>
              <h3 className="svc-t">Cybersecurity</h3>
              <p className="svc-d">Penetration testing, compliance, and 24/7 SOC monitoring.</p>
              <div className="svc-tags2">
                <span className="stag">Pen Testing</span>
                <span className="stag">SOC 24/7</span>
                <span className="stag">NDPR</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/network-infrastructure" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black network engineer" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">INFRASTRUCTURE</div>
              <h3 className="svc-t">Network Infrastructure</h3>
              <p className="svc-d">Structured cabling, wireless networks, and network security.</p>
              <div className="svc-tags2">
                <span className="stag">Cabling</span>
                <span className="stag">Wireless</span>
                <span className="stag">Security</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/server-deployment" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black server administrator" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">INFRASTRUCTURE</div>
              <h3 className="svc-t">Server Deployment</h3>
              <p className="svc-d">Expert server setup, virtualization, and ongoing management.</p>
              <div className="svc-tags2">
                <span className="stag">VMware</span>
                <span className="stag">Backup</span>
                <span className="stag">Monitoring</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Development & Strategy</span></div>
        </div>

        <div className="svc-list" style={{ marginBottom: '4rem' }}>
          <Link href="/services/software-development" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black software developer" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">DEVELOPMENT</div>
              <h3 className="svc-t">Software Development</h3>
              <p className="svc-d">Custom applications, web apps, mobile apps, and SaaS platforms.</p>
              <div className="svc-tags2">
                <span className="stag">Web Apps</span>
                <span className="stag">Mobile</span>
                <span className="stag">APIs</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/website-development" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black web developer" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">DEVELOPMENT</div>
              <h3 className="svc-t">Website Development</h3>
              <p className="svc-d">Modern, responsive websites and e-commerce platforms.</p>
              <div className="svc-tags2">
                <span className="stag">React</span>
                <span className="stag">Next.js</span>
                <span className="stag">E-commerce</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/data-analytics" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black data analyst" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">ANALYTICS</div>
              <h3 className="svc-t">Data Analytics</h3>
              <p className="svc-d">Data warehouses, dashboards, and business intelligence.</p>
              <div className="svc-tags2">
                <span className="stag">Power BI</span>
                <span className="stag">Tableau</span>
                <span className="stag">BI</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/it-strategy" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black IT consultant" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">STRATEGY</div>
              <h3 className="svc-t">IT Strategy</h3>
              <p className="svc-d">Technology roadmaps, digital transformation, and advisory.</p>
              <div className="svc-tags2">
                <span className="stag">Roadmapping</span>
                <span className="stag">Transformation</span>
                <span className="stag">Advisory</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Productivity & Security</span></div>
        </div>

        <div className="svc-list">
          <Link href="/services/microsoft-365-solutions" className="svc-item" data-reveal style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black IT consultant" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">PRODUCTIVITY</div>
              <h3 className="svc-t">Microsoft 365</h3>
              <p className="svc-d">Office 365 deployment, Teams, SharePoint, and collaboration.</p>
              <div className="svc-tags2">
                <span className="stag">Office 365</span>
                <span className="stag">Teams</span>
                <span className="stag">SharePoint</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
          </Link>

          <Link href="/services/cctv-access-control" className="svc-item" data-reveal data-delay="1" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-img">
              <img src="/service-generic.jpg" alt="Black security professional" />
            </div>
            <div className="svc-body">
              <div className="svc-num2">PHYSICAL SECURITY</div>
              <h3 className="svc-t">CCTV & Access Control</h3>
              <p className="svc-d">Surveillance cameras, biometric access, and security systems.</p>
              <div className="svc-tags2">
                <span className="stag">CCTV</span>
                <span className="stag">Biometrics</span>
                <span className="stag">Surveillance</span>
              </div>
            </div>
            <div className="svc-hover-bar"></div>
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
              <img src="/service-generic.jpg" alt="Black team working on project planning" />
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
