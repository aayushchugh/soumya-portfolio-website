import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
			<html lang="en">
				<body
					className={`${JostFont.className} antialiased from-white via-[#f7f5f7] to-[#e4ddee] bg-gradient-to-br`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
