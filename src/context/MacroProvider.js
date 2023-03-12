"use client";

import React, { createContext, useContext } from "react";
import { useGoalCalculation } from "@/hooks/useGoalCalculation";

const MacroContext = createContext(null);

const MacroProvider = ({ children }) => {
	const {
		goal,
		weight,
		setWeight,
		goalOptions,
		calories,
		handleShred,
		handleMaintain,
		handleBulk,
		handleGoalChange,
	} = useGoalCalculation();

	return (
		<MacroContext.Provider
			value={{
				weight,
				setWeight,
				goalOptions,
				calories,
				handleShred,
				handleMaintain,
				handleBulk,
				handleGoalChange,
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
