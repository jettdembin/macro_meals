"use client";

import { useContext, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Layout/Navbar";

import { Button } from "@/components/Elements/Button/Button";

import { ContentLayout } from "@/components/Layout/ContentLayout";
import { useMacroContext } from "@/context/MacroProvider";

import "./output.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { weight, setWeight, goal, goalOptions, macros, handleGoalChange } =
		useMacroContext();

	const router = useRouter();

	const handleGoalSubmit = (e, weight) => {
		e.preventDefault();

		if (weight == false) {
			alert("Please enter weight first");
		}
		if (goal == 12) {
			handleShred();
		}
		if (goal == 15) {
			handleMaintain();
		}
		if (goal == 18) {
			handleBulk();
		}
		router.push("/foodlogger");
	};

	return (
		<>
			<Navbar />
			<ContentLayout title="Macro Meals">
				<h1 className="">Enter your weight and goal to get started 💪</h1>
				<form
					onSubmit={(e) => {
						handleGoalSubmit(e, weight);
					}}
				>
					<div className="h-20">
						<label htmlFor="weight">
							Weight
							<input
								type="text"
								className=""
								placeholder={+weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</label>
					</div>
					<div className="">
						<label htmlFor="weight" className="">
							Goal
							<select
								className="ml-2"
								value={goal || ""}
								onChange={(e) => handleGoalChange(e)}
							>
								{goalOptions.map((o) => (
									<option key={o.val} value={o.val}>
										{o.text}
									</option>
								))}
							</select>
						</label>
					</div>
					<Button
						type="submit"
						className="mt-2 hover:animate-wiggle hover:bg-red-500"
					>
						Calculate 🐱‍🏍
					</Button>
				</form>
				{`${JSON.stringify(macros)}`}
			</ContentLayout>
		</>
	);
}
