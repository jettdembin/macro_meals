import React, { useState, Fragment } from "react";
// import EditFoodForm from "./EditFoodForm";

const Food = ({ food }) => {
	const [isEditing, setIsEditing] = useState(false);
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
					<p>{food.item}</p>
					<div className="flex border border-solid border-purple-400">
						<div className="grid items-center w-40 comx-auto grid-cols-3">
							<div className="text-center">{food.carb ? food.carb : "0"}</div>
							<div className="text-center">
								{food.protein ? food.protein : "0"}
							</div>
							<div className="text-center">{food.fat ? food.fat : "0"}</div>
						</div>
					</div>
					<div className="w-20 flex">
						<button
							className="w-12 text-center pointer"
							onClick={() => {
								if (remainingCarb + Number(food.carb) > storedTotals[0].Carb) {
									handleMacro(storedTotals[0].Carb, "Carb");
								} else {
									handleMacro(remainingCarb + Number(food.carb), "Carb");
								}
								if (
									remainingProtein + Number(food.protein) >
									storedTotals[0].Protein
								) {
									handleMacro(storedTotals[0].Protein, "Protein");
								} else {
									handleMacro(
										remainingProtein + Number(food.protein),
										"Protein"
									);
								}
								if (remainingFat + Number(food.fat) > storedTotals[0].Fat) {
									handleMacro(storedTotals[0].Fat, "Fat");
								} else {
									handleMacro(remainingFat + Number(food.fat), "Fat");
								}
								removeFood(food.id);
								toggleColor(food.carb, food.protein, food.fat, 3);
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
