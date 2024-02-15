import "@/global.css"

import { AppProviders } from "@/lib"
import { Slot, Stack } from "expo-router"
import { useNet, useNotifications } from "@/hooks"

const AppLayout = () => {
	useNet()
	useNotifications()

	return (
		<AppProviders>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</AppProviders>
	)
}

// export const ErrorBoundary = (props: ErrorBoundaryProps) => (
// 	<ErrorBoundaryComponent {...props} />
// )

export default AppLayout
