import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/(landing-page)/components/Header";
import Footer from "@/app/(landing-page)/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "George's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-900 text-slate-50`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <div className="mt-7 md:mt-15 flex-1">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>

  );
}
