export default {
	expo: {
		name: 'expo-nw',
		slug: 'expo-nw',
		scheme: 'expo-nw',
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
			package: 'com.sharpcodes19.exponw',
		},
		web: {
			favicon: './assets/app/favicon.png',
			bundler: 'metro',
		},
		plugins: ['expo-router'],
	},
}
