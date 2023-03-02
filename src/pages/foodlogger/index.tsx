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
	return (
		<ContentLayout title="Food logger 😋">
			Log food
			<FoodForm />
			{foods.length > 0 && <FoodList />}
		</ContentLayout>
	);
};

export default FoodLogger;
