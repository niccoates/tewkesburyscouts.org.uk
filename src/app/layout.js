import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tewkesbury Scouts - Empowering Young People",
    template: "%s | Tewkesbury Scouts",
  },
  description: "Tewkesbury Scouts offers fun, challenging adventures for young people aged 4-25, helping them learn new skills and make a positive impact in their communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="870108b77523d9d"
          strategy="afterInteractive"
          async
        />
        <Script
          src="https://status.tewkesburyscouts.org.uk/script.js"
          async
          defer
        />
      </body>
    </html>
  );
}