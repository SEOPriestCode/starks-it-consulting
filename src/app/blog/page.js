'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All Topics');
  
  const categories = ['All Topics', 'Cloud Strategy', 'Cybersecurity', 'Data & AI', 'Digital Transformation', 'Compliance'];
  
  const articles = [
    {
      category: 'Data & AI',
      title: 'Building AI-Ready Data Pipelines for African Financial Institutions',
      excerpt: 'The unique data quality, latency, and compliance challenges facing Nigerian fintechs — and the architecture patterns that address them at scale.',
      author: 'Ngozi Okafor',
      date: '28 Mar 2025',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80&auto=format&fit=crop',
      delay: ''
    },
    {
      category: 'Compliance',
      title: 'NDPR 2.0: What the New Regulations Mean for Your Technology Stack',
      excerpt: 'A practical breakdown of the updated Nigeria Data Protection Regulation — and a prioritised remediation checklist for CIOs and CTOs to act on immediately.',
      author: 'Tunde Fashola',
      date: '15 Mar 2025',
      readTime: '5 min',
      img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format&fit=crop',
      delay: '1'
    },
    {
      category: 'Digital Transformation',
      title: 'The CIO\'s Playbook for Leading Digital Transformation Without Losing the Organisation',
      excerpt: 'Change management is where most transformation programmes fail. Here\'s the framework we use to bring people along — not just processes.',
      author: 'Kola Balogun',
      date: '1 Mar 2025',
      readTime: '9 min',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop',
      delay: '2'
    },
    {
      category: 'Enterprise Software',
      title: 'ERP Implementation in Africa: 7 Mistakes That Cost Organisations Millions',
      excerpt: 'Custom ERP projects fail at an alarming rate. These are the seven root causes we\'ve identified across 20+ implementations — and how to avoid each one.',
      author: 'Emeka Okonkwo',
      date: '14 Feb 2025',
      readTime: '7 min',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
      delay: ''
    },
    {
      category: 'Cybersecurity',
      title: 'Zero Trust Is Not a Product — It\'s an Architecture. Here\'s How to Build It.',
      excerpt: 'Most vendors will sell you "zero trust" in a box. Real zero trust is an organisational posture built layer by layer. This is the practical guide.',
      author: 'Tunde Fashola',
      date: '28 Jan 2025',
      readTime: '11 min',
      img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80&auto=format&fit=crop',
      delay: '1'
    },
    {
      category: 'Cloud Strategy',
      title: 'FinOps in Practice: How We Cut a Client\'s AWS Bill by 58% Without Touching the Architecture',
      excerpt: 'Cloud cost optimisation doesn\'t always require re-architecture. Sometimes it\'s about visibility, tagging hygiene, and reserved instance strategy. A real case study.',
      author: 'Amaka Osei',
      date: '10 Jan 2025',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop',
      delay: '2'
    },
    {
      category: 'Data & AI',
      title: 'From Spreadsheets to Snowflake: A Practical Data Modernisation Roadmap',
      excerpt: 'Most mid-market African companies are still running their analytics on Excel. Here\'s a realistic, phased path to a modern data stack — without the Silicon Valley price tag.',
      author: 'Ngozi Okafor',
      date: '18 Dec 2024',
      readTime: '8 min',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
      delay: ''
    },
    {
      category: 'Public Sector',
      title: 'Digitising Government: Lessons from Nigeria\'s Most Successful e-Government Projects',
      excerpt: 'After delivering three major government platforms, we\'ve identified what separates successful public sector technology programmes from the ones that stall.',
      author: 'Michael Omotayo',
      date: '2 Dec 2024',
      readTime: '10 min',
      img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80&auto=format&fit=crop',
      delay: '1'
    },
    {
      category: 'Culture & Careers',
      title: 'Building a World-Class Engineering Team in Lagos: What We\'ve Learned in 10 Years',
      excerpt: 'Talent density, compensation benchmarking, technical interviews, and retention — the honest version of what it takes to build and keep great engineers in Nigeria.',
      author: 'Funke Adeyemi',
      date: '15 Nov 2024',
      readTime: '7 min',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop',
      delay: '2'
    }
  ];

  const filteredArticles = articles.filter(a => activeCat === 'All Topics' || a.category === activeCat);

  return (
    <div className="page active">
      <Head>
        <title>IT Consulting Insights | Technology Blog | Starks IT Consulting Nigeria</title>
        <meta name="description" content="Expert insights on IT consulting, cloud strategy, cybersecurity, data analytics, and digital transformation from Starks IT Consulting professionals in Nigeria." />
        <meta name="keywords" content="IT consulting blog, technology insights Nigeria, cloud strategy, cybersecurity consulting, data analytics, digital transformation Africa, enterprise IT solutions, IT best practices" />
      </Head>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=70&auto=format&fit=crop" alt="Technology thinking and writing" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">INSIGHTS / THINKING</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">From Our Consultants</span></div>
          <h2 className="title" data-reveal data-delay="1">Ideas that <em>move</em><br />the industry forward.</h2>
          <p className="subtitle" data-reveal data-delay="2">Expert perspectives on enterprise technology, cloud strategy, cybersecurity, data, and digital transformation — written by the practitioners doing the work.</p>
          <div className="blog-hero-cats" data-reveal data-delay="3">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`blog-cat-pill ${activeCat === cat ? 'active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: '60px 5% 0' }}>
        {/* FEATURED ARTICLE */}
        {(activeCat === 'All Topics' || activeCat === 'Cloud Strategy') && (
          <div className="blog-featured" data-reveal>
            <div className="blog-feat-img">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format&fit=crop" alt="Cloud migration strategy" />
              <div className="img-overlay"></div>
            </div>
            <div className="blog-feat-body">
              <div className="blog-feat-label">Cloud Strategy</div>
              <div className="blog-feat-title">Why Nigerian Enterprises Are Getting Cloud Migration Wrong — and How to Fix It</div>
              <p className="blog-feat-excerpt">Too many organisations migrate to the cloud chasing cost savings, only to discover their bills have tripled within a year. We examine the five most common architectural mistakes and the engineering principles that prevent them — drawn from 40+ real migrations across West Africa.</p>
              <div className="blog-feat-meta">
                <span className="author-dot"></span>
                <span>Adaeze Emeka · CTO</span>
                <span>·</span>
                <span>12 April 2025</span>
                <span>·</span>
                <span style={{ fontFamily: 'var(--ff-mono)' }}>8 min read</span>
              </div>
              <Link href="#" className="arrow-btn" style={{ marginTop: '1.5rem', display: 'inline-flex', textDecoration: 'none' }}>Read Article →</Link>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div className="articles-grid" style={{ marginTop: (activeCat === 'All Topics' || activeCat === 'Cloud Strategy') ? '4rem' : '2rem' }}>
          {filteredArticles.map((a, i) => (
            <div key={i} className="article-card" data-reveal data-delay={a.delay}>
              <div className="ac-img"><img src={a.img} alt={a.title} /></div>
              <div className="ac-body">
                <div className="ac-cat">{a.category}</div>
                <div className="ac-title">{a.title}</div>
                <p className="ac-excerpt">{a.excerpt}</p>
                <div className="ac-meta">
                  <span>{a.author} · {a.date}</span>
                  <span className="ac-read">{a.readTime} →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter-strip" data-reveal>
          <div>
            <div className="label"><div className="label-line"></div><span className="label-text">Stay Informed</span></div>
            <div className="nl-title">Get insights delivered to your inbox</div>
            <p className="nl-sub">New articles every two weeks. No spam, no fluff — just actionable technology intelligence for enterprise decision-makers.</p>
          </div>
          <div>
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder="your@company.com" />
              <button className="nl-btn">Subscribe</button>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--ash)', marginTop: '0.8rem', fontFamily: 'var(--ff-mono)' }}>We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
