import {
	QueryClient,
	QueryClientProvider,
	focusManager,
} from "@tanstack/react-query"
import { useEffect } from "react"
import { AppState, AppStateStatus, Platform } from "react-native"
import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter"
import { RootSiblingParent } from "react-native-root-siblings"
import { SplashScreen } from "expo-router"

SplashScreen.preventAutoHideAsync()

const client = new QueryClient()

const AppProviders = ({ children }: PropsWithChildren) => {
	const [isFontLoaded, fontError] = useFonts({ Regular: Inter_400Regular })

	useEffect(() => {
		if (fontError) throw fontError

		const subscribe = AppState.addEventListener(
			"change",
			(status: AppStateStatus) => {
				if (Platform.OS !== "web") focusManager.setFocused(status === "active")
			}
		)

		if (isFontLoaded) SplashScreen.hideAsync()

		return () => subscribe.remove()
	}, [fontError, isFontLoaded])

	return (
		<QueryClientProvider client={client}>
			<RootSiblingParent>{children}</RootSiblingParent>
		</QueryClientProvider>
	)
}

export default AppProviders
