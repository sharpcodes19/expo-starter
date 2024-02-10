import * as Notifications from 'expo-notifications'
import { create } from 'zustand'

type T = {
	permissions: {
		notification: Notifications.PermissionStatus | undefined
	}

	setPermissions: (permissions: {
		notification: Notifications.PermissionStatus | undefined
	}) => void
}

const useAppState = create<T>((set) => ({
	permissions: {
		notification: undefined,
	},
	setPermissions: (permissions) => set({ permissions }),
}))

export default useAppState
