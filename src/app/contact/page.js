'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    brief: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!formData.fname.trim()) { newErrors.fname = true; valid = false; }
    if (!formData.lname.trim()) { newErrors.lname = true; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = true; valid = false; }
    if (!formData.company.trim()) { newErrors.company = true; valid = false; }
    if (!formData.service) { newErrors.service = true; valid = false; }
    if (formData.brief.trim().length < 10) { newErrors.brief = true; valid = false; }

    setErrors(newErrors);

    if (valid) {
      setSuccess(true);
    }
  };

  return (
    <div className="page active">
      <div id="contact-wrap">
        <div className="contact-left">
          <div className="contact-left-bg">
            <img src="/home-cta.jpg" alt="Lagos city skyline" />
          </div>
          <div className="contact-left-inner">
            <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Starks IT · Lagos Office</span></div>
            <h1 className="title" data-reveal data-delay="1" style={{ fontSize: '2.4rem' }}>Consult with <em>Starks IT</em> in Lagos.</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--ash2)', fontWeight: 300, lineHeight: 1.75, marginBottom: '2.5rem' }} data-reveal data-delay="2">Whether you require enterprise IT consulting, cloud infrastructure, cybersecurity auditing, or managed IT services in Lagos and beyond, our senior partners are ready to assist. The initial consultation is completely complimentary.</p>
                        <div className="contact-xmas-banner" data-reveal style={{
              margin: '1.5rem 0',
              padding: '1.25rem',
              background: 'rgba(200, 168, 75, 0.1)',
              border: '1px solid rgba(200, 168, 75, 0.35)',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <span>🎄</span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '1px' }}>CHRISTMAS CAME EARLY</span>
              </div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.08rem', color: 'var(--white)', marginBottom: '4px' }}>
                Get Huge Discounts From Every Of Our Services
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--ash2)', lineHeight: 1.5, marginBottom: '12px' }}>
                Celebrate the season with exclusive savings across all our enterprise IT solutions. Send a WhatsApp message to claim your discount immediately.
              </p>
              <a
                href="https://wa.me/2348084026140?text=Hello%20Starks%20IT%2C%20Christmas%20came%20early!%20I%20would%20like%20to%20get%20a%20huge%20discount%20from%20every%20of%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  padding: '9px 15px',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                }}
              >
                <span>Send WhatsApp Message on +234 808 402 6140 ↗</span>
              </a>
            </div>

            <div className="cd" data-reveal>
              <div className="cd-ico">📍</div>
              <div><div className="cd-lbl">Head Office</div><div className="cd-val">16 Shagamu Avenue, Ikeja,<br />Lagos, Nigeria 100271</div></div>
            </div>
            <div className="cd" data-reveal data-delay="1">
              <div className="cd-ico">📞</div>
              <div><div className="cd-lbl">Telephone</div><div className="cd-val">+234 (0)816 561 8476</div></div>
            </div>
            <div className="cd" data-reveal data-delay="2">
              <div className="cd-ico">✉</div>
              <div><div className="cd-lbl">Email</div><div className="cd-val">info@starks.com.ng</div></div>
            </div>
            <div className="cd" data-reveal data-delay="3">
              <div className="cd-ico">🕐</div>
              <div><div className="cd-lbl">Business Hours</div><div className="cd-val">Mon – Fri, 8:00am – 6:00pm WAT<br />Emergency support: 24/7</div></div>
            </div>
            <div className="contact-map-placeholder" data-reveal>
              <div className="map-grid-bg"></div>
              <div className="map-dot"></div>
              <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--ash)', letterSpacing: '1px' }}>IKEJA · LAGOS</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Project Enquiry</span></div>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '2rem' }} data-reveal data-delay="1">Tell us about<br />your <em>project</em></h3>
          <div className="cform" data-reveal data-delay="2">
            
            {/* SUCCESS STATE */}
            {success ? (
              <div className="form-success show">
                <span className="fs-icon">✓</span>
                <div className="fs-title">Message Received</div>
                <p className="fs-sub">Thank you for reaching out. A member of our team will be in touch within 4–8 business hours.<br /><br />In the meantime, feel free to explore our <Link href="/cases" style={{ color: 'var(--gold)' }}>case studies</Link> or <Link href="/blog" style={{ color: 'var(--gold)' }}>latest insights</Link>.</p>
              </div>
            ) : (
              /* FORM */
              <form id="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="fg">
                    <label>First Name</label>
                    <input type="text" name="fname" placeholder="Michael" value={formData.fname} onChange={handleChange} className={errors.fname ? 'form-error' : ''} />
                    {errors.fname && <span className="field-err show">Please enter your first name.</span>}
                  </div>
                  <div className="fg">
                    <label>Last Name</label>
                    <input type="text" name="lname" placeholder="Omotayo" value={formData.lname} onChange={handleChange} className={errors.lname ? 'form-error' : ''} />
                    {errors.lname && <span className="field-err show">Please enter your last name.</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="fg">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="mike@company.com" value={formData.email} onChange={handleChange} className={errors.email ? 'form-error' : ''} />
                    {errors.email && <span className="field-err show">Please enter a valid email address.</span>}
                  </div>
                  <div className="fg">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="+234 ..." value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="fg">
                  <label>Company</label>
                  <input type="text" name="company" placeholder="Your company name" value={formData.company} onChange={handleChange} className={errors.company ? 'form-error' : ''} />
                  {errors.company && <span className="field-err show">Please enter your company name.</span>}
                </div>
                <div className="fg">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={errors.service ? 'form-error' : ''}>
                    <option value="">Select a service...</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                    <option value="Cybersecurity & Compliance">Cybersecurity & Compliance</option>
                    <option value="Data Engineering & Analytics">Data Engineering & Analytics</option>
                    <option value="IT Strategy & Digital Transformation">IT Strategy & Digital Transformation</option>
                    <option value="Managed IT Services">Managed IT Services</option>
                    <option value="Consultation">Not sure — I need a consultation</option>
                  </select>
                  {errors.service && <span className="field-err show">Please select a service.</span>}
                </div>
                <div className="fg">
                  <label>Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select a range...</option>
                    <option value="Under $10k">Under $10,000</option>
                    <option value="$10k - $50k">$10,000 – $50,000</option>
                    <option value="$50k - $250k">$50,000 – $250,000</option>
                    <option value="$250k+">$250,000+</option>
                    <option value="Discuss">Prefer to discuss</option>
                  </select>
                </div>
                <div className="fg">
                  <label>Project Brief</label>
                  <textarea name="brief" placeholder="Describe your challenge, goals, and any key timelines or constraints..." value={formData.brief} onChange={handleChange} className={errors.brief ? 'form-error' : ''}></textarea>
                  {errors.brief && <span className="field-err show">Please tell us a little about your project.</span>}
                </div>
                <button type="submit" className="submit-btn"><span>Send Enquiry →</span></button>
                <p style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: '1rem', textAlign: 'center' }}>All submissions are treated with strict confidentiality. We typically respond within 4–8 business hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
