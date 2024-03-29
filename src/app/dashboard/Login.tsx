"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/Elements/Button/Button";

export default function Login() {
	return (
		<div className="m-auto max-w-xl">
			<h1>Welcome Back :)</h1>
			<p>
				To view your previous logged macros, please sign in to your account with
				your email and address 🔔
			</p>

			{/* <div className="flex items-center  border border-solid border-solid-gray-500 rounded-lg">
				<span className="material-icons flex items-center justify-center cursor-pointer w-10 h-10">
					search
				</span>
				<input
					type="text"
					placeholder="Email"
					className="h-10 w-full rounded-md border-none outline-none pl-2"
				/>
			</div>

			<div className="flex items-center border border-solid border-solid-gray-500 rounded-lg">
				<span className="material-icons flex items-center justify-center  cursor-pointer w-10 h-10">
					lock
				</span>
				<input
					type="text"
					placeholder="Password"
					className="h-10 w-full rounded-md border-none outline-none pl-2"
				/>
			</div> */}
			<Button
				className="mt-2 w-full border-none hover:bg-red-500 transition ease-in-out"
				onClick={() => signIn()}
			>
				Sign in
			</Button>
		</div>
	);
}
