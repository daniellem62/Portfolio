import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codewithdani.com"),
  title: "Danielle Mcloughlin — Software Engineer",
  description:
    "I’m Danielle, a software engineer who found her way back to tech through curiosity, problem-solving, and a love of understanding how things work.",
  openGraph: {
    title: "Danielle Mcloughlin — Software Engineer",
    description:
      "A personal portfolio about software, problem-solving, and the long way back to tech.",
    url: "https://codewithdani.com",
    siteName: "Danielle Mcloughlin",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: [{ url: "/dmfavicon.svg", type: "image/svg+xml" }],
    apple: "/dmfavicon-apple.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
