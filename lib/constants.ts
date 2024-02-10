import { Dimensions, Platform } from 'react-native'

export const isAndroid = Platform.OS === 'android'
export const windowSize = Dimensions.get('window')
export const isDevMode = process.env.NODE_ENV === 'development'
