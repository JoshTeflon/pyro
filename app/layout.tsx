import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";

export const metadata: Metadata = {
  title: "ii6 pyro",
  description: "Official website of ii6 pyro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
