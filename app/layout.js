import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Find-My-Item",
  description: "Use it to find your lost item",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}>
  <SessionWrapper>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  </SessionWrapper>
</body>

    </html>
  );
}
