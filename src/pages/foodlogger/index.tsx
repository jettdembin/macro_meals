"use client";

import React, { useState } from "react";

import { ContentLayout } from "@/components/Layout/ContentLayout";

import useStorage from "@/hooks/useStorage";
import useLocalStorageNext from "@/hooks/useLocalStorageNext";
import useFoodState from "@/hooks/useFoodState";
import FoodForm from "@/components/FoodForm";

import "../../app/output.css";

const FoodLogger = () => {
	const { foods, addFood, removeFood, allowEdit } = useFoodState([]);

	return (
		<>
			<ContentLayout title="Food logger 😋">
				Log food
				<FoodForm />
			</ContentLayout>
		</>
	);
};

export default FoodLogger;
