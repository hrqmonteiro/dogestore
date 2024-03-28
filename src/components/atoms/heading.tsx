import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

type HeadingProps = {
  heading: string
  subheading?: string
  tripleheading?: string
}

export default function Heading({
  heading,
  subheading,
  tripleheading
}: HeadingProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontWeight: '700', marginBottom: 10 }}
        variant='displayMedium'
      >
        {heading}
      </Text>
      {subheading ? (
        <Text variant='titleMedium'>
          {subheading}
          {'\n'}
          {tripleheading}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
})
