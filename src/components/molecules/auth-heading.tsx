import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import Logo from '../atoms/logo'

type AuthHeadingProps = {
  heading: string
}

export default function AuthHeading({ heading }: AuthHeadingProps) {
  return (
    <View style={styles.container}>
      <Logo height={120} width={120} />
      <Text style={{ fontWeight: '700' }} variant='headlineMedium'>
        {heading}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 50
  }
})
