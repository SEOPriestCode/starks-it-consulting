import Link from 'next/link';

export default function Home() {
  return (
    <div className="page active">
      <section id="home-hero">
        <div className="hero-grid"></div>
        <div className="hero-float-num">10</div>
        <div className="home-hero-left">
          <div className="hero-tag" data-reveal>
            <div className="hero-dot"></div>
            <span className="hero-tag-text">Est. 2014 · Lagos, Nigeria · ISO 27001</span>
          </div>
          <h1 className="hero-h" data-reveal data-delay="1">
            Technology that <em>moves</em><br />your business<br />forward.
          </h1>
          <p className="hero-p" data-reveal data-delay="2">Starks IT Consulting partners with organisations across Africa and beyond to architect, deliver, and manage transformative digital solutions — from enterprise software to cloud infrastructure.</p>
          <div className="hero-btns" data-reveal data-delay="3">
            <Link href="/cases" className="btn btn-gold" style={{ textDecoration: 'none' }}><span>View Our Work</span></Link>
            <Link href="/contact" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Book a Consultation</Link>
          </div>
          <div className="hero-stats" data-reveal data-delay="4">
            <div><div className="hs-num">10+</div><div className="hs-label">Years in Business</div></div>
            <div><div className="hs-num">280+</div><div className="hs-label">Projects Delivered</div></div>
            <div><div className="hs-num">94%</div><div className="hs-label">Client Retention</div></div>
          </div>
        </div>
        <div className="home-hero-right">
          <div className="img-wrap" style={{ position: 'absolute', inset: 0 }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop" alt="Modern office technology workspace" loading="eager" />
            <div className="img-overlay"></div>
          </div>
          <div className="hero-overlay-text">LAGOS · NIGERIA · 2014</div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span className="ti">Access Bank</span><span className="ti">MTN Nigeria</span><span className="ti">Dangote Group</span>
          <span className="ti">Flutterwave</span><span className="ti">NLNG</span><span className="ti">Lagos State Govt</span>
          <span className="ti">Zenith Bank</span><span className="ti">Andela</span><span className="ti">Interswitch</span>
          <span className="ti">NNPC Limited</span><span className="ti">Nestlé Nigeria</span><span className="ti">PwC West Africa</span>
          <span className="ti">Access Bank</span><span className="ti">MTN Nigeria</span><span className="ti">Dangote Group</span>
          <span className="ti">Flutterwave</span><span className="ti">NLNG</span><span className="ti">Lagos State Govt</span>
          <span className="ti">Zenith Bank</span><span className="ti">Andela</span><span className="ti">Interswitch</span>
          <span className="ti">NNPC Limited</span><span className="ti">Nestlé Nigeria</span><span className="ti">PwC West Africa</span>
        </div>
      </div>

      {/* HOME SERVICES */}
      <section id="home-services">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: 0 }}>
          <div>
            <div className="label" data-reveal><div className="label-line"></div><span className="label-text">What We Do</span></div>
            <h2 className="title" data-reveal data-delay="1">End-to-end IT services built for <em>enterprise scale</em></h2>
          </div>
          <div data-reveal data-delay="2">
            <p className="subtitle">From strategy through execution, our multidisciplinary teams deliver solutions that are technically rigorous, commercially grounded, and built to last.</p>
            <Link href="/services" className="arrow-btn" style={{ marginTop: '1.5rem', display: 'inline-flex', textDecoration: 'none' }}>Explore all services →</Link>
          </div>
        </div>
        <div className="home-svc-grid">
          <Link href="/services" className="hsvc" data-reveal style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">01</div>
            <span className="hsvc-icon">⚙</span>
            <div className="hsvc-title">Custom Software Development</div>
            <p className="hsvc-text">Bespoke CRM, ERP, SaaS platforms and mobile apps engineered to your exact operational requirements.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services" className="hsvc" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">02</div>
            <span className="hsvc-icon">☁</span>
            <div className="hsvc-title">Cloud Infrastructure & DevOps</div>
            <p className="hsvc-text">Robust, cost-optimised cloud environments across AWS, Azure, and GCP with ongoing management and CI/CD.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services" className="hsvc" data-reveal data-delay="2" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">03</div>
            <span className="hsvc-icon">🛡</span>
            <div className="hsvc-title">Cybersecurity & Compliance</div>
            <p className="hsvc-text">Penetration testing, zero-trust architectures, NDPR/GDPR compliance, and 24/7 threat monitoring.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services" className="hsvc" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">04</div>
            <span className="hsvc-icon">◈</span>
            <div className="hsvc-title">Data Engineering & Analytics</div>
            <p className="hsvc-text">Data warehouses, real-time pipelines, and intelligent dashboards that turn raw data into strategy.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services" className="hsvc" data-reveal data-delay="2" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">05</div>
            <span className="hsvc-icon">◉</span>
            <div className="hsvc-title">IT Strategy & Transformation</div>
            <p className="hsvc-text">Executive-level advisory: IT roadmaps, operating model redesign, vendor selection, and business case development.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services" className="hsvc" data-reveal data-delay="3" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">06</div>
            <span className="hsvc-icon">⬡</span>
            <div className="hsvc-title">Managed IT Services</div>
            <p className="hsvc-text">24/7 helpdesk, infrastructure monitoring, proactive maintenance, and SLA-backed support operations.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section id="home-why">
        <div className="why-img-stack" data-reveal="left">
          <div className="why-img-main img-wrap">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80&auto=format&fit=crop" alt="Team collaboration in office" />
            <div className="img-overlay"></div>
          </div>
          <div className="why-img-sec img-wrap">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop" alt="Developer working on code" />
            <div className="img-overlay"></div>
          </div>
          <div className="why-badge">
            <span className="why-badge-num">10+</span>
            <span className="why-badge-text">Years of Trust</span>
          </div>
        </div>
        <div data-reveal="right">
          <div className="label"><div className="label-line"></div><span className="label-text">Why Starks IT</span></div>
          <h2 className="title">A decade of delivering <em>what matters</em></h2>
          <p className="subtitle">Founded in Lagos in 2014, we&apos;ve grown from a boutique development shop into a full-spectrum IT consultancy serving clients across 18 countries — always with rigour and integrity.</p>
          <div className="why-features">
            <div className="why-feat">
              <div className="wf-icon">🏆</div>
              <div><div className="wf-title">ISO 27001:2022 Certified</div><p className="wf-text">Information security management to international standards, across every client engagement.</p></div>
            </div>
            <div className="why-feat">
              <div className="wf-icon">⚡</div>
              <div><div className="wf-title">Microsoft Gold & AWS Partner</div><p className="wf-text">Certified at the highest partner tier on both leading cloud platforms — giving you access to enterprise pricing and priority support.</p></div>
            </div>
            <div className="why-feat">
              <div className="wf-icon">🌍</div>
              <div><div className="wf-title">18 Countries, Deep Local Roots</div><p className="wf-text">Genuinely pan-African expertise with global standards. We understand the unique constraints and opportunities of operating on this continent.</p></div>
            </div>
            <div className="why-feat">
              <div className="wf-icon">🔒</div>
              <div><div className="wf-title">Zero Security Breaches in 10 Years</div><p className="wf-text">Our security-first approach has protected every managed client environment without a single confirmed breach in our operating history.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASES */}
      <section id="home-cases">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <div>
            <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Case Studies</span></div>
            <h2 className="title" data-reveal data-delay="1">Work that speaks <em>for itself</em></h2>
          </div>
          <Link href="/cases" className="arrow-btn" data-reveal style={{ textDecoration: 'none' }}>View all projects →</Link>
        </div>
        <div className="hcase-grid">
          <Link href="/cases" className="hcase" data-reveal style={{ textDecoration: 'none' }}>
            <div className="hcase-img">
              <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80&auto=format&fit=crop" alt="Banking technology" />
            </div>
            <div className="hcase-body">
              <div className="hcase-ind">Financial Services</div>
              <div className="hcase-title">Core Banking API Platform Modernisation for a Tier-1 Nigerian Bank</div>
              <p className="hcase-text">Rebuilt legacy monolithic integration layer into an event-driven microservices architecture — enabling real-time processing across 4.2M accounts.</p>
              <div className="hcase-stat"><div className="hcase-val">87%</div><div className="hcase-desc">Reduction in API latency</div></div>
            </div>
          </Link>
          <Link href="/cases" className="hcase" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hcase-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop" alt="Energy sector operations" />
            </div>
            <div className="hcase-body">
              <div className="hcase-ind">Energy & Resources</div>
              <div className="hcase-title">Field Operations ERP for Major Oil & Gas Downstream Operator</div>
              <p className="hcase-text">Custom ERP covering logistics, inventory, compliance reporting, and workforce management across 120 depots nationwide.</p>
              <div className="hcase-stat"><div className="hcase-val">₦210M</div><div className="hcase-desc">Annual cost savings</div></div>
            </div>
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="home-testi" style={{ paddingTop: '80px' }}>
        <div style={{ padding: '0 5%', marginBottom: 0 }}>
          <div className="label" style={{ justifyContent: 'center' }} data-reveal><div className="label-line"></div><span className="label-text">Client Voices</span></div>
          <h2 className="title" style={{ textAlign: 'center' }} data-reveal data-delay="1">What our clients <em>say</em></h2>
        </div>
        <div className="testi-marquee-wrap">
          <div className="testi-marquee">
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;Starks IT didn&apos;t just deliver a system — they changed how we think about technology. The ERP has transformed our field operations and saved us more in year one than the entire engagement cost.&quot;</p><div className="tcard-auth"><div className="tcard-av">OA</div><div><div className="tcard-name">Olumide Adeyemi</div><div className="tcard-co">COO, Downstream Energy Group</div></div></div></div>
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;We&apos;ve worked with many technology firms. Starks stands apart in one key way: they actually understand the business context of what they&apos;re building. That makes all the difference.&quot;</p><div className="tcard-auth"><div className="tcard-av">CU</div><div><div className="tcard-name">Chioma Uzoka</div><div className="tcard-co">CTO, Tier-1 Commercial Bank</div></div></div></div>
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;Their integrity and technical depth gave us full confidence throughout a very complex migration. Every deadline was met, every escalation was handled professionally. Exceptional partners.&quot;</p><div className="tcard-auth"><div className="tcard-av">BI</div><div><div className="tcard-name">Babajide Irewole</div><div className="tcard-co">Director of ICT, Lagos State Govt</div></div></div></div>
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;The Starks team embedded themselves in our workflows from day one. They didn&apos;t just write code — they solved our operational problems with intelligence and speed.&quot;</p><div className="tcard-auth"><div className="tcard-av">RA</div><div><div className="tcard-name">Ruth Abara</div><div className="tcard-co">VP Technology, National Hospital Group</div></div></div></div>
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;Starks IT didn&apos;t just deliver a system — they changed how we think about technology. The ERP has transformed our field operations and saved us more in year one than the entire engagement cost.&quot;</p><div className="tcard-auth"><div className="tcard-av">OA</div><div><div className="tcard-name">Olumide Adeyemi</div><div className="tcard-co">COO, Downstream Energy Group</div></div></div></div>
            <div className="tcard"><div className="tcard-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><p className="tcard-q">&quot;We&apos;ve worked with many technology firms. Starks stands apart in one key way: they actually understand the business context of what they&apos;re building. That makes all the difference.&quot;</p><div className="tcard-auth"><div className="tcard-av">CU</div><div><div className="tcard-name">Chioma Uzoka</div><div className="tcard-co">CTO, Tier-1 Commercial Bank</div></div></div></div>
          </div>
        </div>
      </section>

      {/* HOME CTA */}
      <section id="home-cta">
        <div className="hcta-bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=70&auto=format&fit=crop" alt="Lagos city skyline" />
          <div className="hcta-grad"></div>
        </div>
        <div className="hcta-inner">
          <div className="label" style={{ justifyContent: 'center' }} data-reveal><div className="label-line"></div><span className="label-text">Let&apos;s Work Together</span></div>
          <h2 className="hcta-title" data-reveal data-delay="1">Ready to build something<br />that <em>lasts?</em></h2>
          <p className="hcta-sub" data-reveal data-delay="2">Whether you have a fully-formed brief or just a challenge worth solving, we&apos;d like to hear from you. The first conversation is always free.</p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }} data-reveal data-delay="3">
            <Link href="/contact" className="btn btn-gold" style={{ textDecoration: 'none' }}><span>Schedule a Discovery Call</span></Link>
            <Link href="/about" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
