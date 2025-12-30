import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileMenuToggle from "@/components/MobileMenuToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--body-font",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--heading-font",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--secondary-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pro Fit Bathroom and Kitchen - Professional Renovations in London",
  description: "Expert bathroom and kitchen renovation services in London and surrounding areas. Quality craftsmanship, professional service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" async></script>
      </head>
      <body>
        <MobileMenuToggle />
        <Header />
        {children}
        <FloatingContact />
        <Footer />
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  )
}
