import React from "react";
import "../../app/output.css";

const Login = () => {
	return (
		<main className="flex h-screen">
			<div className="grid flex-col border border-purple-500 m-auto">
				<span className="material-icons">search</span>
				<span class="material-icons">face</span>
				<span class="material-icons">&#xE87C;</span>
				<input
					type="text"
					placeholder="Email"
					className="border border-green-400"
				/>

				<input
					type="password"
					placeholder="Password"
					className="border border-green-400"
				/>
			</div>
		</main>
	);
};

export default Login;
