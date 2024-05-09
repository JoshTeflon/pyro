import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyro",
  description: "Pyro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto w-full max-w-7xl px-4 lg:px-6 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
