import { NavigationProp } from '@react-navigation/native'
import { signOut } from 'aws-amplify/auth'
import { useAtom } from 'jotai'
import { Alert, View } from 'react-native'
import { Button, MD2Colors, Text } from 'react-native-paper'

import useUser from '../../hooks/use-user'
import { authenticatedAtom, cartAtom, userAtom } from '../../store/atoms'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import AccountHeader from '../molecules/account-header'

type CartScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function AccountScreen({ navigation }: CartScreenProps) {
  const [, setAuthenticated] = useAtom(authenticatedAtom)
  const [, setUser] = useAtom(userAtom)
  const [, setCart] = useAtom(cartAtom)
  const user = useUser()

  async function handleSignOut() {
    try {
      await signOut()
      setUser({})
      setCart([])
      setAuthenticated(false)
    } catch (err) {
      Alert.alert('Erro:', `${err}`)
    } finally {
      navigation.navigate('Login')
    }
  }

  return (
    <>
      <Container>
        <Heading heading='Conta' />

        <AccountHeader
          email={user.signInDetails?.loginId}
          id={user.userId}
          method={user.signInDetails?.authFlowType}
        />
      </Container>

      <Button
        onPress={handleSignOut}
        mode='text'
        style={{ marginVertical: 30, padding: 10, marginHorizontal: 6 }}
      >
        <Text style={{ color: MD2Colors.blue500, fontWeight: '700' }}>
          Clique para sair da sua conta
        </Text>
      </Button>
    </>
  )
}
