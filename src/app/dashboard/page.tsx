import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Login from "./Login";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (!session) {
		console.log(session, "session");
		redirect("/api/auth/signin");
	}
	return <main className="flex h-screen">We at the dashboard</main>;
}
