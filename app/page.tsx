import { TextEffect } from "@components/text-effect";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex h-screen flex-col justify-center text-center">
			<h1 className="mb-4 text-4xl font-bold">
				<TextEffect per="char" preset="blur">
					Hello World
				</TextEffect>
			</h1>
			<p className="text-fd-muted-foreground">
				You can open{" "}
				<Link
					href="/docs"
					className="text-fd-foreground font-semibold underline"
				>
					/docs
				</Link>{" "}
				and see the documentation.
			</p>
			<div className="fixed bottom-0 right-0 p-2 text-xs text-gray-100">
				<a
					href="https://perc.dev"
					className="text-fd-foreground font-semibold underline"
				>
					<TextEffect per="char" preset="slide">
						perc.dev
					</TextEffect>
				</a>
			</div>
		</main>
	);
}
