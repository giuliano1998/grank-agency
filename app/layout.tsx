import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRank Agency | Luxury Real Estate Digital Marketing",
  description:
    "Boutique digital marketing agency for luxury real estate in South Florida. E-blast campaigns, social media, landing pages, Meta ads, SEO & lead automation.",
  keywords:
    "luxury real estate marketing, South Florida, digital marketing agency, e-blast, meta ads, SEO",
  openGraph: {
    title: "GRank Agency",
    description:
      "Digital marketing for South Florida's most iconic developments.",
    url: "https://grankagency.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
