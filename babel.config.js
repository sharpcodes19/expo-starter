module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			["babel-preset-expo", { jsxImportSource: "nativewind" }],
			"nativewind/babel",
		],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@": "./",
						"@tw": "./tailwind.config.ts",
						"@app": "./app.config.js",
						"@assets": "./assets",
					},
				},
			],
		],
	}
}
