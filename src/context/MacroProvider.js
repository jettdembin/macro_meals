"use client";

import React, { createContext, useContext } from "react";
import { useGoalCalculation } from "@/hooks/useGoalCalculation";

const MacroContext = createContext(null);

const MacroProvider = ({ children }) => {
	const {
		macros,
		goal,
		weight,
		setWeight,
		goalOptions,
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
				macros,
				goal,
				weight,
				setWeight,
				goalOptions,
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
