import '@/global.css'

import NetInfo from '@react-native-community/netinfo'

import { AppProviders } from '@/lib'
import { onlineManager } from '@tanstack/react-query'
import { Slot } from 'expo-router'
import { useNotifications } from '@/hooks'

const AppLayout = () => {
	onlineManager.setEventListener((setOnline) => {
		return NetInfo.addEventListener((state) => {
			setOnline(state.isConnected ?? false)
		})
	})
	useNotifications()

	return (
		<AppProviders>
			<Slot />
		</AppProviders>
	)
}

// export const ErrorBoundary = (props: ErrorBoundaryProps) => (
// 	<ErrorBoundaryComponent {...props} />
// )

export default AppLayout
