import React from "react";
import { useFoodContext } from "@/context/FoodProvider";

const FoodList = () => {
	const { foods } = useFoodContext();
	// debugger;

	// let totalAmountMacrosforFoods = 0;
	// let totalMacrosStored =
	//   props.storedTotals[0].Carb +
	//   props.storedTotals[0].Protein +
	//   props.storedTotals[0].Fat;
	// for (let food of foods) {
	//   let carb = Number(food.carb);
	//   let protein = Number(food.protein);
	//   let fat = Number(food.fat);
	//   let foodTotal = carb + protein + fat;
	//   totalAmountMacrosforFoods += foodTotal;
	// }
	// if (totalAmountMacrosforFoods > totalMacrosStored) {
	//   foods.length = 0;
	// }

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<div
				style={{
					display: "flex",
					margin: "auto",
				}}
			>
				<div style={{ display: "flex", marginLeft: "1rem" }}>
					<h4>(C)</h4>
					<h4 style={{ margin: "1.35rem 1.8rem" }}>(P)</h4>
					<h4>(F)</h4>
				</div>
			</div>
			<ul>
				{foods.map((food, i) => (
					<>
						{food.item}
						{/* <Food food={food} id={food.id} key={food.id} {...props} /> */}
						{i < foods.length - 1 && <hr />}
					</>
				))}
			</ul>
		</div>
	);
};
export default FoodList;
