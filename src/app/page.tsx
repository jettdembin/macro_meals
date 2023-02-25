import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Button } from "@/components/Elements/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<h1 className="text-3xl font-bold underline">
			<Button>Hello worlds!</Button>
			<button className="px-2 border border-red-800">Test</button>
			<div className="flex items-center">
				<div>test</div>
				<div>test</div>
				<div>test</div>
			</div>
		</h1>
	);
}
