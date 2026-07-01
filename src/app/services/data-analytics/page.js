import Link from 'next/link';

export const metadata = {
  title: 'Data Engineering & Analytics Nigeria | Business Intelligence',
  description: 'Expert data engineering and analytics services in Nigeria. Data warehouses, dashboards, and business intelligence solutions for businesses in Lagos, Abuja, and across Nigeria.',
  keywords: 'data analytics Nigeria, business intelligence Nigeria, data engineering Nigeria, Power BI Nigeria, data visualization Nigeria, data analytics Abuja, BI solutions Nigeria, data science Nigeria',
};

export default function DataAnalytics() {
  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src="/service-generic.jpg" alt="Black data analyst working on business intelligence dashboard" />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">Data Engineering & Analytics</h2>
          <p className="subtitle" data-reveal data-delay="2">Transform data into strategic intelligence</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: `
              <p>Our Data Engineering & Analytics services transform raw data into strategic intelligence. We build data warehouses, real-time streaming pipelines, and interactive dashboards that empower leadership to make evidence-based decisions at speed and with confidence.</p>
              
              <h3>Analytics Services</h3>
              <ul>
                <li><strong>Data Warehousing:</strong> Centralized data storage and management</li>
                <li><strong>Real-time Pipelines:</strong> Streaming data processing and integration</li>
                <li><strong>Business Intelligence:</strong> Interactive dashboards and reporting</li>
                <li><strong>Data Visualization:</strong> Power BI, Tableau, and custom solutions</li>
                <li><strong>Predictive Analytics:</strong> Machine learning and forecasting</li>
                <li><strong>Data Governance:</strong> Quality, security, and compliance</li>
              </ul>
              
              <h3>Data-Driven Decisions</h3>
              <p>In today's competitive landscape, data is your most valuable asset. Our solutions help you unlock insights that drive growth, efficiency, and innovation.</p>
            `}}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            <span className="stag">Power BI</span>
            <span className="stag">Tableau</span>
            <span className="stag">Snowflake</span>
            <span className="stag">dbt</span>
            <span className="stag">Kafka</span>
            <span className="stag">Spark</span>
          </div>

          <div style={{ 
            background: 'var(--ink)', 
            padding: '2.5rem', 
            borderLeft: '3px solid var(--gold)',
            marginBottom: '3rem'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--ff-display)', 
              fontSize: '1.5rem', 
              color: 'var(--white)', 
              marginBottom: '1rem' 
            }}>
              Ready to Get Started?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text)', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Contact us to discuss how Data Analytics can help your business.
            </p>
            <Link 
              href="/contact" 
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: 'var(--gold)',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '4px',
                transition: 'all 0.3s'
              }}
            >
              Contact Us
            </Link>
          </div>

          <Link 
            href="/services" 
            style={{ 
              color: 'var(--gold)', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
