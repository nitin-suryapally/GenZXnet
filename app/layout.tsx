import type { Metadata } from "next";
import "./globals.css";
import ScrollBar from "./_components/scrollbar/ScrollBar";
import Header from "./_components/header/Header";
import { Merriweather, Montserrat } from "next/font/google";
import Footer from "./_components/footer/Footer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const monserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GenZNext ",
    default: "GenZNext",
    absolute: "GenZNext | Consulting Services to Empower Your Business Goals",
  },
  description:
    "GenzNext is a premier Information Technology organization dedicated to driving exceptional value and growth through innovative solutions and unparalleled expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${merriweather.variable} ${monserrat.variable} antialiased`}
      >
        <ScrollBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
