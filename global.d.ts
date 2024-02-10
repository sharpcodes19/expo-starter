/// <reference types="nativewind/types" />

declare module '*.svg' {
	import { SvgProps } from 'react-native-svg'
	const content: FC<SvgProps>
	export default content
}

type PropsWithChildren = {
	children?: JSX.Element
}
