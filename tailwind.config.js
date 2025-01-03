/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#00a887",
				accent: "#007961",
				bgColor: "#f6f6f6",
				// accent: "#656dff",
			},

			gridTemplateColumns: {
				'auto': "repeat(auto-fill, minmax(250px, 1fr))",
			},
		},
	},
	plugins: [],
};
