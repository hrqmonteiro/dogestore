import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

type AuthFooterProps = {
  action: string
  heading: string
  onPress: () => void
}

export default function AuthFooter({
  action,
  heading,
  onPress
}: AuthFooterProps) {
  return (
    <View style={styles.container}>
      <Text>{heading}</Text>
      <Button mode='text' onPress={onPress}>
        {action}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    marginVertical: 50
  }
})
