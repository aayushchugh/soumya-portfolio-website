import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ThemeProvider } from "next-themes";

const JostFont = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${JostFont.className} antialiased from-white via-[#f7f5f7] to-[#e4ddee] bg-gradient-to-br`}
        >
          <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
