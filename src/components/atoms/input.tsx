import { StyleSheet, View } from 'react-native'
import { MD2Colors, TextInput } from 'react-native-paper'

type InputProps = {
  label: string
  onChangeText: (text: string) => void
  placeholder: string
  secureTextEntry: boolean
  value: string
}

export default function Input({
  label,
  onChangeText,
  placeholder,
  secureTextEntry,
  value
}: InputProps) {
  return (
    <View style={styles.input}>
      <TextInput
        outlineColor={MD2Colors.blue200}
        selectionColor={MD2Colors.blue500}
        mode='outlined'
        activeOutlineColor={MD2Colors.blue500}
        label={label}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 14
  }
})
