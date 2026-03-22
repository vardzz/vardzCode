import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vardz | Cloud Enthusiast",
  description: "Portfolio of Jericho Varde, a passionate Software Engineer & Cloud Enthusiast.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-black min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
