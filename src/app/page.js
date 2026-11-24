import Link from 'next/link';
import BannerSlider from '../components/BannerSlider';

export const metadata = {
  alternates: {
    canonical: 'https://starks.com.ng',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting in Lagos | Starks IT – Enterprise Technology Solutions',
    description: 'Premier enterprise IT consulting firm in Lagos, Nigeria. Architecting scalable cloud, cybersecurity, managed IT, and custom software solutions.',
    images: ['/logo.png'],
  },
  title: {
    absolute: 'IT Consulting in Lagos | Starks IT – Enterprise Technology Solutions',
  },
  description: 'Starks IT is a premier IT consulting firm in Lagos, Nigeria. We provide enterprise IT consulting, cloud infrastructure, cybersecurity, managed IT, and digital transformation across Africa.',
  keywords: 'IT Consulting, Starks IT, IT Consulting in Lagos, IT consulting Nigeria, IT consulting firm in Lagos, enterprise IT solutions Lagos, IT services Lagos, managed IT services Lagos, IT company Lagos, technology consulting Lagos',
  openGraph: {
    title: 'IT Consulting in Lagos | Starks IT – Enterprise Technology Solutions',
    description: 'Premier enterprise IT consulting firm in Lagos, Nigeria providing cloud engineering, cybersecurity, managed IT, and custom software across Africa.',
    url: 'https://starks.com.ng',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What IT consulting services does Starks IT provide in Lagos?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Starks IT provides end-to-end IT consulting services in Lagos, Nigeria. Our capabilities include enterprise IT strategy, custom software development, cloud infrastructure (AWS & Azure), cybersecurity & ISO 27001/NDPR compliance, data engineering, managed IT services, and Microsoft 365 solutions.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Why choose Starks IT for IT consulting in Lagos, Nigeria?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Founded in Lagos in 2017, Starks IT combines deep local market insight with international engineering standards. We hold ISO 27001:2022 certification, maintain a 10-year record of zero security breaches across managed client environments, and have delivered 150+ high-impact IT consulting projects for Nigerian and multinational enterprises.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Where is Starks IT located in Lagos?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Starks IT is headquartered in Lagos, Nigeria, at 16 Shagamu Avenue, Ikeja, Lagos State. We serve enterprises across Ikeja, Victoria Island, Ikoyi, Lekki, Marina, and the broader West African region.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How can businesses engage Starks IT for IT consulting?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Businesses can schedule a discovery consultation with Starks IT via our contact page (https://starks.com.ng/contact) or reach our Lagos advisory team directly at info@starks.com.ng to discuss technology roadmaps, system audits, or implementation projects.'
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="page active">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <section id="home-hero">
        <div className="hero-grid"></div>
        <div className="hero-float-num">10</div>
        <div className="home-hero-left">
          <div className="hero-tag" data-reveal>
            <div className="hero-dot"></div>
            <span className="hero-tag-text">Starks IT · Premier IT Consulting in Lagos, Nigeria · ISO 27001</span>
          </div>
          <h1 className="hero-h" data-reveal data-delay="1">
            Enterprise <em>IT Consulting</em><br />in Lagos that moves<br />your business forward.
          </h1>
          <p className="hero-p" data-reveal data-delay="2">Starks IT is a premier IT consulting firm in Lagos, Nigeria. We partner with organisations across Africa and beyond to architect, deliver, and manage transformative IT solutions — from enterprise software to cloud infrastructure.</p>
          <div className="hero-btns" data-reveal data-delay="3">
            <Link href="/cases" className="btn btn-gold" style={{ textDecoration: 'none' }}><span>View Our Work</span></Link>
            <Link href="/contact" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Book a Consultation</Link>
          </div>
          <div className="hero-stats" data-reveal data-delay="4">
            <div><div className="hs-num">9+</div><div className="hs-label">Years in Business</div></div>
            <div><div className="hs-num">150+</div><div className="hs-label">Projects Delivered</div></div>
            <div><div className="hs-num">84%</div><div className="hs-label">Client Retention</div></div>
          </div>
        </div>
        <div className="home-hero-right">
          <BannerSlider />
          <div className="img-overlay" style={{ pointerEvents: 'none' }}></div>
          <div className="hero-overlay-text">LAGOS · NIGERIA · 2017</div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span className="ti">AP-LBC UK</span><span className="ti">BIC Nigeria</span><span className="ti">Lucky Stationery</span>
          <span className="ti">36 Media</span><span className="ti">DECIMALS</span><span className="ti">LAMATA</span>
          <span className="ti">Lucky Stationery</span><span className="ti">AP-LBC UK</span><span className="ti">36 Media</span>
          <span className="ti">DECIMALS</span><span className="ti">BIC Nigeria</span><span className="ti">Lucky Stationery</span>
          <span className="ti">LAMATA</span><span className="ti">DECIMALS</span><span className="ti">LAMATA</span>
          <span className="ti">BIC Nigeria</span><span className="ti">AP-LBC UK</span><span className="ti">36 Media</span>
          {/*<span className="ti">Zenith Bank</span><span className="ti">Andela</span><span className="ti">Interswitch</span>
          <span className="ti">NNPC Limited</span><span className="ti">Nestlé Nigeria</span><span className="ti">PwC West Africa</span>*/}
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
          <Link href="/services/software-development" className="hsvc" data-reveal style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">01</div>
            <span className="hsvc-icon">💻</span>
            <div className="hsvc-title">Custom Software Development</div>
            <p className="hsvc-text">Bespoke CRM, ERP, SaaS platforms and mobile apps engineered to your exact operational requirements.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/cloud-solutions" className="hsvc" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">02</div>
            <span className="hsvc-icon">🌐</span>
            <div className="hsvc-title">Cloud Infrastructure & DevOps</div>
            <p className="hsvc-text">Robust, cost-optimised cloud environments across AWS, Azure, and GCP with ongoing management and CI/CD.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/cybersecurity-services" className="hsvc" data-reveal data-delay="2" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">03</div>
            <span className="hsvc-icon">🛡️</span>
            <div className="hsvc-title">Cybersecurity & Compliance</div>
            <p className="hsvc-text">Penetration testing, zero-trust architectures, NDPR/GDPR compliance, and 24/7 threat monitoring.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/data-analytics" className="hsvc" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">04</div>
            <span className="hsvc-icon">📈</span>
            <div className="hsvc-title">Data Engineering & Analytics</div>
            <p className="hsvc-text">Data warehouses, real-time pipelines, and intelligent dashboards that turn raw data into strategy.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/it-strategy" className="hsvc" data-reveal data-delay="2" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">05</div>
            <span className="hsvc-icon">🎯</span>
            <div className="hsvc-title">IT Strategy & Transformation</div>
            <p className="hsvc-text">Executive-level advisory: IT roadmaps, operating model redesign, vendor selection, and business case development.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/managed-it-services" className="hsvc" data-reveal data-delay="3" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">06</div>
            <span className="hsvc-icon">🖥️</span>
            <div className="hsvc-title">Managed IT Services</div>
            <p className="hsvc-text">24/7 helpdesk, infrastructure monitoring, proactive maintenance, and SLA-backed support operations.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/microsoft-365-solutions" className="hsvc" data-reveal data-delay="2" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">07</div>
            <span className="hsvc-icon">📊</span>
            <div className="hsvc-title">Microsoft 365 Solutions</div>
            <p className="hsvc-text">Office 365 deployment, Teams collaboration, SharePoint document management, and productivity workflow automation.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
          <Link href="/services/it-support-services" className="hsvc" data-reveal data-delay="3" style={{ textDecoration: 'none' }}>
            <div className="hsvc-bar"></div>
            <div className="hsvc-num">08</div>
            <span className="hsvc-icon">🔧</span>
            <div className="hsvc-title">IT Support Services</div>
            <p className="hsvc-text">On-site and remote technical support with guaranteed response times, hardware troubleshooting, and end-user training.</p>
            <span className="hsvc-link">Explore → </span>
          </Link>
        </div>
      </section>

      {/* TRANSIT PRODUCT SPOTLIGHT */}
      <section style={{ padding: '80px 5%', background: 'var(--ink2)', borderTop: '1px solid rgba(200,168,75,0.15)', borderBottom: '1px solid rgba(200,168,75,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">PROPRIETARY SAAS PRODUCT</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Trans<span style={{ color: 'var(--starks-blue)' }}>IT</span> — Intelligent Fleet <em>& Transport System</em>
            </h2>
            <p className="subtitle" style={{ marginBottom: '1.5rem', color: 'var(--ash2)' }}>
              Monitor and regulate vehicle routes, live GPS pings, geofencing compliance, mileage-triggered maintenance, and distance-based billing—all from one live control console built specifically for Nigerian roads.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <Link href="/transit" className="btn btn-gold" style={{ textDecoration: 'none' }}>
                <span>Explore TransIT Platform</span>
              </Link>
              <a href="https://www.trans-it.app/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
                Visit trans-it.app ↗
              </a>
            </div>
          </div>
          <div className="transit-mockup-container" data-reveal="right">
            <div className="transit-mockup-header">
              <div className="transit-mockup-dots">
                <span className="transit-mockup-dot red"></span>
                <span className="transit-mockup-dot yellow"></span>
                <span className="transit-mockup-dot green"></span>
              </div>
              <div className="transit-mockup-url">trans-it.app/client</div>
              <div className="transit-mockup-status">
                ● LIVE
              </div>
            </div>
            <div className="transit-mockup-img-wrap">
              <img 
                src="/transit_hero_dashboard.png" 
                alt="TransIT Fleet Operations Overview Dashboard Console" 
                className="transit-mockup-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING & ACADEMY SPOTLIGHT */}
      <section style={{ padding: '80px 5%', background: 'var(--ink3)', borderBottom: '1px solid rgba(200,168,75,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div data-reveal="left">
            <div className="label"><div className="label-line"></div><span className="label-text">TRAINING & WORKSPACE</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              Starks <em>Learning Workspace</em> & Practice Labs
            </h2>
            <p className="subtitle" style={{ marginBottom: '1.5rem', color: 'var(--ash2)' }}>
              Where modern developers and enterprise teams build real-world capability. Featuring our live in-browser <strong>Frontend Practice Lab</strong> with automated test verification, progressive exercises, and line-by-line code reviews from active senior consultants.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <Link href="/training" className="btn btn-gold" style={{ textDecoration: 'none' }}>
                <span>Explore Starks Training</span>
              </Link>
              <a href="https://learn.starks.com.ng/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
                Enrol Now ↗
              </a>
            </div>
          </div>
          <div style={{
            background: 'var(--ink2)',
            border: '1px solid rgba(200, 168, 75, 0.3)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)'
          }} data-reveal="right">
            <div style={{
              background: 'var(--ink)',
              padding: '12px 18px',
              borderBottom: '1px solid rgba(200, 168, 75, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--ash)', marginLeft: '8px' }}>starks-learning // enrolment</span>
              </div>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', background: 'rgba(200,168,75,0.1)', padding: '3px 8px', borderRadius: '4px' }}>ENROLMENT OPEN</span>
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Flagship Course · Enrolment Open (Nov 25 – Dec 12)
              </div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.35rem', color: 'var(--white)', marginBottom: '0.8rem' }}>
                Frontend Practice Lab
              </div>
              <p style={{ color: 'var(--ash2)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: 300 }}>
                Enrolment for this cohort runs 25th Nov – 12th Dec. Early birds get discounts. Class starts 14th Dec. Enroll now to access your student portal and start learning.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                <div style={{ background: 'rgba(200, 168, 75, 0.05)', border: '1px solid rgba(200, 168, 75, 0.15)', padding: '10px 14px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.7rem', fontFamily: 'var(--ff-mono)', color: 'var(--gold)' }}>FORMAT</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--white)', fontWeight: 500, marginTop: '2px' }}>Interactive Browser Lab</div>
                </div>
                <div style={{ background: 'rgba(200, 168, 75, 0.05)', border: '1px solid rgba(200, 168, 75, 0.15)', padding: '10px 14px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.7rem', fontFamily: 'var(--ff-mono)', color: 'var(--gold)' }}>VERIFICATION</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--white)', fontWeight: 500, marginTop: '2px' }}>Automated Test Checks</div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="https://learn.starks.com.ng/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--gold)', textDecoration: 'none' }}>
                  learn.starks.com.ng →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="home-why">
        <div className="why-img-stack" data-reveal="left">
          <div className="why-img-main img-wrap">
            <img src="/about-main.jpg" alt="Team collaboration in office" />
            <div className="img-overlay"></div>
          </div>
          <div className="why-img-sec img-wrap">
            <img src="/home-dev.jpg" alt="Developer working on code" />
            <div className="img-overlay"></div>
          </div>
          <div className="why-badge">
            <span className="why-badge-num">9+</span>
            <span className="why-badge-text">Years of Trust</span>
          </div>
        </div>
        <div data-reveal="right">
          <div className="label"><div className="label-line"></div><span className="label-text">Why Starks IT</span></div>
          <h2 className="title">About a decade of delivering <em>what matters</em></h2>
          <p className="subtitle">Founded in Lagos in 2017, Starks IT has grown from a boutique development shop into a premier IT consulting firm serving enterprise clients across Nigeria and West Africa — always with rigour and integrity.</p>
          <div className="why-features">
            { <div className="why-feat">
              <div className="wf-icon">🏆</div>
              <div><div className="wf-title">ISO 27001:2022 Certified</div><p className="wf-text">Information security management to international standards, across every client engagement.</p></div>
            </div> }
            {<div className="why-feat">
              <div className="wf-icon">⚡</div>
              <div><div className="wf-title">Microsoft Gold & AWS Partner</div><p className="wf-text">Certified at the highest partner tier on both leading cloud platforms — giving you access to enterprise pricing and priority support.</p></div>
            </div>}
            <div className="why-feat">
              <div className="wf-icon">🌍</div>
              <div><div className="wf-title">{/*18 Countries,*/}Deep Local Roots</div><p className="wf-text">Genuinely pan-African expertise with global standards. We understand the unique constraints and opportunities of operating on this continent.</p></div>
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
          <Link href="/cases/core-banking-api-modernisation" className="hcase" data-reveal style={{ textDecoration: 'none' }}>
            <div className="hcase-img">
              <img src="/home-banking.jpg" alt="Banking technology" />
            </div>
            <div className="hcase-body">
              <div className="hcase-ind">Financial Services</div>
              <div className="hcase-title">Core Banking API Platform Modernisation for a Tier-1 Nigerian Bank</div>
              <p className="hcase-text">Rebuilt legacy monolithic integration layer into an event-driven microservices architecture — enabling real-time processing across 4.2M accounts.</p>
              <div className="hcase-stat"><div className="hcase-val">87%</div><div className="hcase-desc">Reduction in API latency</div></div>
            </div>
          </Link>
          <Link href="/cases/field-operations-erp" className="hcase" data-reveal data-delay="1" style={{ textDecoration: 'none' }}>
            <div className="hcase-img">
              <img src="/blog-erp.png" alt="Energy sector operations" />
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
          <img src="/home-cta.jpg" alt="Lagos city skyline" />
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
