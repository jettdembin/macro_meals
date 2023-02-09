import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: NEXT_PUBLIC_APIKEY,
	authDomain: NEXT_PUBLIC_AUTHDOMAIN,
	projectId: NEXT_PUBLIC_PROJECTID,
	storageBucket: NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: NEXT_PUBLIC_APPID,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
