"use client";

import React, { createContext, useContext, useState } from "react";
import useFoodState from "@/hooks/useFoodState";

const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
	const [foods, setFoods] = useState(["fuck you"]);
	console.log(foods);
	// const foods = ["fuck you"];
	debugger;

	return (
		<FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>
	);
};

export const useFoodContext = () => {
	return useContext(FoodContext);
};

export default FoodProvider;
