'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // In-Browser IDE Interactive Demo State
  const [activeIdeFile, setActiveIdeFile] = useState('App.jsx');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testsPassed, setTestsPassed] = useState(true);
  const [demoCount, setDemoCount] = useState(3);

  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'Frontend Practice Lab (6 Months Intensive)',
    type: 'Individual Learner',
    notes: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleRunChecks = () => {
    setIsRunningTests(true);
    setTestsPassed(false);
    setTimeout(() => {
      setIsRunningTests(false);
      setTestsPassed(true);
    }, 700);
  };

  const tracks = [
    {
      id: 'frontend',
      badge: 'Flagship Program · Waitlist Open',
      title: 'Frontend Practice Lab',
      desc: 'Our flagship 6-month hands-on intensive training program. Learn modern frontend engineering by writing code directly in our in-browser IDE with instant automated test validation, real-world portfolio capstones, and line-by-line code reviews from active Starks consultants.',
      duration: '6 Months Intensive Training',
      format: 'Interactive Browser Lab + Projects',
      level: 'Beginner to Advance',
      skills: [
        'Semantic HTML5 & Accessibility (WCAG)',
        'Modern CSS, Flexbox, Grid & Micro-Animations',
        'Asynchronous JavaScript & ESNext',
        'Component Architecture with React 19',
        'Next.js App Router & Server Components',
        'State Management, Hooks & Custom Tooling',
        'Performance Optimization & Core Web Vitals',
        'Automated Test Suites (Jest & Testing Library)'
      ],
      highlights: [
        'Write code directly in the browser IDE with real-time DOM rendering',
        'Instant test runner validates your code against strict assertion suites',
        'Build and ship 5 production capstones reviewed by senior engineers',
        'Unlock a verified public developer portfolio to showcase to employers'
      ]
    },
    {
      id: 'fullstack',
      badge: 'Advanced Track · Waitlist Open',
      title: 'Full-Stack Software Engineering',
      desc: 'Master the complete engineering lifecycle from responsive client interfaces to high-throughput backend APIs, transactional SQL databases, secure token authentication, and containerized cloud deployment.',
      duration: '6 Months Intensive Training',
      format: 'Interactive Browser Lab + Projects',
      level: 'Beginner to Advance',
      skills: [
        'Node.js & Express Architecture',
        'PostgreSQL Relational Modeling & Prisma',
        'RESTful & GraphQL API Design',
        'JWT, OAuth2 & Session Security',
        'Docker Containerization Basics',
        'Redis Caching & Queue Processing',
        'CI/CD Pipelines via GitHub Actions',
        'Database Optimization & Indexing'
      ],
      highlights: [
        'Architect scalable multi-tier web applications from database to DOM',
        'Implement robust authentication and access control policies',
        'Deploy applications with containerization and continuous integration',
        '1-on-1 architecture reviews with enterprise systems consultants'
      ]
    },
    {
      id: 'cloud',
      badge: 'Infrastructure Track · Waitlist Open',
      title: 'Cloud & DevOps Architecture',
      desc: 'Master the art of deploying, orchestrating, and optimizing resilient infrastructure. Learn how Starks engineers design cloud topologies for leading banks and telecom providers across Africa with an emphasis on cost optimization (FinOps).',
      duration: '4 Months Intensive Training',
      format: 'Hands-on Labs + Case Studies',
      level: 'Intermediate to Advance',
      skills: [
        'AWS Core (VPC, EC2, S3, RDS, IAM)',
        'Docker & Kubernetes (EKS) Orchestration',
        'Infrastructure as Code with Terraform',
        'Zero-Downtime Deployment Pipelines',
        'FinOps Cloud Cost Governance',
        'Cloud Security, WAF & NDPR Compliance'
      ],
      highlights: [
        'Provision production cloud topologies using Terraform scripts',
        'Orchestrate microservices with Kubernetes auto-scaling',
        'Optimize cloud egress bills for African FX and latency realities',
        'Real-world incident simulation and disaster recovery drills'
      ]
    },
    {
      id: 'corporate',
      badge: 'Enterprise Program · Open for Inquiries',
      title: 'Corporate Engineering Upskilling',
      desc: 'Custom cohort training tailored specifically for banks, fintechs, government bodies, and enterprise tech teams looking to modernize their engineering workforce and accelerate product delivery.',
      duration: 'Custom (1–6 Months)',
      format: 'On-Premise / Remote Hybrid',
      level: 'Tailored to Organisation',
      skills: [
        'Legacy-to-Cloud Modernization',
        'Security-First Development Standards',
        'Agile Delivery & Scrum Acceleration',
        'Modern Code Quality & CI/CD Tooling',
        'Microservices Transition Roadmaps',
        'API Governance & Documentation'
      ],
      highlights: [
        'Curriculums mapped directly to your internal technology stack',
        'Cohort performance analytics and engineering competency metrics',
        'Direct mentorship from practicing consultants executing enterprise engagements',
        'Private repository assignments and post-training stabilization support'
      ]
    }
  ];

  const currentTrack = tracks.find(t => t.id === activeTab) || tracks[0];

  const ideFiles = {
    'App.jsx': `import { useState } from 'react';
import './styles.css';

export default function StarksCounterLab() {
  const [count, setCount] = useState(${demoCount});
  const maxCapacity = 10;

  return (
    <div className="lab-card">
      <div className="lab-badge">EXERCISE 04 · REACT STATE</div>
      <h3 className="lab-title">Interactive Component Lab</h3>
      <p className="lab-desc">
        Write clean, accessible state logic that updates the DOM instantly.
      </p>
      
      <div className="counter-box">
        <span className="count-display">{count} / {maxCapacity}</span>
        <div className="btn-group">
          <button 
            className="ctrl-btn"
            onClick={() => setCount(c => Math.max(0, c - 1))}
          >
            − Decrement
          </button>
          <button 
            className="ctrl-btn active"
            onClick={() => setCount(c => Math.min(maxCapacity, c + 1))}
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}`,
    'styles.css': `.lab-card {
  background: #0d1527;
  border: 1px solid rgba(200, 168, 75, 0.35);
  border-radius: 12px;
  padding: 1.5rem;
  color: #f1f5f9;
  font-family: 'Syne', sans-serif;
}
.lab-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #f0d98a;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}
.counter-box {
  margin-top: 1.2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count-display {
  font-size: 1.4rem;
  font-weight: 700;
  color: #c8a84b;
}`,
    'tests.spec.js': `import { render, screen, fireEvent } from '@testing-library/react';
import StarksCounterLab from './App';

describe('Exercise 04: Starks State Assertion Checks', () => {
  test('assert component renders initial state correctly', () => {
    render(<StarksCounterLab />);
    expect(screen.getByText(/Interactive Component Lab/i)).toBeInTheDocument();
  });

  test('assert increment button updates counter within bounds', () => {
    render(<StarksCounterLab />);
    const incBtn = screen.getByText(/\\+ Increment/i);
    fireEvent.click(incBtn);
    expect(screen.getByText(/\\/ 10/i)).toBeInTheDocument();
  });

  test('assert accessible contrast passes WCAG AAA standards', () => {
    // Automated Starks Accessibility Linter Check
    expect(true).toBe(true);
  });
});`
  };

  const faqs = [
    {
      q: 'When does the training commence?',
      a: 'Trainings commence soon! While public notification and social media campaigns will be released across all channels, waitlist members on learn.starks.com.ng will receive private announcement notifications first, giving you early access to enrollment before the general public.'
    },
    {
      q: 'What is the advantage of joining the waitlist at learn.starks.com.ng?',
      a: 'Joining the waitlist gives you two major advantages: 1) You get first notification before the public release, allowing you to secure a seat in our strictly capped cohorts. 2) You receive an exclusive early-bird tuition discount that will not be available once admissions open to the general public.'
    },
    {
      q: 'What is the duration, format, and skill level of the Frontend Practice Lab?',
      a: 'The Frontend Practice Lab is a 6 Months Intensive Training program. The format is an Interactive Browser Lab + Projects, taking students step-by-step from Beginner to Advance. You write code directly in our in-browser IDE with real-time test assertions and build verified capstone projects.'
    },
    {
      q: 'Who conducts the code reviews and mentorship?',
      a: 'Unlike automated bootcamps, your capstone projects and pull requests are reviewed by active senior consultants and practice leads from Starks IT Consulting — the same engineers who architect production systems for banks, energy firms, and telecom operators across Africa.'
    },
    {
      q: 'Can corporate engineering teams enroll?',
      a: 'Yes. We offer Corporate Engineering Upskilling cohorts customized to your enterprise stack, legacy modernization roadmaps, and delivery timelines. You can use the inquiry form on this page to discuss team training.'
    }
  ];

  return (
    <main className="page active" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
      {/* PRE-LAUNCH ANNOUNCEMENT TICKER */}
      <div className="training-ticker">
        <div className="training-ticker-text">
          <span style={{
            background: 'rgba(200, 168, 75, 0.2)',
            color: 'var(--gold)',
            padding: '3px 10px',
            borderRadius: '20px',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '1px',
            border: '1px solid rgba(200, 168, 75, 0.4)'
          }}>
            COMMENCING SOON
          </span>
          <span>Public announcements launch shortly. Join the priority waitlist for first access &amp; exclusive tuition discounts.</span>
          <a
            href="https://learn.starks.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--gold)',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}
          >
            Join Waitlist at learn.starks.com.ng ↗
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="page-hero">
        <div className="page-hero-bg">
          <img src="/team-developer.jpg" alt="Developer practicing code in Starks learning workspace" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">STARKS LEARNING WORKSPACE // COHORT 2026</div>
          <div className="label" data-reveal>
            <div className="label-line"></div>
            <span className="label-text">Training Division · Early Access Open</span>
          </div>
          <h1 className="title" data-reveal data-delay="1" style={{ maxWidth: '840px' }}>
            Where engineering talent is forged through <em>practice</em>, not theory.
          </h1>
          <p className="subtitle" data-reveal data-delay="2" style={{ maxWidth: '700px' }}>
            Training commences soon! Starks IT Consulting is opening its interactive learning workspace for intensive engineering training. Join the waitlist now at <strong>learn.starks.com.ng</strong> to be notified before the general public and lock in an exclusive early-bird tuition discount.
          </p>

          <div data-reveal data-delay="3" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginTop: '2.5rem', alignItems: 'center' }}>
            <a 
              href="https://learn.starks.com.ng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
              style={{ textDecoration: 'none' }}
            >
              <span>Join the Waitlist (learn.starks.com.ng) ↗</span>
            </a>
            <a 
              href="#practice-lab" 
              className="btn btn-ghost"
              style={{ textDecoration: 'none' }}
            >
              Try Interactive Lab Below ↓
            </a>
          </div>

          {/* PERKS ROW */}
          <div data-reveal data-delay="4" style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f1f5f9', fontFamily: 'var(--ff-mono)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✓</span>
              <span>First-to-Know Public Notification</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f1f5f9', fontFamily: 'var(--ff-mono)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✓</span>
              <span>Exclusive Waitlist Discount Advantage</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#f1f5f9', fontFamily: 'var(--ff-mono)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✓</span>
              <span>6 Months Intensive · Beginner to Advance</span>
            </div>
          </div>
        </div>
      </header>

      {/* WAITLIST ADVANTAGE HIGHLIGHT BANNER (SECTION DIRECTLY ON TOP OF IDE) */}
      <section className="waitlist-banner" aria-label="Training Waitlist Advantage">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="training-waitlist-box">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--gold)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  background: 'rgba(200, 168, 75, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(200, 168, 75, 0.3)'
                }}>
                  WAITLIST PRIVILEGE
                </span>
                <h2 className="training-waitlist-title">
                  Why join the waitlist before <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>public launch</em>?
                </h2>
                <p className="training-waitlist-desc" style={{ marginBottom: '1.5rem' }}>
                  Training will be announced publicly across all media channels soon. However, cohort seats are strictly capped to maintain senior consultant code review quality.
                </p>
                <p className="training-waitlist-desc" style={{ marginBottom: '2rem' }}>
                  By joining the waitlist at <strong>learn.starks.com.ng</strong>, you get direct notification first, ensuring you secure your spot before general admissions open, and you unlock a guaranteed early-bird tuition discount.
                </p>

                <a
                  href="https://learn.starks.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Claim Waitlist Advantage ↗</span>
                </a>
              </div>

              {/* 4 REASONS GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                <div className="training-privilege-card">
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>01</div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>First to Know</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                    Official dates, curriculum releases, and onboarding details sent to your inbox before social media release.
                  </p>
                </div>

                <div className="training-privilege-card">
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>02</div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Tuition Discount</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                    Exclusive discount advantage provided only to waitlist members before the general public launch.
                  </p>
                </div>

                <div className="training-privilege-card">
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>03</div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Reserved Seats</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                    Priority access to reserve your slot before the initial intensive cohort reaches maximum mentor capacity.
                  </p>
                </div>

                <div className="training-privilege-card">
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>04</div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Starter Tooling</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 300 }}>
                    Receive environment guides, recommended tooling, and Git essentials prior to day-one orientation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INTERACTIVE PRACTICE LAB (IDE ON THIS WEB PAGE) */}
      <section 
        id="practice-lab" 
        style={{ 
          padding: 'clamp(60px, 8vw, 110px) 5%', 
          maxWidth: '1240px', 
          margin: '0 auto',
          scrollMarginTop: '80px'
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="label" style={{ justifyContent: 'center' }}><div className="label-line"></div><span className="label-text">Interactive In-Browser Lab Experience</span></div>
          <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginTop: '0.5rem' }}>
            The <em>Practice Lab</em> IDE
          </h2>
          <p style={{ color: 'var(--ash2)', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 300 }}>
            This is what learning looks like at Starks. No passive videos. Write code in the editor, run automated test suites, and see real-time updates right in your browser.
          </p>
          <div className="ide-sim-pill">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></span>
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600 }}>
              LIVE SIMULATED LAB // TRY RUNNING CHECKS BELOW
            </span>
          </div>
        </div>

        {/* SIMULATED BROWSER WORKSPACE IDE */}
        <div className="training-ide">
          {/* WINDOW TITLE BAR */}
          <div className="ide-title-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
              <span className="ide-title-text">
                starks-workspace // Frontend-Practice-Lab.jsx
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={handleRunChecks}
                disabled={isRunningTests}
                style={{
                  background: isRunningTests ? 'rgba(200,168,75,0.4)' : 'var(--gold)',
                  color: 'var(--ink)',
                  border: 'none',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  fontFamily: 'var(--ff-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: isRunningTests ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
              >
                <span>{isRunningTests ? 'Executing Test Runner…' : '▶ Run Code & Checks'}</span>
              </button>
              <a 
                href="https://learn.starks.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--gold)',
                  textDecoration: 'none'
                }}
              >
                learn.starks.com.ng ↗
              </a>
            </div>
          </div>

          {/* FILE TABS BAR */}
          <div className="ide-tabs-bar">
            {Object.keys(ideFiles).map(fileName => (
              <button
                key={fileName}
                onClick={() => setActiveIdeFile(fileName)}
                className={`ide-tab ${activeIdeFile === fileName ? 'active' : ''}`}
              >
                <span>{fileName.endsWith('.jsx') ? '⚛' : fileName.endsWith('.css') ? '🎨' : '🧪'}</span>
                <span>{fileName}</span>
              </button>
            ))}
          </div>

          {/* SPLIT PANE: CODE EDITOR (LEFT) + LIVE PREVIEW & TEST SUITE (RIGHT) */}
          <div className="ide-split-pane">
            {/* EDITOR CODE AREA */}
            <div className="ide-editor-pane">
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'inherit' }}>
                <code>{ideFiles[activeIdeFile]}</code>
              </pre>
            </div>

            {/* LIVE PREVIEW & TEST ASSERTIONS RUNNER */}
            <div className="ide-preview-pane">
              {/* TOP: LIVE COMPONENT PREVIEW */}
              <div className="ide-preview-top">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Live Preview (Interactive)
                  </span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--ff-mono)', color: '#27c93f' }}>
                    ● 60 FPS Hot Reload
                  </span>
                </div>

                {/* INTERACTIVE DEMO CARD WIDGET */}
                <div className="ide-widget-card">
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '1px', marginBottom: '4px' }}>
                    STARKS WORKSPACE LAB WIDGET
                  </div>
                  <h4>
                    Interactive Component Lab
                  </h4>
                  <p>
                    Click the buttons below to test live interactive state updates inside the lab component.
                  </p>

                  <div className="ide-counter-box">
                    <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '1.2rem', color: 'var(--gold)', fontWeight: 700 }}>
                      {demoCount} / 10
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => setDemoCount(c => Math.max(0, c - 1))}
                        className="ide-btn-dec"
                      >
                        − Dec
                      </button>
                      <button
                        onClick={() => setDemoCount(c => Math.min(10, c + 1))}
                        style={{
                          background: 'var(--gold)',
                          border: 'none',
                          color: 'var(--ink)',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontFamily: 'var(--ff-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 700
                        }}
                      >
                        + Inc
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM: AUTOMATED TEST CHECK RUNNER */}
              <div className="ide-tests-pane">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Automated Exercise Verification
                  </span>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: testsPassed ? '#27c93f' : '#ffbd2e' }}>
                    {isRunningTests ? 'Running assertion tests…' : testsPassed ? '4/4 Checks Passed' : 'Verification Pending'}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div className="ide-test-item" style={{ color: testsPassed ? '#10b981' : '#94a3b8' }}>
                    <span>{testsPassed ? '✓' : '○'}</span>
                    <span>Component renders semantically with proper markup</span>
                  </div>
                  <div className="ide-test-item" style={{ color: testsPassed ? '#10b981' : '#94a3b8' }}>
                    <span>{testsPassed ? '✓' : '○'}</span>
                    <span>State updates immediately and bounds checking enforced</span>
                  </div>
                  <div className="ide-test-item" style={{ color: testsPassed ? '#10b981' : '#94a3b8' }}>
                    <span>{testsPassed ? '✓' : '○'}</span>
                    <span>Accessibility standards pass WCAG AAA color contrast</span>
                  </div>
                  <div className="ide-test-item" style={{ color: testsPassed ? '#10b981' : '#94a3b8' }}>
                    <span>{testsPassed ? '✓' : '○'}</span>
                    <span>Zero layout shifts on dynamic re-render</span>
                  </div>
                </div>

                {/* WAITLIST CALLOUT INSIDE LAB */}
                <div className="ide-waitlist-callout">
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--ff-mono)' }}>
                    Ready for the full workspace? Trainings commence soon.
                  </span>
                  <a
                    href="https://learn.starks.com.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--gold)',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    Join Waitlist for First Access &amp; Discounts ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS & CURRICULUM EXPLORATION */}
      <section id="tracks" style={{ padding: 'clamp(60px, 8vw, 100px) 5%', background: 'var(--ink3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div className="label" style={{ justifyContent: 'center' }}><div className="label-line"></div><span className="label-text">Curriculums &amp; Cohorts</span></div>
            <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginTop: '0.5rem' }}>
              Structured <em>Training Tracks</em>
            </h2>
            <p style={{ color: 'var(--ash2)', fontSize: '1rem', lineHeight: '1.7' }}>
              Whether you are an aspiring software engineer starting from scratch or an enterprise upskilling an internal department, explore our structured programs.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {tracks.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    padding: '10px 20px',
                    fontFamily: 'var(--ff-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    border: activeTab === t.id ? '1px solid var(--gold)' : '1px solid rgba(200,168,75,0.2)',
                    background: activeTab === t.id ? 'rgba(200,168,75,0.15)' : 'transparent',
                    color: activeTab === t.id ? 'var(--gold)' : 'var(--ash2)',
                    transition: 'all 0.3s'
                  }}
                >
                  {t.title}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE TRACK DETAIL CARD */}
          <div style={{
            background: 'var(--ink2)',
            border: '1px solid rgba(200, 168, 75, 0.25)',
            borderRadius: '12px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div>
              <span style={{ 
                fontFamily: 'var(--ff-mono)', 
                fontSize: '0.68rem', 
                color: 'var(--gold)', 
                background: 'rgba(200, 168, 75, 0.1)', 
                padding: '4px 12px', 
                borderRadius: '20px',
                border: '1px solid rgba(200, 168, 75, 0.3)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {currentTrack.badge}
              </span>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'var(--white)', margin: '1rem 0 0.8rem' }}>
                {currentTrack.title}
              </h3>
              <p style={{ color: 'var(--ash2)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
                {currentTrack.desc}
              </p>

              {/* THREE CORE METRICS */}
              <div className="training-metric-box">
                <div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Duration</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--white)', fontWeight: 600, marginTop: '4px' }}>{currentTrack.duration}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Format</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--white)', fontWeight: 600, marginTop: '4px' }}>{currentTrack.format}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Level</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--white)', fontWeight: 600, marginTop: '4px' }}>{currentTrack.level}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://learn.starks.com.ng"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-gold"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Join Waitlist for Discounts ↗</span>
                </a>
                <a
                  href="#practice-lab"
                  className="btn btn-ghost"
                  style={{ textDecoration: 'none' }}
                >
                  Explore Practice Lab ↑
                </a>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Core Competencies Acquired
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
                {currentTrack.skills.map(s => (
                  <span key={s} style={{ 
                    fontFamily: 'var(--ff-mono)', 
                    fontSize: '0.75rem', 
                    background: 'rgba(200, 168, 75, 0.08)', 
                    color: 'var(--ash3)', 
                    border: '1px solid rgba(200, 168, 75, 0.2)',
                    padding: '6px 14px', 
                    borderRadius: '4px' 
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Key Highlights &amp; Pedagogy
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {currentTrack.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--ash2)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE STARKS METHOD: 4 PILLARS */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <div className="label" style={{ justifyContent: 'center' }}><div className="label-line"></div><span className="label-text">The Starks Pedagogy</span></div>
          <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginTop: '0.5rem' }}>
            Built for <em>Production Readiness</em>
          </h2>
          <p style={{ color: 'var(--ash2)', fontSize: '1rem', lineHeight: '1.7' }}>
            We do not teach coding through trivia. We simulate the day-to-day workflow of a top-tier software consultancy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {[
            {
              num: '01',
              title: 'Interactive Code Labs',
              desc: 'Learn by actively coding in the browser. Test assertions execute in real-time, giving instant feedback on logic and edge cases.'
            },
            {
              num: '02',
              title: 'Real-World Capstones',
              desc: 'Tackle real application specs patterned after enterprise client engagements in fintech, banking, logistics, and data.'
            },
            {
              num: '03',
              title: 'Practitioner Reviews',
              desc: 'Your pull requests are reviewed line-by-line by active Starks consultants who critique architecture, performance, and code style.'
            },
            {
              num: '04',
              title: 'Verified Portfolio & Proof',
              desc: 'Approved projects unlock a verifiable public Starks portfolio link showcasing your actual live deployments and code.'
            }
          ].map(step => (
            <div key={step.num} style={{ background: 'var(--ink2)', border: '1px solid rgba(200, 168, 75, 0.15)', padding: '2rem', borderRadius: '8px' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', color: 'var(--gold)', opacity: 0.6, marginBottom: '0.8rem', lineHeight: 1 }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.6rem' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section style={{ padding: '0 5% clamp(60px, 8vw, 100px)', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="label" style={{ justifyContent: 'center' }}><div className="label-line"></div><span className="label-text">Answers &amp; Clarity</span></div>
          <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', marginTop: '0.5rem' }}>
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="training-faq-item"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="training-faq-btn"
              >
                <span>{faq.q}</span>
                <span style={{ color: 'var(--gold)', fontSize: '1.3rem', marginLeft: '1rem' }}>
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 1.6rem 1.4rem', color: 'var(--ash2)', fontSize: '0.95rem', lineHeight: '1.75', fontWeight: 300 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL HIGH-IMPACT PRE-LAUNCH CTA */}
      <section className="prelaunch-cta" style={{ padding: '0 5% clamp(60px, 8vw, 100px)', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="training-cta-card">
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: '0.72rem',
              color: 'var(--gold)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              background: 'rgba(200, 168, 75, 0.15)',
              padding: '5px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(200, 168, 75, 0.35)',
              display: 'inline-block',
              marginBottom: '1.2rem'
            }}>
              LIMITED PRE-LAUNCH SEATS
            </span>
            <h2>
              Don&apos;t miss the first cohort announcement. Lock in your <em>discount advantage</em>.
            </h2>
            <p>
              Be the first to receive the official training schedule and private registration link at <strong>learn.starks.com.ng</strong> before general admissions open to the public.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://learn.starks.com.ng" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold"
                style={{ textDecoration: 'none' }}
              >
                <span>Join Waitlist on learn.starks.com.ng ↗</span>
              </a>
              <button 
                onClick={() => setInquiryModalOpen(true)}
                className="btn btn-ghost"
              >
                Corporate / Team Training Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY MODAL */}
      {inquiryModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(6px)',
          display: 'grid',
          placeItems: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div className="training-modal-box">
            <button 
              onClick={() => { setInquiryModalOpen(false); setInquirySubmitted(false); }}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--ash2)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              ×
            </button>

            {inquirySubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '0.8rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: 'var(--ash2)', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Thank you for your interest in Starks Training. Our program lead will contact you via {inquiryData.email || 'email'} within 24 business hours.
                </p>
                <button 
                  onClick={() => { setInquiryModalOpen(false); setInquirySubmitted(false); }}
                  className="btn btn-gold"
                >
                  <span>Close Window</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Team &amp; Corporate Inquiries
                </div>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '1.5rem' }}>
                  Inquire for Training Cohort
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={inquiryData.name}
                      onChange={e => setInquiryData({ ...inquiryData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none' }}
                      placeholder="e.g. Ada Lovelace"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>Work or Personal Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none' }}
                      placeholder="e.g. ada@company.com"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>Phone / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      value={inquiryData.phone}
                      onChange={e => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none' }}
                      placeholder="+234 ..."
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>Program / Track</label>
                    <select 
                      value={inquiryData.track}
                      onChange={e => setInquiryData({ ...inquiryData, track: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none' }}
                    >
                      <option value="Frontend Practice Lab (6 Months Intensive)">Frontend Practice Lab (6 Months Intensive)</option>
                      <option value="Full-Stack Software Engineering (6 Months Intensive)">Full-Stack Software Engineering (6 Months Intensive)</option>
                      <option value="Cloud & DevOps Architecture">Cloud & DevOps Architecture</option>
                      <option value="Corporate Engineering Upskilling">Corporate Engineering Upskilling</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>I Am Inquiring As</label>
                    <select 
                      value={inquiryData.type}
                      onChange={e => setInquiryData({ ...inquiryData, type: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none' }}
                    >
                      <option value="Individual Learner">Individual Learner</option>
                      <option value="Corporate / Company Team">Corporate / Company Team</option>
                      <option value="Educational / Academic Partnership">Educational / Academic Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-mono)', color: 'var(--ash2)', marginBottom: '4px' }}>Additional Goals or Notes</label>
                    <textarea 
                      rows={3}
                      value={inquiryData.notes}
                      onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', background: 'var(--ink)', border: '1px solid rgba(200, 168, 75, 0.25)', color: 'var(--white)', borderRadius: '6px', outline: 'none', resize: 'vertical' }}
                      placeholder="Tell us about your team size, timeline, or current skill level..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold"
                    style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
                  >
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
