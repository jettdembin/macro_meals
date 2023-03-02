"use client";

import React, { createContext } from "react";
import useFoodState from "@/hooks/useFoodState";

export const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
	const { foods, addFood, removeFood, allowEdit } = useFoodState([]);

	return (
		<FoodContext.Provider value={{ foods, addFood, removeFood, allowEdit }}>
			{children}
		</FoodContext.Provider>
	);
};

export default FoodProvider;
