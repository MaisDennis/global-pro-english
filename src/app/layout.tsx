// src/app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import React from 'react';

import ReCaptchaScriptLoader from '../components/ReCaptchaScriptLoader';
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // You can adjust the weights as needed
  display: 'swap', // This ensures the font displays as soon as it loads
});

export const metadata: Metadata = {
  // title: 'English for Corporate Professionals',
  // description: 'Learn professional English tailored for corporate success.',
  title: {
    default: 'Global Pro English',
    template: "%s - Global Pro English"
  },
    description: 'Learn professional English tailored for corporate success.',
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReCaptchaScriptLoader />
        {children}
      </body>
    </html>
  );
}
