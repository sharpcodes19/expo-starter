import { Config } from "tailwindcss"

export default {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				sans: "Regular",
			},
		},
	},
	plugins: [],
} satisfies Config
