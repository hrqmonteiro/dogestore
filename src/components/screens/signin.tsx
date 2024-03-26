import { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { signIn, type SignInInput } from 'aws-amplify/auth'
import { useAtom } from 'jotai/react'
import { Alert } from 'react-native'
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper'

import { authenticatedAtom } from '../../store/atoms'
import Container from '../atoms/container'
import Input from '../atoms/input'
import AuthFooter from '../molecules/auth-footer'
import AuthHeading from '../molecules/auth-heading'

type SignInScreenProps = {
  // eslint-disable-next-line
  navigation: NavigationProp<any>
}

export default function SignInScreen({ navigation }: SignInScreenProps) {
  const [, setAuthenticated] = useAtom(authenticatedAtom)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const disabledButton = username === '' || password === ''

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      setIsLoading(true)
      const { isSignedIn } = await signIn({ username, password })

      if (isSignedIn) {
        setIsLoading(false)
        setAuthenticated(true)
        navigation.navigate('Home')
      }
    } catch (err) {
      setIsLoading(false)
      Alert.alert(
        'Erro:',
        'Email ou senha incorretos, por favor tente novamente.',
        [{ text: 'OK', style: 'default' }]
      )
    }
  }

  return (
    <Container>
      <AuthHeading heading='Entrar' />

      <Input
        label='Email'
        onChangeText={(value) => setUsername(value)}
        placeholder='Digite seu email...'
        secureTextEntry={false}
        value={username}
      />

      <Input
        label='Senha'
        onChangeText={(value) => setPassword(value)}
        placeholder='Digite sua senha...'
        secureTextEntry={true}
        value={password}
      />

      <Button
        disabled={disabledButton}
        mode='contained'
        onPress={() => handleSignIn({ username, password })}
      >
        {isLoading ? (
          <ActivityIndicator animating color={MD2Colors.white} />
        ) : (
          'Entrar'
        )}
      </Button>

      <AuthFooter
        action='Crie uma agora!'
        heading='Não possui uma conta?'
        onPress={() => navigation.navigate('Create')}
      />
    </Container>
  )
}
