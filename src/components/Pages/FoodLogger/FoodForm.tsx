"use client";

import React, { useContext, useState } from "react";

import { Form } from "@/components/Form/Form";
import useFormState from "@/hooks/useFormState";
import useFormDigitState from "@/hooks/useFormDigitState";
import { useFoodContext } from "@/context/FoodProvider";
import { useMacroContext } from "@/context/MacroProvider";

const FoodForm = () => {
	const [food, handleFoodChange, reset] = useFormState("");
	const [carb, handleProteinChange, resetProtein] = useFormDigitState("");
	const [protein, handleCarbChange, resetCarb] = useFormDigitState("");
	const [fat, handleFatChange, resetFat] = useFormDigitState("");

	const { foods, addFood, removeFood, allowEdit } = useFoodContext();
	const { handleShred, handleMaintain, handleBulk, weight, macros } =
		useMacroContext();
	const totalCarbs = macros?.carbs || 0;
	const totalProtein = macros?.protein || 0;
	const totalFat = macros?.fat || 0;

	const [remainingMacros, setRemainingMacros] = useState({
		carb: totalCarbs,
		protein: totalProtein,
		fat: totalFat,
	});

	console.log(totalCarbs, "totalCarbs");
	console.log(totalProtein, "totalProtein");
	console.log(totalFat, "totalFat");

	// const handleMacros = (carb, protein, fat) => {
	// 	setRemainingMacros({
	// 		carbs:
	// 	})
	// };

	return (
		<div>
			{weight}
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
					addFood(food, carb, protein, fat);

					// props.addFood(value, carb, protein, fat);
					// props.handleMacro(props.remaining[0]?.Carb - Number(carb), "Carb");
					// props.handleMacro(
					// 	props.remaining[0]?.Protein - Number(protein),
					// 	"Protein"
					// );
					// props.handleMacro(props.remaining[0]?.Fat - Number(fat), "Fat");
					// props.toggleColor(carb, protein, fat, 1);
					// reset();
					// resetCarb();
					// resetProtein();
					// resetFat();
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
							label="Carbs(grams)"
							value={carb}
							onChange={handleProteinChange}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
							label="Protein(grams)"
							onChange={handleCarbChange}
							value={protein}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
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
