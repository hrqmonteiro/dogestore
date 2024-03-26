import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

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
