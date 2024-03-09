import useAppState from "./useAppState"
import {
	requestPermissionsAsync,
	getLastNotificationResponseAsync,
	addNotificationResponseReceivedListener,
} from "expo-notifications"
import { Href, router } from "expo-router"
import { useEffect } from "react"

const useNotificationObserver = () => {
	const { setPermissions, permissions } = useAppState()

	useEffect(() => {
		let isMounted = true
		const processUrl = (url: Href<string>) => {
			return url
		}

		;async () => {
			const { status } = await requestPermissionsAsync()
			setPermissions({ ...permissions, notification: status })

			if (status === "granted") {
				const res = await getLastNotificationResponseAsync()
				if (isMounted) {
					const url = res?.notification.request.content.data.url
					if (url) router.replace(processUrl(url))
				}
			}
		}

		const subscription = addNotificationResponseReceivedListener((res) => {
			const url = res.notification.request.content.data.url
			router.replace(processUrl(url))
		})

		return () => {
			isMounted = false
			subscription.remove()
		}
	}, [router])

	return {
		status: permissions.notification,
	}
}

export default useNotificationObserver
