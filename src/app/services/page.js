import Link from 'next/link';

export const metadata = {
  title: 'Services | Starks IT Consulting',
};

export default function Services() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=70&auto=format&fit=crop" alt="Technology circuit board" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES / CAPABILITIES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">What We Offer</span></div>
          <h2 className="title" data-reveal data-delay="1">Full-spectrum IT solutions for <em>modern enterprises</em></h2>
          <p className="subtitle" data-reveal data-delay="2">We don&apos;t just build systems — we build competitive advantage. Every service is delivered by certified specialists who understand both the technology and the business context behind it.</p>
        </div>
      </div>

      <section id="svc-page" style={{ paddingTop: '60px' }}>
        <div className="svc-list">
          <div className="svc-item" data-reveal>
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80&auto=format&fit=crop" alt="Custom software development coding" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">01 / CUSTOM SOFTWARE DEVELOPMENT</div>
              <div className="svc-t">Custom Software Development</div>
              <p className="svc-d">Bespoke applications engineered to your exact operational requirements. From CRM and ERP platforms to client portals and SaaS products — we architect and build software that scales with your business and integrates seamlessly into your existing ecosystem.</p>
              <div className="svc-tags2"><span className="stag">Web Apps</span><span className="stag">Mobile</span><span className="stag">REST APIs</span><span className="stag">ERP/CRM</span><span className="stag">SaaS Platforms</span><span className="stag">Portals</span></div>
            </div>
          </div>
          <div className="svc-item" data-reveal data-delay="1">
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80&auto=format&fit=crop" alt="Cloud computing data center" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">02 / CLOUD INFRASTRUCTURE & DEVOPS</div>
              <div className="svc-t">Cloud Infrastructure & DevOps</div>
              <p className="svc-d">Architect robust, secure, and cost-optimised cloud environments. We manage migrations, implement CI/CD pipelines, containerise workloads, and provide ongoing infrastructure management across AWS, Azure, and GCP with guaranteed SLA uptime.</p>
              <div className="svc-tags2"><span className="stag">AWS</span><span className="stag">Azure</span><span className="stag">GCP</span><span className="stag">Kubernetes</span><span className="stag">Terraform</span><span className="stag">Docker</span></div>
            </div>
          </div>
          <div className="svc-item" data-reveal>
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&auto=format&fit=crop" alt="Cybersecurity data protection" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">03 / CYBERSECURITY & COMPLIANCE</div>
              <div className="svc-t">Cybersecurity & Compliance</div>
              <p className="svc-d">Comprehensive security posture management. We conduct penetration testing, implement zero-trust architectures, ensure regulatory compliance (NDPR, GDPR, PCI-DSS), and provide 24/7 SOC threat monitoring and incident response.</p>
              <div className="svc-tags2"><span className="stag">Pen Testing</span><span className="stag">NDPR</span><span className="stag">SOC 24/7</span><span className="stag">Zero Trust</span><span className="stag">ISO 27001</span></div>
            </div>
          </div>
          <div className="svc-item" data-reveal data-delay="1">
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop" alt="Data analytics dashboard charts" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">04 / DATA ENGINEERING & ANALYTICS</div>
              <div className="svc-t">Data Engineering & Analytics</div>
              <p className="svc-d">Transform raw data into strategic intelligence. We build data warehouses, real-time streaming pipelines, and interactive dashboards that empower leadership to make evidence-based decisions at speed and with confidence.</p>
              <div className="svc-tags2"><span className="stag">Power BI</span><span className="stag">Tableau</span><span className="stag">Snowflake</span><span className="stag">dbt</span><span className="stag">Kafka</span><span className="stag">Spark</span></div>
            </div>
          </div>
          <div className="svc-item" data-reveal>
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop" alt="IT strategy consulting meeting" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">05 / IT STRATEGY & DIGITAL TRANSFORMATION</div>
              <div className="svc-t">IT Strategy & Digital Transformation</div>
              <p className="svc-d">Executive-level advisory for organisations navigating technology change. We produce IT roadmaps, vendor selection frameworks, operating model redesign, and business cases that align technology investment to commercial outcomes.</p>
              <div className="svc-tags2"><span className="stag">Roadmapping</span><span className="stag">Change Mgmt</span><span className="stag">Architecture</span><span className="stag">TOGAF</span></div>
            </div>
          </div>
          <div className="svc-item" data-reveal data-delay="1">
            <div className="svc-img"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80&auto=format&fit=crop" alt="Managed IT services network monitoring" /></div>
            <div className="svc-hover-bar"></div>
            <div className="svc-body">
              <div className="svc-num2">06 / MANAGED IT SERVICES</div>
              <div className="svc-t">Managed IT Services & Support</div>
              <p className="svc-d">24/7 managed support, infrastructure monitoring, helpdesk, and proactive maintenance. We operate as your extended IT department — available, reliable, and always ahead of the curve — backed by iron-clad SLAs.</p>
              <div className="svc-tags2"><span className="stag">Helpdesk</span><span className="stag">SLA-backed</span><span className="stag">Monitoring</span><span className="stag">ITSM</span><span className="stag">ITIL</span></div>
            </div>
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
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop" alt="Team working on project planning" />
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
