import { cn } from "@/lib"
import { View, ViewProps } from "react-native"
import {
	KeyboardAwareScrollView,
	KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const RowStack = ({ className, ...rest }: ViewProps) => (
	<View {...rest} className={cn(className, "flex-row")} />
)

export const ColStack = ({ className, ...rest }: ViewProps) => (
	<View {...rest} className={cn(className, "flex-col")} />
)

export const Flex = ({ className, ...rest }: ViewProps) => (
	<View {...rest} className={cn(className, "flex-1")} />
)

export const Container = ({ style, className, ...rest }: ViewProps) => {
	const { top } = useSafeAreaInsets()
	return (
		<View
			{...rest}
			style={[style, { paddingTop: top }]}
			className={cn(className, "flex-1")}
		/>
	)
}

export const KeyboardResponsiveView = ({
	className,
	...rest
}: KeyboardAwareScrollViewProps) => {
	return (
		<KeyboardAwareScrollView {...rest} className={cn(className, "flex-1")} />
	)
}
