import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "johncanthearyou.com",
	description: "Software portfolio built by John Stockton using ReactTS, TailwindCSS, and Next.js",
};

export default function RootLayout() {
	return (
		<html lang="en">
			<body>
				<div>
					<h1>johncanthearyou.com</h1>
				</div>
			</body>
		</html>
	);
}
