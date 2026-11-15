import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
<<<<<<< HEAD
=======
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
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

export const metadata: Metadata = {
  title: "Rindi Baskara Ujianto | Data Analyst",
  description:
    "Portfolio of Rindi Baskara Ujianto, a Data Analyst with supply chain operations experience.",
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
<<<<<<< HEAD
=======
        <ScrollProgress />
        <CursorGlow />
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}