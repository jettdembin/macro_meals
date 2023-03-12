import React, { Fragment } from "react";
import { useFoodContext } from "@/context/FoodProvider";
import Food from "./FoodList/Food";

const FoodList = () => {
	const { foods } = useFoodContext();

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
		<div className="flex">
			<div className="flex mx-auto my-auto">
				<div className="flex ml-1">
					<h4>(C)</h4>
					<h4 className="mx-1 my-2">(P)</h4>
					<h4>(F)</h4>
				</div>
			</div>
			<ul>
				{foods.map((food, i) => (
					<Fragment key={i}>
						<li className="flex list-none">
							<Food food={food} id={food.id} />
							{i < foods.length - 1 && <hr />}
						</li>
					</Fragment>
				))}
			</ul>
		</div>
	);
};
export default FoodList;
