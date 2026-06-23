import { Playfair_Display, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import { ThemeProvider } from '../context/ThemeContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--ff-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--ff-body',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--ff-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'IT Consulting Nigeria | Enterprise IT Services | Starks IT Consulting',
  description: 'Leading IT consulting company in Nigeria providing enterprise IT services, cloud solutions, cybersecurity, software development, and managed IT services for businesses in Lagos, Abuja, and across Africa.',
  keywords: 'IT consulting Nigeria, IT services Lagos, enterprise IT solutions, cloud consulting Nigeria, cybersecurity services, software development Nigeria, managed IT services Abuja, IT infrastructure, digital transformation',
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${jetbrains.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('starks_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
