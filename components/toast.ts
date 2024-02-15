import tw from "@tw"
import Toast, { ToastOptions } from "react-native-root-toast"

export const DefaultToast = (message: string, options?: ToastOptions) =>
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: false,
    textStyle: {
      fontFamily: tw.theme.extend.fontFamily["alerto-regular"],
      fontSize: 13,
    },
    ...options,
  })

export const toastFailureMessage = (message: string) =>
  DefaultToast(message, {
    backgroundColor: tw.theme.extend.colors["alerto-brand-orange"],
  })

export const toastSuccessfulMessage = (message: string) =>
  DefaultToast(message, {
    backgroundColor: tw.theme.extend.colors["alerto-green"],
  })
