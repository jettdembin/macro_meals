"use client";

import { Button } from "@/components/Elements/Button/Button";

import { ContentLayout } from "@/components/Layout/ContentLayout";
import { useMacroContext } from "@/context/MacroProvider";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const {
		weight,
		setWeight,
		goal,
		goalOptions,
		handleGoalChange,
		handleGoalSubmit,
	} = useMacroContext();

	return (
		<>
			{/* <Navbar /> */}
			<ContentLayout title="Macro Meals">
				<h1 className="">Enter your weight and goal to get started 💪</h1>
				<form
					onSubmit={(e) => {
						handleGoalSubmit(e);
					}}
				>
					<div className="h-20">
						<label htmlFor="weight">
							Weight
							<input
								type="number"
								className="ml-2"
								placeholder={weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</label>
					</div>
					<div className="">
						<label htmlFor="weight" className="">
							Goal
							<select
								className="ml-2"
								value={goal}
								onChange={(e) => {
									handleGoalChange(e.currentTarget.value);
								}}
							>
								{goalOptions.map((o) => (
									<option key={o.val} value={o.val}>
										{o.text}
									</option>
								))}
							</select>
						</label>
					</div>
					<Button
						type="submit"
						className="mt-2 hover:animate-wiggle hover:bg-red-500"
					>
						Calculate 🐱‍🏍
					</Button>
				</form>
				{/* {`${JSON.stringify(macros)}`} */}
			</ContentLayout>
		</>
	);
}
