import React from "react";
import "../../app/output.css";

const Login = () => {
	return (
		<main className="flex h-screen">
			<div className="m-auto max-w-xl border border-solid border-red-400">
				<h1>Welcome Back :)</h1>
				<p>
					To view your previous logged macros, please login with your personal
					information by email and address 🔔
				</p>

				<div className="flex items-center">
					<span className="material-icons border border-solid border-solid-gray-500 cursor-pointer">
						search
					</span>
					<input
						type="text"
						placeholder="Email"
						className="border border-solid border-solid-gray-500 h-6 w-full"
					/>
				</div>

				<div className="flex items-center">
					<span className="material-icons border border-solid border-solid-gray-500 cursor-pointer">
						lock
					</span>
					<input
						type="text"
						placeholder="Password"
						className="border border-solid border-solid-gray-500 h-6 w-full"
					/>
				</div>
			</div>
		</main>
	);
};

export default Login;
