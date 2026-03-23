import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/custom/Provider";

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
    icon: "/assets/icon.png",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
