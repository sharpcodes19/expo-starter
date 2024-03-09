import { Config } from "tailwindcss"

export default {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./{app,components}/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				"pp-regular": ["Regular"],
				"pp-medium": ["Medium"],
				"pp-semibold": ["SemiBold"],
			},
			colors: {
				"pp-green": "#28BB9E",
				"pp-red": "#FF5363",
				"pp-blue": "#24A8FA",
				"pp-yellow": "#FFA901",
				"pp-purple": "#7A6EFE",
				"pp-dark": "#0C0B19",
				"pp-light": "#F5F5F5",
			},
		},
	},
	plugins: [],
} satisfies Config
