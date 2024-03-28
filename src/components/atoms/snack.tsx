import { StyleSheet, View } from 'react-native'
import { MD2Colors, Snackbar } from 'react-native-paper'

type SnackProps = {
  visible: boolean
  label: string
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  text: string
}

export default function Snack({
  visible,
  label,
  setVisible,
  text
}: SnackProps) {
  return (
    <View style={styles.snackContainer}>
      <Snackbar
        visible={visible}
        duration={3000}
        onDismiss={() => setVisible(false)}
        action={{
          textColor: MD2Colors.blue500,
          label,
          onPress: () => setVisible(false)
        }}
      >
        {text}
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  snackContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})
