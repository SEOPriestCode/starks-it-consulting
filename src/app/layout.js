import { Playfair_Display, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

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
  title: 'Starks IT Consulting',
  description: 'Enterprise technology consulting built for the African market and trusted globally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
