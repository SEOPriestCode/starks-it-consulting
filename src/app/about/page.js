export const metadata = {
  title: 'About Our IT Consulting Company | Starks IT Consulting Nigeria',
  description: 'Learn about Starks IT Consulting, a leading IT consulting company in Nigeria providing enterprise IT services, cloud solutions, cybersecurity, and digital transformation since 2017.',
  keywords: 'IT consulting company Nigeria, about Starks IT, IT services provider Lagos, enterprise IT solutions Nigeria, cloud consulting, cybersecurity services, digital transformation Africa',
};

export default function About() {
  return (
    <div className="page active">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/about-hero.jpg" alt="Lagos office building" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">ABOUT US / OUR STORY</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Who We Are</span></div>
          <h2 className="title" data-reveal data-delay="1">Built in Lagos.<br /><em>Trusted globally.</em></h2>
          <p className="subtitle" data-reveal data-delay="2">Since 2017, we have been proving that African enterprises deserve the same calibre of technology partnership available to multinationals anywhere in the world.</p>
        </div>
      </div>

      <section id="about-story" style={{ paddingTop: '80px' }}>
        <div className="about-img-main" data-reveal="left">
          <div className="img-wrap" style={{ height: '100%' }}>
            <img src="/about-main.jpg" alt="Team working together in modern office" />
            <div className="img-overlay"></div>
          </div>
          <div className="about-gold-box">
            <span className="agb-num">2017</span>
            <span className="agb-text">Year Founded</span>
          </div>
        </div>
        <div className="about-text" data-reveal="right">
          <div className="label"><div className="label-line"></div><span className="label-text">Our Story</span></div>
          <h2 className="title">A decade of <em>deliberate</em> growth</h2>
          <p>Founded in Lagos in 2017 by Michael Omotayo, Starks IT Consulting began with a clear conviction: African enterprises deserve the same calibre of technology partnership available to multinationals anywhere in the world. We started small — a team of three, one shared office in Ikeja, and an absolute commitment to quality over quantity.</p>
          <p>Over the decade that followed, we grew into a full-spectrum IT consultancy with over 65 professionals, serving clients across banking, energy, telecoms, healthcare, and the public sector. Our work has helped organisations launch new revenue lines, dramatically reduce operational costs, and navigate complex regulatory landscapes — always with rigour and integrity.</p>
          <p>We are proudly Nigerian, globally fluent, and deeply committed to building technology that lasts. Not the kind that impresses in a demo and disappoints in production. The kind that becomes core infrastructure.</p>
          <div className="about-certs">
            <div className="acert"><span className="acert-icon">✓</span>ISO 27001:2022 Information Security Management Certified</div>
            {/*<div className="acert"><span className="acert-icon">✓</span>Microsoft Gold Partner & AWS Select Consulting Partner</div>*/}
            <div className="acert"><span className="acert-icon">✓</span>NITDA registered and fully NDPR compliant across all engagements</div>
            <div className="acert"><span className="acert-icon">✓</span>CBN-accredited fintech solution provider since 2017</div>
          </div>
        </div>
      </section>

      {/* OFFICE IMAGE STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', padding: '0 5%', marginBottom: '80px' }} className="photo-strip-3col">
        <div className="img-wrap" style={{ height: '260px' }} data-reveal><img src="/about-strip1.jpg" alt="Office workspace Lagos" /><div className="img-overlay"></div></div>
        <div className="img-wrap" style={{ height: '260px' }} data-reveal data-delay="1"><img src="/about-strip2.jpg" alt="Team meeting collaboration" /><div className="img-overlay"></div></div>
        <div className="img-wrap" style={{ height: '260px' }} data-reveal data-delay="2"><img src="/team-brainstorming.jpg" alt="Modern office interior" /><div className="img-overlay"></div></div>
      </div>

      <section id="about-values">
        <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Our Values</span></div>
        <h2 className="title" data-reveal data-delay="1">Principles that <em>guide</em> every decision</h2>
        <div className="values-grid">
          <div className="val-card" data-reveal><span className="val-icon">🎯</span><div className="val-title">Precision Over Speed</div><p className="val-text">We take the time to understand before we act. Rushing to solutions without understanding problems is how technology projects fail. Our discovery phase is non-negotiable.</p></div>
          <div className="val-card" data-reveal data-delay="1"><span className="val-icon">🤝</span><div className="val-title">Radical Transparency</div><p className="val-text">No hidden costs, no scope surprises, no ego. We communicate honestly — including when things are difficult — because trust is the foundation of every partnership.</p></div>
          <div className="val-card" data-reveal data-delay="2"><span className="val-icon">🌍</span><div className="val-title">African Excellence</div><p className="val-text">We believe the next generation of globally significant technology companies will come from Africa. We are proud to be part of building that future, from Lagos outward.</p></div>
          <div className="val-card" data-reveal><span className="val-icon">♻</span><div className="val-title">Longevity by Design</div><p className="val-text">We build for the long term. Systems designed to be maintained, extended, and evolved — not rebuilt every two years. Our clients&apos; investment compounds over time.</p></div>
          <div className="val-card" data-reveal data-delay="1"><span className="val-icon">🔐</span><div className="val-title">Security First</div><p className="val-text">Security is never an afterthought. It is baked into our architecture from line one. In 10 years of operation, not one managed client environment has suffered a confirmed breach.</p></div>
          <div className="val-card" data-reveal data-delay="2"><span className="val-icon">📈</span><div className="val-title">Outcome Obsessed</div><p className="val-text">We don&apos;t measure success in lines of code or features shipped. We measure it in business outcomes — cost savings, revenue generated, uptime improved, processes transformed.</p></div>
        </div>
      </section>

      <div id="about-numbers" style={{ margin: '0 5% 80px' }}>
        <div className="numbers-band">
          <div className="nb" data-reveal><span className="nb-val">150+</span><span className="nb-label">Projects Completed</span><p className="nb-desc">Across 18 countries and every major sector of the Nigerian economy</p></div>
          <div className="nb" data-reveal data-delay="1"><span className="nb-val">₦4.2B+</span><span className="nb-label">Client Value Generated</span><p className="nb-desc">Documented cost savings and new revenue attributable to our solutions</p></div>
          <div className="nb" data-reveal data-delay="2"><span className="nb-val">30+</span><span className="nb-label">Expert Consultants</span><p className="nb-desc">Certified specialists in engineering, security, data, and strategy</p></div>
          <div className="nb" data-reveal data-delay="3"><span className="nb-val">99.7%</span><span className="nb-label">Uptime Delivered</span><p className="nb-desc">For managed clients over the past three consecutive calendar years</p></div>
        </div>
      </div>
    </div>
  );
}
