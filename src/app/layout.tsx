
import "./output.css";

const FoodContext = createContext();
const MacroContext = createContext();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { foods, addFood, removeFood, allowEdit } = useFoodState();

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>		<FoodContext.Provider value={{ foods, addFood, removeFood, allowEdit }}>
				<MacroContext.Provider value="">{children}</MacroContext.Provider></FoodContext.Provider></></body>
		</html>
	);
}
