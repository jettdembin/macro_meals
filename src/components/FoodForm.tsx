import React from "react";

import { Form } from "@/components/Form/Form";
import useFormState from "@/hooks/useFormState";
import useFormDigitState from "@/hooks/useFormDigitState";

const FoodForm = (props) => {
	const [value, handleFoodChange, reset] = useFormState("");
	const [carb, handleProteinChange, resetProtein] = useFormDigitState("");
	const [protein, handleCarbChange, resetCarb] = useFormDigitState("");
	const [fat, handleFatChange, resetFat] = useFormDigitState("");

	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Remaining Macros for the Day</h2>
			<div style={{ display: "flex" }}>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<div style={{ margin: "auto" }}>
						<h3
							style={{
								textAlign: "center",
								color: `${props.carbColor || "red"}`,
							}}
						>
							{props.remaining[0]?.Carb || "0"}g
						</h3>
						<h4>Carb(C)</h4>
					</div>
					<div style={{ margin: "auto" }}>
						<h3
							style={{
								textAlign: "center",
								color: `${props.proteinColor || "red"}`,
							}}
						>
							{props.remaining[0]?.Protein || "0"}g
						</h3>
						<h4>Protein(P)</h4>
					</div>
					<div style={{ margin: "auto" }}>
						<h3
							style={{
								textAlign: "center",
								color: `${props.fatColor || "red"}`,
							}}
						>
							{props.remaining[0]?.Fat || "0"}g
						</h3>
						<h4>Fat(F)</h4>
					</div>
				</div>
			</div>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
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
					value={value}
					onChange={handleFoodChange}
					margin="normal"
					label="Food"
					fullWidth
				/>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
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
					<button class="Goal-btn" type="submit">
						Add Food
					</button>
				</div>
			</Form>
		</div>
	);
};

export default FoodForm;
