import Link from 'next/link';

const servicesData = {
  'managed-it-services': {
    title: 'Managed IT Services Nigeria | 24/7 IT Support & Monitoring',
    description: 'Professional managed IT services in Nigeria. 24/7 monitoring, helpdesk support, and proactive maintenance for Lagos businesses.',
    keywords: 'managed IT services Nigeria, IT support company Lagos, business IT support Lagos, IT outsourcing Nigeria, IT services Abuja, managed services provider Nigeria',
    heading: 'Managed IT Services',
    subheading: '24/7 proactive IT support and infrastructure monitoring',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Managed IT Services provide comprehensive 24/7 support for your entire IT infrastructure. We operate as your extended IT department, ensuring your systems are always available, secure, and performing at optimal levels.</p>
      
      <h3>What We Offer</h3>
      <ul>
        <li><strong>24/7 Helpdesk Support:</strong> Round-the-clock technical assistance for your team</li>
        <li><strong>Proactive Monitoring:</strong> Real-time infrastructure monitoring and issue resolution</li>
        <li><strong>SLA-Backed Services:</strong> Guaranteed response times and uptime commitments</li>
        <li><strong>Patch Management:</strong> Automated updates and security patches</li>
        <li><strong>Backup & Disaster Recovery:</strong> Comprehensive data protection strategies</li>
        <li><strong>Vendor Management:</strong> Single point of contact for all IT vendors</li>
      </ul>
      
      <h3>Why Choose Us</h3>
      <p>As a leading IT consulting company in Lagos, we understand the unique challenges faced by Nigerian businesses. Our team of certified professionals delivers enterprise-grade support tailored to your specific needs, ensuring minimal downtime and maximum productivity.</p>
    `,
    tags: ['Helpdesk', 'SLA-backed', 'Monitoring', 'ITSM', 'ITIL', '24/7 Support']
  },
  'it-support-services': {
    title: 'IT Support Services Nigeria | Professional Technical Support',
    description: 'Reliable IT support services in Nigeria. On-site and remote technical support for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'IT support company Lagos, IT support services Nigeria, technical support Nigeria, business IT support Lagos, IT support Abuja, computer support Nigeria',
    heading: 'IT Support Services',
    subheading: 'On-site and remote technical support when you need it',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our IT Support Services deliver fast, reliable technical assistance to keep your business running smoothly. Whether you need on-site support or remote troubleshooting, our expert team is ready to help.</p>
      
      <h3>Our Support Services</h3>
      <ul>
        <li><strong>Remote Support:</strong> Instant assistance via secure remote access</li>
        <li><strong>On-Site Support:</strong> Technicians dispatched to your location</li>
        <li><strong>Hardware Support:</strong> Installation, maintenance, and repair</li>
        <li><strong>Software Support:</strong> Application troubleshooting and optimization</li>
        <li><strong>Network Support:</strong> Connectivity and infrastructure assistance</li>
        <li><strong>User Training:</strong> Staff training and documentation</li>
      </ul>
      
      <h3>Response Times</h3>
      <p>We guarantee rapid response times based on your service level agreement, ensuring critical issues are resolved quickly to minimize business impact.</p>
    `,
    tags: ['Remote Support', 'On-Site', 'Hardware', 'Software', 'Network', 'Training']
  },
  'cloud-solutions': {
    title: 'Cloud Solutions Nigeria | Cloud Migration Services',
    description: 'Expert cloud solutions and migration services in Nigeria. AWS, Azure, and GCP cloud infrastructure for Nigerian businesses in Lagos and Abuja.',
    keywords: 'cloud migration services Nigeria, cloud solutions Nigeria, cloud computing Nigeria, AWS Nigeria, Azure Nigeria, cloud services Abuja, cloud hosting Nigeria',
    heading: 'Cloud Solutions',
    subheading: 'Scalable, secure cloud infrastructure and migration',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Cloud Solutions help Nigerian businesses leverage the power of cloud computing. From initial migration to ongoing management, we ensure your cloud environment is optimized for performance, security, and cost-efficiency.</p>
      
      <h3>Cloud Services</h3>
      <ul>
        <li><strong>Cloud Migration:</strong> Seamless transition from on-premise to cloud</li>
        <li><strong>Multi-Cloud Strategy:</strong> AWS, Azure, and GCP expertise</li>
        <li><strong>Cloud Architecture:</strong> Scalable and resilient infrastructure design</li>
        <li><strong>Cost Optimization:</strong> Right-sizing and resource management</li>
        <li><strong>Security & Compliance:</strong> Cloud-native security implementations</li>
        <li><strong>Disaster Recovery:</strong> Cloud-based backup and recovery solutions</li>
      </ul>
      
      <h3>Why Cloud?</h3>
      <p>Cloud computing offers Nigerian businesses scalability, flexibility, and cost savings. Our team ensures your cloud journey is smooth, secure, and aligned with your business objectives.</p>
    `,
    tags: ['AWS', 'Azure', 'GCP', 'Migration', 'Architecture', 'Security']
  },
  'cybersecurity-services': {
    title: 'Cybersecurity Services Nigeria | IT Security Company',
    description: 'Professional cybersecurity services in Nigeria. Penetration testing, compliance, and security monitoring for Lagos, Abuja, and Nigerian businesses.',
    keywords: 'cybersecurity services Nigeria, IT security Nigeria, penetration testing Nigeria, network security Nigeria, data protection Nigeria, cyber security Abuja, information security Nigeria',
    heading: 'Cybersecurity Services',
    subheading: 'Comprehensive security and compliance solutions',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Cybersecurity Services protect your business from evolving threats. As a leading IT security company in Nigeria, we provide comprehensive security solutions tailored to your specific risk profile and compliance requirements.</p>
      
      <h3>Security Services</h3>
      <ul>
        <li><strong>Penetration Testing:</strong> Identify vulnerabilities before attackers do</li>
        <li><strong>Security Audits:</strong> Comprehensive security assessments</li>
        <li><strong>Compliance:</strong> NDPR, GDPR, PCI-DSS compliance support</li>
        <li><strong>24/7 SOC Monitoring:</strong> Continuous threat detection and response</li>
        <li><strong>Zero Trust Architecture:</strong> Modern security framework implementation</li>
        <li><strong>Incident Response:</strong> Rapid response to security breaches</li>
      </ul>
      
      <h3>Protect Your Business</h3>
      <p>Cyber threats are constantly evolving. Our certified security professionals use the latest tools and methodologies to protect your data, systems, and reputation.</p>
    `,
    tags: ['Pen Testing', 'NDPR', 'SOC 24/7', 'Zero Trust', 'ISO 27001', 'Compliance']
  },
  'website-development': {
    title: 'Website Development Nigeria | Professional Web Design',
    description: 'Expert website development services in Nigeria. Custom web design and development for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'website development Nigeria, web design Nigeria, web development company Lagos, website design Nigeria, web design Abuja, website developer Nigeria, web design services Nigeria',
    heading: 'Website Development',
    subheading: 'Modern, responsive websites that convert',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Website Development services create stunning, high-performance websites that drive results. From corporate sites to e-commerce platforms, we build web experiences that engage visitors and convert them into customers.</p>
      
      <h3>Web Development Services</h3>
      <ul>
        <li><strong>Custom Design:</strong> Unique, brand-aligned website designs</li>
        <li><strong>Responsive Development:</strong> Mobile-first, cross-browser compatible</li>
        <li><strong>E-commerce:</strong> Online stores with payment integration</li>
        <li><strong>CMS Integration:</strong> WordPress, Contentful, and custom CMS</li>
        <li><strong>Performance Optimization:</strong> Fast-loading, SEO-friendly sites</li>
        <li><strong>Maintenance & Support:</strong> Ongoing updates and security</li>
      </ul>
      
      <h3>Why Professional Web Development?</h3>
      <p>Your website is often the first impression customers have of your business. We ensure it's a positive one with modern design, seamless functionality, and optimal performance.</p>
    `,
    tags: ['React', 'Next.js', 'WordPress', 'E-commerce', 'Responsive', 'SEO']
  },
  'software-development': {
    title: 'Software Development Nigeria | Custom Software Solutions',
    description: 'Custom software development services in Nigeria. Bespoke applications and software solutions for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'software development Nigeria, custom software Nigeria, app development Nigeria, software company Lagos, software development Abuja, mobile app development Nigeria, custom software development Nigeria',
    heading: 'Software Development',
    subheading: 'Bespoke software solutions for your business',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Software Development services deliver custom applications engineered to your exact requirements. From internal tools to customer-facing platforms, we build software that scales with your business.</p>
      
      <h3>Development Services</h3>
      <ul>
        <li><strong>Custom Applications:</strong> Tailored software solutions</li>
        <li><strong>Web Applications:</strong> Modern, scalable web apps</li>
        <li><strong>Mobile Apps:</strong> iOS and Android development</li>
        <li><strong>API Development:</strong> RESTful APIs and integrations</li>
        <li><strong>ERP/CRM Systems:</strong> Business management platforms</li>
        <li><strong>SaaS Products:</strong> Software-as-a-Service solutions</li>
      </ul>
      
      <h3>Our Approach</h3>
      <p>We follow agile development methodologies with regular communication and iterative delivery. This ensures you get exactly what you need, with the flexibility to adapt as requirements evolve.</p>
    `,
    tags: ['Web Apps', 'Mobile', 'REST APIs', 'ERP/CRM', 'SaaS', 'Agile']
  },
  'network-infrastructure': {
    title: 'Network Infrastructure Nigeria | Network Setup Company',
    description: 'Professional network infrastructure services in Nigeria. Network design, setup, and maintenance for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'network infrastructure company Nigeria, network setup Nigeria, cabling Nigeria, network design Nigeria, IT infrastructure Nigeria, network installation Abuja, structured cabling Nigeria',
    heading: 'Network Infrastructure',
    subheading: 'Robust, scalable network design and implementation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Network Infrastructure services design and implement robust network solutions that form the backbone of your IT operations. From structured cabling to wireless networks, we ensure reliable connectivity throughout your organization.</p>
      
      <h3>Infrastructure Services</h3>
      <ul>
        <li><strong>Network Design:</strong> Scalable architecture planning</li>
        <li><strong>Structured Cabling:</strong> Fiber and copper cabling solutions</li>
        <li><strong>Wireless Networks:</strong> Wi-Fi design and implementation</li>
        <li><strong>Network Security:</strong> Firewalls, VPNs, and access control</li>
        <li><strong>Network Monitoring:</strong> Performance and availability tracking</li>
        <li><strong>Maintenance:</strong> Ongoing support and optimization</li>
      </ul>
      
      <h3>Why Professional Infrastructure?</h3>
      <p>A well-designed network is critical for business operations. Our certified engineers ensure your infrastructure is reliable, secure, and ready for future growth.</p>
    `,
    tags: ['Cabling', 'Wireless', 'Security', 'Switching', 'Routing', 'Monitoring']
  },
  'microsoft-365-solutions': {
    title: 'Microsoft 365 Consultants Nigeria | Office 365 Solutions',
    description: 'Expert Microsoft 365 consulting services in Nigeria. Deployment, migration, and support for Office 365 in Lagos, Abuja, and across Nigeria.',
    keywords: 'Microsoft 365 consultants Nigeria, Office 365 Nigeria, Microsoft 365 deployment Nigeria, cloud productivity Nigeria, Office 365 Abuja, Microsoft 365 services Nigeria, O365 Nigeria',
    heading: 'Microsoft 365 Solutions',
    subheading: 'Maximize productivity with Microsoft 365',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Microsoft 365 Solutions help Nigerian businesses leverage the full power of Microsoft's productivity suite. From deployment to ongoing management, we ensure your team gets the most out of these powerful tools.</p>
      
      <h3>Microsoft 365 Services</h3>
      <ul>
        <li><strong>Deployment & Migration:</strong> Smooth transition to Microsoft 365</li>
        <li><strong>Exchange Online:</strong> Professional email and calendaring</li>
        <li><strong>Teams Implementation:</strong> Collaboration and communication setup</li>
        <li><strong>SharePoint:</strong> Document management and intranets</li>
        <li><strong>Security Configuration:</strong> Data protection and compliance</li>
        <li><strong>Training & Support:</strong> User adoption and ongoing assistance</li>
      </ul>
      
      <h3>Benefits of Microsoft 365</h3>
      <p>Microsoft 365 enables modern work with cloud-based productivity tools, enhanced security, and seamless collaboration. Our experts ensure successful implementation and maximum ROI.</p>
    `,
    tags: ['Office 365', 'Teams', 'SharePoint', 'Exchange', 'OneDrive', 'Security']
  },
  'server-deployment': {
    title: 'Server Setup Company Nigeria | Server Deployment Services',
    description: 'Professional server deployment and management services in Nigeria. Server setup, configuration, and maintenance for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'server setup company Nigeria, server deployment Nigeria, server management Nigeria, IT infrastructure Nigeria, server installation Abuja, data center services Nigeria, server maintenance Nigeria',
    heading: 'Server Deployment & Management',
    subheading: 'Expert server setup and ongoing management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our Server Deployment & Management services ensure your critical infrastructure is properly configured, optimized, and maintained. From physical servers to virtual machines, we handle all aspects of server management.</p>
      
      <h3>Server Services</h3>
      <ul>
        <li><strong>Server Deployment:</strong> Hardware and software installation</li>
        <li><strong>Configuration:</strong> Optimized settings for your workload</li>
        <li><strong>Virtualization:</strong> VMware and Hyper-V implementations</li>
        <li><strong>Backup Solutions:</strong> Reliable data protection strategies</li>
        <li><strong>Monitoring:</strong> Performance and health tracking</li>
        <li><strong>Maintenance:</strong> Updates, patches, and optimization</li>
      </ul>
      
      <h3>Why Professional Server Management?</h3>
      <p>Servers are the heart of your IT infrastructure. Proper deployment and management ensure reliability, security, and performance for all your business applications.</p>
    `,
    tags: ['Deployment', 'Virtualization', 'Backup', 'Monitoring', 'VMware', 'Hyper-V']
  },
  'cctv-access-control': {
    title: 'CCTV & Access Control Systems Nigeria | Security Systems',
    description: 'Professional CCTV and access control systems in Nigeria. Security camera installation and access control for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'CCTV Nigeria, access control Nigeria, security systems Nigeria, surveillance Nigeria, security cameras Nigeria, CCTV installation Abuja, security solutions Nigeria, biometric access control Nigeria',
    heading: 'CCTV & Access Control Systems',
    subheading: 'Comprehensive physical security solutions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our CCTV & Access Control Systems provide comprehensive physical security for your premises. From surveillance cameras to biometric access control, we protect your people, assets, and information.</p>
      
      <h3>Security Solutions</h3>
      <ul>
        <li><strong>CCTV Installation:</strong> High-definition camera systems</li>
        <li><strong>Remote Monitoring:</strong> View footage from anywhere</li>
        <li><strong>Access Control:</strong> Biometric and card-based systems</li>
        <li><strong>Integration:</strong> Connected with your IT infrastructure</li>
        <li><strong>Maintenance:</strong> Regular servicing and support</li>
        <li><strong>Analytics:</strong> Advanced video analytics and reporting</li>
      </ul>
      
      <h3>Why Physical Security?</h3>
      <p>Physical security is a critical component of overall business security. Our solutions provide deterrence, detection, and documentation to protect your organization.</p>
    `,
    tags: ['CCTV', 'Access Control', 'Biometrics', 'Surveillance', 'Analytics', 'Integration']
  },
  'data-analytics': {
    title: 'Data Engineering & Analytics Nigeria | Business Intelligence',
    description: 'Expert data engineering and analytics services in Nigeria. Data warehouses, dashboards, and business intelligence solutions for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'data analytics Nigeria, business intelligence Nigeria, data engineering Nigeria, Power BI Nigeria, data visualization Nigeria, data analytics Abuja, BI solutions Nigeria, data science Nigeria',
    heading: 'Data Engineering & Analytics',
    subheading: 'Transform data into strategic intelligence',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
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
      <p>In today&apos;s competitive landscape, data is your most valuable asset. Our solutions help you unlock insights that drive growth, efficiency, and innovation.</p>
    `,
    tags: ['Power BI', 'Tableau', 'Snowflake', 'dbt', 'Kafka', 'Spark']
  },
  'it-strategy': {
    title: 'IT Strategy & Digital Transformation Nigeria | IT Consulting',
    description: 'Expert IT strategy and digital transformation consulting in Nigeria. Technology roadmaps and IT advisory services for businesses in Lagos, Abuja, and across Nigeria.',
    keywords: 'IT consulting company Nigeria, digital transformation Nigeria, IT strategy Nigeria, technology consulting Nigeria, CIO services Nigeria, IT consulting Abuja, digital transformation services Nigeria, IT advisory Nigeria',
    heading: 'IT Strategy & Digital Transformation',
    subheading: 'Executive-level technology advisory',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=70&auto=format&fit=crop',
    content: `
      <p>Our IT Strategy & Digital Transformation services provide executive-level advisory for organisations navigating technology change. We produce IT roadmaps, vendor selection frameworks, operating model redesign, and business cases that align technology investment to commercial outcomes.</p>
      
      <h3>Strategic Services</h3>
      <ul>
        <li><strong>IT Roadmapping:</strong> Long-term technology planning</li>
        <li><strong>Digital Transformation:</strong> End-to-end change management</li>
        <li><strong>Vendor Selection:</strong> Objective technology partner evaluation</li>
        <li><strong>Operating Model Design:</strong> IT organization optimization</li>
        <li><strong>Business Case Development:</strong> ROI analysis and justification</li>
        <li><strong>Enterprise Architecture:</strong> TOGAF and framework implementation</li>
      </ul>
      
      <h3>Strategic Advantage</h3>
      <p>Technology is only as valuable as the business outcomes it enables. We measure our success entirely in those terms, ensuring your IT investments deliver real commercial value.</p>
    `,
    tags: ['Roadmapping', 'Change Mgmt', 'Architecture', 'TOGAF', 'Strategy', 'Advisory']
  }
};

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: 'Service Not Found | Starks IT Consulting',
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return (
      <div className="page active">
        <div className="page-hero" style={{ background: 'var(--ink2)' }}>
          <div className="page-hero-inner">
            <h2 className="title">Service Not Found</h2>
            <p className="subtitle">The service you're looking for doesn't exist.</p>
            <Link href="/services" style={{ color: 'var(--gold)' }}>Return to Services</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page active">
      <div className="page-hero" style={{ background: 'var(--ink2)' }}>
        <div className="page-hero-bg">
          <img src={service.image} alt={service.heading} />
          <div className="page-hero-vignette"></div>
        </div>
        <div className="page-hero-inner">
          <div className="ph-num">SERVICES</div>
          <div className="label" data-reveal><div className="label-line"></div><span className="label-text">Service Detail</span></div>
          <h2 className="title" data-reveal data-delay="1">{service.heading}</h2>
          <p className="subtitle" data-reveal data-delay="2">{service.subheading}</p>
        </div>
      </div>

      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: service.content }}
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8',
              color: 'var(--text)',
              marginBottom: '3rem'
            }}
          />
          
          <div className="svc-tags2" style={{ marginBottom: '3rem' }}>
            {service.tags.map(tag => (
              <span key={tag} className="stag">{tag}</span>
            ))}
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
              Contact us to discuss how {service.heading} can help your business.
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
