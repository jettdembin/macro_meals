import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Login from "./Login";
import { ContentLayout } from "@/components/Layout/ContentLayout";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return (
			<main className="flex h-screen">
				<Login />
			</main>
		);
	}
	return (
		<main className="flex h-screen">
			<ContentLayout title="We in this">Past Macros</ContentLayout>
		</main>
	);
}
