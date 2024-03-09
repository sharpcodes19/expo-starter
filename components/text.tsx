import { cn } from "@/lib"
import { Text, TextProps } from "react-native"

type Props = {} & TextProps

export const TextRegular = ({ className, ...rest }: Props) => (
	<Text
		{...rest}
		className={cn("font-pp-regular text-pp-dark dark:text-pp-light", className)}
	/>
)

export const TextBold = ({ className, ...rest }: Props) => (
	<TextRegular {...rest} className={cn("font-pp-semibold", className)} />
)

export const TextMedium = ({ className, ...rest }: Props) => (
	<TextRegular {...rest} className={cn("font-pp-medium", className)} />
)
