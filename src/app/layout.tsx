import "./output.css";

import FoodProvider from "../context/FoodProvider";
import MacroProvider from "../context/MacroProvider";
import Nav from "../components/Layout/Nav";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<>
					<Nav />
					<FoodProvider>
						<MacroProvider>{children}</MacroProvider>
					</FoodProvider>
				</>
			</body>
		</html>
	);
}
