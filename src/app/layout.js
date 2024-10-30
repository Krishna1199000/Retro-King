import { Inter, Dela_Gothic_One, Tiny5 } from "next/font/google";
import "./globals.css";

const LogoFont = Tiny5({
  subsets: ["latin"],
  variable: "--logo-font",
  weight: "400",
});

const InterBodyFont = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});

const DelaHeadingFont = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--heading-font",
  weight: "400",
});

export const metadata = {
  title: "Retro King",
  description:
    " A retro game store to experience the classic gaming experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${LogoFont.variable} ${InterBodyFont.variable} ${DelaHeadingFont.variable} antialiased bg-main`}
      >
        {children}
      </body>
    </html>
  );
}
