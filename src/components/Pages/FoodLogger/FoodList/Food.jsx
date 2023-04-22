import React, { useState } from "react";

import { useMacroContext } from "@/context/MacroProvider";
import EditFoodForm from "./EditFoodForm";

const Food = ({ food, index }) => {
	const [isEditing, setIsEditing] = useState(true);

	const { removeFood } = useMacroContext();

	const toggleEdit = () => {
		setIsEditing(!isEditing);
	};

	return (
		<>
			{isEditing ? (
				<EditFoodForm food={food} index={index} />
			) : (
				<>
					<div>
						<p className="">{food.food}</p>
					</div>

					<div className="grid grid-cols-3 items-center w-full ">
						<div className="text-center">{food.carbs ? food.carbs : "0"}</div>
						<div className="text-center">
							{food.protein ? food.protein : "0"}
						</div>
						<div className="text-center">{food.fat ? food.fat : "0"}</div>
					</div>

					<div className="w-full flex justify-end">
						<button
							className="w-12 cursor-pointer bg-transparent border-none"
							onClick={() => {
								removeFood(index);
							}}
							aria-label="Delete"
						>
							<span class="material-icons">delete_forever</span>
						</button>

						<button
							className="w-10 cursor-pointer bg-transparent border-none"
							onClick={toggleEdit}
							aria-label="Edit"
						>
							<span class="material-icons">edit</span>
						</button>
					</div>
				</>
			)}
		</>
	);
};
export default Food;
