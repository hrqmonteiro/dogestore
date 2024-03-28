import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

type AccountHeaderProps = {
  email: string | undefined
  id: string | undefined
  method: string | undefined
}

export default function AccountHeader({
  email,
  id,
  method
}: AccountHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={{ fontWeight: '700', marginBottom: 10 }}>Email: </Text>
        <Text>{email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={{ fontWeight: '700', marginBottom: 10 }}>
          ID de usuário:{' '}
        </Text>
        <Text>{method}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={{ fontWeight: '700', marginBottom: 10 }}>
          Método de autenticação Cognito:{' '}
        </Text>
        <Text>{method}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  }
})
