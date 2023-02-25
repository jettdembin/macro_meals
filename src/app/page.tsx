"use client";

import { Inter } from "@next/font/google";
import { Button } from "@/components/Elements/Button/Button";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Button>Hello worlds!</Button>
			<div className="flex flex-col">
				<div className="basis-32">
					<label htmlFor="email">
						Email:
						<input type="text" />
					</label>
				</div>
				<div className="basis-32 border border-red-500">
					<label htmlFor="password">
						Password:
						<input type="password" />
					</label>
				</div>
			</div>
		</main>
	);
}
