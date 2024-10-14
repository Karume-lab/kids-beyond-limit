import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Fira_Sans } from "next/font/google";
import { Footer, Header } from "./components";

const firaSans = Fira_Sans({
  weight: ['200', '400', '700'], // Specify the font weights you want to load
  subsets: ['latin'],     // Character subsets you need
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={firaSans.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


export default RootLayout;
