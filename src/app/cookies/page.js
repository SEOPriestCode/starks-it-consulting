import Link from 'next/link';

export default function CookiesPolicyPage() {
  const cookieInventory = [
    {
      name: 'starks_theme',
      provider: 'starks.com.ng',
      category: 'Preference / Functional',
      purpose: 'Remembers your selected visual appearance mode (Dark Mode or Light Mode) across navigation sessions.',
      duration: '1 Year (Persistent Local Storage)'
    },
    {
      name: '__cf_bm / cf_clearance',
      provider: 'Cloudflare / Security Gateway',
      category: 'Strictly Necessary',
      purpose: 'Distinguishes between legitimate human visitors and automated bot attacks to defend our platform.',
      duration: '30 Minutes to 1 Day'
    },
    {
      name: 'starks_lab_state',
      provider: 'starks.com.ng',
      category: 'Interactive Functional',
      purpose: 'Preserves the active tab selection and code runner checks inside our simulated Practice Lab IDE.',
      duration: 'Session (Browser Memory)'
    },
    {
      name: '_vercel_analytics_id',
      provider: 'Vercel Platform',
      category: 'Performance / Analytics',
      purpose: 'Measures anonymized page latency, route performance, and Core Web Vitals without tracking personal identity.',
      duration: '1 Year'
    }
  ];

  return (
    <main className="page active" itemScope itemType="https://schema.org/WebPage">
      {/* PAGE HERO */}
      <header className="page-hero">
        <div className="page-hero-bg">
          <img src="/cookies-hero.jpg" alt="Starks IT Consulting Cookies & Tracking Policy" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">PRIVACY CONTROLS // DIGITAL TRANSPARENCY</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">Cookies &amp; Telemetry</span>
          </div>
          <h1 className="title" data-reveal data-delay="1">
            Cookies &amp; <em>Tracking</em> Policy
          </h1>
          <p className="subtitle" data-reveal data-delay="2">
            We believe in complete transparency. This policy outlines how Starks IT Consulting uses cookies, browser storage, and performance telemetry to deliver a secure, responsive browsing experience.
          </p>
        </div>
      </header>

      {/* HIGHLIGHT METRICS BAND */}
      <section style={{
        padding: '2rem 5%',
        background: 'var(--ink2)',
        borderBottom: '1px solid rgba(200, 168, 75, 0.15)',
        transition: 'background 0.3s, border-color 0.3s'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🍪</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tracking Standard</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Zero Third-Party Ad Tracking</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🌓</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Theme State</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Local Preference Memory</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>⚡</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Performance</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>Anonymized Core Web Vitals</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>🔒</span>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Compliance</div>
              <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.95rem' }}>NDPR &amp; NDPA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 5%', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          fontSize: '1.02rem',
          lineHeight: '1.85',
          color: 'var(--ash2)'
        }}>
          {/* Section 1: Introduction */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 01</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              What Are <em>Cookies</em> &amp; Local Storage?
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Cookies are small data files deposited on your computer, tablet, or smartphone when you visit a website. They allow the website to recognize your device, remember user preferences (such as light or dark theme choices), and understand how users navigate through different sections.
            </p>
            <p>
              In addition to standard HTTP cookies, modern web applications utilize <strong>HTML5 Local Storage</strong> and <strong>Session Storage</strong>. These operate entirely within your browser to store client-side state (such as counter exercises in our interactive code lab) without continuously transmitting tracking data over the network.
            </p>
          </div>

          {/* Section 2: Why We Use Cookies */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 02</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              How Starks Uses <em>Tracking Technologies</em>
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              Unlike consumer advertising platforms, Starks IT Consulting is an enterprise B2B engineering consultancy. <strong>We do not sell your personal data</strong> and we do not utilize cross-site ad retargeting trackers. We utilize tracking technologies strictly for:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
              <div style={{
                background: 'var(--ink2)',
                border: '1px solid rgba(200, 168, 75, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                transition: 'border-color 0.3s'
              }}>
                <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>
                  1. Strictly Necessary
                </h4>
                <p style={{ fontSize: '0.88rem', margin: 0, fontWeight: 300 }}>
                  Essential for routing, preventing Cross-Site Request Forgery (CSRF), rate-limiting malicious traffic, and maintaining platform uptime.
                </p>
              </div>

              <div style={{
                background: 'var(--ink2)',
                border: '1px solid rgba(200, 168, 75, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                transition: 'border-color 0.3s'
              }}>
                <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>
                  2. User Preferences
                </h4>
                <p style={{ fontSize: '0.88rem', margin: 0, fontWeight: 300 }}>
                  Stores your dark mode or light mode selection (<code style={{ color: 'var(--gold)', fontFamily: 'var(--ff-mono)' }}>starks_theme</code>) in browser local storage so your visual preference is honored seamlessly.
                </p>
              </div>

              <div style={{
                background: 'var(--ink2)',
                border: '1px solid rgba(200, 168, 75, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                transition: 'border-color 0.3s'
              }}>
                <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>
                  3. Practice Lab State
                </h4>
                <p style={{ fontSize: '0.88rem', margin: 0, fontWeight: 300 }}>
                  Maintains the live state of code editor exercises (such as active files and test assertion passes) in browser session memory.
                </p>
              </div>

              <div style={{
                background: 'var(--ink2)',
                border: '1px solid rgba(200, 168, 75, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                transition: 'border-color 0.3s'
              }}>
                <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>
                  4. Performance Telemetry
                </h4>
                <p style={{ fontSize: '0.88rem', margin: 0, fontWeight: 300 }}>
                  Measures page loading speeds and Core Web Vitals to identify network bottlenecks without profiling individual user identity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Cookie Inventory Table */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 03</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Detailed Cookie <em>Inventory</em>
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Below is an explicit inventory of the key cookies and local storage tokens utilized across our digital touchpoints:
            </p>

            <div style={{
              overflowX: 'auto',
              borderRadius: '10px',
              border: '1px solid rgba(200, 168, 75, 0.25)',
              background: 'var(--ink2)'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.88rem'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '1px solid rgba(200, 168, 75, 0.3)',
                    background: 'rgba(200, 168, 75, 0.08)',
                    fontFamily: 'var(--ff-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'var(--gold)'
                  }}>
                    <th style={{ padding: '14px 18px' }}>Identifier</th>
                    <th style={{ padding: '14px 18px' }}>Category</th>
                    <th style={{ padding: '14px 18px' }}>Purpose</th>
                    <th style={{ padding: '14px 18px' }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieInventory.map((item, idx) => (
                    <tr 
                      key={idx}
                      style={{
                        borderBottom: idx === cookieInventory.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'background 0.2s'
                      }}
                    >
                      <td style={{ padding: '14px 18px', fontFamily: 'var(--ff-mono)', color: 'var(--white)', fontWeight: 600 }}>
                        {item.name}
                      </td>
                      <td style={{ padding: '14px 18px', color: 'var(--gold)', fontSize: '0.8rem' }}>
                        {item.category}
                      </td>
                      <td style={{ padding: '14px 18px', color: 'var(--ash2)', lineHeight: '1.6' }}>
                        {item.purpose}
                      </td>
                      <td style={{ padding: '14px 18px', fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--white)' }}>
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Managing and Disabling Cookies */}
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Section 04</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1rem' }}>
              How You Can <em>Control Cookies</em>
            </h2>
            <p style={{ marginBottom: '1.2rem' }}>
              You maintain total autonomy over how your browser handles cookies and local storage tokens. You can configure your browser to block, alert, or delete cookies at any time:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div>
                  <strong style={{ color: 'var(--white)' }}>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data → Clear data or block cookies.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div>
                  <strong style={{ color: 'var(--white)' }}>Apple Safari:</strong> Preferences → Privacy → Manage Website Data → Remove All.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div>
                  <strong style={{ color: 'var(--white)' }}>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data → Clear Data.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700 }}>▸</span>
                <div>
                  <strong style={{ color: 'var(--white)' }}>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies and site data.
                </div>
              </li>
            </ul>

            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.4rem',
              background: 'rgba(200, 168, 75, 0.08)',
              borderRadius: '8px',
              border: '1px solid rgba(200, 168, 75, 0.25)',
              fontSize: '0.88rem'
            }}>
              <strong style={{ color: 'var(--gold)' }}>Note:</strong> Disabling strictly necessary cookies may impact security controls, and clearing local storage will reset your light/dark mode preference back to the system default.
            </div>
          </div>

          {/* Section 5: Contact Desk */}
          <div style={{
            background: 'var(--ink2)',
            border: '1px solid rgba(200, 168, 75, 0.35)',
            borderRadius: '14px',
            padding: 'clamp(2rem, 4vw, 3rem)'
          }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Data Governance &amp; Inquiries
            </div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '0.8rem' }}>
              Questions About Our Cookie Policy?
            </h3>
            <p style={{ marginBottom: '1.8rem', fontWeight: 300 }}>
              If you have any questions regarding how we deploy tracking technologies or require assistance managing your privacy preferences, please contact our privacy compliance desk.
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href="mailto:privacy@starks.com.ng" className="btn btn-gold" style={{ textDecoration: 'none' }}>
                <span>Email Privacy Team (privacy@starks.com.ng) ↗</span>
              </a>
              <Link href="/ndpr" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
                Read NDPR Statement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

