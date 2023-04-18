"use client";

import React, { createContext, useContext } from "react";
import { useGoalCalculation } from "@/hooks/useGoalCalculation";

const MacroContext = createContext(null);

const MacroProvider = ({ children }) => {
	const {
		foods,
		setFoods,
		macros,
		setMacros,
		remainingMacros,
		setRemainingMacros,
		addFood,
		editFood,
		removeFood,
		goalOptions,
		weight,
		setWeight,
		calories,
		handleShred,
		handleMaintain,
		handleBulk,
		handleGoalChange,
		handleGoalSubmit,
	} = useGoalCalculation();

	return (
		<MacroContext.Provider
			value={{
				foods,
				setFoods,
				macros,
				setMacros,
				remainingMacros,
				setRemainingMacros,
				addFood,
				editFood,
				removeFood,
				goalOptions,
				weight,
				setWeight,
				calories,
				handleShred,
				handleMaintain,
				handleBulk,
				handleGoalChange,
				handleGoalSubmit,
			}}
		>
			{children}
		</MacroContext.Provider>
	);
};

export const useMacroContext = () => {
	return useContext(MacroContext);
};

export default MacroProvider;
