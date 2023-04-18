import React, { Fragment } from "react";
import { useMacroContext } from "@/context/MacroProvider";
import Food from "./FoodList/Food";

const FoodList = () => {
	const { foods } = useMacroContext();

	// debugger;

	// let totalAmountMacrosforFoods = 0;
	// let totalMacrosStored =
	//   storedTotals[0].Carb +
	//   storedTotals[0].Protein +
	//   storedTotals[0].Fat;
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
		<div className="flex flex-col">
			<div className="flex mx-auto my-auto">
				<div className="flex ml-1">
					<h4 className="mx-1 my-2">(C)</h4>
					<h4 className="mx-1 my-2">(P)</h4>
					<h4 className="mx-1 my-2">(F)</h4>
				</div>
			</div>
			<ul className="pl-0">
				{foods.map((food, i) => (
					<Fragment key={i}>
						<li className="grid grid-cols-3 border border-solid border-red-500 list-none">
							<Food food={food} id={food.id} index={i} />
						</li>
						{i < foods.length - 1 && <hr />}
					</Fragment>
				))}
			</ul>
		</div>
	);
};
export default FoodList;
