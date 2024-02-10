import { useFocusEffect } from 'expo-router'
import { useCallback, useRef } from 'react'

type Props = VoidFunction

const useRefetchOnFocus = (refetch: Props) => {
	const firstTimeRef = useRef<boolean>(true)

	useFocusEffect(
		useCallback(() => {
			if (firstTimeRef.current) {
				firstTimeRef.current = false
				return
			}

			refetch()
		}, [refetch])
	)
}

export default useRefetchOnFocus
