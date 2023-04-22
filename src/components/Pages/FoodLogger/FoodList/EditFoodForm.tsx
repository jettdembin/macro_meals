import React, { useState } from "react";
import { FoodInterface } from "@/types/Food";
import { useMacroContext } from "@/context/MacroProvider";

const EditFoodForm = ({ food, index }) => {
	const { carbs, protein, fat } = food;
	const [editedFood, setEditedFood] = useState(food.food);
	const [editedCarb, setEditedCarb] = useState(carbs);
	const [editedProtein, setEditedProtein] = useState(protein);
	const [editedFat, setEditedFat] = useState(fat);

	const { editFood } = useMacroContext();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault;
				editFood(index, {
					food: editedFood,
					carbs: editedCarb,
					protein: editedProtein,
					fat: editedFat,
				});
			}}
			className="flex w-full justify-between border border-solid border-blue-800"
		>
			<div>
				<input
					type="text"
					value={editedFood}
					onChange={(e) => setEditedFood(e.target.value)}
				/>
			</div>
			<div className="">
				<div>
					<input
						type="text"
						value={editedCarb}
						onChange={(e) => setEditedCarb(e.target.value)}
					/>
				</div>

				<div>
					<input
						type="text"
						value={editedProtein}
						onChange={(e) => setEditedProtein(e.target.value)}
					/>
				</div>

				<div>
					<input
						type="text"
						value={editedFat}
						onChange={(e) => setEditedFat(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex">
				<button
					className="w-12 cursor-pointer bg-transparent border-none"
					aria-label="Delete"
				>
					<span class="material-icons">delete_forever</span>
				</button>

				<button
					className="w-12 cursor-pointer bg-transparent border-none"
					aria-label="Edit"
				>
					<span class="material-icons">edit</span>
				</button>
			</div>
		</form>
	);
};

export default EditFoodForm;
