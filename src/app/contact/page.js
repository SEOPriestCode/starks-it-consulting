'use client';

import { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Contact | Starks IT Consulting</title>
      </Head>
      <div id="contact-wrap">
        <div className="contact-left">
          <div className="contact-left-bg">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70&auto=format&fit=crop" alt="Lagos city skyline" />
          </div>
          <div className="contact-left-inner">
            <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Get in Touch</span></div>
            <h2 className="title" data-reveal data-delay="1" style={{ fontSize: '2.4rem' }}>Let&apos;s start a <em>conversation.</em></h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--ash2)', fontWeight: 300, lineHeight: 1.75, marginBottom: '2.5rem' }} data-reveal data-delay="2">Whether you have a fully-formed brief or just a challenge worth solving, we&apos;d like to hear from you. The first conversation is always free and carries no obligation.</p>
            <div className="cd" data-reveal>
              <div className="cd-ico">📍</div>
              <div><div className="cd-lbl">Head Office</div><div className="cd-val">16 Shagamu Avenue, Ilupeju,<br />Lagos, Nigeria 100252</div></div>
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
