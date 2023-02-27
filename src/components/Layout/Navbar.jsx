import React from "react";
import "../../app/output.css";

const Navbar = () => {
	return (
		<nav>
			<ul className="flex list-none pr-12">
				<li className="cursor-pointer">Home</li>
				<div className="flex ml-auto gap-4 cursor-pointer">
					<li className="list-none cursor-pointer">About</li>
					<li>Log in</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
