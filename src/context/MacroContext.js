import React, { createContext } from "react";
import useFoodState from "@/hooks/useFoodState";

const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
	const { foods, addFood, removeFood, allowEdit } = useFoodState();

	return (
		<MacroContext.Provider value={{ foods, addFood, removeFood, allowEdit }}>
			{children}
		</MacroContext.Provider>
	);
};

export default FoodProvider;
