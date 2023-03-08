import React, { useState } from "react";
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
		<li style={{ height: "64px" }}>
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
					<text>
						<div style={{ display: "flex" }}>
							<div
								style={{
									width: "20px",
								}}
							>
								{food.item}
							</div>
							<div
								style={{
									display: "grid",
									width: "150px",
									margin: "auto",
									gridTemplateColumns: "1fr 1fr 1fr",
								}}
							>
								<div style={{ textAlign: "center" }}>
									{food.carb ? food.carb : "0"}
								</div>
								<div style={{ textAlign: "center" }}>
									{food.protein ? food.protein : "0"}
								</div>
								<div style={{ textAlign: "center" }}>
									{food.fat ? food.fat : "0"}
								</div>
							</div>
						</div>
					</text>
					<li style={{ width: "80px" }}>
						<button
							style={{ width: "40px", textAlign: "center" }}
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
						></button>
						<button
							style={{ width: "40px", textAlign: "center" }}
							onClick={toggleEdit}
							aria-label="Edit"
						></button>
					</li>
				</>
			)}
		</li>
	);
};
export default Food;
