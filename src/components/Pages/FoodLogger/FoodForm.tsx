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

	const { addFood, weight, remainingMacros, macros } = useMacroContext();

	const remainingCarbs = remainingMacros?.carbs || 0;
	const remainingProtein = remainingMacros?.protein || 0;
	const remainingFat = remainingMacros?.fat || 0;

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
						<div className="flex justify-center">
							<h3 className="text-center">
								{remainingCarbs}
								<span>/</span>
							</h3>
							<h3 className="text-center text-slate-400">{macros?.carbs}</h3>
						</div>
					</div>
					<div className="mx-auto my-auto">
						<h4>Protein(P)</h4>
						<div className="flex justify-center">
							<h3 className="text-center">
								{remainingProtein}
								<span>/</span>
							</h3>
							<h3 className="text-center text-slate-400">{macros?.protein}</h3>
						</div>
					</div>
					<div className="mx-auto my-auto">
						<h4>Fat(F)</h4>
						<div className="flex justify-center">
							<h3 className="text-center">
								{remainingFat}
								<span>/</span>
							</h3>
							<h3 className="text-center text-slate-400">{macros?.fat}</h3>
						</div>
					</div>
				</div>
			</div>
			<form
				className=""
				onSubmit={(e) => {
					e.preventDefault();
					alert("submitted");

					addFood({ food, carbs: +carbs, protein: +protein, fat: +fat });

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
				/>
				<div className="flex justify-between">
					<div>
						<input
							className="border border-solid border-green-400"
							value={carbs}
							type="number"
							onChange={handleProteinChange}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
							type="number"
							onChange={handleCarbChange}
							value={protein}
						/>
					</div>
					<div>
						<input
							className="border border-solid border-purple-400"
							type="number"
							onChange={handleFatChange}
							value={fat}
						/>
					</div>
				</div>
				<div className="flex items-center justify-end">
					<button
						className="border-none bg-cyan-200 text-slate-700 rounded-sm p-2"
						type="submit"
					>
						Add Food
					</button>
				</div>
			</form>
		</div>
	);
};

export default FoodForm;
