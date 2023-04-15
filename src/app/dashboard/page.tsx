import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Login from "./Login";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	console.log(session, "session");
	if (!session) {
	}
	return (
		<main className="flex h-screen">
			<Login />
		</main>
	);
}
