import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WorkspaceProvider } from "@/components/providers/WorkspaceProvider";
import { MainWorkspace } from "@/components/workspace/MainWorkspace";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://rdbaskara.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rindi Baskara Ujianto | Data Analyst & Supply Chain Operations",
    template: "%s | Rindi Baskara Ujianto",
  },
  description:
    "Portfolio of Rindi Baskara Ujianto, a Data Analyst with supply chain and operations experience. Focused on inventory accuracy, operational efficiency, and data-driven decision-making.",
  keywords: [
    "Rindi Baskara Ujianto",
    "Data Analyst",
    "Supply Chain Operations",
    "Inventory Management",
    "Data Analytics",
    "Business Reporting",
    "Tableau",
    "Python",
    "SQL",
  ],
  authors: [
    {
      name: "Rindi Baskara Ujianto",
    },
  ],
  creator: "Rindi Baskara Ujianto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rindi Baskara Ujianto Portfolio",
    title: "Rindi Baskara Ujianto | Data Analyst & Supply Chain Operations",
    description:
      "Portfolio of Rindi Baskara Ujianto, a Data Analyst with supply chain and operations experience. Focused on inventory accuracy, operational efficiency, and data-driven decision-making.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rindi Baskara Ujianto — Data Analyst and Supply Chain Operations Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rindi Baskara Ujianto | Data Analyst & Supply Chain Operations",
    description:
      "Portfolio of Rindi Baskara Ujianto, a Data Analyst with supply chain and operations experience.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />

          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <WorkspaceProvider>
            <main id="main-content">
              <MainWorkspace />
            </main>
          </WorkspaceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}