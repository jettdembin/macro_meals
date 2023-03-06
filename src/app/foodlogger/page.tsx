"use client";

import React, { useState, createContext, useContext } from "react";

import { ContentLayout } from "@/components/Layout/ContentLayout";

import useStorage from "@/hooks/useStorage";
import useLocalStorageNext from "@/hooks/useLocalStorageNext";
import useFoodState from "@/hooks/useFoodState";
import FoodForm from "@/components/FoodForm";
import FoodList from "@/components/FoodList";
// import "../../context/FoodContext";
import "../../app/output.css";
import { useFoodContext } from "@/context/FoodProvider";

const FoodLogger = () => {
	// debugger;

	return (
		<ContentLayout title="Food logger 😋">
			Log food
			<FoodForm />
			<FoodList />
		</ContentLayout>
	);
};

export default FoodLogger;
