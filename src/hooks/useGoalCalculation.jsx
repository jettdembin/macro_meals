"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useGoalCalculation = () => {
	const initialMacros = {
		carbs: 0, // grams
		protein: 0, // grams
		fat: 0, // grams
	};

	const goalOptions = [
		{ val: 12, text: "Shred Fat" },
		{ val: 15, text: "Maintain" },
		{ val: 18, text: "Bulk" },
	];

	const [macros, setMacros] = useState(initialMacros);
	const [weight, setWeight] = useState(0);
	const [goal, setGoal] = useState(0);

	const calories = goal * weight;

	const router = useRouter();

	const handleGoalChange = (weightMultiplier) => {
		const numberMultiplier = Number(weightMultiplier);
		setGoal(numberMultiplier);
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

	const handleGoalSubmit = (e) => {
		e.preventDefault();

		if (weight == false) {
			alert("Please enter weight first");
			return;
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

	return {
		macros,
		goalOptions,
		weight,
		setWeight,
		calories,
		handleShred,
		handleMaintain,
		handleBulk,
		handleGoalChange,
		handleGoalSubmit,
	};
};
