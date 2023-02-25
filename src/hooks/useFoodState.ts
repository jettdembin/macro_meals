import useStorage from "./useStorage";
import { v4 as uuidv4 } from "uuid";

const useFoodState = (initialFoods) => {
	const [foods, setFoods] = useStorage("foods", initialFoods);
	return {
		foods,
		addFood: (newFoodItem, carb, protein, fat) => {
			setFoods([
				...foods,
				{
					id: uuidv4(),
					item: newFoodItem,
					carb: carb,
					protein: protein,
					fat: fat,
				},
			]);
		},
		removeFood: (foodId) => {
			const updatedFoods = foods.filter((food) => food.id !== foodId);
			setFoods(updatedFoods);
		},
		allowEdit: (foodId, item) => {
			const edittingFood = foods.map((food) =>
				food.id === foodId ? { ...food, item: item } : food
			);
			setFoods(edittingFood);
		},
	};
};

export default useFoodState;