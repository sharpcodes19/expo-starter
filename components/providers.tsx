import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RootSiblingParent } from "react-native-root-siblings"

const client = new QueryClient()

const AppProviders = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={client}>
			<RootSiblingParent>{children}</RootSiblingParent>
		</QueryClientProvider>
	)
}

export default AppProviders
