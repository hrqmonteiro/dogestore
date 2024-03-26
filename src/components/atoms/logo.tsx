import { Image } from 'react-native'

type LogoProps = {
  height: number
  width: number
}

export default function Logo({ height, width }: LogoProps) {
  return (
    <Image
      source={require('../../../assets/logo.png')}
      style={{ height, width }}
    />
  )
}
