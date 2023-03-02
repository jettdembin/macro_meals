"use client";

import React, { createContext } from "react";
import { useGoalCalculation } from "@/hooks/useGoalCalculation";

export const MacroContext = createContext(null);

const MacroProvider = ({ children }) => {
	const {
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

export default MacroProvider;
