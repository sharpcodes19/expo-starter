import "@/global.css"

import { SplashScreen, Stack } from "expo-router"
import { useFont, useNet, useNotificationObserver } from "@/hooks"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { AppState, AppStateStatus, Platform } from "react-native"
import { focusManager } from "@tanstack/react-query"
import { AppProviders } from "@/components"
import { useEffect } from "react"

SplashScreen.preventAutoHideAsync()

const AppLayout = () => {
	useNet()
	useNotificationObserver()
	const isFontLoaded = useFont()

	useEffect(() => {
		const subscribe = AppState.addEventListener(
			"change",
			(status: AppStateStatus) => {
				if (Platform.OS !== "web") focusManager.setFocused(status === "active")
			}
		)

		return () => subscribe.remove()
	}, [])

	if (isFontLoaded) SplashScreen.hideAsync()

	return (
		<AppProviders>
			<SafeAreaProvider style={{ flex: 1 }}>
				<SafeAreaView style={{ flex: 1 }}>
					<Stack>
						<Stack.Screen name="index" options={{ headerShown: false }} />
					</Stack>
				</SafeAreaView>
			</SafeAreaProvider>
		</AppProviders>
	)
}

// export const ErrorBoundary = (props: ErrorBoundaryProps) => (
// 	<ErrorBoundaryComponent {...props} />
// )

export default AppLayout
