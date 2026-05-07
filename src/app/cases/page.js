'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Financial Services', 'Energy', 'Public Sector', 'Healthcare', 'Telecoms'];
  
  const cases = [
    {
      category: 'Financial Services',
      year: '2023',
      title: 'Core Banking API Platform Modernisation — Tier-1 Nigerian Bank',
      description: 'Rebuilt a legacy monolithic core banking integration layer into a modern, event-driven microservices architecture — enabling real-time transaction processing across 4.2 million accounts and dramatically reducing system downtime.',
      resultVal: '87%',
      resultUnit: 'Reduction in API latency · 4.2M accounts · 18-month delivery',
      img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&q=80&auto=format&fit=crop',
      featured: true,
      delay: ''
    },
    {
      category: 'Energy',
      year: '2022',
      title: 'Field Operations ERP — Major Oil & Gas Operator',
      description: 'Custom ERP system covering logistics, inventory, and field workforce management across 120 depots nationwide.',
      resultVal: '₦210M',
      resultUnit: 'Annual savings',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
      featured: false,
      delay: '1'
    },
    {
      category: 'Public Sector',
      year: '2021',
      title: 'Revenue Management & Citizen Portal — Lagos State',
      description: 'End-to-end digital transformation of state revenue collection with integrated payment gateway and taxpayer self-service.',
      resultVal: '3.1×',
      resultUnit: 'Increase in monthly IGR',
      img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80&auto=format&fit=crop',
      featured: false,
      delay: '2'
    },
    {
      category: 'Healthcare',
      year: '2022',
      title: 'Unified Patient Records — National Hospital Group (14 Sites)',
      description: 'HIPAA-aligned electronic medical records platform connecting 14 hospital sites with biometric patient identification.',
      resultVal: '14',
      resultUnit: 'Sites live in 8 months',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop',
      featured: false,
      delay: ''
    },
    {
      category: 'Telecoms',
      year: '2023',
      title: 'Network Outage Prediction Engine — ML Pipeline',
      description: 'Real-time ML pipeline analysing 2.4TB daily telemetry to predict and pre-empt network degradation 40 minutes in advance.',
      resultVal: '62%',
      resultUnit: 'Less unplanned downtime',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format&fit=crop',
      featured: false,
      delay: '1'
    },
    {
      category: 'Retail',
      year: '2024',
      title: 'Omnichannel Commerce Platform — Leading West African Retailer',
      description: 'Unified digital commerce platform integrating POS, inventory, loyalty, and e-commerce across 80 retail locations in 6 countries.',
      resultVal: '220%',
      resultUnit: 'Increase in online revenue',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop',
      featured: false,
      delay: '2'
    }
  ];

  const filteredCases = cases.filter(c => activeFilter === 'All' || c.category === activeFilter || (activeFilter === 'Retail' && c.category === 'Retail')); // Note: Retail isn't in filter buttons but is in cases

  return (
    <div className="page active">
      <Head>
        <title>Case Studies | Starks IT Consulting</title>
      </Head>
      <div className="page-hero" style={{ position: 'relative' }}>
        <div id="cases-hero-img"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=70&auto=format&fit=crop" alt="Team at work" /></div>
        <div className="page-hero-vignette" style={{ position: 'absolute', inset: 0 }}></div>
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ph-num">WORK / CASE STUDIES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Our Work</span></div>
          <h2 className="title" data-reveal data-delay="1">Proof over <em>promise.</em></h2>
          <p className="subtitle" data-reveal data-delay="2">Ten years of transformative engagements across Nigeria and beyond. Real outcomes, real numbers, real partnerships.</p>
        </div>
      </div>
      <section style={{ padding: '60px 5% 120px' }}>
        <div className="cases-filter" data-reveal>
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="cases-masonry">
          {filteredCases.map((c, i) => (
            <div 
              key={i} 
              className={`case-card2 ${c.featured ? 'featured' : ''}`} 
              data-reveal 
              data-delay={c.delay}
            >
              <div className="cc-img"><img src={c.img} alt={c.title} /></div>
              <div className="cc-body">
                <div className="cc-ind">{c.category} · {c.year}</div>
                <div className="cc-title">{c.title}</div>
                <p className="cc-text">{c.description}</p>
                <div className="cc-result"><div className="cc-val">{c.resultVal}</div><div className="cc-unit">{c.resultUnit}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
