import React, { useState, Fragment } from "react";
import { useFoodContext } from "@/context/FoodProvider";
import { useMacroContext } from "@/context/MacroProvider";
// import EditFoodForm from "./EditFoodForm";

const Food = ({ food, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { foods, addFood, removeFood, allowEdit } = useMacroContext();

	const toggleEdit = () => {
		setIsEditing(!isEditing);
	};
	// let remainingCarb = remaining[0].Carb;
	// let remainingProtein = remaining[0].Protein;
	// let remainingFat = remaining[0].Fat;

	return (
		<Fragment>
			{isEditing ? (
				<>
					{/* <EditFoodForm
						{...props}
						allowEdit={allowEdit}
						id={food.id}
						item={food.item}
						toggleEdit={toggleEdit}
					/> */}
				</>
			) : (
				<>
					<div>
						<p>{food.item}</p>
					</div>

					<div className="grid grid-cols-3 items-center w-full ">
						<div className="text-center">{food.carb ? food.carb : "0"}</div>
						<div className="text-center">
							{food.protein ? food.protein : "0"}
						</div>
						<div className="text-center">{food.fat ? food.fat : "0"}</div>
					</div>

					<div className="w-full flex justify-end">
						<button
							className="w-12 text-center pointer"
							onClick={() => {
								removeFood(index);
							}}
							aria-label="Delete"
						>
							<span class="material-icons">delete_forever</span>
						</button>

						<button
							className="w-10 text-center"
							onClick={toggleEdit}
							aria-label="Edit"
						>
							<span class="material-icons">edit</span>
						</button>
					</div>
				</>
			)}
		</Fragment>
	);
};
export default Food;
