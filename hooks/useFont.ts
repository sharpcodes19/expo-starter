import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	useFonts as useExpoFont,
} from "@expo-google-fonts/poppins"

const useFont = () => {
	const [isFontLoaded, fontError] = useExpoFont({
		Regular: Poppins_400Regular,
		Medium: Poppins_500Medium,
		SemiBold: Poppins_600SemiBold,
	})

	if (fontError) throw fontError

	return isFontLoaded
}

export default useFont
