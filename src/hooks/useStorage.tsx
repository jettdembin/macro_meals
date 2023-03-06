"use client";

import { useState } from "react";

const useStorage = (storageProp, storageItem = "macros") => {
	const getStorage = () => {
		const storage = localStorage.getItem(storageItem);

		if (storage) {
			try {
				return JSON.parse(storage) || null;
			} catch (e) {
				console.error(e);
				return null;
			}
		}

		return null;
	};

	const getStorageItem = () => getStorage()?.[storageProp] || null;

	const [state, setState] = useState(getStorageItem());

	const setStorageItem = (content) => {
		const currentStorage = getStorage();
		const updatedStorage = { ...currentStorage, [storageProp]: content };

		setState(content);
		localStorage.setItem(storageItem, JSON.stringify(updatedStorage));
	};

	return [state, setStorageItem];
};

export default useStorage;
