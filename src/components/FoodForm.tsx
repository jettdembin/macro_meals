"use client";

import React, { useContext } from "react";

import { Form } from "@/components/Form/Form";
import useFormState from "@/hooks/useFormState";
import useFormDigitState from "@/hooks/useFormDigitState";
import { useFoodContext } from "@/context/FoodProvider";
import { useMacroContext } from "@/context/MacroProvider";

const FoodForm = () => {
	const [value, handleFoodChange, reset] = useFormState("");
	const [carb, handleProteinChange, resetProtein] = useFormDigitState("");
	const [protein, handleCarbChange, resetCarb] = useFormDigitState("");
	const [fat, handleFatChange, resetFat] = useFormDigitState("");

	const { foods, addFood, removeFood, allowEdit } = useFoodContext();
	const { handleShred, handleMaintain, handleBulk, weight } = useMacroContext();

	return (
		<div>
			{weight}
			<h2 className="text-center">Remaining Macros for the Day</h2>
			<div className="flex">
				<div className="flex w-full justify-center">
					<div className="mx-auto my-auto">
						<h3
							style={{
								textAlign: "center",
							}}
						>
							{/* {props.remaining[0]?.Carb || "0"}g */}
						</h3>
						<h4>Carb(C)</h4>
					</div>
					<div className="mx-auto my-auto">
						<h3
							style={{
								textAlign: "center",
							}}
						>
							{/* {props.remaining[0]?.Protein || "0"}g */}
						</h3>
						<h4>Protein(P)</h4>
					</div>
					<div className="mx-auto my-auto">
						<h3
							style={{
								textAlign: "center",
							}}
						>
							{/* {props.remaining[0]?.Fat || "0"}g */}
						</h3>
						<h4>Fat(F)</h4>
					</div>
				</div>
			</div>
			<form
				className=""
				onSubmit={(e) => {
					// e.preventDefault();
					alert("submitted");
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
					className="mx-auto text-center block"
					value={value}
					onChange={handleFoodChange}
					label="Food"
				/>
				<div className="flex justify-center">
					<div>
						<input
							value={carb}
							onChange={handleProteinChange}
							label="Carbs(grams)"
						/>
					</div>
					<div>
						<input
							value={protein}
							onChange={handleCarbChange}
							label="Protein(grams)"
						/>
					</div>
					<div>
						<input value={fat} onChange={handleFatChange} label="Fat(grams)" />
					</div>
				</div>
				<div
					style={{ marginTop: "1rem", display: "flex", justifyContent: "end" }}
				>
					<button className="Goal-btn" type="submit">
						Add Food
					</button>
				</div>
			</form>
		</div>
	);
};

export default FoodForm;
