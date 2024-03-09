import { ClassValue, clsx } from "clsx"
import { twMerge } from "tw-merge"
import { Dimensions, Platform } from "react-native"

export const isAndroid = Platform.OS === "android"
export const windowSize = Dimensions.get("window")
export const isDevMode = process.env.NODE_ENV === "development"

export const cn = (...classNames: Array<ClassValue>) =>
	twMerge(clsx(classNames))
