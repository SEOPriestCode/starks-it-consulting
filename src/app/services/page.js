import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: 'https://starks.com.ng/services',
  },
  openGraph: {
    title: 'IT Consulting Services Lagos | Enterprise IT Solutions | Starks IT',
    description: 'Enterprise IT consulting services in Lagos by Starks IT. Expert advisory in cloud architecture, cybersecurity, managed IT, custom software, and digital strategy.',
    url: 'https://starks.com.ng/services',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [{ url: '/about-hero.jpg', width: 1200, height: 630, alt: 'Starks IT – IT Consulting Services Lagos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting Services Lagos | Starks IT',
    description: 'Enterprise IT consulting services in Lagos, Nigeria: cloud architecture, cybersecurity, managed IT, and custom software.',
    images: ['/about-hero.jpg'],
  },
  title: {
    absolute: 'IT Consulting Services Lagos | Enterprise IT Solutions | Starks IT',
  },
  description: 'Starks IT provides enterprise IT consulting services in Lagos, Nigeria. We engineer managed IT services, cloud consulting, cybersecurity, bespoke software, and digital transformation for African businesses.',
  keywords: 'IT Consulting, Starks IT, IT Consulting in Lagos, IT consulting services Lagos, IT consulting firm Nigeria, managed IT services Lagos, enterprise IT solutions Lagos, IT support Lagos',
};

export default function Services() {
  return (
    <div className="page active">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/about-hero.jpg" alt="Black IT professionals working on technology solutions" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES / CAPABILITIES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Starks IT · Lagos, Nigeria</span></div>
          <h1 className="title" data-reveal data-delay="1">Enterprise <em>IT Consulting</em> & Technology Services in Lagos</h1>
          <p className="subtitle" data-reveal data-delay="2">Starks IT delivers full-spectrum IT consulting and technology solutions tailored for enterprises in Lagos, Nigeria, and across West Africa. Every service is backed by certified specialists committed to operational excellence and business impact.</p>
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
              <img src="/service-managed-it.jpg" alt="Managed IT Services NOC Monitoring" />
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
              <img src="/service-it-support-gen.jpg" alt="IT Support Services Technician Workstation" />
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
              <img src="/service-cloud-new.jpg" alt="Cloud Infrastructure & Architecture" />
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
              <img src="/service-cybersecurity.jpg" alt="Cybersecurity SOC Shield Operations" />
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
              <img src="/service-network.jpg" alt="Network Infrastructure Cabling and Switches" />
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
              <img src="/service-server-deployment.png" alt="Server Deployment and Data Center" />
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
              <img src="/service-software-dev.png" alt="Custom Software Development Engineers" />
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
              <img src="/service-website-dev.png" alt="Website Development & UI Wireframing" />
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
              <img src="/service-data-analytics.png" alt="Data Analytics and Business Intelligence" />
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
              <img src="/service-it-strategy.png" alt="IT Strategy Whiteboard Architecture" />
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
              <img src="/service-microsoft-365.jpg" alt="Microsoft 365 Cloud Productivity Solutions" />
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
              <img src="/service-cctv-access-control.jpg" alt="CCTV & Biometric Access Control System" />
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

      {/* TRAINING & ACADEMY BANNER */}
      <section style={{ padding: '0 clamp(4%,5%,5%) 60px' }}>
        <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', background: 'linear-gradient(135deg, rgba(8,14,26,0.95) 0%, rgba(18,28,48,0.95) 100%)', border: '1px solid rgba(200, 168, 75, 0.3)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Starks Academy & Workspace</div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--white)', marginBottom: '0.6rem' }}>
              Hands-On Developer Training & Engineering Labs
            </h3>
            <p style={{ color: 'var(--ash2)', fontSize: '0.92rem', lineHeight: '1.7', fontWeight: 300 }}>
              Build production engineering skills with our interactive browser workspace. Featuring our flagship <strong>Frontend Practice Lab</strong> with automated test checks, project capstones, and senior consultant code reviews.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/training" className="btn btn-gold" style={{ textDecoration: 'none' }}>
              <span>Explore Training Tracks →</span>
            </Link>
            <a href="https://learn.starks.com.ng/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
              Join Waitlist ↗
            </a>
          </div>
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
