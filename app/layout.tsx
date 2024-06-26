import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "COPO",
	description: "Mapping App",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<ClerkProvider
				appearance={{
					layout: {
						socialButtonsVariant: "iconButton",
						logoImageUrl: "/icons/yoom-logo.svg",
					},
					variables: {
						colorText: "#fff",
						colorPrimary: "#0E78F9",
						colorBackground: "#1C1F2E",
						colorInputBackground: "#252A41",
						colorInputText: "#fff",
					},
				}}
			>
				<head />
				<body
					className={clsx(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						<div className='relative flex flex-col h-screen'>
							<Navbar />
							<main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>
								{children}
							</main>
							<Toaster position='top-center' reverseOrder={false} />

							<Footer />
						</div>
					</Providers>
				</body>
			</ClerkProvider>
		</html>
	);
}
