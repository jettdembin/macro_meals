"use client";

import React, { useContext, useState } from "react";

import { Form } from "@/components/Form/Form";
import useFormState from "@/hooks/useFormState";
import useFormDigitState from "@/hooks/useFormDigitState";
import { useFoodContext } from "@/context/FoodProvider";
import { useMacroContext } from "@/context/MacroProvider";

const FoodForm = () => {
	const [food, handleFoodChange, clearFood] = useFormState("");
	const [carbs, handleProteinChange, clearProtein] = useFormDigitState("");
	const [protein, handleCarbChange, clearCarb] = useFormDigitState("");
	const [fat, handleFatChange, clearFat] = useFormDigitState("");

	const { addFood, weight, remainingMacros } = useMacroContext();

	const totalCarbs = remainingMacros?.carbs || 0;
	const totalProtein = remainingMacros?.protein || 0;
	const totalFat = remainingMacros?.fat || 0;

	// const handleMacros = (carb, protein, fat) => {
	// 	setRemainingMacros({
	// 		carbs:
	// 	})
	// };

	return (
		<div>
			Current Weight: {weight}
			<h2 className="text-center">Remaining Macros for the Day</h2>
			<div className="flex">
				<div className="flex w-full justify-center">
					<div className="mx-auto my-auto">
						<h4>Carb(C)</h4>
						<h3 className="text-center">{totalCarbs}</h3>
					</div>
					<div className="mx-auto my-auto">
						<h4>Protein(P)</h4>
						<h3 className="text-center">{totalProtein}</h3>
					</div>
					<div className="mx-auto my-auto">
						<h4>Fat(F)</h4>
						<h3 className="text-center">{totalFat}</h3>
					</div>
				</div>
			</div>
			<form
				className=""
				onSubmit={(e) => {
					e.preventDefault();
					alert("submitted");
					addFood({ food, carbs, protein, fat });

					clearFood();
					clearCarb();
					clearProtein();
					clearFat();

					console.log({ food, carbs, protein, fat });
				}}
			>
				<input
					className="mx-auto text-center block border-red-400"
					value={food}
					onChange={handleFoodChange}
					label="Food"
				/>
				<div className="flex justify-between">
					<div>
						<input
							className="border border-solid border-green-400"
							value={carbs}
							type="number"
							label="Carbs(grams)"
							onChange={handleProteinChange}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
							type="number"
							label="Protein(grams)"
							onChange={handleCarbChange}
							value={protein}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
							type="number"
							label="Fat(grams)"
							onChange={handleFatChange}
							value={fat}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end">
					<button className="Goal-btn" type="submit">
						Add Food
					</button>
				</div>
			</form>
		</div>
	);
};

export default FoodForm;
