import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import PaintSwitcher from "@/components/PaintSwitcher";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Website Design, Social Media, and App Development Services | DesignDot",
  description: "Get the top website design, social media marketing, and app development services at DesignDot. Contact us today for the best website designer near you.",
  keywords: "Internet of Things (IOT), Aritificial Intelligence (AI), Application Development, Digital Media Marketing, Media Planning & Buying, Corporate Communication, Corporate Brand Identity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-white selection:bg-accent selection:text-bg-dark">
        <ScrollProvider>
          <CustomCursor />
          <PaintSwitcher />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
