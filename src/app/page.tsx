"use client";

import { useContext, useReducer, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Elements/Button/Button";

import { ContentLayout } from "@/components/Layout/ContentLayout";
import Navbar from "@/components/Layout/Navbar";
import MacroContext from "@/context/MacroContext";

import "./output.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const initialMacros = {
		carbs: 0, // grams
		protein: 0, // grams
		fat: 0, // grams
	};

	const [macros, setMacros] = useState(initialMacros);

	// const [macros, dispatch] = useReducer(goalReducer, initialMacros);
	const [weight, setWeight] = useState(0);
	const [goal, setGoal] = useState(0);

	const router = useRouter();

	const calories = goal * weight;

	const goalOptions = [
		{ val: 12, text: "Shred Fat" },
		{ val: 15, text: "Maintain" },
		{ val: 18, text: "Bulk" },
	];

	const handleGoalChange = (e) => {
		setGoal(e.target.value);
	};

	const handleShred = () => {
		setMacros({
			carbs: Math.round((calories * 0.4) / 4),
			protein: Math.round((calories * 0.4) / 4),
			fat: Math.round((calories * 0.2) / 9),
		});
	};
	const handleMaintain = () => {
		setMacros({
			carbs: Math.round((calories * 0.5) / 4),
			protein: Math.round((calories * 0.3) / 4),
			fat: Math.round((calories * 0.2) / 9),
		});
	};
	const handleBulk = () => {
		const minimumProteinInCals = weight * 0.8 * 4;
		const remainingCalsMinusProtein = calories - minimumProteinInCals;
		setMacros({
			carbs: Math.round((remainingCalsMinusProtein * 0.6) / 4),
			protein: Math.round(weight * 0.8),
			fat: Math.round((remainingCalsMinusProtein * 0.4) / 9),
		});
	};

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
								{goalOptions?.map((o) => (
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
