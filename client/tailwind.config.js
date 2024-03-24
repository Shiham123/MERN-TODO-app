export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightBgPrimary: "#e4f0fa",
				lightBgSecondary: "#e6eef8",
				darkBgPrimary: "#121215",
				darkBgSecondary: "#18181c",
				textPrimary: "#2b3c5b",
				textSecondary: "#f8917e",
				darkTextPrimary: "#dfe0fb",
				darkTextSecondary: "#7f5bf7",
			},
			fontFamily: {
				Lexend: ["Lexend Deca", "sans-serif"],
			},
			boxShadow: {
				one: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				two: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
			},
		},
	},
	plugins: [],
}
