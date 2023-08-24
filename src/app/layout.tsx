import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ConvexClientProvider from './ConvexClientProvider';
import localFont from 'next/font/local';
import clsx from 'clsx';

export const metadata = {
  title: 'AI OFFICE',
  description: 'A virtual office with some familiar characters',
};

const fontDisplay = localFont({
  src: '../../public/assets/fonts/upheaval_pro.ttf',
  variable: '--font-display',
});
const fontBody = localFont({
  src: '../../public/assets/fonts/vcr_osd_mono.ttf',
  variable: '--font-body',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <html lang="en">
        <head>
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        <meta content="AI Office" property="og:title"/>
        <meta content="An office simulatiion with some familiar AI employees..." property="og:description"/>
        <meta content="https://ai-office.fly.dev/assets/thumbnail.jpg" property="og:image"/>
        <meta content="AI Office" property="twitter:title"/>
        <meta content="An office simulatiion with some familiar AI employees..." property="twitter:description"/>
        <meta content="https://ai-office.fly.dev/assets/thumbnail.jpg" property="twitter:image"/>
        <meta property="og:type" content="website"/><meta content="summary_large_image" name="twitter:card"/>
        </head>
          <body className={clsx(fontDisplay.variable, fontBody.variable)}>{children}</body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
