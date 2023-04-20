/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",

		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/app/styles/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 3s linear infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
		fontFamily: {
			robot: ["Roboto"],
			poppins: ["Poppins"],
		},
	},
	plugins: [],
};
