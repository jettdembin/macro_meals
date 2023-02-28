"use client";

import React, { useState, createContext } from "react";

import { ContentLayout } from "@/components/Layout/ContentLayout";

import useStorage from "@/hooks/useStorage";
import useLocalStorageNext from "@/hooks/useLocalStorageNext";
import useFoodState from "@/hooks/useFoodState";
import FoodForm from "@/components/FoodForm";

import FoodList from "@/components/FoodList";

// import "../../context/FoodContext";

import "../../app/output.css";

const FoodLogger = () => {
	const { foods, addFood, removeFood, allowEdit } = useFoodState([]);
	const FoodContext = createContext(null);

	return (
		<FoodContext.Provider value="">
			<ContentLayout title="Food logger 😋">
				Log food
				<FoodForm />
				{foods.length > 0 && <FoodList />}
			</ContentLayout>
		</FoodContext.Provider>
	);
};

export default FoodLogger;
