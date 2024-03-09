import { Pressable, PressableProps } from "react-native"
import { cn } from "@/lib"

export const DefaultButton = ({ className, ...rest }: PressableProps) => (
	<Pressable {...rest} className={cn(className)} />
)

export const PrimaryButton = ({ className, ...rest }: PressableProps) => (
	<DefaultButton
		{...rest}
		className={cn(
			"p-4 rounded-full items-center",
			rest.disabled ? "bg-gray-300" : undefined,
			className
		)}
	/>
)
