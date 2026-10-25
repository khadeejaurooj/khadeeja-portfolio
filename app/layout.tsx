import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Khadeeja Urooj | Software Engineer",
  description:
    "Khadeeja Urooj is a software engineer in Islamabad building web, mobile and AI-integrated apps with Next.js, React, Node.js, Python, Flutter, Android and AWS.",
  openGraph: {
    title: "Khadeeja Urooj | Software Engineer",
    description:
      "Full-stack developer working on web, mobile and AI-integrated apps. Selected projects and screenshots.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5ff" },
    { media: "(prefers-color-scheme: dark)", color: "#060a18" },
  ],
};

// Runs before paint so the saved/system theme is applied without a flash.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(!t){t='dark'}d.dataset.theme=t}catch(e){d.dataset.theme='dark'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
