import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#112136",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Servicechai",
    default: "Servicechai | CX Management, BPM & GCC from Bangladesh",
  },
  description:
    "Omnichannel customer care, agentic AI and back-office operations from Bangladesh. COPC-compliant quality, ~10% attrition and up to 30% lower cost.",
  icons: {
    icon: "/assets/img/favicon-32.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
