import { Jost } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import config from "@/lib/config";

const JostFont = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: config.basicDetails.name,
  description: config.basicDetails.about,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${JostFont.className} antialiased from-white via-[#f7f5f7] to-[#e4ddee] bg-gradient-to-br`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastContainer position="top-right" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
