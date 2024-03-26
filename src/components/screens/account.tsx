import { NavigationProp } from '@react-navigation/native'
import { signOut } from 'aws-amplify/auth'
import { useAtom } from 'jotai/react'
import { Alert, Pressable, Text, View } from 'react-native'

import useUser from '../../hooks/use-user'
import { authenticatedAtom, userAtom } from '../../store/atoms'

type AccountScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function AccountScreen({ navigation }: AccountScreenProps) {
  const [, setAuthenticated] = useAtom(authenticatedAtom)
  const [, setUser] = useAtom(userAtom)
  const user = useUser()

  async function handleSignOut() {
    try {
      await signOut()
      setUser({})
      setAuthenticated(false)
    } catch (err) {
      Alert.alert('Erro:', `${err}`)
    } finally {
      navigation.navigate('Login')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={handleSignOut}>
        <Text>signout</Text>
      </Pressable>
      <Text>{user?.signInDetails?.loginId}</Text>
    </View>
  )
}
