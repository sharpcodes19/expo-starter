import { cn } from "@/utils"
import { Text, TextProps } from "react-native"

type Props = {} & TextProps

export const TextRegular = ({ className, ...rest }: Props) => (
  <Text
    {...rest}
    className={cn("leading-5", className, "font-alerto-regular")}
  />
)

export const TextBold = ({ className, ...rest }: Props) => (
  <Text {...rest} className={cn("leading-6", className, "font-alerto-bold")} />
)
