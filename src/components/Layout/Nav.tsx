import Link from "next/link";
import Login from "../../app/auth/Login";
import Logged from "../../app/auth/Logged";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
	const session = await getServerSession(authOptions);

	return (
		<nav className="flex justify-between items-center px-4 md:px-8">
			<Link href={"/"}>
				<h1 className="font-bold text-lg">Macro.</h1>
			</Link>
			<ul className="flex items-center gap-6">
				{!session?.user && <Login />}
				{session?.user && <Logged image={session?.user?.image || ""} />}
			</ul>
		</nav>
	);
}
