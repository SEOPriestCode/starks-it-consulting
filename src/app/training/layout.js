export const metadata = {
  title: 'Starks Learning Workspace & Practice Labs | Developer Training & Waitlist',
  description: 'Hands-on software engineering training commences soon. Join the priority waitlist at learn.starks.com.ng to be notified first and secure exclusive early-bird tuition discounts. Featuring the 6-Month Intensive Frontend Practice Lab.',
  keywords: [
    'software engineering training Nigeria',
    'frontend practice lab Lagos',
    'coding academy Nigeria waitlist',
    'learn React Nigeria discount',
    'interactive browser IDE practice',
    'corporate IT training Lagos',
    'Starks learning workspace',
    'web development course Nigeria early access',
    'full stack bootcamp Lagos 2026'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/training',
  },
  openGraph: {
    title: 'Starks Learning Workspace & Practice Labs | Priority Waitlist Open',
    description: 'Training commences soon. Join the waitlist at learn.starks.com.ng for first-to-know notification and exclusive early-bird discount advantages before public launch.',
    url: 'https://starks.com.ng/training',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/team-developer.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer coding in Starks Learning Workspace Practice Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starks Training & Frontend Practice Lab | Join Priority Waitlist',
    description: 'Hands-on software engineering training commencing soon. Secure early-bird discount advantages before public release.',
    images: ['/team-developer.jpg'],
  },
};

export default function TrainingLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Frontend Practice Lab',
        description: '6 Months Intensive Training in modern frontend engineering. In-browser IDE practice labs, automated test verification, real-world portfolio capstones, and senior engineer code reviews.',
        provider: {
          '@type': 'Organization',
          name: 'Starks IT Consulting',
          sameAs: 'https://starks.com.ng'
        },
        url: 'https://starks.com.ng/training',
        courseMode: 'Online Interactive Browser Lab + Capstone Projects',
        educationalCredentialAwarded: 'Starks Verified Developer Certificate',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online Interactive Lab',
          courseWorkload: 'P6M',
          description: '6 Months Intensive Training from Beginner to Advance'
        },
        offers: {
          '@type': 'Offer',
          category: 'Professional Software Engineering',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/PreOrder',
          url: 'https://learn.starks.com.ng',
          description: 'Early-bird discount advantage and priority notification available exclusively to waitlist members before public release.'
        }
      },
      {
        '@type': 'EducationalOccupationalProgram',
        name: 'Starks Developer Upskilling & Academy Tracks',
        description: 'Professional engineering programs covering Frontend Practice Labs, Full-Stack Software Engineering, Cloud Architecture, and Corporate IT Department Upskilling.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Starks IT Consulting Academy',
          url: 'https://starks.com.ng/training'
        },
        timeToComplete: 'P6M',
        occupationalCategory: '15-1252.00 - Software Developers'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://starks.com.ng'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Training & Practice Labs',
            item: 'https://starks.com.ng/training'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When does the Starks software training commence?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Trainings commence soon and the official launch will be made public. Waitlist members on learn.starks.com.ng will receive private announcement notifications first before the general public.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the advantage of joining the waitlist at learn.starks.com.ng?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Joining the waitlist guarantees that you receive the launch notification first and locks in an exclusive early-bird tuition discount advantage that will not be available once public admissions open.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the duration and format of the Frontend Practice Lab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Frontend Practice Lab is a 6 Months Intensive Training designed from Beginner to Advance, combining an interactive in-browser IDE with progressive test-checked exercises and production capstone projects.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who conducts the code reviews and mentorship?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unlike automated bootcamps, your capstone projects and pull requests are reviewed by active senior consultants and practice leads from Starks IT Consulting.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can corporate engineering teams enroll?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We offer Corporate Engineering Upskilling cohorts customized to enterprise stacks, legacy modernization roadmaps, and delivery timelines.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
