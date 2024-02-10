export default {
	expo: {
		name: 'expo-starter',
		slug: 'expo-starter',
		scheme: 'expo-starter',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/app/icon.png',
		userInterfaceStyle: 'automatic',
		splash: {
			image: './assets/app/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/app/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
			package: 'com.sharpcodes19.expostarter',
		},
		web: {
			favicon: './assets/app/favicon.png',
			bundler: 'metro',
		},
		plugins: ['expo-router'],
	},
}
