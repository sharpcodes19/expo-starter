import { cn } from "@/utils"
import { FormControlBase } from "@sharpcodes/api"
import { Control, FieldValues, Path } from "react-hook-form"
import { TextInput, TextInputProps } from "react-native"

export const TextField = ({ className, ...rest }: TextInputProps) => (
	<TextInput
		{...rest}
		className={cn(
			"font-alerto-regular text-gray-800 px-4 py-3 border-gray-300 rounded-xl border",
			className
		)}
	/>
)

export const FormTextField = <T extends FieldValues, K extends Path<T>>({
	control,
	name,
	...rest
}: Omit<TextInputProps, "value" | "onChangeText" | "onBlur"> & {
	name: K
	control: Control<T>
}) => (
	<FormControlBase name={name} control={control}>
		{({ field }) => (
			<TextField
				{...rest}
				value={field.value}
				onChangeText={field.onChange}
				onBlur={field.onBlur}
			/>
		)}
	</FormControlBase>
)
