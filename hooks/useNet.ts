import NetInfo from "@react-native-community/netinfo"
import { onlineManager } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const useNet = () => {
	const [hasInternetConnection, setHasInternetConnection] =
		useState<boolean>(false)

	useEffect(() => {
		onlineManager.setEventListener((setOnline) => {
			return NetInfo.addEventListener((state) => {
				const hasInternetConnection = state.isConnected ?? false
				setOnline(hasInternetConnection)
				setHasInternetConnection(hasInternetConnection)
			})
		})
	}, [])

	return hasInternetConnection
}

export default useNet
