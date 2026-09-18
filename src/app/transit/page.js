'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function TransITPage() {
  // Modal state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const fullNameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '5-20 vehicles',
    useCase: 'Logistics / Delivery',
    message: ''
  });

  // Auto-focus the Full Name input cursor as soon as the demo modal opens
  useEffect(() => {
    if (isDemoModalOpen && !formSubmitted) {
      const timer = setTimeout(() => {
        fullNameInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isDemoModalOpen, formSubmitted]);

  // ROI Calculator state
  const [fleetSize, setFleetSize] = useState(15);
  const [avgDailyKm, setAvgDailyKm] = useState(120);

  // Active feature tab in telemetry console demo
  const [activeTab, setActiveTab] = useState('tracking');

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Live Simulated Vehicle Stream Ticker
  const [liveVehicles, setLiveVehicles] = useState([
    { id: 'STK-492-LAG', name: 'Toyota HiAce (Bus #14)', speed: 64, status: 'Live', location: 'Lekki-Epe Expressway, Lagos', ignition: 'ON', fuel: '82%', driver: 'Chidi O.' },
    { id: 'STK-108-ABJ', name: 'Man Diesel Heavy Hauler', speed: 78, status: 'Live', location: 'Abuja-Kaduna Highway', ignition: 'ON', fuel: '91%', driver: 'Ibrahim M.' },
    { id: 'STK-771-PHC', name: 'Ford Transit Delivery Van', speed: 0, status: 'Idle', location: 'Trans-Amadi, Port Harcourt', ignition: 'ON (14m Idle)', fuel: '54%', driver: 'Emmanuel K.' },
    { id: 'STK-305-IKE', name: 'Mercedes Sprinter Shuttle', speed: 52, status: 'Live', location: 'Ikeja Along, Lagos', ignition: 'ON', fuel: '76%', driver: 'Babatunde S.' }
  ]);

  // Live telemetry pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVehicles(prev => prev.map(v => {
        if (v.status === 'Live') {
          const speedDelta = Math.floor(Math.random() * 7) - 3;
          const newSpeed = Math.max(40, Math.min(95, v.speed + speedDelta));
          return { ...v, speed: newSpeed };
        }
        return v;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setIsDemoModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      fleetSize: '5-20 vehicles',
      useCase: 'Logistics / Delivery',
      message: ''
    });
  };

  // Calculations for ROI tool
  const monthlyKm = fleetSize * avgDailyKm * 26; // 26 working days
  const estIdleFuelSavedLitres = Math.round(fleetSize * 45); // ~45L idle fuel wasted per month per vehicle
  const estFuelNairaSaved = estIdleFuelSavedLitres * 1150; // ₦1,150 per L
  const estExtraTripsPerMonth = Math.round(fleetSize * 6);
  const estDowntimeSavedHours = Math.round(fleetSize * 14);

  const faqs = [
    {
      q: "What makes TransIT different from standard GPS tracking platforms?",
      a: "TransIT is an end-to-end Intelligent Transport System (ITS) designed by Starks IT Consulting specifically for Nigerian and West African operating realities. Unlike basic trackers that only show dots on a map, TransIT scores telemetry freshness (Live, Stale, Offline), runs custom alert triggers for overspeeding, idle engine detection, and device tampering, offers polygon geofencing, distance-based automated billing, and integrates a self-hosted routing engine tuned for Nigerian roads."
    },
    {
      q: "Can TransIT work with our existing GPS hardware devices?",
      a: "Yes! TransIT is hardware-agnostic and supports popular GPS tracking protocols and OBD-II devices. Starks IT Consulting can configure your current GPS trackers to stream directly into the TransIT console without needing costly hardware replacements."
    },
    {
      q: "How does TransIT help reduce engine idling and cut fuel costs?",
      a: "TransIT monitors ignition status against vehicle movement in real time. If an engine remains running while stationary beyond your custom set limit (e.g., 10 minutes), an automated alert is triggered immediately to dispatchers and managers, allowing prompt action to prevent fuel wastage and driver misuse."
    },
    {
      q: "Can personal car owners use TransIT, or is it only for big fleets?",
      a: "TransIT is built for scale on both ends! Personal car owners can start with a single vehicle to monitor location, trip history, speed alerts, mileage-based maintenance reminders, and generate time-bounded public tracker links for family members. Logistics companies and transport services can manage hundreds of vehicles on the exact same infrastructure."
    },
    {
      q: "How does distance-based billing work for fleet clients?",
      a: "For logistics, haulage, or vehicle rental companies, TransIT meters exact daily GPS-verified distance per vehicle and links directly with clients' stored payment methods or billing software. Invoices are generated and processed automatically based on actual distance driven, eliminating manual odometer log reconciliation."
    },
    {
      q: "What technical support and SLA does Starks IT Consulting provide?",
      a: "As a product of Starks IT Consulting, TransIT comes backed by our enterprise SLA, 24/7 technical helpdesk, dedicated onboarding specialists in Lagos and Abuja, device installation support, and custom API integration into your ERP or TMS system."
    }
  ];

  return (
    <div className="page active" style={{ background: 'var(--ink)' }}>
      {/* Dynamic SEO Meta Head */}
      <Head>
        <title>TransIT · Intelligent Fleet Management System | Starks IT Consulting</title>
        <meta name="description" content="TransIT by Starks IT Consulting: Real-time GPS tracking, vehicle telemetry freshness, automated alert triggers, geofencing, distance-based billing, and maintenance tracking for owners, logistics, and transport services." />
        <meta name="keywords" content="TransIT fleet management, intelligent transport system Nigeria, GPS tracking Lagos, fleet tracking Nigeria, vehicle telematics Starks, logistics fleet software, distance billing fleet" />
      </Head>

      {/* HERO SECTION */}
      <div className="page-hero" style={{ background: 'linear-gradient(180deg, rgba(8, 14, 26, 0.95) 0%, rgba(13, 24, 41, 0.98) 100%)', minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle Decorative Background Glow */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(44, 151, 207, 0.15) 0%, rgba(200, 168, 75, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 1, paddingTop: '100px', paddingBottom: '60px', width: '100%' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', background: 'rgba(44, 151, 207, 0.12)', border: '1px solid rgba(44, 151, 207, 0.3)', marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2c97cf', boxShadow: '0 0 8px #2c97cf' }}></span>
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>
              FLAGSHIP PRODUCT BY STARKS IT CONSULTING
            </span>
          </div>

          <h1 className="title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.08, maxWidth: '900px', marginBottom: '1.2rem' }}>
            Trans<span style={{ color: '#2c97cf' }}>IT</span> — Every vehicle, <em>tracked live.</em>
          </h1>

          <p className="subtitle" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', maxWidth: '760px', lineHeight: 1.7, color: 'var(--ash2)', marginBottom: '2.5rem' }}>
            Personal car owners, logistics companies, and transport services get one unified console for real-time GPS tracking, automated safety alerts, geofencing, distance-based billing, and mileage maintenance automation—down to the vehicle, in real time across Nigeria.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="btn btn-gold" 
              style={{ padding: '16px 32px', fontSize: '0.9rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              <span>Book a Live Demo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="btn btn-ghost" 
              style={{ padding: '16px 28px', fontSize: '0.9rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              <span>Talk to Fleet Specialist</span>
            </button>

            <a 
              href="https://www.trans-it.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="arrow-btn"
              style={{ color: '#2c97cf', fontSize: '0.9rem', padding: '12px 16px', textDecoration: 'none' }}
            >
              Launch TransIT Console (trans-it.app) ↗
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.2rem',
            background: 'rgba(13, 24, 41, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(200, 168, 75, 0.2)',
            borderRadius: '12px',
            padding: '1.5rem 2rem',
            maxWidth: '1000px'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>TELEMETRY STREAM</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--white)' }}>WebSocket Live Pings</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--ash)', marginTop: '2px' }}>Sub-second GPS updates</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>FRESHNESS SCORING</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--white)' }}>Live · Stale · Offline</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--ash)', marginTop: '2px' }}>Clear signal status scoring</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>NIGERIAN ROUTING ENGINE</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--white)' }}>Local OSM Engine</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--ash)', marginTop: '2px' }}>Accurate local ETAs & routes</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>OPERATIONAL ROI</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--white)' }}>-30% Idleness Waste</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--ash)', marginTop: '2px' }}>Prevent unneeded fuel burn</div>
            </div>
          </div>

        </div>
      </div>

      {/* LIVE INTERACTIVE CONSOLE DEMO WIDGET SECTION */}
      <section style={{ padding: '80px 5%', background: 'var(--ink2)', borderTop: '1px solid rgba(200, 168, 75, 0.15)', borderBottom: '1px solid rgba(200, 168, 75, 0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="label"><div className="label-line"></div><span className="label-text">INTERACTIVE PLATFORM CONSOLE</span></div>
          <h2 className="title" style={{ maxWidth: '800px' }}>Explore the <em>TransIT Control Workspace</em></h2>
          <p className="subtitle" style={{ marginBottom: '2.5rem' }}>
            Select a feature tab below to inspect how TransIT coordinates live telemetry signals, alerts, geofences, and billing.
          </p>

          {/* Feature Selector Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            {[
              { id: 'tracking', label: '📡 Live GPS & Freshness', desc: 'Real-time telemetry' },
              { id: 'alerts', label: '🚨 Safety & Idle Alerts', desc: 'Automated triggers' },
              { id: 'geofence', label: '🗺️ Smart Geofencing', desc: 'Polygon zones' },
              { id: 'maintenance', label: '🛠️ Mileage Maintenance', desc: 'Preventive alerts' },
              { id: 'billing', label: '💳 Metered Distance Billing', desc: 'Automated invoices' },
              { id: 'locator', label: '🔗 Shareable Locator Links', desc: 'No-login tracking' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '6px',
                  background: activeTab === tab.id ? 'var(--gold)' : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab.id ? 'var(--ink)' : 'var(--ash2)',
                  border: activeTab === tab.id ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.08)',
                  fontFamily: 'var(--ff-body)',
                  fontWeight: activeTab === tab.id ? '700' : '500',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease2)',
                  textAlign: 'left'
                }}
              >
                <div>{tab.label}</div>
                <div style={{ fontSize: '0.72rem', opacity: 0.8, marginTop: '2px' }}>{tab.desc}</div>
              </button>
            ))}
          </div>

          {/* Console Preview Screen */}
          <div style={{
            background: 'var(--ink)',
            borderRadius: '12px',
            border: '1px solid rgba(200, 168, 75, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            overflow: 'hidden'
          }}>
            {/* Top Bar of Simulated Console */}
            <div style={{
              background: '#0a1220',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--ash)', marginLeft: '10px' }}>
                  console.trans-it.app · Fleet Workspace (Starks Active Telemetry)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '12px', background: 'rgba(39, 201, 63, 0.15)', color: '#27c93f', fontSize: '0.72rem', fontFamily: 'var(--ff-mono)', fontWeight: '600' }}>
                  ● LIVE STREAM CONNECTED
                </span>
              </div>
            </div>

            {/* Console Body Content Depending on Active Tab */}
            <div style={{ padding: '2rem' }}>
              {activeTab === 'tracking' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)' }}>Real-Time Fleet Tracking & Signal Freshness</h3>
                      <p style={{ color: 'var(--ash2)', fontSize: '0.9rem' }}>Every tracker streams position, speed, and ignition state directly to map view with clear freshness scoring.</p>
                    </div>
                    <a href="https://www.trans-it.app/live-tracking" target="_blank" rel="noopener noreferrer" className="arrow-btn">View Live Tracking Page ↗</a>
                  </div>

                  {/* Simulated Live Vehicle Stream Table */}
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--white)', fontSize: '0.85rem' }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.03)', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ padding: '12px' }}>VEHICLE ID</th>
                          <th style={{ padding: '12px' }}>NAME / TYPE</th>
                          <th style={{ padding: '12px' }}>DRIVER</th>
                          <th style={{ padding: '12px' }}>SPEED</th>
                          <th style={{ padding: '12px' }}>CURRENT LOCATION</th>
                          <th style={{ padding: '12px' }}>FRESHNESS SCORE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {liveVehicles.map(v => (
                          <tr key={v.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px', fontFamily: 'var(--ff-mono)', color: 'var(--gold)', fontWeight: '600' }}>{v.id}</td>
                            <td style={{ padding: '12px', fontWeight: '600' }}>{v.name}</td>
                            <td style={{ padding: '12px', color: 'var(--ash2)' }}>{v.driver}</td>
                            <td style={{ padding: '12px', fontFamily: 'var(--ff-mono)', color: v.speed > 75 ? '#ff6b6b' : '#2c97cf', fontWeight: '700' }}>
                              {v.speed} km/h
                            </td>
                            <td style={{ padding: '12px', color: 'var(--ash2)' }}>{v.location}</td>
                            <td style={{ padding: '12px' }}>
                              <span style={{
                                padding: '4px 10px',
                                borderRadius: '12px',
                                background: v.status === 'Live' ? 'rgba(39, 201, 63, 0.15)' : 'rgba(255, 189, 46, 0.15)',
                                color: v.status === 'Live' ? '#27c93f' : '#ffbd2e',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                fontFamily: 'var(--ff-mono)'
                              }}>
                                ● {v.status} (&lt; 5s ping)
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'alerts' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)' }}>Automated Safety & Idleness Incident Triggers</h3>
                      <p style={{ color: 'var(--ash2)', fontSize: '0.9rem' }}>Fired the instant device telemetry reports excessive idling, overspeeding, or device tampering.</p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1.2rem', background: 'rgba(255, 107, 107, 0.08)', border: '1px solid rgba(255, 107, 107, 0.3)', borderRadius: '8px' }}>
                      <div style={{ color: '#ff6b6b', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>🚨 OVERSPEED ALERT</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>STK-108-ABJ reached 104 km/h on Abuja-Kaduna Highway (Threshold: 80 km/h).</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: '8px', fontFamily: 'var(--ff-mono)' }}>Triggered 2 mins ago · Alert sent to Ops Team</div>
                    </div>

                    <div style={{ padding: '1.2rem', background: 'rgba(255, 189, 46, 0.08)', border: '1px solid rgba(255, 189, 46, 0.3)', borderRadius: '8px' }}>
                      <div style={{ color: '#ffbd2e', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>⚠️ UNNEEDED ENGINE IDLE</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>STK-771-PHC stationary with ignition ON for 18 mins in Port Harcourt depot.</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: '8px', fontFamily: 'var(--ff-mono)' }}>Wasted Fuel Est: 1.8 Litres · Driver Notified</div>
                    </div>

                    <div style={{ padding: '1.2rem', background: 'rgba(44, 151, 207, 0.08)', border: '1px solid rgba(44, 151, 207, 0.3)', borderRadius: '8px' }}>
                      <div style={{ color: '#2c97cf', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>🔌 DEVICE TAMPER / HARSH BRAKE</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)' }}>Abrupt deceleration (-4.2g) detected on STK-305-IKE at Ikeja Along junction.</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: '8px', fontFamily: 'var(--ff-mono)' }}>Safety Event Recorded · Driver Score updated</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'geofence' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>Polygon & Corridor Geofencing</h3>
                  <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Draw custom operational boundaries around depots, state lines, or restricted corridors. Supports bulk CSV import/export.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '4px' }}>Lagos Island Delivery Zone</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--ash)' }}>Polygon Zone · 8 Vehicles Active</div>
                      <div style={{ fontSize: '0.85rem', color: '#27c93f', marginTop: '10px', fontWeight: '600' }}>✓ 100% Entry/Exit Compliance</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '4px' }}>Abuja Cargo Central Depot</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--ash)' }}>Circular Zone (500m radius)</div>
                      <div style={{ fontSize: '0.85rem', color: '#27c93f', marginTop: '10px', fontWeight: '600' }}>✓ Auto Depot Check-In Active</div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '4px' }}>Interstate Corridor (Lagos - IB)</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--ash)' }}>Route Corridor Zone</div>
                      <div style={{ fontSize: '0.85rem', color: '#2c97cf', marginTop: '10px', fontWeight: '600' }}>ℹ Detour Monitoring On</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'maintenance' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>Mileage-Triggered Maintenance Automation</h3>
                  <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Distance thresholds calculate wear in real-time, sending maintenance-due alerts before expensive breakdown downtime.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1.2rem', background: 'rgba(39, 201, 63, 0.08)', border: '1px solid rgba(39, 201, 63, 0.3)', borderRadius: '8px' }}>
                      <div style={{ color: '#27c93f', fontWeight: '700', fontSize: '0.9rem' }}>STK-492-LAG (Toyota HiAce)</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)', marginTop: '4px' }}>Engine Oil & Filter Service</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ash)', marginTop: '6px' }}>Current: 8,420 km / Limit: 10,000 km (1,580 km remaining)</div>
                    </div>

                    <div style={{ padding: '1.2rem', background: 'rgba(255, 189, 46, 0.08)', border: '1px solid rgba(255, 189, 46, 0.3)', borderRadius: '8px' }}>
                      <div style={{ color: '#ffbd2e', fontWeight: '700', fontSize: '0.9rem' }}>STK-305-IKE (Mercedes Sprinter)</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--white)', marginTop: '4px' }}>Brake Pad & Rotor Inspection</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ash)', marginTop: '6px' }}>Current: 14,890 km / Limit: 15,000 km (110 km DUE NOW)</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>Automated Distance-Based Metering & Billing</h3>
                  <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Daily GPS mileage is metered and automatically charged to client stored payment methods with zero manual paperwork.</p>
                  
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(200, 168, 75, 0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '10px' }}>
                      <span style={{ color: 'var(--ash2)' }}>Client Account: Dangote Logistics Sub-contract #802</span>
                      <span style={{ color: 'var(--gold)', fontFamily: 'var(--ff-mono)' }}>STATUS: AUTO-BILLED</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '700' }}>
                      <span>Metered Distance (Past 24 hrs): 1,480.4 km</span>
                      <span style={{ color: '#2c97cf' }}>₦ 370,100.00</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'locator' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>Time-Bounded Public Locator Links</h3>
                  <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Share a single vehicle’s live position on a public tracking link with built-in expiration—no login required for clients.</p>
                  
                  <div style={{ background: 'rgba(44, 151, 207, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(44, 151, 207, 0.3)' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--ash2)', marginBottom: '6px' }}>Generated Shareable Link:</div>
                    <div style={{ fontFamily: 'var(--ff-mono)', color: '#2c97cf', fontSize: '0.95rem', background: 'rgba(0,0,0,0.4)', padding: '10px 14px', borderRadius: '4px', marginBottom: '10px' }}>
                      https://trans-it.app/track/loc_8f9a2b7e1c9?exp=2h
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--ash)' }}>Expires in: 1 hour 45 minutes · Shared with End-Customer</div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ROI & FLEET OPTIMIZATION CALCULATOR */}
      <section style={{ padding: '80px 5%', background: 'var(--ink)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="label"><div className="label-line"></div><span className="label-text">BUSINESS IMPACT & ROI CALCULATOR</span></div>
          <h2 className="title" style={{ maxWidth: '800px' }}>Calculate your <em>Fleet Savings & Revenue Boost</em></h2>
          <p className="subtitle" style={{ marginBottom: '3rem' }}>
            Adjust your fleet size and daily mileage to see estimated monthly savings on fuel, idle time reduction, and productivity gains with TransIT.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Calculator Controls */}
            <div style={{ background: 'var(--ink2)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(200, 168, 75, 0.2)' }}>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', color: 'var(--white)' }}>Number of Fleet Vehicles:</label>
                  <span style={{ fontFamily: 'var(--ff-mono)', color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>{fleetSize} Vehicles</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="150" 
                  value={fleetSize} 
                  onChange={(e) => setFleetSize(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--gold)', cursor: 'pointer' }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', color: 'var(--white)' }}>Avg. Daily Distance per Vehicle:</label>
                  <span style={{ fontFamily: 'var(--ff-mono)', color: '#2c97cf', fontWeight: '700', fontSize: '1.2rem' }}>{avgDailyKm} km/day</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="350" 
                  step="10"
                  value={avgDailyKm} 
                  onChange={(e) => setAvgDailyKm(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#2c97cf', cursor: 'pointer' }}
                />
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--ash)', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '6px', borderLeft: '3px solid var(--gold)' }}>
                Based on verified operational data across Nigerian logistics fleets, fuel costs at ₦1,150/L, and average idling rates of 45 mins/day without telemetry monitoring.
              </div>

            </div>

            {/* Calculated Results Display */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.2rem' }}>
              
              <div style={{ background: 'rgba(44, 151, 207, 0.08)', border: '1px solid rgba(44, 151, 207, 0.3)', padding: '1.4rem', borderRadius: '10px', minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1px' }}>MONTHLY FUEL SAVED</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(1.2rem, 1.6vw, 1.65rem)', fontWeight: '700', color: 'var(--white)', margin: '8px 0', lineHeight: 1.3 }}>
                  ₦ {estFuelNairaSaved.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ash2)', lineHeight: 1.4 }}>
                  Save ~{estIdleFuelSavedLitres.toLocaleString()} Litres of wasted idle fuel per month.
                </div>
              </div>

              <div style={{ background: 'rgba(200, 168, 75, 0.08)', border: '1px solid rgba(200, 168, 75, 0.3)', padding: '1.4rem', borderRadius: '10px', minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>EXTRA MONTHLY TRIPS</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(1.2rem, 1.6vw, 1.65rem)', fontWeight: '700', color: 'var(--white)', margin: '8px 0', lineHeight: 1.3 }}>
                  +{estExtraTripsPerMonth} Deliveries
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ash2)', lineHeight: 1.4 }}>
                  Unlocked via real-time route & ETA optimization.
                </div>
              </div>

              <div style={{ background: 'rgba(39, 201, 63, 0.08)', border: '1px solid rgba(39, 201, 63, 0.3)', padding: '1.4rem', borderRadius: '10px', minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#27c93f', textTransform: 'uppercase', letterSpacing: '1px' }}>DOWNTIME PREVENTED</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(1.2rem, 1.6vw, 1.65rem)', fontWeight: '700', color: 'var(--white)', margin: '8px 0', lineHeight: 1.3 }}>
                  {estDowntimeSavedHours} Hours
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ash2)', lineHeight: 1.4 }}>
                  Proactive mileage alerts stop major breakdowns.
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.4rem', borderRadius: '10px', minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--ash)', textTransform: 'uppercase', letterSpacing: '1px' }}>TOTAL MONTHLY DISTANCE</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(1.2rem, 1.6vw, 1.65rem)', fontWeight: '700', color: 'var(--white)', margin: '8px 0', lineHeight: 1.3 }}>
                  {monthlyKm.toLocaleString()} km
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ash2)', lineHeight: 1.4 }}>
                  Fully metered & tracked on 1 single workspace.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHO CAN USE TRANSIT (TARGET AUDIENCES) */}
      <section style={{ padding: '80px 5%', background: 'var(--ink2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="label"><div className="label-line"></div><span className="label-text">WHO TRANSIT IS BUILT FOR</span></div>
          <h2 className="title" style={{ maxWidth: '800px' }}>Tailored Workflows for <em>Every Fleet Scale</em></h2>
          <p className="subtitle" style={{ marginBottom: '3.5rem' }}>
            From single private vehicle owners to nationwide logistics operators and intercity passenger bus services.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Personal Car Owners */}
            <div style={{ background: 'var(--ink)', padding: '2.2rem', borderRadius: '12px', border: '1px solid rgba(200, 168, 75, 0.2)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(200, 168, 75, 0.15)', display: 'grid', placeItems: 'center', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1.2rem' }}>
                  🚗
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>FOR PERSONAL CAR OWNERS</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '1rem' }}>Keep Your Vehicle Within Reach</h3>
                <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Always know where your car is, review recent trip histories with speed context, receive automatic mileage maintenance reminders, and generate temporary locator links for family members.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--gold)' }}>✓</span> Live GPS location & ignition status
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--gold)' }}>✓</span> Trip replay & speed history
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--gold)' }}>✓</span> Mileage oil change & service alerts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--gold)' }}>✓</span> Time-bounded public locator links
                </li>
              </ul>
            </div>

            {/* Logistics Companies */}
            <div style={{ background: 'var(--ink)', padding: '2.2rem', borderRadius: '12px', border: '1px solid rgba(44, 151, 207, 0.3)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(44, 151, 207, 0.15)', display: 'grid', placeItems: 'center', color: '#2c97cf', fontSize: '1.4rem', marginBottom: '1.2rem' }}>
                  🚚
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>FOR LOGISTICS & DELIVERY COMPANIES</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '1rem' }}>Move Deliveries with Zero Guesswork</h3>
                <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Give dispatch and operations teams one live view of active trucks, drivers, schedules, and alerts as freight moves across Lagos, Abuja, Port Harcourt, and nationwide delivery routes.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#2c97cf' }}>✓</span> Multi-vehicle fleet dispatch map
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#2c97cf' }}>✓</span> Driver assignment & shift scheduling
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#2c97cf' }}>✓</span> Idle fuel waste & overspeed alarms
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem' }}>
                  <span style={{ color: '#2c97cf' }}>✓</span> Automated client distance billing
                </li>
              </ul>
            </div>

            {/* Transport & Bus Services */}
            <div style={{ background: 'var(--ink)', padding: '2.2rem', borderRadius: '12px', border: '1px solid rgba(39, 201, 63, 0.3)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(39, 201, 63, 0.15)', display: 'grid', placeItems: 'center', color: '#27c93f', fontSize: '1.4rem', marginBottom: '1.2rem' }}>
                  🚌
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: '#27c93f', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>FOR TRANSPORT & BUS SERVICES</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '1rem' }}>Run Every Route with Confidence</h3>
                <p style={{ color: 'var(--ash2)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Maintain full visibility over intercity passenger routes, terminal geofences, departure schedules, driver behavior, and vehicle health from departure terminal to final destination.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#27c93f' }}>✓</span> Live passenger route tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#27c93f' }}>✓</span> Terminal geofence entry & exit logs
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#27c93f' }}>✓</span> Historical telemetry for safety reviews
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ash2)', fontSize: '0.85rem' }}>
                  <span style={{ color: '#27c93f' }}>✓</span> Public bus locator links for passengers
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* WHY OPERATORS CHOOSE TRANSIT (STARKS IT ADVANTAGES) */}
      <section style={{ padding: '80px 5%', background: 'var(--ink)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            <div>
              <div className="label"><div className="label-line"></div><span className="label-text">WHY CHOOSE TRANSIT</span></div>
              <h2 className="title">Better decisions happen <em>closer to the signal.</em></h2>
              <p className="subtitle" style={{ marginBottom: '2rem' }}>
                The right detail is available when your team needs it—without waiting for end-of-month reports, calling drivers repeatedly, or reconciling conflicting route spreadsheets.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--ink)', display: 'grid', placeItems: 'center', fontWeight: '700', flexShrink: 0 }}>1</div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1.05rem', fontWeight: '600' }}>One Operational Source of Truth</h4>
                    <p style={{ color: 'var(--ash)', fontSize: '0.85rem', marginTop: '4px' }}>Owners, dispatchers, drivers, and service teams read the exact same live position and alert data.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2c97cf', color: 'var(--white)', display: 'grid', placeItems: 'center', fontWeight: '700', flexShrink: 0 }}>2</div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1.05rem', fontWeight: '600' }}>Engineered for Nigerian Road Realities</h4>
                    <p style={{ color: 'var(--ash)', fontSize: '0.85rem', marginTop: '4px' }}>ETA calculations run on a self-hosted routing engine pre-loaded with Nigeria OpenStreetMap telemetry data.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#27c93f', color: 'var(--white)', display: 'grid', placeItems: 'center', fontWeight: '700', flexShrink: 0 }}>3</div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1.05rem', fontWeight: '600' }}>Telemetry Freshness Scoring You Can Trust</h4>
                    <p style={{ color: 'var(--ash)', fontSize: '0.85rem', marginTop: '4px' }}>Every vehicle is scored as Live, Stale, or Offline so a quiet device is never mistaken for safe movement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Feature Image */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(200, 168, 75, 0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
              <img 
                src="/transit_control_room.png" 
                alt="Starks TransIT Operations Control Room in Nigeria"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section style={{ padding: '80px 5%', background: 'var(--ink2)', borderTop: '1px solid rgba(200, 168, 75, 0.15)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="label" style={{ justifyContent: 'center' }}><div className="label-line"></div><span className="label-text">FREQUENTLY ASKED QUESTIONS</span><div className="label-line"></div></div>
          <h2 className="title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Questions teams ask <em>before they switch</em></h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--ink)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    color: 'var(--white)',
                    fontFamily: 'var(--ff-body)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--gold)' }}>
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--ash2)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL BOTTOM CALL TO ACTION BANNER */}
      <section style={{ padding: '80px 5%', background: 'linear-gradient(135deg, #0d1829 0%, #152236 100%)', borderTop: '1px solid rgba(200, 168, 75, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(200, 168, 75, 0.15)', border: '1px solid var(--gold)', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>
              READY TO TRANSFORM YOUR FLEET OPERATIONS?
            </span>
          </div>

          <h2 className="title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            See your fleet live in <em>minutes.</em>
          </h2>

          <p className="subtitle" style={{ margin: '0 auto 2.5rem auto', maxWidth: '650px' }}>
            Register your fleet and connect your first tracker—one unified console for tracking, alerts, geofencing, maintenance, and billing.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="btn btn-gold" 
              style={{ padding: '16px 36px', fontSize: '0.9rem' }}
            >
              <span>Book a Live Demo</span>
            </button>

            <a 
              href="mailto:hello@trans-it.app" 
              className="btn btn-ghost" 
              style={{ padding: '16px 30px', fontSize: '0.9rem' }}
            >
              <span>Contact TransIT Team</span>
            </a>

            <a 
              href="https://www.trans-it.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#2c97cf', color: '#fff', padding: '16px 30px', fontSize: '0.9rem' }}
            >
              <span>Get Started on trans-it.app ↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* BOOK DEMO / TALK TO SALES POPUP MODAL */}
      {isDemoModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'grid',
          placeItems: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'var(--ink2)',
            border: '1px solid var(--gold)',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
          }}>
            
            {/* Close Button */}
            <button 
              onClick={resetForm}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: 'var(--ash2)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              ✕
            </button>

            {!formSubmitted ? (
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: '#2c97cf', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  STARKS IT CONSULTING · TRANSIT DEMO
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>
                  Book a Live TransIT Demo
                </h3>
                <p style={{ color: 'var(--ash2)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Speak directly with a Starks Fleet Technology Specialist. We will walk you through live GPS tracking, idle fuel reduction, geofencing, and billing tailored to your fleet.
                </p>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Full Name *</label>
                    <input 
                      ref={fullNameInputRef}
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Babatunde Lawal"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--ink)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '6px',
                        color: 'var(--white)',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="name@company.com"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: 'var(--ink)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: 'var(--white)',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="+234 800 000 0000"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: 'var(--ink)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: 'var(--white)',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Company / Fleet Name</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Apex Express Haulage"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: 'var(--ink)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: 'var(--white)',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Fleet Size</label>
                      <select 
                        name="fleetSize" 
                        value={formData.fleetSize} 
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: 'var(--ink)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: 'var(--white)',
                          fontFamily: 'inherit'
                        }}
                      >
                        <option value="1 vehicle">1 vehicle (Personal / Owner)</option>
                        <option value="2-10 vehicles">2 - 10 vehicles</option>
                        <option value="10-50 vehicles">10 - 50 vehicles</option>
                        <option value="50+ vehicles">50+ vehicles (Enterprise Fleet)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--ash)', marginBottom: '4px' }}>Primary Objective / Notes</label>
                    <textarea 
                      name="message" 
                      rows="3" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Tell us what you want to achieve (e.g., fuel idling cut, distance billing, GPS tracker integration)..."
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--ink)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '6px',
                        color: 'var(--white)',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold" 
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '14px' }}
                  >
                    <span>Request TransIT Demo Schedule</span>
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(39, 201, 63, 0.2)', color: '#27c93f', display: 'grid', placeItems: 'center', fontSize: '2rem', margin: '0 auto 1.5rem auto' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', fontFamily: 'var(--ff-display)', marginBottom: '0.5rem' }}>
                  Demo Request Received!
                </h3>
                <p style={{ color: 'var(--ash2)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you, <strong style={{ color: 'var(--white)' }}>{formData.fullName}</strong>. A Starks Fleet Technology Specialist will reach out to <span style={{ color: 'var(--gold)' }}>{formData.phone || formData.email}</span> within 15 minutes to schedule your live walkthrough.
                </p>
                <button 
                  onClick={resetForm}
                  className="btn btn-gold"
                  style={{ padding: '12px 28px' }}
                >
                  <span>Done</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
