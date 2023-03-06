"use client";

import React, { createContext, useContext, useState } from "react";
import useFoodState from "@/hooks/useFoodState";

const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
	const { foods, addFood, removeFood, allowEdit } = useFoodState();
	console.log(foods);
	// debugger;

	return (
		<FoodContext.Provider value={{ foods, addFood, removeFood, allowEdit }}>
			{children}
		</FoodContext.Provider>
	);
};

export const useFoodContext = () => {
	return useContext(FoodContext);
};

export default FoodProvider;
