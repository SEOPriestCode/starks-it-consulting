export const metadata = {
  title: 'Starks Learning Workspace & Practice Labs | Enrol Now – Cohort Admissions',
  description: 'Enrolment for this cohort starts 25th November and ends 12th December. Early birds get tuition discounts. Class starts 14th December. Enrol at learn.starks.com.ng and have immediate access to your student portal to start learning.',
  keywords: [
    'software engineering training Nigeria',
    'frontend practice lab Lagos',
    'coding academy Nigeria enrolment',
    'enrol software engineering Lagos',
    'student portal start learning',
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
    title: 'Starks Learning Workspace & Practice Labs | Enrolment Open',
    description: 'Enrolment for this cohort starts 25th November and ends 12th December. Early birds get tuition discounts. Classes start 14th December. Enrol at learn.starks.com.ng and access your student portal.',
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
    title: 'Starks Training & Frontend Practice Lab | Enrol Now',
    description: 'Cohort enrolment open 25th Nov – 12th Dec. Early birds get discount. Classes start 14th Dec. Enroll and access your student portal to start learning.',
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
          availability: 'https://schema.org/InStock',
          url: 'https://learn.starks.com.ng',
          description: 'Cohort enrolment runs 25th November to 12th December with early bird tuition discounts. Classes start 14th December. Enroll for student portal access and start learning.'
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
            name: 'When does cohort enrolment start and when do classes begin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enrolment for this cohort starts 25th November and ends 12th December. Early birds get exclusive tuition discounts. Classes officially start on 14th December. Enroll at learn.starks.com.ng for instant student portal access.'
            }
          },
          {
            '@type': 'Question',
            name: 'What advantages do early birds receive and what happens after enrolling?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Early birds who enrol between 25th November and 12th December lock in discounted tuition. Upon enrollment, you gain immediate access to your student portal so you can explore coursework and start learning.'
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
