import React, { Fragment } from "react";
import { useMacroContext } from "@/context/MacroProvider";
import Food from "./FoodList/Food";

import { FoodInterface } from "@/types/Food";

const FoodList = () => {
	const { foods } = useMacroContext();

	return (
		<section className="flex flex-col">
			{foods.length > 0 && (
				<div className="flex mx-auto my-auto">
					<div className="flex ml-1">
						<h4 className="mx-1 my-2">(C)</h4>
						<h4 className="mx-1 my-2">(P)</h4>
						<h4 className="mx-1 my-2">(F)</h4>
					</div>
				</div>
			)}

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
		</section>
	);
};
export default FoodList;
