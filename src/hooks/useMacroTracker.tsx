import React, { useState } from "react";

interface Food {
	id: string;
	name: string;
	carbs: number;
	protein: number;
	fat: number;
}

interface Macros {
	carbs: number;
	protein: number;
	fat: number;
}

const useMacroTracker = () => {
	const [foods, setFoods] = useState<Food[]>([]);
	const [macros, setMacros] = useState<Macros>({
		carbs: 0,
		protein: 0,
		fat: 0,
	});
	const [remainingMacros, setRemainingMacros] = useState<Macros>({
		carbs: 0,
		protein: 0,
		fat: 0,
	});

	const addFood = (food: Food) => {
		setFoods([...foods, food]);

		setRemainingMacros({
			carbs: remainingMacros.carbs - food.carbs,
			protein: remainingMacros.protein - food.protein,
			fat: remainingMacros.fat - food.fat,
		});
	};

	const editFood = (index: number, updatedFood: Food) => {
		setFoods(foods.map((food, i) => (i === index ? updatedFood : food)));

		const oldFood = foods[index];
		setRemainingMacros({
			carbs: remainingMacros.carbs + oldFood.carbs - updatedFood.carbs,
			protein: remainingMacros.protein + oldFood.protein - updatedFood.protein,
			fat: remainingMacros.fat + oldFood.fat - updatedFood.fat,
		});
	};

	const removeFood = (index: number) => {
		const removedFood = foods[index];

		setFoods(foods.filter((_, i) => i !== index));

		setRemainingMacros({
			carbs: remainingMacros.carbs + removedFood.carbs,
			protein: remainingMacros.protein + removedFood.protein,
			fat: remainingMacros.fat + removedFood.fat,
		});
	};

	return {
		foods,
		setFoods,
		macros,
		setMacros,
		remainingMacros,
		setRemainingMacros,
		addFood,
		editFood,
		removeFood,
	};
};
export default useMacroTracker;
