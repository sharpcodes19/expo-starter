import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { useColorScheme } from "nativewind"

const useTheme = () => {
	const nwColorScheme = useColorScheme()
	const { colorScheme, setColorScheme } = nwColorScheme

	useEffect(() => {
		AsyncStorage.getItem(process.env.EXPO_PUBLIC_STORAGE_KEY_THEME)
			.then((theme) => theme as typeof colorScheme | null)
			.then((theme) => {
				const colorScheme = theme ?? "system"
				setColorScheme(colorScheme)
			})
	}, [])

	return nwColorScheme
}

export default useTheme
