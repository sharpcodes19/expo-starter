import { ColStack, TextBold, TextRegular } from "@/components"

const App = () => {
	return (
		<ColStack className="flex-1">
			<ColStack className="p-5">
				<TextBold className="text-3xl ">Welcome!</TextBold>
				<TextRegular>Nice to see you again.</TextRegular>
			</ColStack>
		</ColStack>
	)
}

export default App
