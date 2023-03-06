"use client";

import React, { createContext, useContext } from "react";
import useFoodState from "@/hooks/useFoodState";

const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
	const [foods, setFoods] = useFoodState();
	debugger;

	return <FoodContext.Provider value={foods}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => {
	return useContext(FoodContext);
};

export default FoodProvider;
