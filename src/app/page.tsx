"use client";

import { Inter } from "@next/font/google";
import { Button } from "@/components/Elements/Button/Button";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<h1>Enter your weight and goal to get started 💪</h1>
			<div className="">
				<label htmlFor="weight">
					Weight
					<input type="text" className="" />
				</label>
			</div>
			<div className="">
				<label htmlFor="weight" className="">
					Goal
					<input type="text" className="" />
				</label>
			</div>
			<Button>Calculate 🐱‍🏍</Button>
		</main>
	);
}
