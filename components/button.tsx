import tw from "@tw"
import { cn } from "@/utils"
import { Pressable, PressableProps } from "react-native"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { Image } from "./image"
import { percentageOf } from "@sharpcodes/api"

export const DefaultButton = ({ className, ...rest }: PressableProps) => (
  <Pressable {...rest} className={cn(className)} />
)

export const PrimaryButton = ({ className, ...rest }: PressableProps) => (
  <DefaultButton
    {...rest}
    className={cn(
      "bg-alerto-brand-blue p-4 rounded-full items-center",
      rest.disabled ? "bg-gray-300" : undefined,
      className
    )}
  />
)

export const AlertButton = ({
  className,
  ...rest
}: Omit<PressableProps, "children">) => (
  <Pressable
    {...rest}
    className={cn(
      "bg-alerto-brand-orange rounded-full w-14 h-14 items-center justify-center border-gray-300 border-2",
      className
    )}
  >
    <Image
      source={require("@assets/icon-sm.png")}
      style={{
        width: percentageOf(112, 23),
        height: percentageOf(92, 23),
      }}
    />
  </Pressable>
)

export const CurrentLocationButton = ({
  className,
  isCentered,
  ...rest
}: Omit<PressableProps, "children"> & { isCentered: boolean }) => (
  <Pressable
    {...rest}
    className={cn(
      "bg-white rounded-full w-10 h-10 items-center justify-center border border-gray-200",
      className
    )}
  >
    <FontAwesome
      name="location-arrow"
      size={16}
      color={
        isCentered ? tw.theme.extend.colors["alerto-brand-orange"] : "silver"
      }
    />
  </Pressable>
)

export const MapLayerButton = ({
  className,
  ...rest
}: Omit<PressableProps, "children">) => (
  <Pressable
    {...rest}
    className={cn(
      "bg-white rounded-full w-10 h-10 items-center justify-center border border-gray-200",
      className
    )}
  >
    <Ionicons name="layers" size={16} />
  </Pressable>
)

export const MagnifierButton = ({ className, ...rest }: PressableProps) => {
  return (
    <Pressable
      {...rest}
      className={cn(
        "bg-white rounded-full w-14 h-14 items-center justify-center border border-gray-200",
        className
      )}
    >
      <Ionicons name="search" size={19} />
    </Pressable>
  )
}
