import Link from 'next/link';

export const metadata = {
  title: 'Team | Starks IT Consulting',
};

export default function Team() {
  return (
    <div className="page active">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=70&auto=format&fit=crop" alt="Diverse professional team" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">TEAM / LEADERSHIP</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Our People</span></div>
          <h2 className="title" data-reveal data-delay="1">The people behind <em>the work</em></h2>
          <p className="subtitle" data-reveal data-delay="2">65+ professionals united by a single conviction: that excellent technology, applied with integrity, creates extraordinary outcomes.</p>
        </div>
      </div>

      <section id="team-grid-section">
        <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Leadership Team</span></div>
        <h2 className="title" data-reveal data-delay="1">Senior <em>leadership</em></h2>
        <div className="team-grid2">
          <div className="team-member" data-reveal>
            <div className="tm-photo">
              <img src="/mike.jpg" alt="Michael Omotayo CEO" />
              <div className="tm-photo-overlay"></div>
              <div className="tm-social"><div className="tm-soc-btn">in</div><div className="tm-soc-btn">✉</div></div>
            </div>
            <div className="tm-line"></div>
            <div className="tm-name">Michael Omotayo</div>
            <div className="tm-role">Founder & Team Lead</div>
            <p className="tm-bio">8+ years in enterprise software. Previously led technology at BIC Nigeria. MSc Economics, University of Lagos.</p>
            <div className="tm-certs"><span className="tc">PMP</span><span className="tc">AWS Arch</span><span className="tc">TOGAF</span></div>
          </div>
          <div className="team-member" data-reveal data-delay="1">
            <div className="tm-photo">
              <img src="/busayo.jpg" alt="Busayo Famutimi CTO" />
              <div className="tm-photo-overlay"></div>
              <div className="tm-social"><div className="tm-soc-btn">in</div><div className="tm-soc-btn">✉</div></div>
            </div>
            <div className="tm-line"></div>
            <div className="tm-name">Busayo Famutimi</div>
            <div className="tm-role">Co-Founder & Chief Technology Officer</div>
            <p className="tm-bio">Distributed systems specialist and former Principal Engineer at Interswitch. Leads our architecture guild. PhD candidate, Covenant University.</p>
            <div className="tm-certs"><span className="tc">GCP Pro</span><span className="tc">CKA</span><span className="tc">CKAD</span></div>
          </div>
          <div className="team-member" data-reveal data-delay="2">
            <div className="tm-photo">
              <img src="/clive.png" alt="Clive Akporube Head of Cybersecurity" />
              <div className="tm-photo-overlay"></div>
              <div className="tm-social"><div className="tm-soc-btn">in</div><div className="tm-soc-btn">✉</div></div>
            </div>
            <div className="tm-line"></div>
            <div className="tm-name">Clive Akporube</div>
            <div className="tm-role">Head of Cybersecurity</div>
            <p className="tm-bio">Certified ethical hacker and former CISO of a leading Nigerian IT institution. Leads our security practice and compliance advisory.</p>
            <div className="tm-certs"><span className="tc">CISSP</span><span className="tc">CEH</span><span className="tc">CISM</span></div>
          </div>
          <div className="team-member" data-reveal data-delay="2">
              <div className="tm-photo">
                <img src="/fidelis.png" alt="Fidelis Chidi Strategy consultant" />
                <div className="tm-photo-overlay"></div>
              </div>
              <div className="tm-line"></div>
              <div className="tm-name">Fidelis Chidi</div>
              <div className="tm-role">Head of Strategy & Advisory</div>
              <p className="tm-bio">SyteMap consultant. Specialises in digital transformation for Technology driven institutions.</p>
            </div>
        </div>

        {/* <div style={{ marginTop: '4rem' }}>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Practice Leads</span></div>
          <div className="team-grid2">
            <div className="team-member" data-reveal>
              <div className="tm-photo">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=face" alt="Software engineering lead" />
                <div className="tm-photo-overlay"></div>
              </div>
              <div className="tm-line"></div>
              <div className="tm-name">Emeka Okonkwo</div>
              <div className="tm-role">Head of Software Engineering</div>
              <p className="tm-bio">Full-stack architect with 10 years in high-scale web and mobile delivery.</p>
            </div>
            <div className="team-member" data-reveal data-delay="1">
              <div className="tm-photo">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop&crop=face" alt="Cloud DevOps lead" />
                <div className="tm-photo-overlay"></div>
              </div>
              <div className="tm-line"></div>
              <div className="tm-name">Amaka Osei</div>
              <div className="tm-role">Lead Cloud Architect</div>
              <p className="tm-bio">AWS and Terraform specialist. Led 40+ cloud migration projects across West Africa.</p>
            </div>
            <div className="team-member" data-reveal data-delay="3">
            <div className="tm-photo">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=face" alt="Ngozi Okafor Data Director" />
              <div className="tm-photo-overlay"></div>
              <div className="tm-social"><div className="tm-soc-btn">in</div><div className="tm-soc-btn">✉</div></div>
            </div>
            <div className="tm-line"></div>
            <div className="tm-name">Ngozi Okafor</div>
            <div className="tm-role">Director of Data & AI</div>
            <p className="tm-bio">ML engineer and data strategist, 12 years across fintech and telecoms. Built predictive models deployed across seven countries. MSc Data Science, UCL.</p>
            <div className="tm-certs"><span className="tc">Azure AI</span><span className="tc">Databricks</span></div>
          </div>
            <div className="team-member" data-reveal data-delay="3">
              <div className="tm-photo">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&auto=format&fit=crop&crop=face" alt="Project management director" />
                <div className="tm-photo-overlay"></div>
              </div>
              <div className="tm-line"></div>
              <div className="tm-name">Funke Adeyemi</div>
              <div className="tm-role">Director of Project Delivery</div>
              <p className="tm-bio">PMP-certified delivery director. Oversees all client engagements end-to-end.</p>
            </div>
          </div>
        </div> */}
      </section>

      <section id="team-culture">
        <div className="culture-imgs">
          <div className="img-wrap"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80&auto=format&fit=crop" alt="Office collaboration session" /><div className="img-overlay"></div></div>
          <div className="img-wrap"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format&fit=crop" alt="Team brainstorming" /><div className="img-overlay"></div></div>
          <div className="img-wrap"><img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80&auto=format&fit=crop" alt="Developer at work" /><div className="img-overlay"></div></div>
        </div>
        <div className="culture-text" data-reveal>
          <div className="label"><div className="label-line"></div><span className="label-text">Life at Starks</span></div>
          <h2 className="title" style={{ fontSize: '2rem' }}>Built to <em>thrive</em></h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--ash2)', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.5rem' }}>We invest heavily in our people because exceptional talent is the only sustainable competitive advantage. We offer an environment where brilliant minds can do their best work — and grow.</p>
          <div className="culture-perks">
            <div className="cperk">Continuous learning budget & certification sponsorship</div>
            <div className="cperk">Hybrid & remote working arrangements</div>
            <div className="cperk">Competitive compensation benchmarked globally</div>
            <div className="cperk">Health insurance for you and your family</div>
            <div className="cperk">Annual tech conference attendance</div>
            <div className="cperk">Clear, merit-based career progression paths</div>
          </div>
          <Link href="/contact" className="btn btn-gold" style={{ marginTop: '2rem', textDecoration: 'none' }}><span>View Open Roles</span></Link>
        </div>
      </section>
    </div>
  );
}
