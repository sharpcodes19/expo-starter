import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { create } from 'zustand'

type Theme = 'dark' | 'light' | 'system'

type S = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const createStateContext = create<S>((set) => ({
	theme: 'system',
	setTheme: (theme) => {
		AsyncStorage.setItem(process.env.EXPO_PUBLIC_STORAGE_KEY_THEME, theme)
		set({ theme })
	},
}))

const useTheme = () => {
	const ctx = createStateContext()

	useEffect(() => {
		AsyncStorage.getItem(process.env.EXPO_PUBLIC_STORAGE_KEY_THEME)
			.then((theme) => theme as Theme | null)
			.then((theme) => {
				ctx.setTheme(theme ?? 'system')
			})
	}, [ctx])

	return ctx
}

export default useTheme
